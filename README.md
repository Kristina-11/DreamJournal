This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dream Journal

Technology used in the project: <br/>
![](https://img.shields.io/badge/React-Redux-brightgreen)
![](https://img.shields.io/badge/TypeScript-blue)
![](https://img.shields.io/badge/CSS-SCSS-ff69b4)
<br/><br/>

### Site published at: https://kristina-11.github.io/DreamJournal
<br/>

<ul>
  <li>Home - basic info about Dreams</li>
  <li>All Dreams - component that shows all dreams ( data from DreamApi > located at: https://github.com/Kristina-11/DreamApi )</li>
  <li>Add A Dream - component for uplouding new dreams</li>
</ul>

## Home 
It has dream information taken from <a href='https://en.wikipedia.org/wiki/Dream'>Wikipedia</a>

## All Dreams 
<ul>
  <li>Consumes RestAPI</li>
  <li>Showing dreams from API</li>
  <li>Delete All button - as it says, deletes everything from list and from API</li>
  <li>Search by type - search form that loops through types of dreams</li>
  <li>Every dream is a link that goes to a page that shows more details about that dream, see Dream Details section</li>
</ul>

## Dream Details
<ul>
  <li>Showing more details about specific dream</li>
  <li>It has two buttons for Editing or Deleting</li>
  <li>Edit - allows us to edit parts of a dream and updates API</li>
  <li>Delete - allows us to delete specific dream</li>
</ul>

## Add A Dream
It shows form for entering new data to API and shows message when request is done.

