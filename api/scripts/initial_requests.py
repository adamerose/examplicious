import requests

response = requests.put("http://127.0.0.1:8000/todos",
                        headers={'Content-Type': 'application/json', 'Accept': 'application/json'},
                        json=[{'title': 'Learn mobx', 'done': False, 'id': 1},
                              {'title': 'Make full stack todo app', 'done': False, 'id': 2},
                              {'title': 'Get coffee', 'done': False, 'id': 3},
                              ])
