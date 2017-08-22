$(document).ready(function(){
  if(Modernizr.localstorage){
    console.log("localstorage is supported by this browser");
  }
else{
  ('.message').text("Unfortunately your browser doesn't support local storage");
  ('.message').show();
}
});
