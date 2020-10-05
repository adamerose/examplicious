"""
SQLAlchemy setup
"""
import logging
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.environment import DATABASE_URL
import app.models as models
from contextlib import contextmanager
from sqlalchemy import inspect, Table
from sqlalchemy import MetaData
import uuid

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

if "sqlite" in DATABASE_URL:
    # Required since sessions are async
    connect_args = {"check_same_thread": False}
else:
    connect_args = {}

engine = create_engine(DATABASE_URL, connect_args=connect_args)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


class SessionManager:
    def __init__(self):
        self.session_id = uuid.uuid4()
        self.session = SessionLocal()

    def __enter__(self):
        return logger.info(f"Opening database session - {self.session_id}")

    def __exit__(self, exc_type, exc_value, traceback):
        logger.info(f"Closing database session - {self.session_id}")
        self.session.close()


def get_session():
    with SessionManager() as session:
        yield session


def describe_database():
    """
    Nicely print a description of the tables in the database associated with this SQLA engine object
    """

    with SessionManager() as session:

        meta = MetaData()
        meta.reflect(bind=engine)

        if len(meta.sorted_tables) == 0:
            logger.info("No tables found in database.")

        for table in meta.sorted_tables:
            table_row_count = session.query(table).count()

            print("=" * 10 + f" {table.name} ({table_row_count} rows)")
            for column in table.columns:
                logger.info(f"{column.name:<15} - {str(column.type):<15}")

            for constraint in table.constraints:
                logger.info(constraint)



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
        models.Base.metadata.create_all(bind=engine)
    except Exception as e:
        logger.info("Failed to create tables")
        logger.info(e)


if __name__ == "__main__":
    describe_database()
