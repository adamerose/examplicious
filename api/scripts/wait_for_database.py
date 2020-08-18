from app.database import engine
import time
import logging

logger = logging.getLogger(__name__)

n = 1
while True:
    try:
        engine.connect()
        logger.info('------------------')
        logger.info("Successfully connected to database.")
        logger.info('------------------')
        break
    except Exception as e:
        logger.info('------------------')
        logger.info(f"Attempt #{n} to connect to database failed... waiting 5s and retrying.")
        logger.info(e)
        logger.info('------------------')
    n += 1
    time.sleep(5)
