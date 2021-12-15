import jwt from "jsonwebtoken";

const secret = "@mi_llave";
export const validarJwt = (req, res, next) => {
    let token = "";
    token = req.headers["x-access-token"] || req.headers["authorization"];
   // console.log("entro")
    if (!token) {
        req.user = { auth: false }
        return next();
    }
    if (token.startsWith("Bearer ")) {
        token = token.slice(7, token.length);
    }
    try {
        //const { uid, name_user, email } = jwt.verify(token, secret);
        console.log(jwt.verify(token, secret));
        //req.user = { auth: true, id: uid, name_user,  email };
        //return next();
    } catch (error) {
        req.user = { auth: false }
        return next();
    }

}