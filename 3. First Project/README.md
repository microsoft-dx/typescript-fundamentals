# Module 4: Setting up a TypeScript project with Visual Studio Code

The purpose of this module is to set up a new project and to show you that [Visual Studio Code](https://code.visualstudio.com/) is more than your average text editor and how you can benefit from it's features when writing [TypeScript](https://www.typescriptlang.org/) code.

## Transpiling TypeScript into JavaScript

In the previous module, we transpiled `.ts` into `.js` by using the `command line` but there is a more *elegant* way to go about it: We can do it directly from VS Code! Our editor integrates with `tsc` through its integrated [task runner](https://code.visualstudio.com/docs/editor/tasks). We can use this to transpile `.ts` files into `.js` files. Let's walk through transpiling a simple TypeScript Hello World program.

### Step 1: Create a simple TS file

Fire up *Visual Studio Code* on an empty folder and create a `HelloWorld.ts`, just like we did in the last module, but this time type in this code:

![HelloWorld.ts](https://raw.githubusercontent.com/microsoft-dx/typescript-fundamentals/master/Images/module-3-1.PNG)

### Step 2: Run the TypeScript Build:



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



