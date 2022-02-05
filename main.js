function sayed() {
    var user_name, password;
    var user_name = document.getElementById("user_name").value;
    var password = document.getElementById("password").value;


    if (user_name == "towkir" && password == 1234) {
        document.getElementById("demo").innerHTML = "Thank You";
    } else {
        document.getElementById("demo").innerHTML = "User Name or Password Wrong";
    }

}