from pydantic import BaseModel, EmailStr

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
    email: EmailStr = None


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int

    class Config:
        orm_mode = True


class UserInDB(UserBase):
    hashed_password: str
