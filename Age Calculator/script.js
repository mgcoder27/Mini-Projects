function calculate() {
    let result = document.getElementById("result");
    let input = document.getElementById("birthday").value;
    let currentDate = new Date();

    if (!input) {
        alert("Please enter your birthdate");
    } else {
        input = new Date(input);
        let age = currentDate.getFullYear() - input.getFullYear();

 
        if (
            currentDate.getMonth() < input.getMonth() ||
            (currentDate.getMonth() === input.getMonth() && currentDate.getDate() < input.getDate())
        ) {
            age--;
        }

        result.innerHTML = `You are ${age} years old`;
    }
}

let button = document.getElementById("btn");
button.addEventListener("click", calculateAge);