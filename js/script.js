var data = JSON.parse(localStorage.getItem("storage"));

var brunchMenu = new Array();
var lunchMenu = new Array();
var dinnerMenu = new Array();
var dessertMenu = new Array();
var wineMenu = new Array();

class Menu {
  constructor(name, description, calories, price) {
    this.name = name;
    this.description = description;
    this.calories = calories;
    this.price = price;
  }
}

function showData() {
  var br = document.getElementById("brunchItem");
  for (let b of data.menu[0].food) {
    // brunchMenu.push(new Menu(b.name, b.description, b.calories, b.price));
    br.innerHTML += `<p> <strong> ${b.name}</strong> ${b.icon}<br> ${b.description} <br> ${b.calories} <br>${b.price}`;
  }

  var lunch = document.getElementById("lunchItem");
  for (let l of data.menu[1].food) {
    //  lunchMenu.push( new Menu(l.name, l.description, l.calories, l.price))
    lunch.innerHTML += `<p> <strong> ${l.name}</strong> ${l.icon} <br> ${l.description} <br> ${l.calories} <br>${l.price}`;
  }

  var dinner = document.getElementById("dinnerItem");
  for (let d of data.menu[2].food) {
    //  dinnerMenu.push(new Menu(d.name, d.description, d.calories,d.price))
    dinner.innerHTML += `<p> <strong> ${d.name}</strong> ${d.icon} <br> ${d.description} <br> ${d.calories} <br>${d.price}`;
  }
  var dessert = document.getElementById("dessertItem");
  for (let des of data.menu[3].food) {
    //  dessertMenu.push( new Menu( des.name, des.description, des.calories, des.price));
    dessert.innerHTML += `<p> <strong> ${des.name}</strong> <br> ${des.description} <br> ${des.calories} <br>${des.price}`;
  }

  var wine = document.getElementById("wineItem");
  for (let w of data.menu[4].food) {
    // wineMenu.push(new Menu(w.name, w.description, w.price));
    wine.innerHTML += `<p> <strong> ${w.name}</strong> <br> ${w.description} <br>${w.price}`;
  }

  runNav();
  // stickyScroll();

  //function for the navBar

  // window.onscroll = function () {
  //   stickyScroll();
  // };
  // stickyScroll();
}

//function for the navbar

function runNav() {
  let mainNav = document.getElementById("js-menu");
  let navBarToggle = document.getElementById("js-navbar-toggle");
  navBarToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
  });
}

// var navbar = document.querySelector(".navBar");
// var sticky = navbar.offsetTop;
window.onscroll = function () {
  stickyScroll();
};
function stickyScroll() {
  // if (window.pageYOffset >= sticky) {
  //   navbar.classList.add("sticky");
  // } else {
  //   navbar.classList.remove("sticky");
  // }

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".navBar").style.height = "6rem";
    document.querySelector(".navBar").style.padding = "30px 10px";
  } else {
    document.querySelector(".navBar").style.padding = "30px 10px";
  }
}
