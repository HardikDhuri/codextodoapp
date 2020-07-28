exports.getDate =  () => {
    const today = new Date();
    const options = { 
        weekday : "long",
        month : "long", 
        day : "numeric"
    };
    return today.toLocaleDateString("en-US", options);
}

exports.getDay =  () => {
    const today = new Date();
    const options = { 
        weekday : "long",
    };
    const day = today.toLocaleDateString("en-US", options);
    return day;
}