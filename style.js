//initialization

var theme

//DOM Manipulation

var head = $("head")
var body = $("body")
var mainText = $("h1")
var subText = [$("h2"),$("p")]
var navBarLinks = $("li a")
var about = $(".about")
var titleContainer = $(".title")
var footer = $("footer")
var portfolio = $(".portfolio")
var header = $("header")
var logo =$(".greeting-logo")

//themes

  var main = {
    backgroundColor: "#FFFFE8",
    primaryColor: "#E3DFFF", //9FA3CD
    linkColor: "#6DA34D",
    textColor: "#4A5759",
    textColor2:'BE6E46',
    mainText: "#232528",
    subText: "darkgray",
    fontLink: "<link rel='preconnect' href='https://fonts.googleapis.com'><link rel='preconnect' href='https://fonts.gstatic.com' crossorigin><link href='https://fonts.googleapis.com/css2?family=Krona+One&display=swap' rel='stylesheet'>",
    fontFamily: "'Krona One', sans-serif"
    }

// theme assignment
theme = main

//manipulation

$('document').ready(function(){
  body.css("background-color", theme.backgroundColor)
  footer.css("background-color", theme.linkColor)
  about.css({"color": theme.textColor, "font-family": theme.fontFamily})
  titleContainer.css({"color": theme.textColor2, "font-family": theme.fontFamily})

  //appending fonts
  head.append(theme.fontLink)
  head.append(`<style>
    #work-link, #about-link, #blog-link, #store-link{
      color: ${theme.linkColor};
      transition: .2s;
    }

    </style>`)

    // #work-link:hover, #about-link:hover, #blog-link:hover, #store-link:hover{
    //   color: ${theme.linkHoverColor};
    //   transition: .2s;
    // }
});
//
// function makeHeader() {
//
//              header.css({
//                "height": "100px",
//              })
//
//              body.css({
//                "overflow":"auto",
//                "transition": "2s",
//                "padding": "0",
//              })
//
//              logo.css({
//                "height": "80px",
//                "transition": "2s",
//                "transform": "rotateX(0deg) rotateY(0deg) rotateZ(0deg)"
//              })
//
//              setTimeout(function(){
//                $(".overlay").remove()
//              }, 1000)
//     }


// $(".overlay").scroll(makeHeader);
