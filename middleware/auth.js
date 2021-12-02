const jwt = require('jsonwebtoken');

module.exports = (req ,res, next) => {
    try {
        const token= req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token,'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        req.auth = { userId };
        if (req.body.userId && req.body.userId !== userId){
            throw 'user id not valid';
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json( {error} || 'Requete non authentifiée' );
    }
};
