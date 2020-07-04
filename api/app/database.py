"""
SQLAlchemy setup
"""
import logging
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.environment import DATABASE_URL
import app.sqlalchemy_models as sm
from contextlib import contextmanager
from app.utility import print_header
from sqlalchemy import inspect, Table
from sqlalchemy import MetaData
from app.logger import logger
import json
import uuid

if not DATABASE_URL:
    logging.warning("No DATABASE_URL in environment variables. Using local sqlite database: ./examplicious.db")
    DATABASE_URL = f"sqlite:///examplicious.db"


class DbSessionContextManager:
    def __init__(self):
        self.id = uuid.uuid4()
        self.db = SessionMaker()
        logger.info(f"Opened db session - {self.id}")

    def __enter__(self):
        return self.db

    def __exit__(self, exc_type, exc_value, seltraceback):
        self.db.close()

        logger.info(f"Closed db session - {self.id}")


def get_db():
    with DbSessionContextManager() as db:
        yield db


def describe_database(engine, session):
    """
    Nicely print a description of the tables in the database associated with this SQLA engine object
    """

    with DbSessionContextManager() as session:

        meta = MetaData()
        meta.reflect(bind=engine)

        for table in meta.sorted_tables:
            table_row_count = session.query(table).count()

            print_header(f"{table.name} ({table_row_count} rows)")
            for column in table.columns:
                logger.info(f"{column.name:<15} - {str(column.type):<15}")

            for constraint in table.constraints:
                logger.info(constraint)
        print_header()


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


engine = create_engine(DATABASE_URL)
SessionMaker = sessionmaker(autocommit=False, autoflush=False, bind=engine)
