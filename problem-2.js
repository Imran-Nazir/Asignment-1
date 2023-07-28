//Filter Even Numbers
var arr = [12, 34, 45, 23, 6, 78, 54, 90];
check=(value)=>{
    if(value%2 == 0){
        return value;
    }
}
console.log(arr.filter(check));