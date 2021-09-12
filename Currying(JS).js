//Currying using normal function 
function sum(a){
    function(b){
        if(b){
            return a+b;
        }
        else 
        return a;
    }
    return sum;
}
const sumCurry = sum;
sumCurry(1);
sumCurry(2)(3);

var currier = function(fn){
    var args = Array.prototype.slice.call(arguments,1);
    return function(){
        return fn.apply(this,args.concat(Array.prototype.slice.call(arguments,0)));
    }
}

var sum = function(a){
    function(b){
        if(b){
          return sum(a+b);
        }
        else 
        return sum(a);
    }
    return sum;
}

let es6Sum = a=>b=>b?es6Sum(a,b):a;