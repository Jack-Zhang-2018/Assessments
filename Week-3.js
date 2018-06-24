// 1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...

import React, {Component} from "react"

class Example extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <div>
                {console.log("I am a component")}
            </div>
        )
    }
}

export default Assessment

// 2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below.


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})

// your for loop here, you can reference the same stuffArray variable

for(let index = 0; index < stuffArray.length; index++) {
    console.log(stuffArray[index] + " is at index: " + index)
}

// 3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the single lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price

var steal = function(price_list){

    let lowest_price = Infinity

    price_list.forEach(function(price) {
        if(price < lowest_price){
            lowest_price = price
        }
    })

    return lowest_price
}
