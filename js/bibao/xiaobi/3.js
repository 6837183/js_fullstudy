function  test(){
    var food = 'apple'
    function a() {
        console.log(food);
        // food = 'banana'
    }
    function b() {
        console.log(food);
    }


}
// a()
// b()
// 想一个办法把这两个函数真的返回出来

function fruit() {
    var food = 'apple'  // food 一直被缓存
    var obj = {
        eatFood: function(){
         if(food != ''){
             console.log('i am eating ' + food);
             food = ''
         }else{
             console.log('there is nothing');
         }
        },
        pushFood:function(myfood){
            food = myfood
        }
    }
    return obj
}
var person = fruit()
person.eatFood()
person.eatFood()
person.pushFood('banana')
person.eatFood()
