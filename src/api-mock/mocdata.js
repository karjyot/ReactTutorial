function verifyLogin(username,pwd){
    if(username == 'karan' && pwd =='karan'){
        let token = generateRandomNumber(15);
        return
    }
}

function generateRandomNumber(length){
    var result   = '';
    var characters  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}