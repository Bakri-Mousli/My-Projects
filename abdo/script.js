$(document).ready(function(){
    $("#openInsertDialogButton").click(function(){
        $("#insertDialogModal").modal('show');
    });

    $("#insertData").click(function(){
        var name = $("#name").val();
        var age = $("#age").val();

        $("#insertDialogModal").modal('hide');
    });
});

// ==============================================================================

let Students=[
    {Number: 1, Name: "Bakri", Age:20, MathMark:99, HistoryMark:100, ScienceMark:98},
    {Number: 2, Name: "Ali", Age:21, MathMark:79, HistoryMark:80, ScienceMark:60},
];
Students.sort((a, b) => a.Name.localeCompare(b.Name));
function displayStudentsTable() {
    let tableBody = document.getElementById("studentsTableBody");
    tableBody.innerHTML = ''; 

    for (let student of Students) {
        let row = tableBody.insertRow();
        row.insertCell().textContent = student.Number;
        row.insertCell().textContent = student.Name;
        row.insertCell().textContent = student.Age;
        row.insertCell().textContent = student.MathMark;
        row.insertCell().textContent = student.HistoryMark;
        row.insertCell().textContent = student.ScienceMark;
    }
}

displayStudentsTable();
// Q1:
function insertStudent(obj){
Students.push(obj);
Students.sort((a, b) => a.Name.localeCompare(b.Name));
};

//Q2:
function calcAvg(...subjects){
    let sum=0;
    for (let subject of subjects)
        sum+=subject;
    return sum/subjects.length;
}

// Q3:
function calcMax(subject) {
    let maxMark = 0; 
    let studentWithMaxMark = null;

    for (let student of Students) {
        if (student[subject + "Mark"] > maxMark) {
            maxMark = student[subject + "Mark"];
            studentWithMaxMark = student;
        }
    }
    
    return studentWithMaxMark;
}

// Q4:
function checkSuccess(studentNumber) {
    let student = Students.find(s => s.Number === studentNumber);

    if (!student) {
        return "Student not found";
    }

    let average = calcAverage(student);
    let allMarksAbove50 = student.MathMark >= 50 && student.HistoryMark >= 50 && student.ScienceMark >= 50;
    let gpaAbove60 = (average / 100) * 100 >= 60;

    if (allMarksAbove50 && gpaAbove60)
        return "Successful";
    else 
        return "Not Successful";
}

function insert(){
    let student = {};
    student.Number=document.getElementById("id").value;
    student.Name=document.getElementById("name").value;
    student.Age=document.getElementById("age").value;
    student.MathMark=document.getElementById("sub1").value;
    student.HistoryMark=document.getElementById("sub2").value;
    student.ScienceMark=document.getElementById("sub3").value;
    insertStudent(student);
    displayStudentsTable();
    // clearing
    document.getElementById("id").value="";
    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("sub1").value="";
    document.getElementById("sub2").value="";
    document.getElementById("sub3").value="";
    }