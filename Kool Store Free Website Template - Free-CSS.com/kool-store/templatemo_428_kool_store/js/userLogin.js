

function signIn() {
    var condition = JSON.parse(localStorage.getItem("condition"));
    var name1 = document.getElementById("userName").value;
    var pass = document.getElementById("pass").value;
    var condition1 = true;
    var userdata = JSON.parse(localStorage.getItem("users"));

    if (condition) {
        condition1 = true;
        for (var i = 0; i < userdata.length; i++) {
            if (userdata[i].userName == name1 && userdata[i].password == pass) {
              //  alert("Object is working");
                localStorage.setItem("userNumber", JSON.stringify(i));
                condition1 = false;
                localStorage.setItem("userLogin", JSON.stringify(true));
                window.location.href = "index.html";
            }

        }
        if (condition1) {
            alert("Please Check Your UserName/Password");

        }
    }
    else {
        alert("Please Check Your Usernam/Password");

    }


}
var test;
function signup() {
    var condition = JSON.parse(localStorage.getItem("condition"));
    
    var userdata = JSON.parse(localStorage.getItem("users"));


    if (condition) {//if atleast one user is created
        var name1 = document.getElementById("userName").value;
        var cemail = document.getElementById("email").value;
        var condition1 = true;
        for (var i = 0; i < userdata.length; i++) {
            if (name1 == userdata[i].userName || cemail == userdata[i].email) {
                condition1 = false;
                break;
            }
        }
        if (condition1) {//if the userName and email is unique then the user is allow to create a new user in D.B
           
            var user = {
                fullName: document.getElementById("fullName").value,
                email: document.getElementById("email").value,
                userName: document.getElementById("userName").value,
                password: document.getElementById("pass").value,
                adress: document.getElementById('adress').value,
                userToDo: [],
                userTitle: [],
                cart:[],//creating cart array
                toDoCondition: false,

            }

            userdata.push(user);
            test = userdata;
            localStorage.setItem("users", JSON.stringify(userdata));
            
            document.getElementById("userName").value = "";
            document.getElementById("fullName").value = "";
            document.getElementById("pass").value = "";
            document.getElementById("email").value = "";
            document.getElementById('adress').value = "";

            alert("Thank You For Signing Up");
        }
        else {//if username and email is already taken
            alert("UserName Or Email Is Already Taken");
        }
    }
    else {//first time signUp
        
        userdata = [];
        var user = {
            fullName: document.getElementById("fullName").value,
            email: document.getElementById("email").value,
            userName: document.getElementById("userName").value,
            password: document.getElementById("pass").value,
            adress: document.getElementById('adress').value,            
            userToDo: [],
            userTitle: [],
            cart:[],//creating cart array
            toDoCondition: false,

        }
        userdata.push(user);

        localStorage.setItem("users", JSON.stringify(userdata));
        
        localStorage.setItem("condition", JSON.stringify(true));
        document.getElementById("userName").value = "";
        document.getElementById("fullName").value = "";
        document.getElementById("pass").value = "";
        document.getElementById("email").value = "";
        document.getElementById('adress').value = "";

        alert("Thank You For Signing Up");
    }


}