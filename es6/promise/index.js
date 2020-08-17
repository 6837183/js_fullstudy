// js是单线程的
function a() {
    console.log('小计');
}

function b() {
    setTimeout(()=>{
        console.log('小程');
    },0)
}
function c() {
    console.log('小吴');
}
b()
a()
c()