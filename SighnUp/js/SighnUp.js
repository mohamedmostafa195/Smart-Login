var signName = document.getElementById("name")
var signEmail = document.getElementById("email")
var signPassword = document.getElementById("password")

var user = []

function addproduct() {
    var obj = {

        name: signName.value,
        email: signEmail.value,
        password: signPassword.value
    }
    user.push(obj)


    localStorage.setItem("Storage", JSON.stringify(user))
    clear()
    location.href = "/Login/Html/login.html"
}

function clear() {
    signName.value = ""
    signEmail.value = ""
    signPassword.value = ""
}



var RegularExpresion = {
    name: /^[A-Z]/,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    password: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/

}

function Demo(Myinput) {
    if (RegularExpresion[Myinput.id].test(Myinput.value)) {
        Myinput.classList.add("is-valid")
        Myinput.classList.remove("is-invalid")
    }
    else {
        Myinput.classList.add("is-invalid")
        Myinput.classList.remove("is-valid")
    }
}


