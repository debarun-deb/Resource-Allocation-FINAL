exports.restrict = (...role) => {
    return (req, res, next) => {
      // console.log('User Role:', req.user.role); for debugging purposes
      // console.log('Allowed Roles:', role); // Log the user's role for debugging
      if (!role.includes(req.user.role)) {
        res.status(403).json({ message: "Forbidden" });
      } else {
        next();
      }
    };
  };