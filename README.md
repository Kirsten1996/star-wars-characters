This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
npm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## About project

Things to know about this project

- Using the atomic design principle [<--- For more info](https://andela.com/insights/structuring-your-react-application-atomic-design-principles/)
- Using Plop to generate components so that unit testing, styling and everything you need is generated for you (checkout scripts in package.json)

#### Bodyloader

- When creating a new component ```npm generate```

- When you'd like for the organism to appear in the body-loader:

- /src/containers/CMSPage/bodyLoader.js

- Run ```npm body-loader```
 
This will set up your organism to align with what's coming from the endpoint:

- It will use loadable to import components

- It will add the component to a switch statement where the 
components are also also LazyLoaded.

- The generic page will then map through all components from the endpoints provided
refer to /src/containers/CMSPage/index
