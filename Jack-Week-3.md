### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

False:
- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs) This is true for angular

True:
- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer
    Logic components in React contain most of the methods and code that make the application function.  Whereas the display component calls other components and displays their results.  It is important to make a distinction between them so that developers can keep components as modularized as possible thereby preventing repetitive code and improving efficiency.  

 //Googled Answer
    Smart components: describe how things work, provide no DOM markup or styles, provide application data, do data fetching, and call Flux actions.  Conventionally they are referred to as "containers"

    Dumb components: Describe how things look, have no app dependencies, receive only props, providing data and callbacks, rarely have own state, when they do, it’s just UI state, named anything that’s a UI noun

    Apparently you need each class of components because obviously your app has to smart to be interesting. But if it’s more dumb, it’s more simple. So split it. You need both.

    If you separate concerns, your app will be easier to reason about, complexity will be mostly localized around the Smart components, and you should be left with more simple components. UI components will be more reusable.

#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer
    The "yarn add ..." command searches NPM for the node package listed in the ellipsis and downloads it on your machine.  After adding a package with yarn, the package.json file will automatically be updated.

 //Googled Answer
    "yarn add ..." installs a package and its dependencies from the npm registry or another registry.  This will also update your package.json and your yarn.lock so that other developers working on the project will get the same dependencies as you when they run yarn or yarn install.

#### 4. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    mistake 1 - Class Recipes needs to extend the class component.

    mistake 2 - There's JavaScript in the return where only JSX can be
    The objects in the "recipes" attribute in state need to be bound in some other data structure: either an array or another object.

    mistake 3 - The two object within the recipes key in state need to be encapsulated within an array.

    import React, { Component } from 'react';

    class Recipes extends Component {
      constructor(props){
        super(props)
        this.state = {
          recipes: [
            {name: 'Meatballs'},
            {name: 'Mac & Cheese'}
            ]
        }
      }

      render() {

          let recipes = this.state.recipes.map(function(recipe){
              return(
                  <li key={recipe.name}>{recipe.name}</li>
                  )
                  })

        return (
          <ul>
            {recipes}
          </ul>
      }
    }

    export default Recipes;

#### 5. Name three html form input types. (NOTE: text is the default type - so it doesn't count in this case)

     //Your Answer
     I'm not sure what three html form input types are.

     //Googled Answer
     button
     checkbox
     radio


 #### 6. What happens when we call setState()?

     //Your Answer
     Calling setState() updates the state to reflect the arguments that were passed into setState() and then the component re-renders to display the new page with the updated state.  

     //Googled Answer
     setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses.

     Think of setState() as a request rather than an immediate command to update the component. For better perceived performance, React may delay it, and then update several components in a single pass. React does not guarantee that the state changes are applied immediately.


 #### 7. What is the difference between component state and props? Your answer should include a short explanation of both.

     //Your Answer
     Component state and component props are both object that store values; however, their distinction lies in how they are used.  Component state contains data that is dynamically updated to reflect the state of the component. Component props is used to hold values that have been passed from a parent component to a child component.  Children component access values that have been passed to them through props.  

     //Googled Answer
     A state in React Component is its own local state, the state cannot be accessed and modified outside the component and can only be used inside the component which is very similar to, you already guessed it a function own local scope. We can define variables inside the function which can only be used inside the function block scope.

     Without props, React Component will stop making sense. A React component is a reusable component which can be used over and over again in the UI, but not always we are going to render the same component with same data. Sometimes we have to change the data or content inside a component. That’s why props are introduced in React.

#### 8. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

    I actually really enjoyed building tic-tac-toe mainly because I had a good partner.  Carlos was someone whom I could rely on to have good ideas and someone who I can trust to give good feed back.  We both contributed fairly equally to the assignment and got better at communicating with every day.  One thing that I learned about myself from this experience is that I have the ability to feel like I'm right, only to find out after running the code that I'm wrong.  While I'm in that mode of thinking that I'm right, I learned that I tend to tune other people's ideas out in favor of my own.  

    One of the concepts of react that really stood out to me was the communication between smart and dumb components, which heavily makes use of state and props.  Making tic-tac-toe really helped me to get a glimpse of the potential that React has to make big scalable applications.  At this point, I'd say that I prefer doing the view in React over Rails, but that could change as we get deeper into Rails.  

#### 9. Write the Rules of React we talked about in class and try to give one or two reasons for each rule about why it is important or good to follow the rule.

    Never update State directly, always use setState()
      -  Updating State directly will in fact change the value in state but the updated value will not be rendered in to the view.  

    Never alter the DOM directly, always operate on a value in state
      -  Doing so would be an easy way to lose control of the app fast.  It's much more convenient and manageable to control the app through state.  

    Only call setState once per method or render cycle
      -  If you try to setState within another render cycle your code will error out because otherwise, you will end up with an infinite rendering loop.

    State is for values that change, Props is for values to pass to a child component, constants should be set outside the component
      -  It's good to have a separation of roles between state and props because it is easier to work with.

#### 10. Do at least 5 exercises on Free Code Camp, starting with this one: https://www.freecodecamp.org/challenges/declare-javascript-objects-as-variables
