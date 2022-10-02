const isAdmin = (req, res, next) => {
  try {
    if (req.user?.role && req.user?.role !== "ADMIN") {
      res.status(401).json({
        message: 'Unauthorized',
      });
    }
    next();
  } catch (e) {
    console.log(e);
    res.status(400).json({
      message: 'User is not logged in',
    });
  }
}

export const hasRole = (req, res, next) => {
  try {
    if (!req.user?.role) {
      res.status(401).json({
        message: 'Unauthorized',
      });
    }
    next();
  } catch (e) {
    console.log(e);
    res.status(400).json({
      message: 'User is not logged in',
    });
  }
}

export default isAdmin;