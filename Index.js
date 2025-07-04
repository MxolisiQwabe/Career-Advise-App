function btnPressed(){
    const SubjectSelected = document.getElementById("sub-select").value;
    let advice;

    switch(SubjectSelected) {
        case "Mathematics and Science":
            advice = "If you excelled in these, consider careers in Engineering (civil, electrical, mechanical), Medicine (doctor, pharmacist), IT (software development, data analysis).";
            break;

        case "Business Studies and Accounting":
            advice = "If you excelled in these, consider careers in Finance, Banking, Accounting, Management, or Entrepreneurship.";
            break;

        case "Humanities (History, Geography, Languages)":
            advice = "If you excelled in these, consider careers in Law, Journalism, Teaching, or Social sciences.";
            break;

        case "Visual Arts and Drama":
            advice = "If you excelled in these, consider careers in the Creative arts, Media, Design, or Performance.";
            break;
    }

    if (!SubjectSelected){
        alert("Please select subjects you are good at");
        return;
    }

    document.getElementById("message").innerHTML = advice;
}