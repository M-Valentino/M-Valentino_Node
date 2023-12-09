# Mark Valentino Next.js
![Vercel Status](https://img.shields.io/github/deployments/M-Valentino/M-Valentino_NextJS/production?label=vercel&logo=vercel&logoColor=white)
<p align="center" width="100%">
  <img src="https://mark-valentino.vercel.app/mark-valentino-logo.svg" width="60%">
</p>
This is my current professional website created with the Next.js framework and a Redis KV database. It is currently deployed on Vercel.
https://mark-valentino.vercel.app/

## Features
### Personal Project Listings
This website displays my personal coding projects in various ways with the data for each project coming from one JavaScript object. Projects can be displayed as:
- a grid of cards
- a table
- individual project pages using Next.js dynamic routes

#### Projects Page
- Projects can be toggled between being shown as a grid of cards or a table with one click.
- Projects can be sorted from newest to oldest or oldest to newest.
- Projects can be filtered via a search bar.

#### Individual Project Pages
Some projects have extra content not shown on card views, and this content is shown on the individual project pages. The actual code to the projects themselves that can be run in the browser are displayed in iframes.

### Blog
My site has a blog with "infinite" scrolling to cut down on loading times. All blog posts have individual routes associated with them as well, which are created dynamically. Blog posts on the infinite scrolling view have the capability to have their unique dynamic link be shared by clicking a button to write to the user's clipboard. Each blog post has a view counter which is made possible by an API route and a connection to a Redis database.

### Contact Form
Users can send a message through the Contact Me page. Messages sent are stored in the database, along with the email associated and the date saved. There is form validation for the following properties:
- Email matches a valid pattern.
- Email length is under 40 characters.
- Message most likely isn't gibberish (contains at least 4 most common English words out of a list over 100).
- Message is under 1280 characters, but greater than 12.

### UIUX
- Material UI and Material UI inspired components are used throughout the site.
- The site is responsive and is compatible with mobile, small desktop, and large desktop resolutions.
- Microsoft Clarity is embedded for user experience analysis.
- My site uses "Smart Links". <a href="https://mark-valentino.vercel.app/blogPost/My%20UX%20Invention%20to%20Let%20Users%20Know%20Where%20Links%20Go">Read more about them here</a>.

## Running
### For Getting Most Features Working Locally
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Connecting Microsoft Clarity
#### Local development
Add a `.env.development.local` file if it doesn't already exist.
Then create an account on Microsoft Clarity and copy your Clarity ID.
Add this line to the env file:
```
MS_CLARITY_ID="<your Clarity ID>"
```
#### Vercel Deployments
Add your Clarity ID to the list of environment variables with the variable name being `MS_CLARITY_ID`

### Vercel Redis Integration for Local Development and Deployments
Follow this guide:
https://vercel.com/guides/using-vercel-kv
