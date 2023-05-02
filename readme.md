Apologies for the confusion. Let's go through the step-by-step instructions to set up a TypeScript project with ts-node-dev and configure the source and destination folders as you specified:Create a new directory for your project and navigate into it using the terminal

```bash

mkdir my-project
cd my-project

```

1. Initialize a new npm project by running the following command and providing the required information:
    
    ```bash
    shellCopy code
    npm init
    
    ```
    
2. Install the necessary dependencies:
    
    ```bash
    npm install typescript ts-node-dev --save-dev
    
    ```
    
3. Create the **`src`** and **`dest`** folders:
    
    ```
    shellCopy code
    mkdir src
    mkdir dest
    
    ```
    
4. Create an **`index.ts`** file in the **`src`** folder:
    
    ```
    
    touch src/index.ts
    
    ```
    
5. Open the **`index.ts`** file and add some TypeScript code, for example:
    
    ```
    typescriptCopy code
    const course: string = "web";
    console.log(course);
    
    ```
    
6. Create a TypeScript configuration file, **`tsconfig.json`**, in the root folder of your project. Open the file and add the following configuration:
    
    ```bash
    tsc --init
    
    ```
    
7. Open **`package.json`** and add the following scripts section:
    
    ```
    jsonCopy code
    "scripts": {
      "start": "ts-node-dev --respawn --transpile-only src/index.ts"
    }
    
    ```
    
8. Save the changes, and you are ready to run your TypeScript project:
    
    ```bash
    
    npm start
    
    ```
    

This will start the ts-node-dev script, which watches for changes in the **`src`** folder, transpiles the TypeScript code, and runs the resulting JavaScript file (**`index.js`**) in the **`dest`** folder.

Now you can modify your TypeScript code in the **`src/index.ts`** file, and ts-node-dev will automatically recompile and run the updated code. The console output will be displayed in the terminal.
