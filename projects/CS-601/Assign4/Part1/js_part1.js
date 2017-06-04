//*************************************
// * CS 601 Assignment Part 1
// * performing tasks with javascript
//************************************/
/* Perform differnt task with a timer delay
 * 1. Greets the user and ask for user name then displays it.
 * 2. Ask the user to input 2 numbers
 * 3. thanks the user for using the program.
 */

function askUserName() {
    document.getElementById("bcontent").style="display:none";
    var type = "p";
    var locID = "stepOne";

    var name = prompt("Hello Stranger! - Whats your name: ");
    var response;
    if (name.length == 0) {
        document.getElementById("bcontent").style="display:block";
        response = "Aww so sad you dont want to share your name :(";
    } else {
        document.getElementById("bcontent").style="display:block";
        response = "Nice to meet you !!! " + name;
        helper(type, response, locID);
        response = "I'm Alvaro";
        helper(type, response, locID);
        document.getElementById(locID).style="border-bottom:1px solid #FFA500";
    }

    setTimeout(function() {

        locID = "stepTwo";

        alert("LETS PLAY!!!");
        var num1, num2, total, flag = 1;
        while (flag != 0) {
            num1 = prompt("Enter your first number");
            if (!isNaN(num1) && num1.length != 0) {
                total = parseInt(num1);
                flag = 0;
            }
        }

        while (flag != 1) {
            num2 = prompt("Enter your second number");
            if (!isNaN(num2) && num2.length != 0) {
                total += parseInt(num2);
                flag = 1;
            }
        }

        msg = "Enter your First Number: " + num1;
        helper(type, msg, locID);
        msg = "Enter a Second Number: " + num2;
        helper(type, msg, locID);
        msg = "After some magic the addition of your two numbers is " + total;
        helper(type, msg, locID);
        document.getElementById(locID).style="border-bottom:1px solid #FFA500";
        type = "h2";
        msg = "Thank you for using my program ^_^";
        locID = "stepThree";
        helper(type, msg, locID);

    }, 5000);

}

/*
 * This function inserts the answer from the prompt by
 * creating a new parent element and child and inserting
 * it in the correct position.
 */

function helper(type, text, locID) {
    var parent = document.createElement(type);
    var node = document.createTextNode(text);
    parent.appendChild(node);
    var inElem = document.getElementById(locID);
    inElem.appendChild(parent);
}
