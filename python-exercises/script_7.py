class Employee:
    def introduce(self):
        return "Hi, i am a " + self.level + " QA"

first_employee = Employee()
first_employee.level = "junior"

second_employee = Employee()
second_employee.level = "semi-senior"

third_employee = Employee() 
third_employee.level = "senior"

print(first_employee.introduce())
print(second_employee.introduce())
print(third_employee.introduce())