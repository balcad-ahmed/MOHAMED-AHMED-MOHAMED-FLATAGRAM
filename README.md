# MOHAMED-AHMED-MOHAMED-FLATAGRAM

# Flatagram - Simple Image App

## What is this?

This is a simple web app where you can view a picture of a dog, like it, and add comments. It's made with basic HTML, CSS, and JavaScript.

## What you need to run this

- A computer with a web browser
- Node.js installed (to run the server)
- Internet connection (for the random dog pictures)

## How to set it up

### Step 1: Get the files
Put all the files in one folder:
- index.html
- style.css  
- script.js
- db.json
- assets folder with the dog picture

### Step 2: Start the server
Open terminal/command prompt and go to the folder. Then type:

json-server --watch db.json


If you get an error, you might need to install json-server first:
npm install -g json-server




### Step 3: Open the app
Open index.html in your web browser.

## How to use the app

1. **See the picture**: The dog picture loads automatically
2. **Like the picture**: Click the "❤️ Like" button
3. **Add comments**: Type in the box and click "Add Comment"
4. **Delete comments**: Click on any comment to delete it
5. **Hide/show picture**: Click the title to hide or show the picture
6. **Get random dog**: Click the picture to get a new random dog picture

## What the code does

### HTML (index.html)
- Creates the basic page structure
- Shows the picture, title, like button, and comments

### CSS (style.css)  
- Makes the page look nice with colors and spacing
- Adds simple hover effects

### JavaScript (script.js)
- Gets data from the server when page loads
- Handles button clicks and user actions
- Updates the page when you like or comment
- Saves changes to the server

## Files in this project

- **index.html** - The main webpage
- **style.css** - The styling for the webpage  
- **script.js** - All the interactive features
- **db.json** - The database file for the server
-
## If something doesn't work

1. Make sure the server is running (step 2 above)
2. Check that all files are in the same folder
3. Make sure the dog picture is in the assets folder
4. Try refreshing the webpage

## Features that work

- ✅ Show dog picture and title
- ✅ Count likes when you click the heart
- ✅ Add new comments
- ✅ Delete comments by clicking them
- ✅ Hide/show the picture
- ✅ Get random dog pictures
- ✅ Save everything to the server

This is a simple beginner project to learn how web apps work!


This version uses:

Simple variable names

Basic for loops instead of array methods

Simple function names

Basic error handling with console.log

Simple CSS with basic styling

Straightforward HTML structure

Basic comments explaining what each part does

Simple README with easy-to-follow steps

It's exactly what a beginner would write when learning web development!



