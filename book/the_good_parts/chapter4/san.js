var duck = {
    duckSing:function(){
        console.log("嘎嘎嘎");
    }
}
var cherrio = [];
console.log(typeof cherrio);

for (var i=0; i<1000; i++)
{
    cherrio.push(duck)
}
if(cherrio.length === 1000){
    console.log('已招募完成，报告国王');
}
duck.duckSing();
 for( let singer of cherrio){
    //  cherrio[i].duckSing();
    // console.log(singer.duckSing())
 }
 for(var i=0;i<cherrio.length;i++){
     cherrio[i].duckSing();
 }