"""
Environment variables
"""

import os
from dotenv import find_dotenv, load_dotenv

load_dotenv(find_dotenv(), override=False, verbose=True)

CLIENT_HOSTNAME = os.getenv("CLIENT_HOSTNAME")
CLIENT_PORT = os.getenv("CLIENT_PORT")
DATABASE_URL = os.getenv("DATABASE_URL")
ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD")

for var in ["CLIENT_HOSTNAME", "CLIENT_PORT", "DATABASE_URL", "ADMIN_PASSWORD"]:
    if os.getenv(var) is None:
        raise EnvironmentError(f"Missing environment variable: {var}")
