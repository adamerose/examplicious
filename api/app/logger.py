import os
import logging
from logging.handlers import TimedRotatingFileHandler
from app.environment import LOG_PATH

# Set up logger
logger = logging.getLogger()
logger.setLevel(logging.INFO)

formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')

try:
    os.makedirs(LOG_PATH, mode=0o777, exist_ok=True)
except FileExistsError:
    pass

filename = os.path.join(LOG_PATH, "log.txt")
fh = TimedRotatingFileHandler(filename, when='M', backupCount=30)
ch = logging.StreamHandler()

fh.setFormatter(formatter)
ch.setFormatter(formatter)

logger.addHandler(fh)
logger.addHandler(ch)
