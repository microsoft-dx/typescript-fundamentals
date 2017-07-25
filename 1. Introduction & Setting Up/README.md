# Module 1: Introduction & Setting Up

[TypeScript](https://www.typescriptlang.org/) is a typed superset of JavaScript that compiles to plain JavaScript. It offers classes, modules, and interfaces to help you build robust components. The TypeScript language specification can be found [here](https://github.com/Microsoft/TypeScript/tree/master/doc).

#### It looks a lot like C# code!

![Code Example](https://code.visualstudio.com/images/typescript_typescript_hero.png)

## Setting Up

1. Install [Visual Studio Code](https://code.visualstudio.com/)
2. Install [NodeJS](https://nodejs.org/en/)
3. Install TypeScript
  * Open up CMD/PowerShell and type:
    > npm install -g typescript
  * You can test your install by checking the version or help.
    >tsc --version
    
    >tsc --help
    
    ![Version Example](https://raw.githubusercontent.com/microsoft-dx/typescript-fundamentals/master/Images/module-1-1.PNG)

## How Does it Work?

TypeScript actually looks much like modern JavaScript. At the most basic level it introduces a static typing paradigm to JavaScript, so instead of this:

![js example](https://raw.githubusercontent.com/microsoft-dx/typescript-fundamentals/master/Images/module-1-2.PNG)

We could write this:

![ts example](https://raw.githubusercontent.com/microsoft-dx/typescript-fundamentals/master/Images/module-1-3.PNG)

The difference is definitely not staggering but this is a good example of how we can strongly type variables in TypeScript. 

#### Why/when is this a good thing?

*Pros*
 * Rich IDE support with autocomplete and code navigation features
 * Safe automatic refactorings
 * Discoverable APIs and more self-explanatory code contracts (through type declarations)
 * Class-based OO, with inheritance private members and interfaces
 * Module support
 * Existing Javascript code interoperability:
   * Compiles down to idiomatic JavaScript
   * Any JavaScript code is valid TypeScript code
 * Relatively low risk of trying TypeScript out:
   * You can start out with JavaScript code and gradually add type annotations
   * When you want to stop using TypeScript, you can just transpile it to JS code and use that
   
*Cons*
 * In order to get the full benefit of TypeScript, developers would have to use the type annotations everywhere in their code, which may slow things down
 * TypeScript's type system, while being more flexible than what is commonly found in mainstream strongly-typed languages, is still not as flexible as JavaScript itself
 * In order to run the application in the browser, a compile step is required to transform TypeScript into JavaScript
 
