window.addEventListener("focus", function(event) { 
  log("window " + window.name + " focused"); 
}, false);

window.addEventListener("blur", function(event) { 
  log("window " + window.name + " blurred"); 
}, false);

function log(x) {
  console.log(x);
  document.getElementById("log").innerText += x + "\n";
}
