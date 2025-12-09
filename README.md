# Contemporary World SOCSCI1 - Learning Management System

A modern, clean static website LMS for downloading course materials including PowerPoint presentations, documents, and other educational resources.

## 🎯 Features

- 📚 Multiple pages: Home, About, Classwork, Materials
- 📥 Real file downloads (PPTX, PDF, DOCX)
- 🎨 Clean, modern UI design
- 📱 Fully responsive
- 🔍 Material filtering by type
- ⚡ Fast and lightweight

## 🚀 Quick Start

### 1. Download/Clone this project

### 2. Add your files
Create a `files` folder and add your materials:
```
your-website/
├── files/
│   ├── your-presentation.pptx
│   ├── your-document.pdf
│   └── your-assignment.docx
```

### 3. Open with a local server
**Don't open HTML files directly!** Use a local server:

**Python:**
```bash
python -m http.server 8000
```

**Node.js:**
```bash
npx http-server
```

**VS Code:**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

### 4. Visit in browser
Open `http://localhost:8000` (or the port shown)

## 📝 Adding Your Materials

Edit `materials.js` and update the materials array:

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

## 📁 File Structure

```
/
├── index.html              # Homepage
├── materials.html          # Materials download page
├── classwork.html          # Classwork page
├── about.html              # About page
├── styles.css              # All styling
├── materials.js            # Materials data & logic
├── files/                  # Your PPTX, PDF, DOCX files
│   ├── *.pptx
│   ├── *.pdf
│   └── *.docx
├── README.md
└── HOW-TO-ADD-FILES.md    # Detailed guide
```

## 🌐 Deployment

### GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Settings → Pages → Enable
4. Visit: `https://yourusername.github.io/repo-name`

### Netlify (Easiest)
1. Go to netlify.com
2. Drag & drop your folder
3. Done! Instant live site

### Vercel
1. Go to vercel.com
2. Import project
3. Deploy

## 📚 For Large Files

If your PPTX files are large (>10MB), use cloud storage:

**Google Drive:**
1. Upload file → Share → Anyone with link
2. Get file ID from URL
3. Use: `https://drive.google.com/uc?export=download&id=FILE_ID`

## 🎨 Customization

**Colors:** Edit CSS variables in `styles.css`:
```css
:root {
    --primary-dark: #3d4b6e;
    --accent-red: #e63946;
    /* etc. */
}
```

**Materials:** Update `materials.js`

**Layout:** Modify HTML files

## 📖 Need Help?

See `HOW-TO-ADD-FILES.md` for detailed instructions on:
- Setting up local servers
- Adding real files
- Deploying online
- Using cloud storage
- Troubleshooting

## 📄 License

Free to use for educational purposes.
