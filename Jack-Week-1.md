### Week 1 Assessment

    These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. One great resource for learning Javascript is Eloquent Javascript - read this chapter on functions (http://eloquentjavascript.net/03_functions.html) and list a few thoughts, questions, or things you learned here:

    Javascript is pretty flexible when it comes to the number of arguments passed into the function.  I didn't know that functions in JS will still try to run if you pass in extra or too few parameters.  I have to be careful about this because I might accidentally make this error without knowing it.

    I think it's pretty cool how you can utilize the closure feature of functions to in a sense create function factories.  Could this be what functional programming is?

    


#### 2. What is a linter for? Do you think they are usefull? Explain why/why not.

    A linter is a program that analyzes code and flags for potential programming errors, bugs, stylistic errors, and suspicious constructs.  I would say that they are useful, because they make your code more readable and safeguard against potential errors that you might run into later.  A linter would especially be useful for bigger programs, in regards to the small challenges that we are doing, a linter would probably not be as necessary.   

#### 3. Explain local vs global scope in programming. Feel free to create a code example to support your answer.

    //Your Answer
    Global scope is the level of a program in which there is data that is available to all part of a program.  A local scope exists within the global scope and contains information that is not accessible to anything outside of that scope.  

    For example, if you declare a variable at the top of a blank file as such:

    let str = "string"

    The variable str is available to all parts of the program.  However, if you open a new scope by either writing an if block, a for block, declaring a function, or a class any information found in those entities are only accessible to code that is within those entities.

    For example if you have the following:

    let str = "string"

    console.log(str)  ---> // Prints "string" into the console
    console.log(str1) ---> // ReferenceError: str1 not defined
    console.log(str2) ---> // ReferenceError: str2 not defined

    function my_func1(arg1){

        let str1 = "string1"

        console.log(str)  ---> // Prints "string" into the console
        console.log(str1) ---> // Prints "string1" into the console
        console.log(str2) ---> // ReferenceError: str2 not defined
    }

    function my_func2(arg2){

        let str2 = "string2"

        console.log(str)  ---> // Prints "string" into the console
        console.log(str1) ---> // ReferenceError: str2 not defined
        console.log(str2) ---> // Prints "string2" into the console
    }

    A local scope that is nested within another scope has access to all the information within itself as well as all the information in scopes that are above that local scope.  

    //Googled Answer

    "Scope" is just a technical term for the parts of your code that have access to a variable.

    In the example below, the scope of the local variable is highlighted blue – it's the function where that var was defined. Any code inside that function can access (read and change) this variable. Any code outside it can't. It's local, so it's invisible from outside.

    var global = 10

    function fun(){
        var local = 5;
    }

#### 4. Another great resource for more practice writing code is Free Code Camp. Their Javascript section starts here (https://www.freecodecamp.org/challenges/comment-your-javascript-code) - do at least 5 exercises.

Was this extra practice helpful? Take note of any concepts you learned or felt you understood better because of this resource.

  //Your Answer

#### 5. Complete the steps for pushing changes to Github, assuming that the directory you are working in is already a git repo:

- git add .
- git commit
- git push -u origin master

#### 6. List some differences between return and console.log in Javascript. When would you use one vs the other?

Return does two things: (1) when a program runs into a "return" statement it immediately exits the function leaving any code after the return alone.  (2) any value or variable after the return in the same line is sent out into the global scope and made available for use by all the code in the file.

On the other hand, if you have a console.log in a function, it won't terminate the function when ran.  It presents to the developer whatever value that's within the parentheses, but it does not send that value out into the global scope like return does.  

#### 7. Think back to the intro to Javascript presentation. We talked about Javascript being a "Dynamically Typed" language. What did this mean about the way we write Javascript?

    // Your Answer
        The term "Dynamically Typed" refers to the way that variables are declared.  For a dyamically typed language like Javascript, when you are declaring a variable, you do not need to write the variable's intended data type in the variable declaration.  

        For Example, in Javascript, we se variables declared like this:

        let var1 = 10
        let var2 = "string"

        not something like this

        let number var1 = 10
        let str var2 = "string"

    // Googled Answer
        The definitions of “Static & Compiled” and “Dynamic & Interpreted” are quite similar…but remember it’s “when types are checked” vs. “when source code is translated”.  Dynamically typed languages don't check types until execution.
