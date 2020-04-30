"""
SQLAlchemy setup
"""
import logging
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.environment import DATABASE_URL


if not DATABASE_URL:
    logging.warning("No DATABASE_URL in environment variables. Using local sqlite database: ./examplicious.db")
    DATABASE_URL = f"sqlite:///examplicious.db"

engine = create_engine(DATABASE_URL)

SessionMaker = sessionmaker(autocommit=False, autoflush=False, bind=engine)
