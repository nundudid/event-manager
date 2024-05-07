# Event Manager
This is a simple web scraping application built with Node.js and Puppeteer to fetch events data from a website and display it on a web page using Express.js and EJS.

## How to run
1. Clone this repo:
```
git clone https:github.com/nundudid/event-manager.git
```
2. Install dependencies needed for project:
```
npm i
```
3. Launch the server:
```
node index
```
4. Open http://localhost:3000/ on your browser.

## How it Works
* The application uses Puppeteer to launch browser and navigate to a https://sxodim.com/almaty.
* It scrapes event data from the webpage and constructs an array of event objects containing titles, information, images, and sources.
* Express.js is used to serve a simple HTML page (index.ejs) that renders the scraped event data.
* CSS styles are included for basic styling of the rendered events.

## Comment
It takes 5-10 seconds to scrape data from https://sxodim.com/almaty. Also I was able to use only these basic knowledges of node.js and express.js with basic styles.
I planned to implement registration with Google Account using firebase and add event to Google Calendar using Google Calendar API. But there were several problems 
with firebase so I could not finish it.
