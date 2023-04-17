import chalk from "chalk";

interface IPackageJson {
  readonly name: string;
  readonly version: string;
  readonly private: boolean;
  readonly main?: string;
  readonly license?: string;
  readonly types?: string;
  readonly author?: string;
  readonly sideEffects?: boolean;
  readonly scripts?: Record<string, string>;
  readonly eslintConfig: Record<string, string>;
  readonly browserlist: Record<"production" | "development", string[]>;
  readonly peerDependencies?: Record<string, string>;
  readonly dependencies: Record<string, string>;
  readonly devDependencies: Record<string, string>;
}


// Load package.json as a module
const packageJson = {
  "name": "dazzle",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@clerk/clerk-react": "^3.4.0",
    "@emotion/react": "^11.10.6",
    "@mantine/carousel": "^6.0.7",
    "@mantine/core": "^6.0.7",
    "@mantine/dates": "^6.0.7",
    "@mantine/dropzone": "^6.0.7",
    "@mantine/form": "^6.0.7",
    "@mantine/hooks": "^6.0.7",
    "@mantine/modals": "^6.0.7",
    "@mantine/notifications": "^6.0.7",
    "@mantine/nprogress": "^6.0.7",
    "@mantine/spotlight": "^6.0.7",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.11.41",
    "@types/react": "^18.0.14",
    "@types/react-dom": "^18.0.5",
    "chalk": "^5.2.0",
    "date-fns": "^2.29.3",
    "dayjs": "^1.11.7",
    "embla-carousel-react": "^7.1.0",
    "firebase": "^9.17.1",
    "react": "^18.2.0",
    "react-admin": "^4.1.5",
    "react-big-calendar": "^1.6.8",
    "react-dnd": "^16.0.1",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.40.0",
    "react-icons": "^4.7.1",
    "react-query": "^3.39.1",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "react-spinners": "^0.12.0",
    "typescript": "^4.7.4",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@craco/craco": "^7.1.0",
    "@types/react-big-calendar": "^1.6.1",
    "autoprefixer": "^10.4.7",
    "craco-alias": "^3.0.1",
    "postcss": "^8.4.14",
    "tailwindcss": "^3.1.4"
  }
}



const requiredDependencies = ["chalk"];
const missingDependencies: string[] = [];

for (const dep of requiredDependencies) {
  if (!(dep in packageJson.dependencies) && !(dep in packageJson.devDependencies)) {
    missingDependencies.push(dep);
  }
}

if (missingDependencies.length > 0) {
  console.log(chalk.red("Error: The following dependencies are required but not installed:"));
  console.log(chalk.red(missingDependencies.join(", ")));
  process.exit(1);
} else {
  console.log(chalk.green("All required dependencies are installed!"));
  // Add your build script logic here
}
