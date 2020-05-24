"""
SQLAlchemy setup
"""
import logging
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.environment import DATABASE_URL
import app.sqlalchemy_models as sm
from contextlib import contextmanager

if not DATABASE_URL:
    logging.warning("No DATABASE_URL in environment variables. Using local sqlite database: ./examplicious.db")
    DATABASE_URL = f"sqlite:///examplicious.db"

engine = create_engine(DATABASE_URL)
SessionMaker = sessionmaker(autocommit=False, autoflush=False, bind=engine)
db = SessionMaker()

import uuid
class DbContextManager:
    def __init__(self):

        self.id = uuid.uuid4()
        self.db = SessionMaker()
        print(f"Opened db session - {self.id}")

    def __enter__(self):
        return self.db

    def __exit__(self, exc_type, exc_value, seltraceback):
        self.db.close()

        print(f"Closed db session - {self.id}")


def get_db():
    with DbContextManager() as db:
        yield db


# Initialize the database (normally you should use Alembic for this)
try:
    sm.Base.metadata.create_all(bind=engine)
except Exception as e:
    print("Failed to create tables")
    print(e)


def describe_database():
    """
    Nicely print a description of the tables in the database associated with this SQLA engine object
    """

    from sqlalchemy import inspect, Table

    inspector = inspect(engine)
    with DbContextManager() as db:
        for table_name in inspector.get_table_names():
            table = Table(table_name, sm.Base.metadata, autoload=True, autoload_with=engine)

            print(f"\n-------\n{table_name} - ({db.query(table).count()} rows)\n-------")
            for column in inspector.get_columns(table_name):
                print(f"{column['name']:<10} - {column['type']}")


def delete_all_tables():
    if input("Are you sure you want to delete all tables?").lower().startswith('y'):
        for table_name in engine.table_names():
            print(f"Deleting table: {table_name}")
            engine.execute(f'DROP TABLE IF EXISTS {table_name};')
        print("Deleted all tables.")
    else:
        print("Cancelled.")


describe_database()
