class Project:
        pass

resolved_project = Project()
resolved_project.name = "First project"

def welcome_message(project_name):
        return "Welcome to " + project_name + "!"

print (welcome_message(resolved_project.name))        

resolved_project = Project()
resolved_project.name = "Wisevizer-Workshop"
print(welcome_message(resolved_project.name))