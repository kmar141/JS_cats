var catArray = [
  { name: "Potato", favouriteFood: "Dreamies", img: "http://www.swansearagz.co.uk/wp-content/uploads/2015/06/thisguy.png"},
  { name: "Rosie", favouriteFood: "Pellets", img: "http://www.floppycats.com/wp-content/uploads/2012/01/Murphy-adult.jpg"}
  
];

var cat = function(arguments) {
  var unorderedList = document.createElement("ul");
  unorderedList.classList.add("cat");

  var listName = document.createElement("li");
  listName.innerText = "Name: " + arguments.name;

  var listFavouriteFood = document.createElement("li");
  listFavouriteFood.innerText = "Favourite food: " + arguments.favouriteFood;

  var pic = document.createElement("li");
  var img = document.createElement("img");
  img.src = arguments.img;

  pic.appendChild(img);
  unorderedList.appendChild(listName);
  unorderedList.appendChild(listFavouriteFood);
  unorderedList.appendChild(img);



  var catList = document.getElementById("cats");
  catList.appendChild(unorderedList);
  
  };

  var app = function() {
    catArray.forEach(cat);
  };



window.onload = app;