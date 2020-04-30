FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7
# Show Python stdout in docker console
ENV PYTHONUNBUFFERED=1

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . /app

# docker build -t backend --no-cache .
# docker run backend