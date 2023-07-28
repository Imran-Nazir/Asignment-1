//Grade Calculator
calculateGrade=(marks)=>{
    let grade = "";
    switch(true){
        case (marks>=90):
            grade = 'A';
            break;
        case (marks>=80 && marks <= 89):
            grade = 'B';
            break;
        case (marks>=70 && marks <= 79):
            grade =  'C';
            break;
        case (marks>=60 && marks <= 69):
            grade = 'D';
            break;
        default:
            grade = 'F';
            break;
    }
    return grade;
}
var input = 7;   //parseInt(prompt('Enter a number: '));
console.log(calculateGrade(input));