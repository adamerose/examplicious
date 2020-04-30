import os
import logging
from typing import List
from fastapi import Depends, HTTPException, BackgroundTasks, Header
from fastapi import FastAPI
from sqlalchemy.orm import Session
from starlette.middleware.cors import CORSMiddleware
from starlette.requests import Request
from starlette.responses import Response
from app import sqlalchemy_models as sm, pydantic_models as pm
from app.database import SessionMaker, engine
from app.environment import CLIENT_DOMAIN

app = FastAPI(docs_url='/')

origins = [
    f"http://{CLIENT_DOMAIN}",
    f"https://{CLIENT_DOMAIN}"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Dependency
def get_db(request: Request):
    return request.state.db


# Create middleware to handle sessions. We need to have an independent database session/connection (SessionLocal)
# per request, use the same session through all the request and then close it after the request is finished.
@app.middleware("http")
async def db_session_middleware(request: Request, call_next):
    response = Response("Internal server error", status_code=500)
    try:
        request.state.db = SessionMaker()
        response = await call_next(request)
    finally:
        request.state.db.close()
    return response


########################################################################################################################
@app.get("/todos", response_model=List[pm.Todo])
def get_todos(db: Session = Depends(get_db)):
    todos = db.query(sm.Todo).all()
    return todos


@app.put("/todos", response_model=List[pm.Todo])
def put_todos(items: List[pm.TodoCreate], db: Session = Depends(get_db)):
    db.query(sm.Todo).delete()

    db_todos = []
    for item in items:
        db_todo = sm.Todo(**item.dict())
        db.add(db_todo)
        db_todos.append(db_todo)
    db.commit()
    return db_todos


########################################################################################################################

# Initialize the database (normally you should use Alembic for this)
try:
    sm.Base.metadata.create_all(bind=engine)
except Exception as e:
    print("Failed to create tables")
    print(e)
