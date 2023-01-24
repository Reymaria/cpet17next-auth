This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
## Installation process

Install all dependencies. In the terminal, type

## npm install

Make a database.

Open the xampp control panel. Start Apache and MySql


## Database name: cpet17
Table 1 Name: users
- id INT 255 AUTO INCREMENT
- username VARCHAR 255
- email VARCHAR 255
- password VARCHAR 255

Table 2 Name: detected
- id INT 255 AUTO INCREMENT
- date_time VARCHAR 255
- captured LONGBLOB

clone the github repo of the server on the parent folder

## https://github.com/Reymaria/server.git

type npm install to install dependencies. 



Open the folder "server" in an integrated terminal


type

## node insert.js

This will start a server in your pc at port 4000




Open the folder "cpet17next-auth" in an integrated terminal

type

## npm run dev


This should work fine


## Getting Started

First, run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
