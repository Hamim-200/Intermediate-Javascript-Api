for(let i =0;i<5;i++){
    console.log(i);
}
console.log('outside',i);

print5();//it can print
print10();
function print5(){
    console.log('inside print 5',5);
}

const print10 = function(){
    console.log('Inside print10',10)
}