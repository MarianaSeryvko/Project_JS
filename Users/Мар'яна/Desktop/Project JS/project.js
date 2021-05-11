function bodyMassIndex() {
    let height = document.getElementById("Input1").value;   
    let weight = document.getElementById("Input2").value;
    let age = document.getElementById("Input3").value;
    if (isNaN(height) || isNaN(weight) || isNaN(age) ) {
        alert("Not a number was entered!");
    } if (height =="" || weight=="" || age =="") {
        alert ("Field is empty");
    }else {
    document.getElementById("Output1").innerHTML= (weight/((height*height)/10000)).toFixed(2);
    }
}

function femaleCalories() {
    let height = document.getElementById("Input1").value;   
    let weight = document.getElementById("Input2").value;
    let age = document.getElementById("Input3").value;
    document.getElementById("Output2").innerHTML=((10*weight)+(6.25*height)+(5*age)-161).toFixed(2);
    document.getElementById("Output3").innerHTML =((((10*weight)+(6.25*height)+(5*age)-161)*0.5)/4).toFixed(2);
    document.getElementById("Output4").innerHTML =((((10*weight)+(6.25*height)+(5*age)-161)*0.3)/9).toFixed(2);
    document.getElementById("Output5").innerHTML =((((10*weight)+(6.25*height)+(5*age)-161)*0.2)/4).toFixed(2);
}

function maleCalories(){
    let height = document.getElementById("Input1").value;   
    let weight = document.getElementById("Input2").value;
    let age = document.getElementById("Input3").value;
    document.getElementById("Output2").innerHTML=((10*weight)+(6.25*height)+(5*age)-5).toFixed(2);
    document.getElementById("Output3").innerHTML =((((10*weight)+(6.25*height)+(5*age)-5)*0.5)/4).toFixed(2);
    document.getElementById("Output4").innerHTML =((((10*weight)+(6.25*height)+(5*age)-5)*0.3)/9).toFixed(2);
    document.getElementById("Output5").innerHTML =((((10*weight)+(6.25*height)+(5*age)-5)*0.2)/4).toFixed(2);
}

function genderCheck() {
    if(document.getElementById("Male").checked==true) {
        maleCalories();
    } else {
        femaleCalories();
    }
}
