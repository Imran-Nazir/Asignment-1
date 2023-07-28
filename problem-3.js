// Multiplication Table Generator
multiplication=(input)=>{
    for(let i=1; i<=10; i++){
        console.log(i+' * '+input+' = '+i*input);
    }
}
var input = 5; //parseInt(prompt('Enter a number: '));
multiplication(input);