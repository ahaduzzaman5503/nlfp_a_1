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
// Question No. 4
// Question No. 5