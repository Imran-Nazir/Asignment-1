//Online Store Discount Calculator
calculator=(input)=>{
    var discount = 0;
    var new_amount = 0;
    if(input < 50){
        discount = 0;
    }
    else if(input >= 50 && input <= 100){
        discount = input * (5/100);
    }
    else if(input >= 100 && input <= 200){
        discount = input * (10/100);
    }
    else if(input > 200 ){
        discount = input * (15/100);
    }
    new_amount = input-discount;
    console.log('Discounted amount:  $'+discount.toFixed(2)+'\nTotal amount:       $'+input+'\nDiscount amount:    $'+new_amount);

}
var input = 137;  //parseInt(prompt('Enter a number: '));
calculator(input);
