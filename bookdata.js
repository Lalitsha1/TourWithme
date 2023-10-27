
function totalPrice() {
  let total = 0;
  let cartDatas = JSON.parse(localStorage.getItem("cart"));

  if (cartDatas !== null) {
      for (let i = 0; i < cartDatas.length; i++) {
          total += Number(+cartDatas[i].price);
      }
  }

  let h2 = document.getElementById("cart_total");
  h2.innerText = total;
}

function displayData(data) {
  let container = document.getElementById("cart-container");

  container.innerHTML = ""; 
  data.forEach((element) => {
      let card = document.createElement("div");
      card.setAttribute("class", "card");
      let hotel = document.createElement("img");
      hotel.setAttribute("src", element.image);

      let place = document.createElement("h2");
      place.innerText = element.place;

      let price = document.createElement("h4");
      price.innerText = element.price;

      let description = document.createElement("p"); 
      description.innerText = element.discription; 

      let button = document.createElement("button");
      button.setAttribute("id", "jsondiv");
      button.innerText = "Cancel";

      button.onclick = () => {
          remove(element.id);
      }

      card.append(hotel, place, price, description, button);
      container.append(card);
  });
}


function remove(id) {
  console.log(id);
  let cartData = JSON.parse(localStorage.getItem("cart"));
  let flag = false;
  cartData = cartData.filter((element) => {
      if (!flag) {
          flag = !(element.id !== id)
          return element.id !== id;
      } else {
          return true;
      }
  });
  localStorage.setItem("cart", JSON.stringify(cartData));
  displayData(cartData); 
  totalPrice();
}

let cartData = JSON.parse(localStorage.getItem("cart"));
if (cartData === null) {
  cartData = [];
}

displayData(cartData);
totalPrice();
