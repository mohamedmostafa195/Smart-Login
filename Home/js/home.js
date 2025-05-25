
var m = JSON.parse(localStorage.getItem("StorageName"))
document.getElementById("name").innerHTML = m
console.log(m)

var n = document.querySelector(".LogOut")
n.addEventListener("click", function () {
    localStorage.removeItem("StorageName")
    location.href = "/Login/Html/login.html"
})