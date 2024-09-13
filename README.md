This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Prisma:

### Step 1:

```
  npm i -D prisma
```

### Step 2:

```
  npm i @prisma/client
```

### Step 3: Create db.ts

### Step 4: Add '.env' to .gitignore

### Step 5:

```
  npx prisma init
```

### Step 6: Connect to neondb, put the generated content in schema.prisma and .env inside the files of the same name

### Step 7: Create a new model and the generator client inside of prisma.schema:

```
generator client {
  provider = "prisma-client-js"
}

model User {
  id String @id @default(cuid())
  name String
}
```

#### and run:

```
npx prisma generate
```

### Step 8: Push the database to remote:

```
npx prisma db push
```

## NexthAuth:

### Step 1:

```
npm i @auth/prisma-adapter
```
