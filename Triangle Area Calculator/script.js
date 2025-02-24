function calculateArea(){
    let sideA = parseFloat(document.getElementById("sideA").value);
    let sideB = parseFloat(document.getElementById("sideB").value);
    let sideC = parseFloat(document.getElementById("sideC").value);

    if(sideA==0 || sideB==0 || sideC==0){
        document.getElementById("result").innerHTML = "One or more sides can not be zero";
        return;
    }
    if(isNaN(sideA)||isNaN(sideB)||isNaN(sideC)){
        document.getElementById("result").innerHTML = "Please enter valid length of the sides";
        return;
    } 
    if((sideA+sideB<=sideC) || (sideA+sideC<=sideB) || (sideB+sideC<=sideA)){
        document.getElementById("result").innerHTML = "The given sides do not form a triangle";
        return;
    }

    let s = (sideA+sideB+sideC)/2;
    let area = Math.sqrt(s*(s-sideA)*(s-sideB)*(s-sideC));

    document.getElementById("result").innerHTML = `the area of the triangle is : ${area.toFixed(2)}`;

}