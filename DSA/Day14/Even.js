const arr=[2,2,2,2,2]

const Arr=(n)=>{
    let sum=0;
    for(let i=0;i<=n.length;i++){
     if(n[i]%2==0){
    sum=sum+n[i]
}
    }
    return sum
}
console.log(Arr(arr))
