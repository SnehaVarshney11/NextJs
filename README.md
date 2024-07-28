# NextJs
### Commad to create NextJs Application
<b><u>Automatic Installation -> </u></b>
```
npx create-next-app@latest
```
In Terminal ->
```
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*
```

<b><u>Manual Installation -></u></b>
```
npm install next@latest react@latest react-dom@latest
```
Open your package.json file and add the following scripts: 
```
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### How to Run 
npm run dev