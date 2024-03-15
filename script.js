/*
let country = 'United States';
let continent = 'North America';
let population = "331.9 million";

console.log(country);
console.log(continent);
console.log(population);

let javascriptIsFun = true ;
console.log(javascriptIsFun);


console.log(typeof true);

javascriptIsFun = 'HELL YEAH!'; 
*/

const now = 2037;
const age = now - 1991;
const ageSarah = now - 2018;
console.log(age*2/10,2**3);
const firstName = "Jonas";
const lastName = "Schemedtman";
console.log(firstName+" "+lastName);


let x = 10+5;
console.log(x);
x += 10; 
console.log(x);

console.log(age>ageSarah);
console.log(ageSarah>=18);

const isFullAge =ageSarah >=18;
console.log(now -1991 > now - 2018);

console.log(20-10-5);

const jonas = "I'm" + firstName + ",a" + (year-birthYear)+'years old'+job +'!';
console.log(jonas);
const jonasNew = `I'm ${firstName}, a ${year-birthYear} year old ${job}!`;
console.log(jonasNew);

const isOldEnough = age >= 18;

if(age >= 18){
    console.log("started driving");
}
else { 
    console.log("still not driving too young");
}

if (birthYear<=2000){
    let century = 20;
}
else {
    let century = 21;
}
console.log(century);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);


/* Write your code below. Good luck! 🙂 */
if ( BMIMark > BMIJohn){
    console.log(`Mark's BMI (${BMIMark})is higher than John's (${BMIJohn})!`);
}
else {
    console.log(`John's BMI (${BMIJohn}) us higher than Marks (${BMIMark})!`);
}

//type conversion/coercion 
const inputYear = '1991';
console.log(Number(inputYear));

//convert numbers to strings 
console.log(String(23));

//type coercion
console.log('I am '+ 23 + 'years old');
console.log('23'-'10'-3);
console.log('23'/'2');

//truthy and falsy values 

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolearn('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0 
if (money){
    console.log("Dony spend it at all");
}
else {
    console.log("You should get a job");
}

//EQUALITY 

//LOGICAL OPERATORS 
const hasDriversLicense = true ; 
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


//switch statement 
const day = 'monday';
switch(day){
    case 'monday':
        console.log("Plan structure");
        console.log("Go to meetup");
    break;
    case 'tuesday':
        console.log('prepare theory videos');
    break;
    case 'wednesday':
        console.log('hmm');
    break;
    case 'thursday':
        console.log("write code samples");
    break;
    case 'friday':
        console.log("record lectures");
    default:
        console.log("NOT A WEEKDAY");
    }

    //EXPRESSIONS 

    3+4
    1991

    //STATEMENTS 
    if (23>10){
        const str ='23 is bigger';
    }

    //CONDITIONAL TERNARY
    age >= 18 ? console.log('drink wine'): console.log("drink water");

    //tip calculator 

    let bill = 275;
    let tip = bill <=300 && bill >=50 ? bill*.15 : bill*.2;

    console.log(`the bill is ${bill} and the tip is ${tip} for a total value of 
    ${bill+tip}`);