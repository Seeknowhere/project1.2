
/*****     slider   *******/
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


/*     fade in    */
window.addEventListener('scroll',() => {
  let content = document.querySelectorAll('.fade-in');
  let contentPosition;
  content.forEach( fadeInContent=> {
    contentPosition = fadeInContent.getBoundingClientRect().top;
  })
  let screenPosition = window.innerHeight/3;
  
  if(contentPosition < screenPosition){
    fadeInContent.classList.add('active');
  }else{
    fadeInContent.classList.remove('active');
  }
})

/* slide in left*/




