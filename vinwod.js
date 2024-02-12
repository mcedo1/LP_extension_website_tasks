document.getElementById("showPopup").addEventListener("click", function() {
    document.getElementById("popupWrapper").style.display = "block";
    
    
    fetch("moda2.html")
      .then(response => response.text())
      .then(html => {
        document.getElementById("popupContent").innerHTML = html;
      })
      .catch(error => console.log(error));
  });
  