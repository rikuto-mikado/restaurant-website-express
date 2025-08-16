const dotenv = require("dotenv");
dotenv.config();

const menuItems = require('./data/menuItems.json');
const newsItems = require('./data/newsItems.json');
const restaurantInfo = require('./data/restaurantInfo.json');

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


/* --------------------------
   Page Routing
-------------------------- */
app.get('/', (req, res) => {
    res.render('pages/home', {
        title: 'Home',
        active: 'home',
        restaurantInfo: restaurantInfo
    });
});

app.get('/about', (req, res) => {
    res.render('pages/about', {
        title: 'About Us',
        active: 'about',
        restaurantInfo: restaurantInfo
    });
});

app.get('/menu', (req, res) => {
    res.render('pages/menu', {
        title: 'Menu',
        active: 'menu',
        menuItems: menuItems
    });
});

app.get('/news', (req, res) => {
    res.render('pages/news', {
        title: 'News',
        active: 'news',
        newsItems: newsItems
    });
});

app.get('/contact', (req, res) => {
    res.render('pages/contact', {
        title: 'Contact',
        active: 'contact',
        successMessage: null,
        errorMessage: null
    });
});


/* --------------------------
   Contact Form (POST handler)
-------------------------- */
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.render("pages/contact", {
            title: "Contact",
            active: "contact",
            successMessage: null,
            errorMessage: "Please fill in all fields."
        });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `New Contact: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending mail:", error);
            return res.render("pages/contact", {
                title: "Contact",
                active: "contact",
                successMessage: null,
                errorMessage: "Failed to send. Please try again."
            });
        }

        console.log("Message sent:", info.response);
        res.render("pages/contact", {
            title: "Contact",
            active: "contact",
            successMessage: "Message sent successfully!!",
            errorMessage: null
        });
    });
});


app.use((req, res, next) => {
    res.status(404).render('pages/404', { title: 'Page Not Found', active: '' });
});


/* --------------------------
   Start Server
-------------------------- */

app.listen(3000, () => {
    console.log('Server is working at http://localhost:3000');
});
 

