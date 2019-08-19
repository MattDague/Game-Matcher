# Game Matcher

Welcome to Game Matcher! The purpose of this app is to help those Gamers out there find even more games to play. It is a community based website that allows users to create profiles, list their favorite games and see the recommendations that others have. This is powered by a database of hundreds of games that is ever expanding since the users have the opportunity to add to that database.

# How it works

The core functionality of Game Matcher relies entirely on the users. To ensure that each person that uses the site contributes to our databases you must create or sign in to a user account to use it. The user account system is a conjunction of 3 different technologies. It uses passportJs to make the connections between the sign in/sign up pages and the database, bcrypt to encrypt the user passwords and MySQL to store all user account information including their selected games (but more on that later). When the user inputs sign in information the page references the database to ensure it doesnt exist already, if it does not a user account is created and the user is redirected to the dashboard. A similar course happens with the sign up page but it will only work if the user exists and has an encrypted password in the database. When they are signed in users will be presented with our game database list front and center.

The game list presents two core functionalities. The list itself pulls from our games database in MySQL and generates a massive list with search functionality using handlebars. The user is instructed to select 4 games from that database and then simply hit submit! When they hit this submit button the 4 games they selected have their ids pulled from the table. The app then references the user id by the currently signed in user and adds the game ids to each of the columns in their respective user profile in MySQL. Now if the user cannot find 4 games they like they may simply add one! By clicking the add game button they are presented with a modal that asks for the necessary information to add a game to the database! When the user adds information here it is pulled from the input boxes and passed to our expansive video game database.

Now when a user hit submit they are transported to our recommendations page. The purpose of this page is to display the users game selections and the selections of another random user. The app checks the users game columns based on who is currently signed in and then references those ids in the videogame database. It uses that information to populate the 4 spaces with game information for the user! This same way is used to present the user with matches but it uses a formula to select a random user id. The user sees the final product of this screen which is 4 recommended games and to keep track of what they selected they see their own as well!

# Technologies Used

-MySQL
-JavaScript
-Express
-Node
-PassportJs
-Heroku
-Bcrypt
-Handlebars
-Body-Parser
