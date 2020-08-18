function Student(name,age,sex) {
    this.name = name
    this.age = age
    this.sex = sex
    this.grade = 2017
    return {aaa:1}
}
// function Test() {
//     this.name = name
//     this.age = age
//     this.sex = sex

// }
var student = new Student('xiaoji',22,'boy')
console.log(student);

// function person(){
//     var name = 'wn'
// }
// var person = new person()
// console.log(person);