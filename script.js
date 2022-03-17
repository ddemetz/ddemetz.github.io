

var graphicsPhotoCollage = $('.graphics-photo-collage')
var gifPhotoCollage = $('.gif-photo-collage')
var brandPhotoCollage = $('.brand-photo-collage')
var graphicsPhotoGallery=[]
var gifPhotoGallery=[]
var brandPhotoGallery=[]
var i = 0


function fillGalleryArray(array, galleryType, galleryCount){
  var fileCount = 1
  while(fileCount<=galleryCount) {
    if(galleryType=="gif"){
      array.push({src:`photos/${galleryType}feed/story${fileCount}.png`, gif: `photos/${galleryType}feed/gif${fileCount}.gif`})
    }
    else{
      array.push({src:`photos/${galleryType}feed/${fileCount}.png`})
    }
    fileCount++
  }
}

fillGalleryArray(graphicsPhotoGallery, "graphics", 20)
fillGalleryArray(gifPhotoGallery, "gif", 10)
fillGalleryArray(brandPhotoGallery, "brand", 10)


function isEven(array){
  if (array.length%5 != 0){
    array.pop()  }
}

function makeGallery(array, collageName, galleryType){
array.forEach(function displayPics(picture){
  isEven(array)
  i++
  if (galleryType=="gif"){
  collageName.append(`<div class="story-background"><img src="${picture.src}" id="gif-photo${i}"><img src="${picture.gif}" id="gif${i}" class="gif-overlay"></div>`)
  }
  else{
  collageName.append(`<img src="${picture.src}" id="${galleryType}-photo${i}">`)
  }
})}

makeGallery(graphicsPhotoGallery, graphicsPhotoCollage, "graphics")
makeGallery(gifPhotoGallery, gifPhotoCollage, "gif")
makeGallery(brandPhotoGallery, brandPhotoCollage, "brand")


// var messagesRef = firebase.database().ref('messages')
//
// var config = {
//   apiKey: "AIzaSyBhwQgQb6IoEyFlSl8XcZBSsSq1r1xOLPE",
//   authDomain: "portfolio-38893.firebaseapp.com",
//   databaseURL: "https://portfolio-38893-default-rtdb.firebaseio.com",
//   projectId: "portfolio-38893",
//   storageBucket: "portfolio-38893.appspot.com",
//   messagingSenderId: "344739750517",
//   appId: "1:344739750517:web:1d8bd51f52ae61f49a4e3c",
//   measurementId: "G-Q63H1FQT3D"
// };
// firebase.initializeApp(config);
//
// // Reference messages collection
// var messagesRef = firebase.database().ref('messages');
//
// // Listen for form submit
// document.getElementById('contactForm').addEventListener('submit', submitForm);
//
// // Submit form
// function submitForm(e){
//   e.preventDefault();
//
//   // Get values
//   var name = getInputVal('name');
//   var org = getInputVal('org');
//   var email = getInputVal('email');
//   var subject = getInputVal('subject');
//   var message = getInputVal('message');
//
//   // Save message
//   saveMessage(name, company, email, phone, message);
//
//   document.getElementById('contactForm').reset();
// }
//
// // Function to get get form values
// function getInputVal(id){
//   return document.getElementById(id).value;
// }
//
// // Save message to firebase
// function saveMessage(name, company, email, phone, message){
//   var newMessageRef = messagesRef.push();
//   newMessageRef.set({
//     name: name,
//     company:company,
//     email:email,
//     phone:phone,
//     message:message
//   });
// }
//
//


var fonts=[
  {
    name:"Adalind",
    price:"",
    fam:"adalind",
    placeholder:"Our coming of age has come and gone"
  },
  {
    name:"Amelie Camille",
    price:"",
    fam:"amelie",
    placeholder:"I knew you’d linger like a tattoo kiss"
  },
  {
    name:"Cameron John Regular",
    price:"",
    fam:"cam1",
    placeholder:"Cancel plans just in case you’d call"
  },
  {
    name:"Cameron John Black",
    price:"",
    fam:"cam2",
    placeholder:"I don’t know anything, but I know I miss you"
  },
  {
    name:"Dominique",
    price:"",
    fam:"dominique",
    placeholder:"And women like hunting witches too"
  },
  {
    name:"Elisabeth Clara",
    price:"",
    fam:"elisabeth",
    placeholder:"Your faithless love’s the only hoax I believe in"
  },
  {
    name:"Noah and Nicole",
    price:"",
    fam:"noah",
    placeholder:"Gave me the blues and then purple-pink skies"
  },
  {
    name:"Pumpkin Cheesecake",
    price:"",
    fam:"pumpkin",
    placeholder:"It would’ve been fun if you would’ve been the one"
  },
  {
    name:"Sofia Amoti Starlight",
    price:"",
    fam:"sofia",
    placeholder:"I had a marvelous time ruining everything"
  }
]

fonts.forEach(function appendFont(font){
  $(".font-testing-area").append(`<div class="font"><h3 class="font-title" style="font-family:${font.fam}">${font.name}</h3><input type="text" style="font-family:${font.fam}" placeholder="${font.placeholder}"></div>`)
})
