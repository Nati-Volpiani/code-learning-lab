# 1. A list (the array of Python)
tasks = ["login", "logout", "search"]
print(tasks)

# 2. append adds an item at the end (like push in JS)
tasks.append("checkout")
print(tasks)

# 3. pop removes the last item and gives it back (same as JS)
removed_task = tasks.pop()
print(removed_task)
print(tasks)

# 4. A dictionary (the object of Python): keys and values
student = {"name": "Natalia", "level": "junior"}
print(student["name"])

# 5. A function with one parameter that receives the list and returns its size
def count_items(items):
    total = len(items)
    return total

print(count_items(tasks))

# 6. A function with one parameter that receives the dictionary
def describe_student(person):
    description = person["name"] + " is a " + person["level"] + " QA"
    return description

print(describe_student(student))

# Expected: the console prints
# ['login', 'logout', 'search']
# ['login', 'logout', 'search', 'checkout']
# checkout
# ['login', 'logout', 'search']
# Natalia
# 3
# Natalia is a junior QA
