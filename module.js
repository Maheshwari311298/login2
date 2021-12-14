const{LoginUser} = require('../api/api');

function UserLogin(_data) {
    return new Promise((resolve,reject)=>{
        LoginUser(_data)
        .then((response)=>{
            return resolve(response);
        }).catch((error)=>{
            return reject(error);
        })
    })
}


module.exports = {UserLogin}