function larger() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var larger = "Both are equel";
    if (num1 > num2) {
        larger = "larger Number is " + num1;
    } else if (num2 > num1) {
        larger = "larger Number is " + num2;
    }
    document.getElementById("larger").innerHTML = larger;
}