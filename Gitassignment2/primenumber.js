let no =4
let count =0
for(let i=1;i<=no;i++){
  if(no%i==0){
    count++
  }
}
if(count==0){
  console.log("It is Prime Number")
}
else{
  console.log("Not A Prime Number")
}