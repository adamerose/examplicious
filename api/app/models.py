"""
Create the database models
"""

from sqlalchemy import Boolean, Column, ForeignKey, Integer, Text, UniqueConstraint
from sqlalchemy.ext.declarative import declarative_base


class Base(declarative_base()):
    __abstract__ = True

    # Get __repr__ to show all the model's field names and values
    def __repr__(self) -> str:
        key_val_strings = []
        for key in self.__table__._columns._data.keys():
            val = self.__getattribute__(key)
            key_val_strings.append(f'{key}={val}')
        name = self.__class__.__name__
        return f"<{name}({' '.join(key_val_strings)})>"


class Post(Base):
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True)
    title = Column(Text)
    body = Column(Text)


class User(Base):
    __tablename__ = "users"
    __table_args__ = (UniqueConstraint('username'),
                      UniqueConstraint('email'))

    id = Column(Integer, primary_key=True, index=True)
    username = Column(Text)
    email = Column(Text)
    hashed_password = Column(Text)
