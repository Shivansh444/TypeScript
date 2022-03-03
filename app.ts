function add(n1:string,n2:number,printResult:boolean,printPhrase:string){
    
    const result = n1+n2;
    if(printResult){
        console.log(printPhrase+result)
    }else{
        return result
    }


    
}

const number1 = '10';
const number2 = 9;
const printResult = true;
const printPhrase = 'Result is :'

const res = add(number1,number2, printResult, printPhrase)
console.log(res)