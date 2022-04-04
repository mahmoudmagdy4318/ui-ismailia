exports.CustomError = (message, code) =>{
    const err = new Error(message);
    err.code = code;
    return err;
}

exports.getSum = (x, y) =>x+y;

exports.getDivision = (x, y) =>x/y;
