class Student {
	constructor(id, firstName, lastName) {
    let age = 20
    this.name = firstName + ' ' + lastName
		this._id = id
		this._firstName = firstName
		this._lasatname = lastName
    this.greet = function () {
      console.log(`name; ${this.name}, age: ${age}`);
    }
	}
	toString() {
		return 'id id ' + this._id + 'his/her name is ' + this.firstName + ' ' + this.lastName
  }
}


const aStudent = new Student(123, 'Eddy', 'Chang')
console.log(aStudent.age)
aStudent.greet()
