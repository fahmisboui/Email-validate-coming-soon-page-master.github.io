function showError(input) {
  event.preventDefault();

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.value.match(validRegex)){
    document.getElementById("btn").style.marginTop = "0rem";
      document.getElementById("error").innerHTML="";
    return true;
  }
  else {
      let query = window.matchMedia("(max-width:514px)");
      if(query.matches){
        document.getElementById("btn").style.marginTop = "1rem";
      }else{
        document.getElementById("btn").style.marginTop = "0";
      }
      document.getElementById("error").innerHTML="Please provide a valid email address";
      return false;
    }
 }