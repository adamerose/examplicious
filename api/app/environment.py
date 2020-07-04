"""
Environment variables
"""

import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv(), override=False)

CLIENT_HOSTNAME = os.getenv("CLIENT_HOSTNAME")
CLIENT_PORT = os.getenv("CLIENT_PORT")
DATABASE_URL = os.getenv("DATABASE_URL")
LOG_PATH = os.path.abspath(os.environ.get('LOG_PATH', "./logs"))
