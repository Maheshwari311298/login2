const{UserLogin} = require('../module/module')

exports.LoginGuest = function(_loginData){
    return new Promise((resolve, reject) => {
        console.log("asd",_loginData);
        UserLogin(_loginData)
            .then((response) => {
                return resolve(response);
            }).catch((error) => {
                return reject(error);
            });
    });
}
