let form = document.getElementById("form");
let cont = document.getElementById("cointainer");
let button1 = document.getElementById("button1");


button1.addEventListener("click" , ()=>{
    window.location.href = "login.html"
})




form.addEventListener("submit", formData)

let dataBag = JSON.parse(localStorage.getItem("singup")) || [];

function formData(ev) {
    ev.preventDefault();
    let fome = {
        id: Date.now(),
        name: form.name.value,
        lastname: form.lastname.value,
        email: form.email.value,
        password: form.password.value,
        confurmpass: form.c_password.value,
    }
    // check my confurm or not ===========
    let password = form.elements.password.value;
    let confirmPassword = form.elements.c_password.value;

    if (password === confirmPassword) {
        alert('Signup succeeded!');
        form.reset();
        window.location.href = "login.html";
    } else {
        alert('Passwords do not match. Please try again.');
    }
    dataBag.push(fome);


    localStorage.setItem("singup", JSON.stringify(dataBag));

}
