//数组去重
let array = [1,1,'1','1']
function unique(array){
    let res = []
    res[0]=array[0]
    for (let i = 0 ;i<array.length;i++){
        for( let j=0,reslen=res.length; j <reslen; j++){
            if(array[i]===res[j]){
                break;
            }
            if(j===reslen-1){
                res.push(array[i])
            }
            
        }
      
    }
    //1. 将述组中的每一项拿出来作为主角
    //2. 找到不是重复项，放入这个数组中
    //如果array[i]、是唯一的
    // for(let i = 0; i<array.length;i++){
    //     // array[i]
    //     for(let j = array.length-1;j>i;j--){
    //         // 当外面的for执行一次时，内层for会执行length-i次
    //         if (array[i] ===array[j]){
    //             array.splice(j,1)
    //         }
    //     }
    // }
    return res
}
console.log(unique(array))//[1,'1']