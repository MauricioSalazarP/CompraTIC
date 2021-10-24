const mongoose  = require("mongoose"); 
const Schema  = require("mongoose"); 

const UserSchema = new mongoose.Schema(
  {
    //name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    
    rol: {
      type: Schema.Types.ObjectId,
      ref: 'Rol',
      required: true,
      //** ID del rol de "Indefinido" (sacado directamente de la base de datos) */
      default: '616ae58281481faff2532920'
  },

    img: { type: String },
    idToken: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
