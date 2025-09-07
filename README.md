# Rithvik Panchumarthi - React Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS showcasing data engineering expertise and projects.

## 🚀 Features

- **Modern React Architecture**: Component-based structure for maintainability
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Fade-in and slide-up effects for better UX
- **Interactive Project Filtering**: Filter projects by technology and category
- **Functional Contact Form**: Integrated with Formspree for email submissions
- **Analytics Integration**: Google Analytics and Microsoft Clarity tracking
- **Performance Optimized**: Built with Vite for fast development and builds

## 🛠 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Formspree** - Form handling service

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

### Installing Node.js

**macOS (using Homebrew):**
```bash
brew install node
```

**Alternative - Download from official site:**
Visit [nodejs.org](https://nodejs.org/) and download the LTS version.

## 🚀 Getting Started

1. **Navigate to the project directory:**
   ```bash
   cd portfolio-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
portfolio-react/
├── public/
│   └── images/          # Project images and assets
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx   # Navigation header
│   │   ├── Hero.jsx     # Hero section
│   │   ├── About.jsx    # About section
│   │   ├── Projects.jsx # Projects showcase
│   │   └── Contact.jsx  # Contact form
│   ├── data/
│   │   └── projects.js  # Project data
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
└── vite.config.js       # Vite configuration
```

## 🎨 Customization

### Adding New Projects

Edit `src/data/projects.js` to add or modify projects:

```javascript
{
  id: 7,
  title: "Your New Project",
  description: "Project description...",
  technologies: ["React", "Node.js", "MongoDB"],
  github: "https://github.com/username/repo",
  image: "/images/your-project.jpg",
  featured: false
}
```

### Updating Contact Information

Modify the contact details in `src/components/Contact.jsx` and `src/components/Header.jsx`.

### Customizing Colors

Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  }
}
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deploy to GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json:**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Build and deploy:**
   ```bash
   npm run build
   npm run deploy
   ```

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on git push

## 📊 Analytics

The portfolio includes:
- **Google Analytics 4** for traffic analysis
- **Microsoft Clarity** for user behavior insights
- **Form submission tracking** for contact form interactions

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install new dependency
npm install package-name

# Update dependencies
npm update
```

## 🎯 Performance Features

- **Code Splitting**: Automatic code splitting with Vite
- **Image Optimization**: Optimized image loading
- **CSS Purging**: Unused CSS removed in production
- **Modern JavaScript**: ES6+ features with automatic polyfills

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px and above

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support, reach out via:
- Email: rithvikpanchumarthi@gmail.com
- LinkedIn: [Rithvik Panchumarthi](https://www.linkedin.com/in/rithvikpanchumarthi/)
- GitHub: [RithvikPanchumarthi](https://github.com/RithvikPanchumarthi)

---

Built with ❤️ by Rithvik Panchumarthi
