# 1. Variables (no let/const in Python)
student_name = "Natalia"
student_level = "junior"

# 2. A function with one parameter and a return
def build_greeting(name):
    greeting = "Hello, " + name
    return greeting

# 3. Calling the function with one argument
message = build_greeting(student_name)
print(message)

# 4. A class (the blueprint of an object) with one method
class Student:
    def introduce(self):
        return "I am a " + self.level + " QA"

# 5. Creating an object from the class and giving it an attribute
student = Student()
student.level = student_level

# 6. Calling the method of the object
print(student.introduce())

# Expected: the console prints "Hello, Natalia" and then "I am a junior QA"

# class       -> reserved word to create a class
# Student     -> the blueprint (the class)
# Student()   -> uses the blueprint, creates a new instance (object)
# student     -> variable that holds that instance
# level       -> attribute added to that instance
# introduce() -> method that reads the instance's attribute and returns a string
