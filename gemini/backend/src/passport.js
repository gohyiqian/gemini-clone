const passportJwt = require("passport-jwt");
const Users = require("./models/Users");

const { ExtractJwt, Strategy } = passportJwt;

const options = {
  secretOrKey: process.env.JWT_SECRET,
  /**
   * This tells the server how to extract the JWT token.
   * In this case, this means I will extract token from the request headers from the "Authorization" property.
   * The value for that header must be "Bearer {token}"
   */
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

// When Strategy is run, passportJWT decode JWT token
const strategy = new Strategy(options, async (payload, callback) => {
  // Further verify if user exist
  const user = await Users.findOne({ username: payload.username });

  if (!user) {
    return callback(new Error("User not found"), null);
  }
  return callback(null, { username: user.username });
});

module.exports = strategy;
