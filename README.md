# Restaurant Website Express

A modern, responsive restaurant website built with Node.js, Express, and EJS. Features dynamic menu management, reservation system, and elegant design optimized for showcasing culinary experiences.

## 🍽️ Features

- **Dynamic Menu System**: Menu items managed via JSON files with categories, prices, and descriptions
- **Reservation Form**: Contact form for table reservations with email notifications
- **Responsive Design**: Mobile-first approach with elegant food photography layouts
- **News & Events**: Dynamic announcement system for special events and menu updates
- **About Section**: Restaurant story, chef profiles, and interior showcases
- **Contact Information**: Integrated maps, hours, and location details

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript templates) for server-side rendering
- **Styling**: SASS/SCSS for organized, maintainable stylesheets
- **Email**: Nodemailer for reservation confirmations
- **Environment Variables**: Dotenv for secure configuration

## 🚀 Getting Started

Follow these instructions to get the restaurant website running on your local machine.

### Prerequisites

- Node.js (v14 or higher)
- npm package manager
- Gmail account with App Password (for contact form functionality)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/restaurant-website-express.git
   cd restaurant-website-express
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory:
   ```env
   # Email Configuration
   EMAIL_USER=your-restaurant-email@gmail.com
   EMAIL_PASS=your-google-app-password
   
   # Restaurant Configuration
   RESTAURANT_NAME="Your Restaurant Name"
   RESTAURANT_PHONE="+1-234-567-8900"
   RESTAURANT_ADDRESS="123 Main St, City, State 12345"
   ```

### Running the Application

1. **Compile SASS to CSS:**
   ```bash
   npm run sass
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Visit the website:**
   Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
restaurant-website-express/
├── app.js                      # Main Express application
├── data/                       # JSON data files
│   ├── menuItems.json          # Restaurant menu with categories
│   ├── newsItems.json          # Announcements and events
│   └── restaurantInfo.json     # Basic restaurant information
├── public/                     # Static assets
│   ├── css/                    # Compiled CSS files
│   ├── js/                     # Client-side JavaScript
│   └── images/                 # Image assets
│       ├── food/               # Menu item photos
│       ├── interior/           # Restaurant interior photos
│       └── staff/              # Staff and chef photos
├── sass/                       # SASS source files
│   ├── _variables.scss         # Color and layout variables
│   ├── _mixins.scss           # Reusable SASS mixins
│   ├── _components/           # Component-specific styles
│   └── style.scss              # Main stylesheet import
├── views/                      # EJS templates
│   ├── layout.ejs             # Main layout template
│   ├── partials/              # Reusable components
│   │   ├── header.ejs
│   │   ├── footer.ejs
│   │   └── navigation.ejs
│   └── pages/                 # Page templates
│       ├── home.ejs
│       ├── menu.ejs
│       ├── about.ejs
│       ├── contact.ejs
│       └── news.ejs
├── .env                       # Environment variables (create this)
├── .gitignore                 # Git ignore rules
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```

## 🎨 Customization

### Menu Management
Update menu items by editing `data/menuItems.json`:
```json
{
  "appetizers": [
    {
      "name": "Bruschetta Trio",
      "description": "Three varieties of our signature bruschetta",
      "price": "$12.00",
      "image": "/images/food/bruschetta.jpg",
      "popular": true
    }
  ]
}
```

### Restaurant Information
Modify restaurant details in `data/restaurantInfo.json`:
```json
{
  "name": "Bella Vista",
  "tagline": "Authentic Italian Cuisine",
  "hours": {
    "monday": "Closed",
    "tuesday": "5:00 PM - 10:00 PM",
    "wednesday": "5:00 PM - 10:00 PM"
  }
}
```

### Styling
Customize the appearance by modifying SASS files in the `sass/` directory:
- `_variables.scss`: Colors, fonts, and layout variables
- `_components/`: Individual component styles
- `main.scss`: Overall layout and imports

## 📧 Contact Form Setup

The reservation system uses Nodemailer with Gmail. To set up:

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password in your Google Account settings
3. Add the credentials to your `.env` file
4. The form will automatically send reservation requests to your email

## 🚀 Deployment

### Deploy to Render
1. Connect your GitHub repository to Render
2. Set environment variables in the Render dashboard
3. Deploy with these settings:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

### Deploy to Heroku
1. Install the Heroku CLI
2. Create a new Heroku app
3. Set environment variables: `heroku config:set EMAIL_USER=your-email`
4. Deploy: `git push heroku main`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🍴 About

Built with passion for great food and clean code. This template provides a solid foundation for any restaurant looking to establish a professional online presence with modern web technologies.

---

**Made with ❤️ and ☕ by [Your Name]**