window.onload = function() {
  var image = document.getElementsByTagName("img")[0];
  var box = document.getElementsByClassName("scroll-box")[0];

  var l1 = document.getElementById("1");
  var l2 = document.getElementById("2");
  var l3 = document.getElementById("3");
  var l4 = document.getElementById("4");
  var l5 = document.getElementById("5");
  var l6 = document.getElementById("6");
  var l7 = document.getElementById("7");
  var l8 = document.getElementById("8");
  var l9 = document.getElementById("9");

  console.log('fired')
  image.classList.add('move');
  window.setTimeout(function(){
    box.classList.add('fade-in');
  },11000)

  // document.scrollIntoView({behavior: 'smooth', block: 'center'})

  window.setTimeout(function(){
    l2.scrollIntoView({behavior: 'smooth', block: 'center'})
  }, 28000);
  window.setTimeout(function(){
    l3.scrollIntoView({behavior: 'smooth', block: 'center'})
  }, 44000);
  window.setTimeout(function(){
    l4.scrollIntoView({behavior: 'smooth', block: 'center'})
  }, 61500);
  window.setTimeout(function(){
    l5.scrollIntoView({behavior: 'smooth', block: 'center'})
  }, 78000);
  window.setTimeout(function(){
    l6.scrollIntoView({behavior: 'smooth', block: 'center'})
  }, 93500);
  window.setTimeout(function(){
    l7.scrollIntoView({behavior: 'smooth', block: 'center'})
  }, 134000);
  window.setTimeout(function(){
    l8.scrollIntoView({behavior: 'smooth', block: 'center'})
  }, 150000);
  window.setTimeout(function(){
    l9.scrollIntoView({behavior: 'smooth', block: 'center'})
  }, 166000);
};
