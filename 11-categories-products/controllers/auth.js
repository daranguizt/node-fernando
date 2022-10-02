import generateJWT from "../helpers/jwt.js";

export const login = async (req, res) => {
  try {
    const { uid } = req.user;

    const token = await generateJWT({ uid });
    req.user.token = token;
    

    res.json({
      message: 'auth successful',
      user: req.user,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send('Internal server error');
  }
}

