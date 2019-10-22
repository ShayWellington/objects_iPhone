console.log('Objects');

/*
----------- Alogirthm -----------
1) Details of phones are stored
2) User Input (textbox)
3) 3 Buttons (For all, headphoneJack, Outdated, Colour)

*/

var phone = [
  {
    name: "iPhone 11",
    photo: "images/iphone11.jpg",
    display: 6.1,
    colours: ["Purple", "Yellow", "Green", "Black", "White", "Red"],
    headphoneJack: false,
    outdated: false
  },
  {
    name: "iPhone XS",
    photo: "images/iphoneXS.jpg",
    display: 5.8,
    colours: ["Silver", "Black", "Rose Gold"],
    headphoneJack: false,
    outdated: false
  },
  {
    name: "iPhone X",
    photo: "images/iphoneX.jpg",
    display: 5.8,
    colours: ["Silver", "Black"],
    headphoneJack: false,
    outdated: false
  },
  {
    name: "iPhone 8",
    photo: "images/iphone8.jpg",
    display: 4.7,
    colours: ["Silver", "Black", "Rose Gold"],
    headphoneJack: false,
    outdated: false
  },
  {
    name: "iPhone 7",
    photo: "images/iphone7.jpg",
    display: 4.7,
    colours: ["Silver", "Black", "Gold", "Rose Gold"],
    headphoneJack: false,
    outdated: false
  },
  {
    name: "iPhone 6",
    photo: "images/iphone6.jpg",
    display: 4.7,
    colours: ["Space Grey", "Silver", "Gold"],
    headphoneJack: true,
    outdated: false
  },
  {
    name: "iPhone SE",
    photo: "images/iphoneSE.jpg",
    display: 4,
    colours: ["Space Grey", "Silver", "Gold", "Rose Gold"],
    headphoneJack: true,
    outdated: true
  },
  {
    name: "iPhone 5s",
    photo: "images/iphone5s.jpg",
    display: 4,
    colours: ["Space Grey", "Silver", "Gold"],
    headphoneJack: true,
    outdated: true
  },
  {
    name: "iPhone 5c",
    photo: "images/iphone5s.jpg",
    display: 4,
    colours: ["Blue", "Green", "Yellow", "Pink", "White"],
    headphoneJack: true,
    outdated: true
  },
  {
    name: "iPhone 5",
    photo: "images/iphone5s.jpg",
    display: 4,
    colours: ["Space Grey", "Silver"],
    headphoneJack: true,
    outdated: true
  },
  {
    name: "iPhone 4s",
    photo: "images/iphone4s.jpg",
    display: 3.5,
    colours: ["Black", "White"],
    headphoneJack: true,
    outdated: true
  },
  {
    name: "iPhone 4",
    photo: "images/iphone4.jpg",
    display: 3.5,
    colours: ["Black"],
    headphoneJack: true,
    outdated: true
  },
  {
    name: "iPhone 3Gs",
    photo: "images/iphone3Gs.jpg",
    display: 3.5,
    colours: ["Black", "Silver"],
    headphoneJack: true,
    outdated: true
  },
  {
    name: "iPhone 3G",
    photo: "images/iphone3G.jpg",
    display: 3.5,
    colours: ["Black", "Silver"],
    headphoneJack: true,
    outdated: true
  },
  {
    name: "iPhone 3G",
    photo: "images/iphone3G.jpg",
    display: 3.5,
    colours: ["Silver"],
    headphoneJack: true,
    outdated: true
  }
];

function allPhones(){
  document.getElementById('iphone').innerHTML = " ";
for(var i = 0; i < iphone.length; i++) {
  document.getElementById('iphone').innerHTML
  +=  '<div class="card" style="width: 18rem;">'
  +   ihpone[i].photo + 'class="card-img-top"'
  +  '<div class="card-body">'
  +     '<h1 class="card-title">' + iphone[i].name + '</h1>'
  +     '<h5>' + iphone[i].display + '</h5>'
  +     '<a href="#" class="btn btn-primary">Go somewhere</a>'
  +   '</div>'
  + '</div>'
;
}
}
