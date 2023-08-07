function printPattern(num){
    let head=''
    let tail=''
    let middle=''

    for(let i=0;i<=num;i++){
if(i>0){
    for(let j=0;j<=i;j++){
        head+='0'
        tail+='0'

    }
}
    for(k=i;k<9;k++){
        middle+='1'
    }
}
return head+middle+tail

    }
    

printPattern(9)
