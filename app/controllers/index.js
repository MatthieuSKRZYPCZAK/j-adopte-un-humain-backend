const animalsController = require("./animals");
const usersController = require("./users");
const authController = require("./auth");
const tagsController = require("./tags");
const rolesController = require("./roles");
const photosController = require("./photos");
const adoptsController = require("./adopts");
const avatarsController = require("./avatars");


module.exports =  { 
    authController,
    usersController,
    animalsController,
    tagsController,
    rolesController,
    photosController,
    adoptsController,
    avatarsController
 };