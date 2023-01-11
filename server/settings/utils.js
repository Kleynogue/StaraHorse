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

function fixArray(array1, array2){
    let array3 = [];
    let array4 = [];
    for (let i = 0; i < array1.length; i++) {
        if(array2[i] !== "''"){
            array3.push(array1[i]);
            array4.push(array2[i]);
        }
    };
    return {
        array3,
        array4
    }
}

function getArray(body){
    return Object.keys(body);
}

function getValues(body, array){
    array2 = [];
    array.forEach(element => {
        if(typeof(body[element]) === "string"){
            array2.push(`'${body[element]}'`);
        }else{
            array2.push(body[element])
        }
    });
    return array2;
}

function getStructure(body){
    columns = getArray(body);
    values = getValues(body, getArray(body));
    x = fixArray(columns, values);
    return {
        columns: x.array3,
        values: x.array4
    };
}

module.exports ={
    stringify,
    getEqual,
    toWhere,
    getBody,
    fixArray,
    getArray,
    getValues,
    getStructure
};