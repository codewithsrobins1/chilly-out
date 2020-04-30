# ChillyOut

ChillyOut is a web application where users can check the weather for the day with a search. Web application was built with React and uses OpenWeather api to pull data.

## Demo

![demo](https://github.com/codewithsrobins1/chilly-out/blob/master/chillyout-gif.gif)

## Link to Live Site

https://chilly-out.netlify.app/

## Objectives

* Build a web application with React that uses an API
* Practice React Hooks
* Practice React Router to transition between web pages
* Build an error 404 page to route users if they don't go to the landing page or weather app route

## Built With

* React

## Dependencies

1.	React Router (https://reacttraining.com/react-router/) – Page Transitions for routing to keep UI in sync with URL
2.  MomentJS (https://momentjs.com/) - Display dates and times


## Getting Started

To get a local copy up and running follow these steps using your terminal.

### Installation

1. Clone the repo
```sh
git clone https://github.com/codewithsrobins1/chilly-out.git
```
2. Install NPM packages
```sh
npm install i

```

## React Components
* App.js – Renders the application. Contains the various routes
*	Landing.js - Serves as the landing page for the application
*	Navbar.js - The navigation bar for all pages
* ErrorPage.js - Error 404 routing component 
* WeatherApp.js - Main application component
* WeatherIcon.js - Icon display shown in WeatherApp.js


## Component Tree

To help visualize the structure of the components, please reference the below structure,

- App.js
  - Navbar.js
  - Landing.js
  - WeatherApp.js
      - WeatherIcon.js
  - ErrorPage.js
