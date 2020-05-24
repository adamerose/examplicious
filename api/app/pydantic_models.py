from pydantic import BaseModel

##############################
# Authentication

class LoginForm(BaseModel):
    username: str
    password: str


##############################
# Article

class ArticleBase(BaseModel):
    title: str
    body: str


class ArticleCreate(ArticleBase):
    pass


class Article(ArticleBase):
    id: int

    class Config:
        orm_mode = True


##############################
# User

class UserBase(BaseModel):
    username: str
    email: str = None


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int

    class Config:
        orm_mode = True


class UserInDB(UserBase):
    hashed_password: str
