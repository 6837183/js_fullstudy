// function identity(context){
//     return this.name.toUpperCase()
// }

// function speak(){
//      let greeting = "Hello, I'm" + identity.call(this) 
//      console.log(greeting)
// }

// let me = {
//     name: 'jkk'
// }
// speak(me)

function identify(){
    return this.name.toUpperCase()
}
function speak(){
    let greeting = "l'm" + identify.call(this)
    console.log(greeting)
}
let me = {
    name: 'jkk'
}
let you = {
    name:'abc'
}
speak.call(me)