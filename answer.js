// Question No. 1

function describeValue (value) {
    const inputedValueType = typeof value;
    const valueTypeResult = value? "truthy" : "falsy";
    return `${inputedValueType} | ${valueTypeResult}`;
}

// Question No. 2

function getDayType(inputDay) {
    const day = inputDay.toLowerCase();
    switch (day) {
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        default:
            return "Invalid Day";
    }
}


// Question No. 3

function validateUsername (username) {
    if (username.length < 4) {
        return "Too Short";
    }
    if (username.includes(" ")) {
        return "No Space Allowed";
    }
    if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }
    return "Available";
}


// Question No. 4
// Question No. 5