// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};
// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);
      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);
      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");
      $li.append($button);
      return $li;
    });
    $exampleList.empty();
    $exampleList.append($examples);
  });
};
// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();
  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };
  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }
  API.saveExample(example).then(function() {
    refreshExamples();
  });
  $exampleText.val("");
  $exampleDescription.val("");
};
// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");
  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};
// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
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
  });
}
$("#submitGame").click(function() {
  var arr = [];
  $.each($(".vgcb:checked"), function() {
    if (arr.length < 5) {
      var gameId = this.value;
      arr.push(gameId);
    }
    console.log(arr);
  });
  userGames(arr);
  window.location.href = "/recommendations";
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
    rating: 0
  };
  $.ajax({
    method: "POST",
    url: "/api/videogames",
    data: newGame
  });
  $("#addGameModal").modal("hide");
});
// $("#gameDBAdd").click(function() {
//   userGames(arr);
// });
