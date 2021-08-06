import json
import logging
from typing import List, Union
from fastapi import Depends, FastAPI, HTTPException, Request, status
from fastapi.exceptions import RequestValidationError, ValidationError
from fastapi.responses import JSONResponse, PlainTextResponse
from starlette.middleware.cors import CORSMiddleware
from app import database
from app import schemas as schemas
from app import models as models
from app.authentication import create_token, get_current_user, get_password_hash, verify_credentials
from app.database import engine, get_session
from app.environment import ADMIN_PASSWORD, CLIENT_HOSTNAME, CLIENT_PORT

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Create app instance
app = FastAPI(title="Examplicious", docs_url='/')

# Configure CORS
app.add_middleware(CORSMiddleware,
                   allow_methods=["*"],
                   allow_headers=["*"],
                   allow_origins=[
                       f"http://{CLIENT_HOSTNAME}:{CLIENT_PORT}",
                       f"https://{CLIENT_HOSTNAME}:{CLIENT_PORT}",
                       f"http://{CLIENT_HOSTNAME}:80",
                       f"https://{CLIENT_HOSTNAME}:443"
                   ])


# ==============================================================================
# Authentication

@app.post("/sign-in", response_model=str)
def _(data: schemas.LoginCredentials):
    if verify_credentials(data.username, data.password):
        return create_token({"sub": data.username})
    else:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )


# ==============================================================================
# Users

@app.get("/users", response_model=List[schemas.User])
def get_users(db=Depends(get_session)):
    users = db.query(models.User).all()
    return users


@app.get("/users/me", response_model=schemas.User)
def get_current_user(db=Depends(get_session),
                     current_user: schemas.User = Depends(get_current_user)):
    user = db.query(models.User).filter_by(username=current_user.username).one()
    return user


@app.post("/users", response_model=schemas.User)
def _(item: schemas.UserCreate,
      db=Depends(get_session)):
    # Replace password with hashed password
    item.dict()['hashed_password'] = get_password_hash(item.dict().pop('password'))

    # Check if user already exists
    all_users = db.query(models.User)
    if all_users.filter_by(username=item.username).first():
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Username is taken")
    if all_users.filter_by(email=item.email).filter(models.User.email.isnot(None)).first():
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email is taken")

    # Add user to database
    db_user = models.User(**item.dict())
    db.add(db_user)
    db.commit()

    return db_user


# ==============================================================================
# Posts
@app.get("/posts", response_model=List[schemas.Post])
def _(db=Depends(get_session)):
    posts = db.query(models.Post) \
        .order_by(models.Post.id.desc()) \
        .all()
    return posts


@app.post("/posts", response_model=schemas.Post)
def _(item: schemas.PostCreate,
      db=Depends(get_session),
      current_user: schemas.User = Depends(get_current_user)):
    db_post = models.Post(**item.dict())
    db.add(db_post)
    db.commit()

    return db_post


# ==============================================================================
# Custom Handlers


@app.exception_handler(RequestValidationError)
async def _(request: Request,
            exc: RequestValidationError):
    logger.info(await request.json())
    return JSONResponse(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        content={"detail": str(exc)},
    )


# When an endpoint returns something not matching the response model, print the request body to help debugging
@app.exception_handler(ValidationError)
async def _(request: Request,
            exc: ValidationError):
    try:
        logger.info(await request.json())
    except json.decoder.JSONDecodeError:
        # Request had invalid or no body
        pass

    raise exc


# ==============================================================================
# Admin functions

@app.get("/fill_db")
def _(password: str = None):
    if password == ADMIN_PASSWORD:
        utility.add_mock_data()
        return PlainTextResponse("fill_db success")
    return PlainTextResponse("Wrong password")


@app.get("/reset_db")
def _(password: str = None):
    if password == ADMIN_PASSWORD:
        database.delete_all_tables()
        database.initialize_db()
        return PlainTextResponse("reset_db success")
    return PlainTextResponse("Wrong password")

# ============================================================================ #
# Test

@app.get("/test")
def _():
    return "Test"


@app.post("/test", response_model=schemas.Post)
def _():
    return "Test"

# ============================================================================ #
# Test2

@app.get("/test2")
def _():
    return "Test"


@app.post("/test2", response_model=schemas.Post)
def _():
    return "Test"

# ============================================================================ #
# Test3

@app.get("/test3")
def _():
    return "Test"

@app.post("/test3", response_model=schemas.Post)
def _():
    return "Test"

# ============================================================================ #
# Test4

@app.get("/test4")
def _():
    return "Test"

@app.post("/test4", response_model=schemas.Post)
def _():
    return "Test"
