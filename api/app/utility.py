import os


def in_docker_container():
    return bool(os.environ.get('IN_DOCKER_CONTAINER', False))


def print_header(string="", width=80, character="-"):
    try:
        width = os.get_terminal_size().columns
    except:
        pass

    if string != "":
        string = " " + string + " "
    print(string.center(width, character))


def initial_requests():
    import requests

    response = requests.post("http://127.0.0.1:8000/articles",
                             headers={'Content-Type': 'application/json', 'Accept': 'application/json'},
                             json={'title': 'Learn mobx', 'body': 'asdf'})


def add_mock_data():
    from fastapi.testclient import TestClient
    from app.main import app
    from mimesis import Generic

    client = TestClient(app)
    g = Generic('en')

    for _ in range(2):

        username = g.person.username()
        email = g.person.email()
        password = g.person.password()

        response1 = client.post('users', json={'username': username,
                                               'email': email,
                                               'password': password})

        response2 = client.post('sign-in', json={'username': username,
                                                 'password': password})

        token = response2.json()

        for _ in range(3):
            article = client.post('articles', json={'title': g.text.title(),
                                                    'body': g.text.text(5)},
                                  headers={"Authorization": f"bearer {token}"})
