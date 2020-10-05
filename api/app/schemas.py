"""
Define Pydantic models to validate request/response shapes.
We call these schemas to avoid confusion with SQLAlchemy models.
"""
from pydantic import BaseModel
from pydantic import EmailStr as EmailStrBase


# Treat empty string as null
class EmailStr(EmailStrBase):
    @classmethod
    def validate(cls, value: str) -> str:
        if value == "":
            return None
        return super().validate(value)


##############################
# Authentication

class LoginForm(BaseModel):
    username: str
    password: str


##############################
# Post

class PostBase(BaseModel):
    title: str
    body: str


class PostCreate(PostBase):
    pass


class Post(PostBase):
    id: int

    class Config:
        orm_mode = True


##############################
# User

class UserBase(BaseModel):
    username: str
    email: EmailStr = None


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int

    class Config:
        orm_mode = True


class UserInDB(UserBase):
    hashed_password: str


##############################
# Subscriptions

class Subscriptions(BaseModel):
    user_id: int
    publisher_id: int
