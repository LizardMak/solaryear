import { UserInputs } from "./inputdata";

window.addEventListener("load", function() {
  this.window.document.getElementById("form").addEventListener("submit", handleSubmit)
})

function handleSubmit() {
  event.preventDefault();
  if (document.getElementById("inputCurrentAge").value == "") {
    document.getElementById("resultsCurrent").setAttribute("class", "hidden")
    document.getElementById("errorMessage1").setAttribute("class", "red");
    document.getElementById("errorMessage2").setAttribute("class", "hidden");
  } else if (document.getElementById("inputCurrentAge").value < 0 || document.getElementById("inputTargetAge").value < 0) {
    document.getElementById("resultsCurrent").setAttribute("class", "hidden")
    document.getElementById("errorMessage1").setAttribute("class", "hidden");
    document.getElementById("errorMessage2").setAttribute("class", "red");
  } else if (document.getElementById("inputTargetAge").value == "") {
    document.getElementById("errorMessage1").setAttribute("class", "hidden");
    document.getElementById("errorMessage2").setAttribute("class", "hidden");
    const userCurrentAge = document.getElementById("inputCurrentAge").value;
    const userData = new UserInputs(userCurrentAge, null);
    const currentJupiter = userData.jupiterMathCurrent();
    const currentMars = userData.marsMathCurrent();
    const currentMercury = userData.mercuryMathCurrent();
    const currentVenus = userData.venusMathCurrent();
    document.getElementById("jupiterOutput").innerHTML = currentJupiter;
    document.getElementById("marsOutput").innerHTML = currentMars;
    document.getElementById("mercuryOutput").innerHTML = currentMercury;
    document.getElementById("venusOutput").innerHTML = currentVenus;
    document.getElementById("resultsCurrent").removeAttribute("class")
  }
}