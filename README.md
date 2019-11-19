# game-meetup-api

### Description
The Game Meetup API is the backbone to the Board Game Meetup app currently [in production](https://github.com/torykling/game-meetup). The API utilizes data from the [Board Game Atlas API](https://www.boardgameatlas.com/api/docs) in a JSON file with models built with Mongoose, Mongoose queries with RESTful paths, and a Node.js seed file. This is a part of a group project made in the General Assembly Software Engineering Immersive program. 

### Example
This is an example of what can be found in our JSON data for the games model.
```
{
    "_id": "5dd44d8064cd430004976fe0",
    "name": "Spirit Island",
    "image_url": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254941010-61PJxjjnbfL.jpg",
    "year_published": 2016,
    "min_players": 1,
    "max_players": 4,
    "description": "Powerful Spirits have existed on this isolated island for time immemorial. They are both part of the natural world and - at the same time - something beyond nature. Native Islanders, known as the Dahan, have learned how to co-exist with the spirits, but with a healthy dose of fear and reverence. However, now, the island has been &quot;discovered&quot; by invaders from a far-off land. These would-be colonists are taking over the land and upsetting the natural balance, destroying the presence of Spirits as they go. As Spirits, you must grow in power and work together to drive the invaders from your island... before it's too late!",
    "__v": 0
  }
  ```
  Alternatively, if you'd like to create an accompanying event with it, here's a sample JSON of our meetups model! 
  ```
  {
    "players": [
      2,
      8
    ],
    "_id": "5dd44d8164cd430004977060",
    "location": "3605 14th St NW, Washington, DC 20010",
    "time": "8:00PM",
    "date": "11-29-2019",
    "creator": "Shelby",
    "description": "Come by the Airedale DC Bar to come play board games! Beer and food available at venue.",
    "game": "Scrabble",
    "__v": 0
  }
  ```
  ### Routes
  
### Routes
Query | Path | Description | Additional Information |
------------ | ------------- | ------------- | ------------- |
POST | `/meetup` | Creates New Meetup |    |
GET | `/` | Automatically pulls up the meetups |    |
GET | `/games` | Find the selection of games |    |
PUT | `/meetup/id/:id` | Find a meetup by ID and edit it |    |
DELETE | `/meetup/id/:id` | Find a meetup by ID and delete |      |

### Build Status
![](https://img.shields.io/badge/BUILD-IN%20PROGRESS-informational)
Until the front-end reaches completion status, this project is subject to continued updates.

### Technologies Used
* Mongoose
* MongoDB
* Node.js
* Postman

