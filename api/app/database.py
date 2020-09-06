"""
SQLAlchemy setup
"""
import logging

from sqlalchemy import MetaData, create_engine
from sqlalchemy.orm import sessionmaker

import app.sqlalchemy_models as sm
from app.environment import DATABASE_URL

logger = logging.getLogger(__name__)

engine = create_engine(DATABASE_URL)
Session = sessionmaker(bind=engine)
session = Session()

class DbSessionContextManager:
    def __init__(self):
        self.db = Session()
        logger.info(f"Opened db session - {self.id}")

    def __enter__(self):
        return self.db

    def __exit__(self, exc_type, exc_value, seltraceback):
        self.db.close()

        logger.info(f"Closed db session - {self.id}")


def get_db():
    with DbSessionContextManager() as db:
        yield db


def describe_database(session):

    meta = MetaData()
    meta.reflect(bind=session.get_bind())

    for table in meta.sorted_tables:
        table_row_count = session.query(table).count()

        print('{:-^50}'.format(f" {table.name} ({table_row_count} rows) "))
        for column in table.columns:
            print(f"{column.name:<15} - {str(column.type):<15}")

        for constraint in table.constraints:
            print(constraint)

    print('-'*50)


def delete_all_tables():
    meta = MetaData(bind=engine)
    meta.reflect()

    for table in meta.sorted_tables:
        logger.info(f"Dropping table {table.name}")
        table.drop()

    initialize_db()


def initialize_db():
    # Initialize the database (normally you should use Alembic for this)
    try:
        sm.Base.metadata.create_all(bind=engine)
    except Exception as e:
        logger.info("Failed to create tables")
        logger.info(e)


initialize_db()
