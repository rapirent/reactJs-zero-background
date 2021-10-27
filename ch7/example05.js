class Student {
  constructor(id, firstName, lastName) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    Student._countStudent()
  }

  static _countStudent() {
    if (this._numOfStudents === undefined) {
      this._numOfStudents = 1
    } else {
      this._numOfStudents++
    }
  }

  static get numOfStudents() {
    return this._numOfStudents
  }
}

const aStudent = new Student(11, "Tony", "Ding")
console.log(Student.numOfStudents)
const bStudent = new Student(22, 'Ed', 'Lu')
console.log(Student.numOfStudents)
console.log(bStudent.numOfStudents)
