let form = document.getElementById("form");

form.addEventListener("submit", (ev) => {
    ev.preventDefault();

  
    let loginemail = form.elements.email.value;
    let loginpassword = form.elements.password.value;

  
    let singupData = JSON.parse(localStorage.getItem("singup")) || [];

    let user = singupData.find((userData) => {
        return userData.email === loginemail && userData.password === loginpassword;
    });

    if (user) {
        alert("Login successful");
        form.reset();
        window.location.href = "book_page.html";
    } else {
        alert("Login failed. Please try again.");
    }
});