import jwt from 'jsonwebtoken';

const generateJWT = (data) => {
  return new Promise((resolve, reject) => {
    const { uid } = data;
    const payload = { uid };

    jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: '4h',
    }, (err, token) => {
      if (err) {
        console.log(err);
        reject('Token could not be generated');
      }
      resolve(token);
    });

  });
}

export default generateJWT;