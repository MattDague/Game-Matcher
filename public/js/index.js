// Searches for games in the table
function searchGames() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function userGames(userGames) {
  $.ajax({
    method: "PUT",
    url: "/api/videogames",
    data: { games: userGames }
  }).then(function() {
    window.location.href = "/recommendations";
  });
}
$("#submitGame").click(function() {
  var arr = [];
  $.each($(".vgcb:checked"), function() {
    if (arr.length < 4) {
      var gameId = this.value;
      arr.push(gameId);
    }
    console.log(arr);
  });
  if (arr.length >= 4) {
    userGames(arr);
  } else if (arr.length < 4) {
    arr = [];
    alert("Please add at least 4 games!");
  }
});

$("#addGameSubmit").on("click", function(event) {
  event.preventDefault();
  var newGame = {
    name: $("#enterGameTitle").val(),
    platform: $("#platform").val(),
    year: $("#enterReleaseDate").val(),
    genre: $("#genre").val(),
    score: 0,
    developer: $("#enterDeveloper").val(),
    rating: 0,
    img: $("#enterImg").val()
  };

  $.ajax({
    method: "POST",
    url: "/api/videogames",
    data: newGame
  });
  location.reload();
});
