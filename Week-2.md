### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
    number - primitive
    boolean  - primitive
    string - primitive
    null - primitive
    undefined - primitive
    symbol - primitive
    object

  //Googled Answer
      number - primitive
      boolean  - primitive
      string - primitive
      null - primitive
      undefined - primitive
      symbol - primitive
      object

#### 2. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};

logIt();

```

first Guess:
    The console will return "undefined"

Then, past the code in your console and explain why you were right/wrong.
    The example code demonstrates hoisting.  Hoisting is the behavior in JavaScript in at the beginning of every new execution context (i.e. the top of the file, the start of a function execution) JavaScript scans through the entire execution context for variable declarations and "brings them" to the top of the file.  So even though in the example code, "var text = "inside" is written after "console.log(text)" because of hoisting, the "var text" declaration is read first before the console.log(text).  Because hoisting only brings up the declaration "var text" and not the initialization "= 'inside'", console.log(text) returns undefined and not 'inside'.  Because of hoisting, it's best to declare all of your variables at the top of any execution context to avoid bugs.  

#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
    JSON is a acronym that stands for JavaScript Object Notation.  It is the format that API's use to package and store data.  The "object notation" portion of the name refers to the fact that all the data in a JSON file is stored in a nested object.

  //Googled Answer
    JSON is a syntax for storing and exchanging data. JSON is text, written with JavaScript object notation. When exchanging data between a browser and a server, the data can only be text. JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server. We can also convert any JSON received from the server into JavaScript objects. This way we can work with the data as JavaScript objects, with no complicated parsing and translations.  JSON uses JavaScript syntax, but the JSON format is text only. Text can be read and used as a data format by any programming language.

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
    Closure is generally associated with functions.  It refers to the scope in which a function is declared.  This means that if a given function is run, it still has access to whatever variables or methods that existed in the scope in which it was declared, even if it is called outside of the scope that it was declared in.  This is a useful feature for when you want to pass around functions to different parts of your code.  That way you don't have to pass around the values/methods that the function depends on to work, they automatically follow it.  

  //Googled Answer

      A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created. In this case, myFunc is a reference to the instance of the function displayName created when makeFunc is run. The instance of displayName maintains a reference to its lexical environment, within which the variable name exists. For this reason, when myFunc is invoked, the variable name remains available for use and "Mozilla" is passed to alert.

      Closures are useful because they let you associate some data (the lexical environment) with a function that operates on that data. This has obvious parallels to object-oriented programming, where objects allow us to associate some data (the object's properties) with one or more methods.

      So, in the example above, we have a series of nested functions all of which have access to the outer functions' scope scope, but which mistakenly guess only for their immediate outer function scope. In this context, we can say all closures have access to all outer function scopes within which they were declared.



#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
      You use "=" to assign values to declared variables

      You use "==" to compare equality.  For example, even though 2 is of type number and "2" is of type string in Javascript 2 == "2" will return true.

      You use "===" to compare identity.  In the small example above if you used a triple equals 2 === "2" would return false because their types are different.

  //Googled Answer
    "=" is an assignment operator that assigns values to JavaScript variables.

    Strict equality compares two values for equality. Neither value is implicitly converted to some other value before being compared. If the values have different types, the values are considered unequal. Otherwise, if the values have the same type and are not numbers, they're considered equal if they have the same value. Finally, if both values are numbers, they're considered equal if they're both not NaN and are the same value, or if one is +0 and one is -0.

    Loose equality compares two values for equality, after converting both values to a common type.  After conversions (one or both sides may undergo conversions), the final equality comparison is performed exactly as === performs it.  Loose equality is symmetric: A == B always has identical semantics to B == A for any values of A and B (except for the order of applied conversions).
