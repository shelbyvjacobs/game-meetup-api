# Planning

### Project Idea
A board game meet-up app! The idea is that users can search by game and/or date to find relevant meet-ups for games they like! CRUD will be used to update, delete, or create meet-ups involving other users. Authentication will be our extra feature.

API Pulling Data from [here](https://www.boardgameatlas.com/api/docs)

### Workflow

We will be using the feature branches git workflow.

### Backend

Our board game meetup API has two models: Meetup and Game. The Game model is nested within the Meetup model. We will seed data from the API linked above.

```
Meetup: {
location: string,
time: time,
date: date,
creator: string,
description: string,
players: number,
game: [Game]
} 
```

```
Game: {
image: string,
name: string,
directions: string,
type: enum,
link to game page: string
}
```
### Frontend

Our plan is to start with two core pages.
1. Homepage - a list of all of the meetups. Each meetup is in a card with a little information about it, including the date & time, the game being played, and the name of the user who created it. At the top of the page there will be a search bar that allows for users to search by date and the type of game. There is also a form that allows users to create a new meetup.
2. Specific meetup page - When a user clicks on one of the meetups on the homepage, it brings them to a page with more information about that meetup. The information includes the date & time, the location, the user who created the meetup, other players who have joined the meetup, a description of the meetup, and a card containing information about the game. The information included about the game is an image of the game, the name, directions, min & max players, a link to the official website of the game, and a description. Users can join a meetup here, which adds their name to the list of attendees. Meetups can also be edited and deleted on this page.

Below are wireframes of these pages.

![Homepage](https://i.imgur.com/VlsPIfS.jpg "Homepage")

![Specific Meetup Wireframe](https://i.imgur.com/dqN8ncW.jpg "Specific Meetup Wireframe")

### Division of Labor

Our goal is to divide the work among ourselves as fairly as possible. Dallas is working on the API and will seed the data necessary for the backend. Tory is learning React Redux and React Google Maps for utilization in the front end. Shelby is building components using Storybook, to be incorporated into the React app.