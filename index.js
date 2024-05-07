const express = require('express');
const puppeteer = require('puppeteer');

const URL = "https://sxodim.com/almaty";
const app = express(); 

const parse = async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(URL);
	
	const events = await page.evaluate(() => 
			Array.from(document.querySelectorAll('.impression-items .impression-card'), (e) => ({
					title: e.querySelector('.impression-card-title').innerText,
					info: e.querySelector('.impression-card-info').innerText,
					img: e.querySelector('img').src,
					src: e.querySelector('a').href,
			})));
	
	await browser.close();

	//console.log(events);
	return events; // Return events from main function
}

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended : false}))
app.use(express.static('styles'));

app.get('/', async (req, res) => {
	const events = await parse();
	res.render('index', { events }); // Pass events object to index.ejs
})

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server is launched on: http:/localhost:${PORT}`);
})
