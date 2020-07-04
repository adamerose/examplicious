import os
from app.logger import logger


def in_docker_container():
    return bool(os.environ.get('IN_DOCKER_CONTAINER', False))


# Print a string surrounded by dashes
def print_header(string="", width=80, character="-"):
    try:
        width = os.get_terminal_size().columns
    except:
        pass

    if string != "":
        string = " " + string + " "
    logger.info(string.center(width, character))


def initial_requests():
    import requests

    response = requests.post("http://127.0.0.1:8000/articles",
                             headers={'Content-Type': 'application/json', 'Accept': 'application/json'},
                             json={'title': 'Learn mobx', 'body': 'asdf'})


def add_mock_data():
    from fastapi.testclient import TestClient
    from app.main import app
    from faker import Faker
    from faker.providers import person, profile, lorem

    f = Faker()
    for x in [person, profile, lorem]:
        f.add_provider(x)

    client = TestClient(app)

    for _ in range(2):

        username = f.user_name()
        email = f.email()
        password = f.password()

        response1 = client.post('users', json={'username': username,
                                               'email': email,
                                               'password': password})

        response2 = client.post('sign-in', json={'username': username,
                                                 'password': password})

        token = response2.json()

        for _ in range(3):
            article = client.post('articles', json={'title': f.paragraph(1),
                                                    'body': f.paragraph(5)},
                                  headers={"Authorization": f"bearer {token}"})
