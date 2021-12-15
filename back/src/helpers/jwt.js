import jwt from "jsonwebtoken";

const secret = "@mi_llave";
export const generarJwt = (uid, role) => {
    return new Promise((resolve, reject) => {
        const payload = {
            uid,
            role
        }

        jwt.sign(payload, secret, { expiresIn: "2h" },
            (err, token) => {
                if (err) {
                    console.log(err)
                    reject("No se pudo generar el Token")
                }

                resolve(token)
            }
        )
    })
};