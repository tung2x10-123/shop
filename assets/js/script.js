
function openMobie() {
    var headerPopup=document.querySelector('.header__popup');
    headerPopup.classList.add('open__popup');
}
    

function closeMobie(){
    var headerPopup=document.querySelector('.header__popup');
    headerPopup.classList.remove('open__popup');
}

  function accBtnClick($e) {
    var accBtn = document.getElementsByClassName("item__button");
    var accPanel = document.getElementsByClassName("item__panel");
    for (var i = 0; i < accBtn.length; i++) {
      accBtn[i].onclick = function () {
        var setClasses = !this.classList.contains("active");
        setClass(accBtn, "active", "remove");
        setClass(accPanel, "show", "remove");
        this.nextElementSibling.style.maxHeight = null;
        if (setClasses) {
          this.classList.toggle("active");
          this.nextElementSibling.classList.toggle("show");
          this.nextElementSibling.style.maxHeight =
            this.nextElementSibling.scrollHeight + "px";
          this.parentNode.style.boxShadow = "#00000059 0 6px 15px -13px";
        }
      };
    }
  }
  
  function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
      els[i].classList[fnName](className);
      els[i].parentNode.style.boxShadow = "none";
    }
  }

  function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }

  includeHTML();