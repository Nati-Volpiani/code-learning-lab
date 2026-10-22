# Useful commands

All of these are typed in the **terminal** (not inside a `.py` file).

## Virtual environment (venv)

| When | Command | What it does |
|------|---------|--------------|
| Always, before starting | `cd /home/natalia/qa-learning-lab/python/api-testing` | Moves me into the project folder |
| Only once per project | `python3 -m venv .venv` | Creates the `.venv` folder (the virtual environment) |
| Every time I open a new terminal | `source .venv/bin/activate` | Activates the venv. I know it is active because `(.venv)` appears at the start of the line |
| Only once, with the venv active | `pip install requests pytest` | Installs the libraries inside the venv |
| When I want to check | `pip list` | Shows the libraries installed in the venv |
| When I finish (optional) | `deactivate` | Turns off the venv. `(.venv)` disappears |

## Run a file

| Command | What it does |
|---------|--------------|
| `python3 first_request.py` | Runs the file. The venv must be active |

## Errors I already know

| Error | What it means |
|-------|---------------|
| `ModuleNotFoundError: No module named 'requests'` | The venv is not active. It is a problem with my environment, not an API bug |

## My notes

