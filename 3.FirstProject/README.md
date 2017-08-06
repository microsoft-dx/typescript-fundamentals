# Module 4: Setting up a TypeScript project with Visual Studio Code

The purpose of this module is to set up a new project and to show you that [Visual Studio Code](https://code.visualstudio.com/) is more than your average text editor and how you can benefit from it's features when writing [TypeScript](https://www.typescriptlang.org/) code.


## **TypeScript Files and Projects**

VS Code's TypeScript support can operate in two different modes:
* *File Scope*: In this mode, every single file is treated independently. As long as two files don't reference eachother (by using [reference directives](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html) or [external modules](https://www.typescriptlang.org/docs/handbook/modules.html)), there is no common project context between the two files.

* *Explicit Project*: A [TypeScript](https://www.typescriptlang.org/) project is defined via a `tsconfig.json` file. The presence of such a file in a directory indicates that the directory is the root of a TypeScript project. The file itself lists the files belonging to the project as well as compiler options. Details about the `tsconfig.json` file can be found [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

## *tsconfig.json*

The first step is to open up a folder where you want to add your *[TypeScript](https://www.typescriptlang.org/) Project* and add a `tsconfig.json` file. Once you do this, open it with *[VS Code](https://code.visualstudio.com/)* and press `Ctrl + Space`. You should see this

![tsconfig](https://raw.githubusercontent.com/microsoft-dx/typescript-fundamentals/master/Images/module-4-1.PNG)

We will add some options to `compilerOptions`:

```javascript
    {
        "compilerOptions": {
            "target":"es5",
            "module": "commonjs",
            "sourceMap": true
        }
    }
```

## Transpiling TypeScript into JavaScript

In the previous module, we transpiled `.ts` into `.js` by using the `command line` but there is a more *elegant* way to go about it: We can do it directly from VS Code! Our editor integrates with `tsc` through its integrated [task runner](https://code.visualstudio.com/docs/editor/tasks). We can use this to transpile `.ts` files into `.js` files. Let's walk through transpiling a simple TypeScript Hello World program.

### Step 1: Create a simple TS file

Fire up *Visual Studio Code* on an empty folder and create a `HelloWorld.ts`, just like we did in the last module, but this time type in this code:

![HelloWorld.ts](https://raw.githubusercontent.com/microsoft-dx/typescript-fundamentals/master/Images/module-3-1.PNG)

### Step 2: Run the TypeScript Build:

![Task](https://raw.githubusercontent.com/microsoft-dx/typescript-fundamentals/master/Images/module-3-2.PNG)

Select the entry. This will produce a `HelloWorld.js` and `HelloWorld.js.map` file in the workspace.

### Step 3: Make the TypeScript Build the default 

You can also define the TypeScript build task as the default build task so that it is executed directly when triggering *Run Build Task* (`Ctrl+Shift+B`). To do so select *Configure Default Build Task* from the global Tasks menu.

![Default Task](https://raw.githubusercontent.com/microsoft-dx/typescript-fundamentals/master/Images/module-3-3.PNG)

This shows you a picker with the available build tasks. Select the TypeScript one which generates the following tasks.json file:

![tasks.json](https://raw.githubusercontent.com/microsoft-dx/typescript-fundamentals/master/Images/module-3-4.PNG)

The example TypeScript file did not have any compile problems, so by running the task all that happened was a corresponding `HelloWorld.js` and `HelloWorld.js.map` file was created.

You can run your simple `Hello World` example by opening up a cmd and running

>node HelloWorld.js

### Bonus: Hiding derived JavaScript files

When you are working with TypeScript, you most often do not check all the `.js` files so having them in your `Explorer` is not usefull and it makes it harder to actually get to the files that you want. *[VS Code](https://code.visualstudio.com/)* offers filtering capabilities with a `files.exclude` [workspace setting](https://code.visualstudio.com/docs/getstarted/settings).

![Settings](https://raw.githubusercontent.com/microsoft-dx/typescript-fundamentals/master/Images/module-3-5.PNG)

We can now create an expression to hide those transpiled `.js` files:

`"**/*.js": { "when": "$(basename).ts"}`

*Important!* This pattern will match on any JavaScript file (`**/*.js`) but only if a sibling TypeScript file with the same name is present. This way we can be sure that we do not see the *transpiled* files but we can still see a `.js` that we added to our project for any reason. 

### Feel free to play around with TypeScript! :bowtie: 
