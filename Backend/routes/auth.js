const router  = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const { validarGoogle } = require('../middlewares/validar-google');
const { generarJWT } = require('../helpers/jwt');

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    // username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Wrong credentials!");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    OriginalPassword !== req.body.password &&
      res.status(401).json("Wrong credentials!");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      {expiresIn:"3d"}
    );

    const { password, ...others } = user._doc;

    res.status(200).json({...others, accessToken});
  } catch (err) {
    res.status(500).json(err);
  }
});

//** Router Auth Google */
router.post('/google/login', validarGoogle, async (req, resp = response) => {

  const {uid: idToken, name, email} = req;
            
  try {
      //** .populate trae los datos de esa llave */
      let usuario = await User
      .findOne({
          email, 
          idToken
      })
      .populate('rol');
      if(usuario) {
          if(usuario.rol.name==='Indefinido'){
              resp.status(401).json({
                  ok: false,
                  msg: 'Usuario no autorizado por el admin'
              });
          } else {
              const token = await generarJWT(usuario.id, usuario.name);
              resp.json({
                  ok: true,
                  msg: 'Ok',
                  uid: usuario.id,
                  name: usuario.name,
                  token
              });
          }
      } else{
        newUser = new User({
              name,
              email,
              password: idToken,
              idToken
          });
          const savedUser = await newUser.save();
          resp.status(201).json({
            ok: true,
            msg: 'Usuario creado con exito',
            uid: savedUser.id,
            name: savedUser.name,
          })
      }
      
  } catch (error) {
      
  }
  resp.json({
      ok: true,
      msg: "Google login exitoso"
  });
});

module.exports = router;
