export const required = value => {
    if(value) return undefined
    return "Field is required";
}

export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength) return "maxLength is 10 symbol";
    return undefined;
}

export const maxLength30 = value => {
    if(value && value.length > 30) return undefined
    return "Field is required";
}