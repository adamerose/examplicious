from datetime import datetime
from pydantic import BaseModel
from datetime import datetime
from typing import List
from pydantic import BaseModel


# JWT
class Token(BaseModel):
    access_token: str
    token_type: str


class TodoCreate(BaseModel):
    title: str
    done: bool = False


class Todo(TodoCreate):
    id: int

    class Config:
        orm_mode = True
