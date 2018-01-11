var obj = {
    name:'ta mère',
    job:'consternant',
    toString:function(){
        return `le nom est ${this.name} et job: ${this.job}`
    }
}

const number = [1,2,3,4,5,6];

function dblnumbers(arr){
    let newarr = [];
    arr.forEach(function(element) {
    return newarr.push(element * 2);
      });
    console.log(newarr);
}
dblnumbers(number);

console.log(obj.toString());