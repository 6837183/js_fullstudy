// 对象
var mrJi = {
    name: 'kaikai',
    age: '22',
    sex: 'boy',
    health: 100,
    smoke: function() {
        console.log('I am smoking cool!');
        mrJi.health--
    },
    drink: function() {
        console.log('I am drink');
        mrJi.health++
    }
}
// mrJi.smoke()
// mrJi.drink()
// console.log(mrJi.health);
//增
// mrJi.girlFriend = 'xiaocheng'
// console.log(mrJi);

// 查
// console.log(mrJi.sex);

// 修改
//  mrJi.sex = 'girl'
//  mrJi.sex = 'boy'
//  console.log(mrJi);

// 删除
// delete mrJi.name
// console.log(mrJi.aaa);


// 对象创建
// 1. var obj = {} // 对象字面量 | 对象直接量
// 2. 构造函数

// 1)
    // let a = new Object()  // var obj = {}  // 没有区别
    // let b = new Object()

// 2)
    function Car(color) {  // 大驼峰式命名
        this.color = color
        this.name = 'BMW'
        this.height = '1400'
        this.weight = 1000
        this.lang = '4900'
        this.health = 100
        this.run = function() {
            this.health--
        }
    }
    var car = new Car('black')
    var car1 = new Car('white')
    car.name = '红旗'
    

    car.run()
    car1.run()
    console.log(car);
    console.log(car1);