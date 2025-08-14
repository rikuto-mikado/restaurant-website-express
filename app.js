const dotenv = require("dotenv");
dotenv.config();

const blogPosts = require('./data/blogPosts.json');
const portfolioItems = require('./data/portfolioItems.json');

const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer"); 
const expressLayouts = require("express-ejs-layouts");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));