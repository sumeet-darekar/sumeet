let svgpath = document.querySelector('path')
let pathLength = svgpath.getTotalLength()
let mapOpen = false;

let menuButton = document.getElementsByClassName('menuButton')
let menuText = document.getElementsByClassName('menuText')
let mySvg = document.getElementsByClassName('mySvg')

menuButton[0].addEventListener("click", animate);

function animate() {
if(mapOpen === false){
    console.log("OPENING")
    mapOpen = true
    menuText[0].classList.add('menuTextTransition')
    menuText[1].classList.add('menuTextTransition')
    menuText[2].classList.add('menuTextTransition')
  
    mySvg[0].classList.remove('line-svg-animate-rev')
    mySvg[0].classList.add('line-svg-animate')
  
    setTimeout(function() {
      mySvg[0].classList.remove('line-svg')
    }, 1000);
}else{
  mapOpen = false;
    menuText[0].classList.remove('menuTextTransition')
    menuText[1].classList.remove('menuTextTransition')
    menuText[2].classList.remove('menuTextTransition')



    mySvg[0].classList.remove('line-svg-animate')
    mySvg[0].classList.add('line-svg-animate-rev')
  
    setTimeout(function() {
      mySvg[0].classList.add('line-svg')
    }, 2000);
}
}

// path.style.strokeDasharray = pathLength + ' ' + pathLength;
// path.style.strokeDashoffset = pathLength + ' ' + pathLength;

// window.addEventListener('click', () => {
//     var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
//     var drawLength = pathLength * 100;
//     path.style.strokeDashoffset = pathLength - drawLength;
// })


