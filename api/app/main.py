from typing import List
from fastapi import Depends, HTTPException, BackgroundTasks, Header
from fastapi.security import OAuth2PasswordBearer

from fastapi import FastAPI
from sqlalchemy.orm import Session
from starlette.middleware.cors import CORSMiddleware
from app import sqlalchemy_models as sm
from app import pydantic_models as pm
from app.database import engine, get_db
from app.environment import CLIENT_HOSTNAME, CLIENT_PORT

app = FastAPI(title="Examplicious", docs_url='/')

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        f"http://{CLIENT_HOSTNAME}:{CLIENT_PORT}",
        f"https://{CLIENT_HOSTNAME}:{CLIENT_PORT}"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

########################################################################################################################
# Authentication

from fastapi import Depends, FastAPI, HTTPException, status
from app.authentication import verify_credentials, get_current_user, create_token, get_password_hash


@app.post("/sign-in", response_model=str)
def sign_in(data: pm.LoginForm):
    if verify_credentials(data.username, data.password):
        return create_token({"sub": data.username})
    else:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )


########################################################################################################################

@app.get("/users", response_model=pm.User)
def get_users(db=Depends(get_db)):
    users = db.query(sm.User).all()
    pm.User.validate(users)
    return users


@app.get("/users/me", response_model=pm.User)
def get_user(db=Depends(get_db)):
    user = db.query(sm.User).first()
    return user


@app.post("/users", response_model=pm.User)
def post_user(item: pm.UserCreate,
              db=Depends(get_db)):
    item_dict = item.dict()
    item_dict['hashed_password'] = get_password_hash(item.password)
    item_dict.pop('password')
    db_user = sm.User(**item_dict)
    db.add(db_user)
    db.commit()
    return db_user


########################################################################################################################

@app.get("/articles", response_model=List[pm.Article])
def get_article(db=Depends(get_db)):
    articles = db.query(sm.Article)\
        .order_by(sm.Article.id.desc())\
        .all()
    return articles


@app.post("/articles", response_model=pm.Article)
def post_article(item: pm.ArticleCreate,
                 db=Depends(get_db),
                 current_user: pm.User = Depends(get_current_user)):
    db_article = sm.Article(**item.dict())
    db.add(db_article)
    db.commit()

    return db_article
