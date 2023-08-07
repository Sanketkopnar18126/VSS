// 111
// "*"
// 333
// "*"
// 555
// "*"


// 111
// *
// 333
// *
// 555
// *


// ####
// 2
// ####
// 4
// ####
// 6
// ####

function pattern(n){
for(let i=1;i<=n;i++){
    if(i%2==0){
        console.log("*")
    }else{
        console.log(`${i}${i}${i}`)
    }

}
}
pattern(5)



function second(n){
    for(i=1;i<=n;i++){
        if(i%2!==0){
            console.log("####")
        }else{
            console.log(i)
        }
    }
}
second(7)
