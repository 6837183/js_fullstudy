if(typeof Object.beget !== 'function'){
    Object.beget=function(0){
        var F =function(){}
            F.prototype=0;
            return new F();
        };
    
}
var another_stooge=Object.beget(stooge);