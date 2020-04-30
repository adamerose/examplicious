import os

def in_docker_container():
    return bool(os.environ.get('IN_DOCKER_CONTAINER', False))

