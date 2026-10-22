class Student:
    def introduce(self):
        return "I am a " + self.level + " QA"

student_one = Student()
student_one.level = "junior"

student_two = Student()
student_two.level = "senior"

print(student_one.introduce())
print(student_two.introduce())

