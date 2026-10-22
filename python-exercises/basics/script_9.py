class Project:
    pass

resolved_project = Project()
resolved_project.name = "Atlas"

def welcome_message(project_name):
    return "Welcome to " + project_name + "!"

print(welcome_message(resolved_project.name))

resolved_project = Project()
resolved_project.name = "SpaceX"
print(welcome_message(resolved_project.name))