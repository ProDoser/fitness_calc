//navigation scripts
function home() {
    document.getElementById('main').style.display = 'block';
    document.getElementById('bmi_page').style.display = 'none';
    document.getElementById('hrz_page').style.display = 'none';
    document.getElementById('p_title').innerHTML = ("Home");
}

function calc_bmi() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('bmi_page').style.display = 'block';
    document.getElementById('hrz_page').style.display = 'none';
    document.getElementById('p_title').innerHTML = ("BMI Index");
}
function calc_hrz() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('bmi_page').style.display = 'none';
    document.getElementById('hrz_page').style.display = 'block';
    document.getElementById('p_title').innerHTML = ("Heart Rate Zones");
}

//BMI calculations
function bmi(bmi_height, bmi_weight){
    var result = "";
    var h = document.getElementById(bmi_height),
        w = document.getElementById(bmi_weight);
    var bmi_index = w.value/ Math.pow(h.value/100, 2);
    bmi_index=bmi_index.toFixed(2);

    if (bmi_index<18.5) {
        result = "You are underweight";
    }
    else if (bmi_index<=25) {
        result = "You have optimal weight";
    }
    else if (bmi_index<=30) {
        result = "You are overweight";
    }
    else if (bmi_index>30) {
        result = "You have obese";
    }

    if (!isNaN(bmi_index)){
        document.getElementById('bmi_index').innerHTML = ("Your BMI index is: " + bmi_index);
        document.getElementById('bmi_result').innerHTML = (result);
    }
    else if (isNaN(bmi_index)){
        document.getElementById('bmi_index').innerHTML = ("Please enter your parameters correct!");
    }
}

//Heart rate zone calculation
function hrz(hr_age){
    var age = document.getElementById(hr_age),
        max=220-age.value,
        hr1=Math.round(max*0.6),
        hr2=Math.round(max*0.7),
        hr3=Math.round(max*0.8);
    document.getElementById('hrz1').innerHTML = ("Zone 1: " + hr1 + " - " + hr2);
    document.getElementById('hrz2').innerHTML = ("Zone 1: " + hr2 + " - " + hr3);
    document.getElementById('hrz3').innerHTML = ("Zone 1: more than " + hr3);

}


