const mongoose = require("mongoose");

const userModer = new mongoose.Schema(
  {
    iss: { type: String, required: true },
    nbf: { type: String, required: true },
    aud: { type: String, required: true },
    sub: { type: String, required: true },
    email: { type: String, required: true },
    email_verified: { type: Boolean },
    name: { type: String, required: true },
    picture: { type: String, required: true },
    given_name: { type: String, required: true },
    family_name: { type: String,  },
    iat: { type: String, required: true },
    exp: { type: String, required: true },
    jti: { type: String, required: true },
    cart:[],
  },
  { timestamps: true, versionKey: false }
);
module.exports = mongoose.model("GoogleUsers", userModer);
