window.onscroll = function () {
  myFunction()
}

function myFunction() {
  // get how far the user has scrolled
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop
  // get the full height of the page
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight
  // calculates what percentage the user has scrolled
  var scrolled = (winScroll / height) * 100
  // Set the width of the progress-bar to that %
  document.getElementById('myBar').style.width = `${scrolled}%`
}
