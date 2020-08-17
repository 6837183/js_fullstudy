let xq = new Promise(function xq(resolve, reject) {
    setTimeout(() => {
        console.log('蜗牛哥相亲了！');
        resolve('相亲成功！嘿嘿')
    }, 2000)
})


xq.then((res) => {
    // console.log(res);
    if (res == '相亲成功！嘿嘿') {
        marry
    }

})
    .then(() => {
        baby1()
    })
let marry =new Promise ((resolve,reject)=>{
   
        setTimeout(() => {
            console.log('蜗牛哥失败了！！!');
            resolve('蜗牛哥不惧失败') 
        }, 1000)
    })

=
function baby1() {
    return new Promise
    setTimeout(() => {
        console.log('小蜗牛1出生了');
    }, 500)
}

function baby2() {
    setTimeout(() => {
        console.log('小蜗牛2出生了');
    }, 500)
}
// xq()
// marry()