console.log('Objects');

var iphone = [
  {
    name: "iPhone 11",
    photo: "images/iphone11.jpg",
    display: 6.1,
    colours: ["Purple", " Yellow", " Green", " Black", " White", " Red"],
    roseGold: false,
    silver: false,
    black: false,
    headphoneJack: false,
    outdated: false
  },
  {
    name: "iPhone XS",
    photo: "images/iphoneXS.jpg",
    display: 5.8,
    colours: ["Silver", " Black", " Rose Gold"],
    roseGold: true,
    silver: true,
    black: true,
    headphoneJack: false,
    outdated: false
  },
  {
    name: "iPhone X",
    photo: "images/iphoneX.jpg",
    display: 5.8,
    colours: ["Silver", " Black"],
    roseGold: false,
    silver: true,
    black: true,
    headphoneJack: false,
    outdated: false
  },
  {
    name: "iPhone 8",
    photo: "images/iphone8.jpg",
    display: 4.7,
    colours: ["Silver", " Black", " Rose Gold"],
    roseGold: true,
    silver: true,
    black: true,
    headphoneJack: false,
    outdated: false
  },
  {
    name: "iPhone 7",
    photo: "images/iphone7.jpg",
    display: 4.7,
    colours: ["Silver", " Black", " Gold", " Rose Gold"],
    roseGold: true,
    silver: true,
    black: true,
    headphoneJack: false,
    outdated: false
  },
  {
    name: "iPhone 6",
    photo: "images/iphone6.jpg",
    display: 4.7,
    colours: ["Space Grey", " Silver", " Gold"],
    roseGold: false,
    silver: true,
    black: false,
    headphoneJack: true,
    outdated: false
  },
  {
    name: "iPhone SE",
    photo: "images/iphoneSE.jpg",
    display: 4,
    colours: ["Space Grey", " Silver", " Gold", " Rose Gold"],
    roseGold: true,
    silver: true,
    black: false,
    headphoneJack: true,
    outdated: true
  },
  {
    name: "iPhone 5s",
    photo: "images/iphone5s.jpg",
    display: 4,
    colours: ["Space Grey", " Silver", " Gold"],
    roseGold: false,
    silver: true,
    black: false,
    headphoneJack: true,
    outdated: true
  },
  {
    name: "iPhone 5c",
    photo: "images/iphone5s.jpg",
    display: 4,
    colours: ["Blue", " Green", " Yellow", " Pink", " White"],
    roseGold: false,
    silver: false,
    black: false,
    headphoneJack: true,
    outdated: true
  },
  {
    name: "iPhone 5",
    photo: "images/iphone5s.jpg",
    display: 4,
    colours: ["Space Grey", " Silver"],
    roseGold: false,
    silver: true,
    black: false,
    headphoneJack: true,
    outdated: true
  },
  {
    name: "iPhone 4s",
    photo: "images/iphone4s.jpg",
    display: 3.5,
    colours: ["Black", " White"],
    roseGold: false,
    silver: false,
    black: true,
    headphoneJack: true,
    outdated: true
  },
  {
    name: "iPhone 4",
    photo: "images/iphone4.jpg",
    display: 3.5,
    colours: ["Black"],
    roseGold: false,
    silver: false,
    black: true,
    headphoneJack: true,
    outdated: true
  },
  {
    name: "iPhone 3Gs",
    photo: "images/iphone3Gs.jpg",
    display: 3.5,
    colours: ["Black", " Silver"],
    roseGold: false,
    silver: true,
    black: true,
    headphoneJack: true,
    outdated: true
  },
  {
    name: "iPhone 3G",
    photo: "images/iphone3G.jpg",
    display: 3.5,
    colours: ["Black", " Silver"],
    roseGold: false,
    silver: true,
    black: true,
    headphoneJack: true,
    outdated: true
  },
  {
    name: "iPhone 3G",
    photo: "images/iphone3G.jpg",
    display: 3.5,
    colours: ["Silver"],
    roseGold: false,
    silver: true,
    black: false,
    headphoneJack: true,
    outdated: true
  }
];


// all iphones

function allPhones(){
  document.getElementById('iphone').innerHTML = " ";
for(var i = 0; i < iphone.length; i++) {
  document.getElementById('iphone').innerHTML
  +='<div class=" text-center">'
  +  '<img class="card-img-top mx-auto" style="max-width:30rem" src="' + iphone[i].photo + ' " alt="iPhone/>"'
  +  '<div class="card-body">'
  +     '<h1 class="card-title">' + iphone[i].name  + '</h1>'
  +     'Display: <h5>' + iphone[i].display + '"' + '</h5>'
  +     'Colours: <h5>' + iphone[i].colours + '</h5>'
  +     'Headphone Jack: <h5>' + iphone[i].headphoneJack + '</h5>'
  +     'Outdated: <h5>' + iphone[i].outdated + '</h5>'
  +   '</div>'
  + '</div>'
  + '</br></br>';
}
}

// headphoneJack

document.getElementById('headphoneJack').addEventListener('click', function(){
  console.log(iphone);
  document.getElementById('iphone').innerHTML = " ";
  for(var i = 0; i < iphone.length; i++) {
    if (iphone[i].headphoneJack === true){
      document.getElementById('iphone').innerHTML
      +='<div class="text-center">'
      +  '<img class="card-img-top mx-auto" style="max-width:30rem" src="' + iphone[i].photo + ' " alt="iPhone/>"'
      +  '<div class="card-body">'
      +     '<h1 class="card-title">' + iphone[i].name + '</h1>'
      +     'Display: <h5>' + iphone[i].display + '"' + '</h5>'
      +     'Colours: <h5>' + iphone[i].colours + '</h5>'
      +     'Headphone jack: <h5>' + iphone[i].headphoneJack + '</h5>'
      +     'Outdated: <h5>' + iphone[i].outdated + '</h5>'
      +   '</div>'
      + '</div>'
      + '</br></br>';
    }
  }
});

//outdated

document.getElementById('outdated').addEventListener('click', function(){
console.log(iphone);
document.getElementById('iphone').innerHTML = " ";
for(var i = 0; i < iphone.length; i++) {
  if (iphone[i].outdated === true){
    document.getElementById('iphone').innerHTML
    +='<div class="text-center">'
    +  '<img class="card-img-top mx-auto" style="max-width:30rem" src="' + iphone[i].photo + ' " alt="iPhone/>"'
    +  '<div class="card-body">'
    +     '<h1 class="card-title">' + iphone[i].name + '</h1>'
    +     'Display: <h5>' + iphone[i].display + '"' + '</h5>'
    +     'Colours: <h5>' + iphone[i].colours + '</h5>'
    +     'Headphone jack: <h5>' + iphone[i].headphoneJack + '</h5>'
    +     'Outdated: <h5>' + iphone[i].outdated + '</h5>'
    +   '</div>'
    + '</div>'
    + '</br></br>' ;
    }
  }
});

//rosegold

document.getElementById('roseGold').addEventListener('click', function(){
console.log(iphone);
document.getElementById('iphone').innerHTML = " ";
for(var i = 0; i < iphone.length; i++) {
  if (iphone[i].roseGold === true){
    document.getElementById('iphone').innerHTML
    +='<div class="text-center">'
    +  '<img class="card-img-top mx-auto" style="max-width:30rem" src="' + iphone[i].photo + ' " alt="iPhone/>"'
    +  '<div class="card-body">'
    +     '<h1 class="card-title">' + iphone[i].name + '</h1>'
    +     'Display: <h5>' + iphone[i].display + '"' + '</h5>'
    +     'Colours: <h5>' + iphone[i].colours + '</h5>'
    +     'Headphone jack: <h5>' + iphone[i].headphoneJack + '</h5>'
    +     'Outdated: <h5>' + iphone[i].outdated + '</h5>'
    +   '</div>'
    + '</div>'
    + '</br></br>' ;
    }
  }
});

//silver

document.getElementById('silver').addEventListener('click', function(){
console.log(iphone);
document.getElementById('iphone').innerHTML = " ";
for(var i = 0; i < iphone.length; i++) {
  if (iphone[i].silver === true){
    document.getElementById('iphone').innerHTML
    +='<div class="text-center">'
    +  '<img class="card-img-top mx-auto" style="max-width:30rem" src="' + iphone[i].photo + ' " alt="iPhone/>"'
    +  '<div class="card-body">'
    +     '<h1 class="card-title">' + iphone[i].name + '</h1>'
    +     'Display: <h5>' + iphone[i].display + '"' + '</h5>'
    +     'Colours: <h5>' + iphone[i].colours + '</h5>'
    +     'Headphone jack: <h5>' + iphone[i].headphoneJack + '</h5>'
    +     'Outdated: <h5>' + iphone[i].outdated + '</h5>'
    +   '</div>'
    + '</div>'
    + '</br></br>' ;
    }
  }
});

//black

document.getElementById('black').addEventListener('click', function(){
console.log(iphone);
document.getElementById('iphone').innerHTML = " ";
for(var i = 0; i < iphone.length; i++) {
  if (iphone[i].black === true){
    document.getElementById('iphone').innerHTML
    +='<div class="text-center">'
    +  '<img class="card-img-top mx-auto" style="max-width:30rem" src="' + iphone[i].photo + ' " alt="iPhone/>"'
    +  '<div class="card-body">'
    +     '<h1 class="card-title">' + iphone[i].name + '</h1>'
    +     'Display: <h5>' + iphone[i].display + '"' + '</h5>'
    +     'Colours: <h5>' + iphone[i].colours + '</h5>'
    +     'Headphone jack: <h5>' + iphone[i].headphoneJack + '</h5>'
    +     'Outdated: <h5>' + iphone[i].outdated + '</h5>'
    +   '</div>'
    + '</div>'
    + '</br></br>' ;
    }
  }
});

// user input

document.getElementById('changeName').addEventListener('click', function(){
  var oldName = document.getElementById('oldName').value;
  var newName = document.getElementById('newName').value;
  console.log(oldName, newName);
  for(var i = 0; i < iphone.length; i++) {
    if (oldName === iphone[i].name){
      iphone[i].name = newName;
    }
  }
  console.log(iphone);
  allPhones();
});

document.getElementById('all').addEventListener('click', function(){
  allPhones();
});
