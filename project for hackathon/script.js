document.getElementById("toggle-stats").addEventListener("click", function() {
    var statsDiv = document.getElementById("stats");
    if (statsDiv.style.display === "none") {
      statsDiv.style.display = "block";
    } else {
      statsDiv.style.display = "none";
    }
  });
  