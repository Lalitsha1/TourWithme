var myIndex = 0;
carousel();

let singin = document.getElementById("sing");


singin.addEventListener('click' , ()=>{
    window.location.href = "bookdata.html";
})


function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 2 seconds
}


$(document).ready(function () {
    var slideIndex = 0;
    var slides = $(".slider img");
    var slideCount = slides.length;

    function nextSlide() {
        slides.eq(slideIndex).fadeOut(3000);
        slideIndex = (slideIndex + 1) % slideCount;
        slides.eq(slideIndex).fadeIn(4000);
    }

    function startSlider() {
        setInterval(nextSlide, 2000);
    }

    startSlider();
});




let maindiv = document.getElementById("maindiv");

function fetchdata() {
    let promis = fetch('http://127.0.0.1:5500/hotel.json')
        .then((responseObject) => {
            return responseObject.json();
        })
        .then((data) => {
            let myNeedData = data.data;
            console.log("fetch data after fetch");
            console.log(myNeedData);
            displayData(myNeedData);
        });
        




    function displayData(data) {
        maindiv.innerHTML = '';
        data.forEach((element) => {
            let card = document.createElement("div");
            card.setAttribute("class", "card");
            let hotel = document.createElement("img");
            hotel.setAttribute("src", element.image);

            let place = document.createElement("h2");
            place.innerText = element.place;

            let price = document.createElement("h4");
            price.innerText = element.price;

            let discription = document.createElement("p");
            discription.innerText = element.discription;

            let button = document.createElement("button");
            button.setAttribute("id" , "jsondiv")
            button.innerText = "Book_Me";


            button.addEventListener("click",() =>{
                let cartData = JSON.parse(localStorage.getItem("cart"));
    
                if(cartData === null) cartData = [];
    
                let isAdleadyInCart = false;
                for(let i=0;i<cartData.length;i++){
                  if(cartData[i].id === element.id){
                    isAdleadyInCart = true;
                    isAdleadyInCart++;
                    break;
                  };
                }
    
                if(isAdleadyInCart === true){
                  alert("Welcome to my hotel ");
                }else{
                cartData.push({...element,quantity:1});
                localStorage.setItem("cart",JSON.stringify(cartData));
                alert("Sorry you alredy ragister");
                }
              })
    


            card.append(hotel, place, price, discription , button);
            maindiv.append(card);
        });
    }
}

fetchdata()