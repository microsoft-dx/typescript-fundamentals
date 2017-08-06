# Module 2: [TypeScript](https://www.typescriptlang.org/) Syntax

## Hello World!

Fire up [Visual Studio Code](https://code.visualstudio.com/) and let's get our *Hello World!* down. 

![HelloWorld.ts](https://raw.githubusercontent.com/microsoft-dx/typescript-fundamentals/master/Images/module-2-1.PNG)

Now let's compile it to JavaScript code. Open up Cmd/PowerShell in the project's folder and type:

>tsc HelloWorld.ts

Now, you should be able to see a HelloWorld.js in your project's file. To run that program, type in cmd:

>node HelloWorld.js

## Your first class in [TypeScript](https://www.typescriptlang.org/)!

I kept on bragging in the previous module that [TypeScript](https://www.typescriptlang.org/) resembles OOP. Let's create our first class! Fire up [Visual Studio Code](https://code.visualstudio.com/) and let's go step by step in creating our class. 

I'm more of a dog person, so I will create a bunch of classes related to eachother, based on [this](https://www.youtube.com/watch?v=ah6fmNEtXFI) advanced tutorial on *doggos*, *woofers* and *puppers*. 

We will try and create, in [TypeScript](https://www.typescriptlang.org/), the following set of relations:

![DogsDiagram](https://raw.githubusercontent.com/microsoft-dx/typescript-fundamentals/master/Images/module-2-2.PNG)

### Let's get started

Since *doggos*, *woofers* and *puppers* are dogs, we will first create our *dog interface*, which is simply declared in [TypeScript](https://www.typescriptlang.org/) by using the `interface` keyword.

#### Creating an interface is as simple as your usual OOP declaration

![FirstClass](https://raw.githubusercontent.com/microsoft-dx/typescript-fundamentals/master/Images/module-2-3.PNG)

#### Let's add some properties and functions to our interface

![BaseClassCompleted](https://raw.githubusercontent.com/microsoft-dx/typescript-fundamentals/master/Images/module-2-4.PNG)

As you can see, this *interface* looks a lot like your average OOP interface. We have a few properties and a *bark* function.

#### Now that we have our interface created, let's create our first class

This is our *doggo* class:

![DoggoClass](https://raw.githubusercontent.com/microsoft-dx/typescript-fundamentals/master/Images/module-2-5.PNG)

As you can see, we no longer needed to specify the types of the properties that we used because those were specified in our interface and taken by our class from there using the `implements` keyword. 

#### Creating our *woofer* and *pupper* classes

Looking again at our diagram, we can see that the *pupper* is a *smol doggo* and a *woofer* is a *big ol doggo*, so we are going to extend our *doggo* class to get these two.
Also, another important aspect is their *bork*. Documentation for *borking* can be found [here](http://i.imgur.com/sy9ECu6.jpg).

That being said, our *pupper* class will look something like this:

![Pupper](https://raw.githubusercontent.com/microsoft-dx/typescript-fundamentals/master/Images/module-2-6.PNG)

And our *woofer* class like this:

![Woofer](https://raw.githubusercontent.com/microsoft-dx/typescript-fundamentals/master/Images/module-2-7.PNG)

### Let's put our code to some work!

Ok, now that we have our classes down we should instantiate some objects and actually see that our code works.

You have the freedom to do whatever you want from this point on!

## [Module 3: Creating your first project with TypeScript](https://github.com/microsoft-dx/typescript-fundamentals/blob/master/3.FirstProject/README.md)
