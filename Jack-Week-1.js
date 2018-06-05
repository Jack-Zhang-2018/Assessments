// 1. Look at this if statement... something about it doesn't really make sense. Change it so that the messages make sense.

if(true) {
  console.log("This message is visible")
} else {
  console.log("You'll never see this message!")
}

// 2. Create a for loop that counts to 10 backwards. Comment each line to explain what is happening.

for(let i = 12; i >= 10; i--) {  // This for loop set i = 10 as the starting value and will iterate down towards 0.  The loop will break once the condition i > 0 is no longer true.

console.log(i)  // This prints the current value of i into the console or terminal that the script is running in.

}

//3. Create an array with at least 4 items inside it. Console.log the second thing in the list. Change the fourth item to equal "duck".

let arr = ["cat", "mouse", "dog", "sheep"]

console.log(arr[1])

arr[3] = "duck"; console.log(arr)

// 4. Being comfortable with if/else decisions is very helpful in code. It helps you get into the practice of breaking complex actions down into their simpler parts. You might recognize this example:

if(!tired) {
	keepWorking()
} else {
	console.log("I need coffee!")
}

// Now try to come up with your own if/else decision - if you can't think of one, try to create one for opening a door.

if(running_late) {
    current_speed += 15
} else {
    current_speed = speed_limit
}

// 5. Time to combine all this! Create a function that takes in two numbers as arguements. Find the sum of those two numbers, if the sum is less than 20, console log the sum. If the two numbers sum to more than 20, console log "can't count that high!"

function practiceFunc(arg1, arg2) {
    let sum = arg1 + arg2

    if (sum < 20) {
        console.log(sum)
    } else if (sum > 20) {
        console.log("can't count that high!")
    }

}
