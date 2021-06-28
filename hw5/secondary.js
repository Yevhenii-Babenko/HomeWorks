let bg = "background-color";

let dash = ', '

function camelize(str, separator){
    let splitedStr = str.split(separator);
    
    return splitedStr;
}

console.log(camelize(bg, dash))