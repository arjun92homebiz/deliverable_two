var eventType = prompt("What type of event is that?");
var tempFahr = prompt("What is the current temprature (in Farenhiets)");
var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, ";

if (eventType == "casual") {
    if (tempFahr < 54) {
        result += "you should wear something comfy and a coat.";
    } else if (tempFahr >= 54 && tempFahr <= 70) {
        result += "you should wear something comfy and a jacket.";
    } else if (tempFahr > 70) {
        result += "you should wear something comfy and no jacket.";
    } else {
        result = "Invalid temprature."
    }
} else if (eventType == "semi-formal") {
    if (tempFahr < 54) {
        result += "you should wear a polo and a coat.";
    } else if (tempFahr >= 54 && tempFahr <= 70) {
        result += "you should wear a polo and a jacket.";
    } else if (tempFahr > 70) {
        result += "you should wear a polo and no jacket.";
    } else {
        result = "Invalid temprature."
    }
} else if (eventType == "formal") {
    if (tempFahr < 54) {
        result += "you should wear a suit and a coat.";
    } else if (tempFahr >= 54 && tempFahr <= 70) {
        result += "you should wear a suit and a jacket.";
    } else if (tempFahr > 70) {
        result += "you should wear a suit and no jacket.";
    } else {
        result = "Invalid temprature."
    }
} else {
    result = "Invalid event type."
}

console.log(result);