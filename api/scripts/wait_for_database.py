"""
Runs
"""

from app.database import engine
import time

n = 1
while True:
    try:
        engine.connect()
        print('------------------')
        print("Successfully connected to database.")
        print('------------------')
        break
    except Exception as e:
        print('------------------')
        print(f"Attempt #{n} to connect to database failed... waiting 5s and retrying.")
        print(e)
        print('------------------')
    n += 1
    time.sleep(5)

