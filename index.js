function show(id) {
  console.info("show", id);
  var page = document.getElementById(id);
  console.info("page", page);
  page.style.display = "block";
}

function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function showHome() {
  hide("Skills");
  hide("Projects");
  hide("Languages");

  show("Home");
}

function showSkills() {
  hide("Home");
  hide("Project");
  hide("Langauges");

  show("Skills");
}

function showProjects() {
  hide("Home");
  hide("Skills");
  hide("Languages");

  show("Projects");
}

function showLanguages() {
  hide("Home");
  hide("Skills");
  hide("Projects");

  show("Languages");
}
