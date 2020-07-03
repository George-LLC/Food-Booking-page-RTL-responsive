
var myform = document.getElementById("myForm");

function openPopup() {
  myform.style.display = "block";
  document.body.style.overflow="hidden";
  remove_clas();
}

function closeForm() {
  myform.style.display = "none";
  document.body.style.overflow="unset";
}

 function remove_clas() {
        var show = document.getElementById("navbarCollapse");
        var menuX = document.getElementById("bbb");
        menuX.classList.remove("menuX");
        show.classList.remove("show");
        
      }

