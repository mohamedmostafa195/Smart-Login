var loginName = document.getElementById("loginName")
var loginpassword = document.getElementById("loginPassword")
var user = []



user = JSON.parse(localStorage.getItem("Storage"))
document.getElementById("Demo").addEventListener("click", function () {
    check()
}
)
function check() {
    for (let i = 0; i < user.length; i++) {

        if (loginName.value == user[i].email && loginpassword.value == user[i].password) {
            var y = user[i].name
            localStorage.setItem("StorageName", JSON.stringify(y))
            location.href = "/Home/html/home.html"
        }
        else {
            console.log("Wrong")
        }

    }
}


AllRegualrExpresion = {

    loginName: /^[A-Z]/,
    loginpassword: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/
}

function Demo(Myinput) {
    if (AllRegualrExpresion[Myinput.id].test(Myinput.value)) {
        Myinput.classList.add("is-valid")
        Myinput.classList.remove("is-invalid")
    }
    else {
        Myinput.classList.add("is-invalid")
        Myinput.classList.remove("is-valid")

    }

}