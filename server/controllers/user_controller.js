const express = require("express")
const user = express.Router()
const db = require('../models')
const User = db.User