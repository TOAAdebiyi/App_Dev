const helper = function(data){
    return `${data} is logged in`

}

const id= function(i){
    return `${i}`
}

let email = function(e){
    return e 
}

// one line export object//

module.exports ={
    helper, id, email
}

/*
/  individual export 
module.exports.helper = helper
module.exports.id = id 
module.exports.email = email
*/