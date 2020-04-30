"""
Create the database models
"""

from sqlalchemy import Column, Integer, Text, Boolean
from sqlalchemy.ext.declarative import declarative_base

DeclarativeBase = declarative_base()


# We will inherit from this base class to create the database ORM model classes
class Base(DeclarativeBase):
    __abstract__ = True

    def __repr__(self) -> str:
        """
        Shows all column names and values for __repr__
        """

        items = []
        for key in self.__table__._columns._data.keys():
            val = self.__getattribute__(key)
            items.append(f'{key}={val}')

        key_vals = ' '.join(items)
        name = self.__class__.__name__
        return f"<{name}({key_vals})>"


class Todo(Base):
    __tablename__ = "todos"

    id = Column(Integer, primary_key=True, index=True)  # autoincrement is default
    title = Column(Text)
    done = Column(Boolean)
