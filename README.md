# This is a comparison tool for Star Wars characters

Select a character from the dropdown and see all characteristics

## Getting Started

First, let's talk node V

```
switch to v14.19.2
```

Then:

```
npm install 
```

```
npm run dev
```

```
npm run build
```

## Some useful information

- This project uses Next.js v10, this is the last working version where node-sass can be used without the modular styling approach. I created this a while back for any future projects. So I can download the [mockup_project](https://github.com/Kirsten1996/mockup_project) and get started.

- For the loader animations I had help with using the following [codepen](https://codepen.io/christopherkade/pen/rJVPjz), so big thanks to Christopher Kade for his cool animation

- I'm using Netlify to deploy and host this [project](https://storied-kringle-61e3fa.netlify.app/). Couldn't use Vercel because node v14.x has been deprecated

- Site times out as it's not the paid version of Netlify, sorry

- I'm using the [Swapi API](https://swapi.dev/) to pull data

- I only added two images ("Darth Vader", "Luke Skywalker", "Chewbacca", "Leia Organa", "Han Solo"), just to show that the functionality works. If another name comes up I'm pulling a placeholder in for an image to show

- Never added timeout for loader, so once data has been saved to sessionStorage, loader gets taken out and comparison section shows

- Spent about 10 hours [+/-]
