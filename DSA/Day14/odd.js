const arr=[1,3,5,11,14]

let Arr=(n)=>{
    let sum=0
    for(let i=0;i<n.length;i++){
        if(n[i]%2!==0){
            sum+=n[i]
        }
    }
    return sum
}
console.log(Arr(arr));