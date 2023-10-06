// document.getElementById("show-result").addEventListener("click", show_result);
// function show_result() {

//     var x1 = parseFloat(document.getElementById("web-marks").value);
//     var x2 = parseFloat(document.getElementById("maths-mark").value);
//     var x3 = parseFloat(document.getElementById("computer-marks").value);
//     var x4 = parseFloat(document.getElementById("physics-marks").value);
//     Total = x1 + x2 + x3 + x4;
//     percentage = (Total * 100) / 400;
//     document.getElementById("my_result").innerHTML = `Your Toatl is ${Total} and your percentage is ${percentage}%`;

// }

// document.getElementById("show-result").addEventListener("click", show_result);

// function show_result() {
//     var x1 = parseFloat(document.getElementById("web-marks").value);
//     var x2 = parseFloat(document.getElementById("maths-mark").value);
//     var x3 = parseFloat(document.getElementById("computer-marks").value);
//     var x4 = parseFloat(document.getElementById("physics-marks").value);
//     Total = x1 + x2 + x3 + x4;
//     percentage = (Total * 100) / 400;
//     document.getElementById("my_result").innerHTML = `${Total}`;
// }

const calcy = () =>{
    let wd = parseFloat(document.getElementById("web-marks").value);
    let maths = parseFloat(document.getElementById("maths-mark").value);
    let comp = parseFloat(document.getElementById("computer-marks").value);
    let phys = parseFloat(document.getElementById("physics-marks").value);
    let Grade = '';
    let totalGrades = wd + maths + comp +phys ;  

    let percentage = (totalGrades * 100) / 400 ;
debugger;
    if(percentage <=100 && percentage>=80){
            Grade = 'A';
    }

    else if(percentage <= 79 && percentage >= 60){
            Grade = 'B';
    }

    else if(percentage <= 59 && percentage >= 40){
            Grade = 'C';
    }
    else{
            Grade = 'F';
    }

    document.getElementById("my_result").innerHTML = `Out of 400 your total is ${totalGrades} and your percentage is ${percentage}% <br>  Your grade is ${Grade}.`;
}