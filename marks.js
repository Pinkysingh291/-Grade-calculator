function calculateGrade() {

    let s1 = Number(document.getElementById("sub1").value);
    let s2 = Number(document.getElementById("sub2").value);
    let s3 = Number(document.getElementById("sub3").value);
    let s4 = Number(document.getElementById("sub4").value);
    let s5 = Number(document.getElementById("sub5").value);

    if (
        s1 < 0 || s1 > 100 ||
        s2 < 0 || s2 > 100 ||
        s3 < 0 || s3 > 100 ||
        s4 < 0 || s4 > 100 ||
        s5 < 0 || s5 > 100
    ) {
        document.getElementById("result").innerHTML =
            "Enter marks between 0 and 100";
        return;
    }

    let total = s1 + s2 + s3 + s4 + s5;
    let percentage = total / 5;

    let grade;

    if (percentage >= 90) {
        grade = "A";
    }
    else if (percentage >= 80) {
        grade = "B";
    }
    else if (percentage >= 70) {
        grade = "C";
    }
    else if (percentage >= 60) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    let status = percentage >= 40 ? "PASS" : "FAIL";

    document.getElementById("result").innerHTML =
        `
        Total Marks: ${total}<br>
        Percentage: ${percentage.toFixed(2)}%<br>
        Grade: ${grade}<br>
        Status: ${status}
        `;
}