
function LoginUser(_data){
    console.log('Data',_data);
    return new Promise((resolve, reject) => {
        if(_data.email === 'maheshwari@gmail.com' && _data.password === '12345678') {
            var success_response = {
                status_code:200,
                success_msg: 'User Login success'

            }
            return resolve(success_response);
        }

        else {
            var error = {
                status_code:400,
                error_msg: 'User Login Failed'

            }
            return reject(error);
        }
        
    });
}

module.exports = {LoginUser}