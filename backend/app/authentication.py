from datetime import datetime, timedelta

import jwt
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jwt import PyJWTError
from passlib.context import CryptContext

from app import models as models
from app.database import SessionContextManager, get_session
from app.schemas import UserInDB

JWT_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
JWT_ALGORITHM = "HS256"

credentials_exception = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Could not validate credentials",
    headers={"WWW-Authenticate": "Bearer"},
)

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def verify_credentials(username, password):
    with SessionContextManager() as db:
        user = db.query(models.User).filter_by(username=username).first()
        if (user is not None) and (pwd_context.verify(password, user.hashed_password)):
            return True
        else:
            return False

def get_password_hash(password):
    return pwd_context.hash(password)

# Generate a new JWT
def create_token(data: dict, expires_delta: timedelta = None):
    encoded_jwt = jwt.encode(data, JWT_KEY, algorithm=JWT_ALGORITHM)
    return encoded_jwt

#
def get_current_user(token: str = Depends(OAuth2PasswordBearer(tokenUrl="/sign-in")),
                           db=Depends(get_session)):
    '''

    Args:
        token: JWT token pulled from the Authorization header of the request. This is defined in OAuth2PasswordBearer

    Returns:
        The current user like pydantic_models.User
    '''

    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

    try:
        payload = jwt.decode(token, JWT_KEY, algorithms=[JWT_ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        user = db.query(models.User).filter_by(username=username).first()
        # user = schemas.User.validate(user).dict()
        return user
    except PyJWTError:
        raise credentials_exception



