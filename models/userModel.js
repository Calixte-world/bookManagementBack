//En résumé, ce code définit une fonction generateAuthToken qui utilise la bibliothèque jsonwebtoken pour créer un JWT signé
//avec une clé secrète spécifiée. Ce JWT contient les données { data: 'bar', role: 'admin'}.


var jwt = require('jsonwebtoken');


const generateAuthToken = async function() {
    var token = jwt.sign({ data: 'bar', role: 'admin'}, 'cledechiffrage');
    return token
}


module.exports = {
    generateAuthToken
};  