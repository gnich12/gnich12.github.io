//*************************************
// * CS 601 Assignment Part 2
// * form validation with javascript
//************************************

/*
 * Performs validations of the form by checking the minimum
 * length of the string and if they are not empty. Invoke the call
 * of helper methods to provide error messages and check the
 * pattern of email and username.
 * return true if pass all test else false.
 */
function chckForm(formName) {
    var text, locID, flag = true;
    var firstName = formName.firstName.value;
    var lastName = formName.lastName.value;
    var email = formName.email.value;
    var userName = formName.userName.value;

    if (firstName.length >= 4 && firstName.length != 0) {
        locID = "fName";
        clearText(locID);

    } else {
        locID = "fName";

        text = "field first name can not be empty and has to be a minimum of 4 characters";
        helper(text, locID);
        flag = false;
    }
    if (lastName.length >= 4 && lastName.length != 0) {
        locID = "lName";
        clearText(locID);

    } else {
        locID = "lName";

        text = "field last name can not be empty and has to be a minimum of 4 characters";
        helper(text, locID);
        flag = false;
    }

    if (checkAlpha(userName) && (userName.length != 0 && userName.length >= 4)) {

        locID = "uName";
        clearText(locID);

    } else {
        locID = "uName";
        text = "Username cant be empty, minimum 4 alpha characters, no numbers allowed";
        helper(text, locID);
        flag = false;
    }

    if (email.length != 0 && checkMail(email)) {
        locID = "mail";
        clearText(locID);
    } else {
        locID = "mail";
        text = "It seems there is a problem with your e-mail";
        helper(text, locID);
        flag = false;
    }

    return flag;
}

/*
 * Checks for the if the e-mail value is correct
 * by splitting the string in two with a delimiter being '@'
 * after that it will check the two strings, one that has the correct
 * values and the other string by spliting with the '.' being the delimiter.
 * and checking for the correct length of the domain at least 2 characters since
 * some emails have the domain such as .co .it etc..
 * returns true if it follows the correct pattern else false.
 */
function checkMail(string) {
    var bool = true;
    var r;
    var exp = new RegExp(/[#$%^&*()""'':=;!]/g);
    if (string.indexOf("@") > -1 && string.indexOf(".") > -1) {
        r = string.split("@");

        if (exp.test(r[0]) != true && r[0].length != 0) {
            return true;
        } else {
            return false;
        }

        if (r[1].split(".")[0].length != 0 && r[1].split(".")[1].length != 0 && r[1].split(".")[1].length >= 2) {
            console.log(r[1].split(".")[0] + " " + r[1].split(".")[1]);
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }

}

/*
 * Checks for alpha characters only! returns false if there is a number found.
 */
function checkAlpha(string) {
    var bool = true;
    for (var i = 0; i < string.length; i++) {
        if (string.indexOf(i, 0) != -1) {
            bool = false;
            break;
        }
    }
    return bool;
}

/*
 * This function inserts a text if an error is encounter else it will clean
 * it up if the error has been fixed
 */
function helper(text, locID) {
    var inElem = document.getElementById(locID);
    inElem.innerHTML = text;
    inElem.style = "color:red;font-size:9pt";

}

function clearText(locID) {
    var e = document.getElementById(locID);
    if (e.innerHTML.length != 0) {
        e.innerHTML = "";
    }
}
