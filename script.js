

// var stop=false
//
// var titleList = $("#titleList")
//
// var titles = [
//   "a graphic designer",
//   "an illustrator",
//   "a photo editor",
//   "a project manager",
//   "a web developer",
//   "a video editor",
//   "a multimedia designer"
// ]
//
// var i=0
//
// setInterval(function () {
//   titleContainer.html(titles[i])
//   if (stop == false){
//     i++
//   }
//   if (i == 7){
//     i=0
//   }
//
// }, 300);
//
// titleContainer.on("mouseover", function (){
//   stop=true
//   i=6
//   titleList.css("display", "block")
// })


var pics = [
      //1
    {
      src:"photos/grammynoms.png",
      alt:"Photo of a Record with a GRAMMY logo and glitter. Queer and POC artists nominated at the 2022 Grammy Awards.",
      reference:"https://www.instagram.com/p/CWrjMlLMfJm/?utm_source=ig_web_copy_link"
    },
      //2
    {
      src:"photos/nmf.png",
      alt:"",
      reference:""
    },
      //3
    {
      src:"photos/hispanicheritagemonth.jpg",
      alt:"Gliching scanned text that says Celebrating Hispanic Heritage Month from September to October 15th. Small text on right side is rotated 90 degrees and reads the same over and over.",
      reference:"https://www.instagram.com/p/CT3Luw5J3LH/?utm_source=ig_web_copy_link"
    },
      //4
    {
      src:"photos/passthemic_brianachengpost.png",
      alt:"#PasstheMic features Briana Cheng. Briana wears a bright red vinyl top and looks towards the left, text following the shape of her profile reading 'A&R at 4AD and Founder of B4'",
      reference:"https://www.instagram.com/p/CTXtxHOvVEz/?utm_source=ig_web_copy_link"
    },
      //5
    {
      src:"photos/epitaph.png",
      alt:"Bookshelf filled with CDs, vinyls, and amplifiers. Epitaph Records is Hiring",
      reference:"https://www.instagram.com/p/CWe3XwWsYmS/?utm_source=ig_web_copy_link"
    },
      //6
    {
      src:"photos/snazzydog.jpg",
      alt:"",
      reference:""
    },
      //7
    {
      src:"photos/givingtuesday.png",
      alt:"Stamped text 'Giving Tuesday' with same stamp creating an outline of a circle. Color of Music Collective logo above text along with a pair of airpods.",
      reference:"https://www.instagram.com/p/CW66BL-M3JX/?utm_source=ig_web_copy_link"
    },
      //8
    {
      src:"photos/COMCthankyou.png",
      alt:"",
      reference:""
    },

    //  9
    {
      src:"photos/gwc.jpg",
      alt:"",
      reference:""
    },
      //10
    {
      src:"photos/taylor.jpg",
      alt:"",
      reference:""
    },
      //11

    {
      src:"photos/kwkplayer.jpg",
      alt:"",
      reference:""
    },
      //12
    {
      src:"photos/brainbreak.jpg",
      alt:"",
      reference:""
    },
    //   //14
    // {
    //   src:"photos/epitaph.png",
    //   alt:"day 8!",
    //   reference:"https://www.kodewithklossy.com"
    // },
    //   //15
    // {
    //   src:"photos/hispanicheritagemonth.jpg",
    //   alt:"day 8!",
    //   reference:"https://www.kodewithklossy.com"
    // },
    //   //16
    // {
    //   src:"photos/passthemic_brianachengpost.png",
    //   alt:"day 8!",
    //   reference:"https://www.kodewithklossy.com"
    // },


]

var i = 0

console.log(pics.length)

pics.forEach(function displayPics(picture){
  i++
  portfolio.append(`<img src="${picture.src}" alt="${picture.alt}" class="portfolio-photos" id="photo${i}">`)
})
