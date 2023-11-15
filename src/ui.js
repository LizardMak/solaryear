window.addEventListener("load", function() {
  this.window.document.getElementById("form").addEventListener("submit", handleSubmit)
})

function handleSubmit() {
  event.preventDefault();
  if (document.getElementById("inputCurrentAge").value == "") {
    document.getElementById("errorMessage1").setAttribute("class", "red");
    document.getElementById("errorMessage2").setAttribute("class", "hidden");
  }
}