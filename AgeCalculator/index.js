const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calcAge(){
    const birthdayVal = birthdayEl.value;
    if(birthdayVal === ""){
        alert("Please enter your birthday");
    } else{
        const age = getAge(birthdayVal);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthday = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthday.getFullYear();
    const month = currentDate.getMonth() - birthday.getMonth();

    if(month < 0 || (month === 0 && currentDate.getDate() < birthday.getDate())){
        age--;
    }
    return age;
}

btnEl.addEventListener("click", calcAge);
