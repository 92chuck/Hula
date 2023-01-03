const User = require("../models/User");
const bcrypt = require("bcrypt");
const SALT = parseInt(process.env.SALT);
const { createTokens } = require("../middleware/JWT");

exports.getUser = async (req, res) => {
  try {
    if (!req.authenticate) {
      res.status(200).json(null);
    } else {
      const user = await User.findById(req.user.id)
        .populate("sfavorites")
        .populate("mfavorites");
      res.status(200).json({
        id: user._id,
        username: user.username,
        email: user.email,
        sfavorites: user.sfavorites,
        mfavorites: user.mfavorites,
      });
    }
  } catch (e) {
    console.error(e);
    res.status(409);
  }
};

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hasedPassword = await bcrypt.hash(password, SALT);
    const newUser = await User.create({
      username,
      email,
      password: hasedPassword,
    });
    res.status(201);
    const token = createTokens(newUser);
    res.json({
      success: true,
      token: token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        sfavorites: newUser.sfavorites,
        mfavorites: newUser.mfavorites,
      },
    });
  } catch (e) {
    console.error(e);
    res.status(409);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
      .populate("sfavorites")
      .populate("mfavorites");
    if (!user) {
      res.status(401).json("Login failed: Invalid email");
    }
    const hasedPassword = user.password;
    const match = bcrypt.compare(password, hasedPassword);
    if (!match) {
      res.status(401).json("Login failed: Invalid password");
    } else {
      const token = createTokens(user);
      res.status(200).json({
        success: true,
        token: token,
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          sfavorites: user.sfavorites,
          mfavorites: user.mfavorites,
        },
      });
    }
  } catch (e) {
    console.error(e);
    res.status(500);
  }
};

exports.updateFavorite = async (req, res) => {
  try {
    const { userId, contentId, category } = req.body;
    let userFavorite;
    const user = await User.findById(userId);
    if (category === "series") {
      userFavorite = user.sfavorites;
      userFavorite.push(contentId);
      await user.updateOne({ sfavorites: userFavorite }, { new: true });
    } else {
      userFavorite = user.mfavorites;
      userFavorite.push(contentId);
      await user.updateOne({ mfavorites: userFavorite }, { new: true });
    }
    const updatedUser = await User.findById(userId)
      .populate("sfavorites")
      .populate("mfavorites");
    res.status(200).json({
      id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      sfavorites: updatedUser.sfavorites,
      mfavorites: updatedUser.mfavorites,
    });
  } catch (e) {
    console.error(e);
    res.status(500);
  }
};

exports.removeFavorite = async (req, res) => {
  try {
    const { userId, contentId, category } = req.body;
    let userFavorite;
    const user = await User.findById(userId);
    if (category === "series") {
      userFavorite = user.sfavorites;
      const idx = userFavorite.indexOf(contentId);
      userFavorite.splice(idx, 1);
      await user.updateOne({ sfavorites: userFavorite }, { new: true });
    } else {
      userFavorite = user.mfavorites;
      const idx = userFavorite.indexOf(contentId);
      userFavorite.splice(idx, 1);
      await user.updateOne({ mfavorites: userFavorite }, { new: true });
    }
    const updatedUser = await User.findById(userId)
      .populate("sfavorites")
      .populate("mfavorites");
    res.status(200).json({
      id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      sfavorites: updatedUser.sfavorites,
      mfavorites: updatedUser.mfavorites,
    });
  } catch (e) {
    console.error(e);
    res.status(500);
  }
};
