function stringify(array, string){
    array.forEach(element => {
        if(string != "")
            string = `${string}, ${element}`
        else
            string = element;   
    });
    return string;
}

function getEqual(body){
    return `${body.column} = ${body.id}`
}

function toWhere(body){
    return `Where ${getEqual(body)}`;
}

function getBody(column, id){
    return  body = {
                column: column,
                id: id
            }
}

module.exports ={
    stringify,
    getEqual,
    toWhere,
    getBody
};