


(function(){//After Sign Process
    var users = JSON.parse(localStorage.getItem("users"));
    var login = JSON.parse(localStorage.getItem("userLogin"));
    var number  = JSON.parse(localStorage.getItem("userNumber"));
    if(userLogin == true){//To Change Signup Login'in top left' To UserName Logout In the Top Left of the web
        var logInBar =  document.getElementById('loginName');
        logInBar.innerHTML = `<a href="JavaSCript:void(0)" onclick="clearData()" >Sign Out</a>
        <a  href="JavaSCript:void(0)">${users[number].fullName.toUpperCase()}</a>`
    }



}());

function clearData(){
    localStorage.setItem("userLogin",JSON.stringify(null));
    localStorage.setItem("number",JSON.stringify(null));
    window.location = window.location;
    

}