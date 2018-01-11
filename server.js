var obj = {
    name:'ta mère',
    job:'consternant',
    toString:function(){
        return `le nom est ${this.name} et job: ${this.job}`
    }
}

const number = [1,2,3,4,5,6];

// function dblnumbers(arr){
//     return arr.map(element => element * 2);
// }

// console.log(dblnumbers(number));
// console.log(obj.toString());
console.log(number.reduce((prev,current)=>{
    return prev+current
},0));

console.log(number.filter(item => item%2 === 0g));