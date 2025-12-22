# Contemporary World SOCSCI1 - Learning Management System

A Node.js/Express-based Learning Management System for downloading course materials including PowerPoint presentations, documents, and other educational resources.

## 🎯 Features

- 📚 Multiple pages: Home, About, Materials, Contact
- 📥 Real file downloads (PPTX, PDF, DOCX)
- 🎨 Clean, modern UI design
- 📱 Fully responsive
- 🔍 Material filtering by type
- ⚡ Fast and lightweight
- 🚀 Express.js server

## 📁 Project Structure

```
├── server.js              # Express server
├── package.json           # Node.js dependencies
├── public/               # Static files served by Express
│   ├── index.html        # Homepage
│   ├── about.html        # About page
│   ├── materials.html    # Materials download page
│   ├── contact.html      # Contact page
│   ├── styles.css        # All styling
│   ├── script.js         # Main JavaScript
│   ├── materials.js      # Materials data & logic
│   ├── contact.js        # Contact form logic
│   ├── hero-slideshow.js # Homepage slideshow
│   ├── about-slideshow.js # About page slideshow
│   └── images/           # Image assets
└── files/                # Course materials (PPTX, PDF, DOCX)
```

## 🚀 Installation

1. **Install Node.js** (if not already installed)
   - Download from [nodejs.org](https://nodejs.org/)

2. **Install dependencies:**
```bash
npm install
```

## 🏃 Running the Application

### Development Mode (with auto-restart):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The application will run on **http://localhost:3000**

## 📝 Adding Your Materials

Edit `public/materials.js` and update the materials array:

```javascript
{
    id: 1,
    title: "Your Lesson Title",
    description: "Brief description",
    type: "lecture", // lecture, document, reading, or assignment
    fileName: "Display-Name.pptx",
    filePath: "files/Actual-Filename.pptx",
    date: "December 9, 2025 at 10:00 AM"
}
```

## 🌐 Deployment

### Heroku
```bash
heroku create
git push heroku main
```

### Render / Railway
- Connect your GitHub repository
- Set build command: `npm install`
- Set start command: `npm start`

### VPS (DigitalOcean, AWS, etc.)
```bash
npm install
npm start
```

## 🎨 Customization

**Colors:** Edit CSS variables in `public/styles.css`:
```css
:root {
    --primary-dark: #3d4b6e;
    --accent-red: #e63946;
}
```

**Materials:** Update `public/materials.js`

**Layout:** Modify HTML files in `public/`

## 📄 License

Free to use for educational purposes.
