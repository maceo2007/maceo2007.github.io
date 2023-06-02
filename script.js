function def() {
  var min = 1;
  var max = 67996;
  var rand = Math.floor(Math.random() * (max - min + 1)) + min;
  var url = "https://www.larousse.fr/dictionnaires/francais/mot/" + rand;

  fetch(url)
    .then(response => response.text())
    .then(data => {
      var parser = new DOMParser();
      var htmlDoc = parser.parseFromString(data, "text/html");
      var mot = htmlDoc.querySelector(".Zone-Entree1.header-article").textContent;
      var definition = htmlDoc.querySelector(".Definitions").textContent;
      document.getElementById("result").innerHTML = mot.substring(5) + "<br/><br/>" + definition;
    })
    .catch(error => {
      console.error(error);
    });
}