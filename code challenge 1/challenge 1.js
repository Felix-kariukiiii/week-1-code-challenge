function calculateStudentGrade(marks){
    let grade;
    if (marks >= 79 && marks <=100) {
      grade = "A";
    } else if (marks >= 60 && marks <=78) {
      grade = "B-";
    } else if (marks >= 49 && marks <= 59) {
      grade = "C-";
    } else if (marks >= 40 && marks <=48) {
      grade = "D-";
    } else if (marks <40){
      grade = "E";
     
    }
    console.log("Grade: " + grade)
    }
    calculateStudentGrade(56);