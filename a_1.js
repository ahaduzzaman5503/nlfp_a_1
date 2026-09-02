function describeValue (value) {
    const inputedValueType = typeof value;
    const valueTypeResult = value? "truthy" : "falsy";
    return `${inputedValueType} | ${valueTypeResult}`;
}

