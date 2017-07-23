# Module 4: Setting up a TypeScript project with Visual Studio Code

## **TypeScript Files and Projects**

VS Code's TypeScript support can operate in two different modes:
* *File Scope*: In this mode, every single file is treated independently. As long as two files don't reference eachother (by using [reference directives](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html) or [external modules](https://www.typescriptlang.org/docs/handbook/modules.html)), there is no common project context between the two files.

* *Explicit Project*: A TypeScript project is defined via a `tsconfig.json` file. The presence of such a file in a directory indicates that the directory is the root of a TypeScript project. The file itself lists the files belonging to the project as well as compiler options. Details about the `tsconfig.json` file can be found [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

## *tsconfig.json*

The first step is to open up a folder where you want to add your *TypeScript Project* and add a `tsconfig.json` file. Once you do this, open it with *VS Code* and press `Ctrl + Space`. You should see this

**TODO ADD IMAGE LINK**

