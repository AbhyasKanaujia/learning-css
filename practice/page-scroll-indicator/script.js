window.onscroll = function () {
  myFunction()
}

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop
  console.log(winScroll)
  console.log(document.body)
}
