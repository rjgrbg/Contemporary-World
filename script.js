// Sample materials data
const materials = [
    {
        id: 1,
        title: "Lesson 5",
        description: "Finding Ryan's Daddy",
        type: "lecture",
        icon: "fa-chalkboard-teacher",
        fileName: "INTRO-TO-GLOBALIZATION (2).pptx",
        date: "December 6, 2025 at 09:20 PM"
    },
    {
        id: 2,
        title: "Lesson 4",
        description: "Theories of Globalization",
        type: "lecture",
        icon: "fa-chalkboard-teacher",
        fileName: "u-LESSON4-THEORIES OF GLOBALIZATION.pptx",
        date: "December 4, 2025 at 04:22 PM"
    },
    {
        id: 3,
        title: "Lesson 3",
        description: "Global Economy and Market Integration",
        type: "lecture",
        icon: "fa-chalkboard-teacher",
        fileName: "Global-Economy-Lecture.pptx",
        date: "November 28, 2025 at 02:15 PM"
    },
    {
        id: 4,
        title: "Reading Material 1",
        description: "Contemporary World: An Introduction",
        type: "reading",
        icon: "fa-book",
        fileName: "Contemporary-World-Reading.pdf",
        date: "November 20, 2025 at 10:30 AM"
    },
    {
        id: 5,
        title: "Assignment 1",
        description: "Globalization Impact Analysis",
        type: "assignment",
        icon: "fa-tasks",
        fileName: "Assignment-1-Guidelines.docx",
        date: "November 15, 2025 at 03:45 PM"
    }
];

let currentFilter = 'all';

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderMaterials(materials);
    setupEventListeners();
});

function renderMaterials(materialsToRender) {
    const grid = document.getElementById('materialsGrid');
    grid.innerHTML = '';
    
    materialsToRender.forEach(material => {
        const card = createMaterialCard(material);
        grid.appendChild(card);
    });
    
    updateMaterialCount(materialsToRender.length);
}

function createMaterialCard(material) {
    const card = document.createElement('div');
    card.className = 'material-card';
    card.dataset.type = material.type;
    
    const iconClass = getIconClass(material.type);
    
    card.innerHTML = `
        <div class="material-icon ${material.type}">
            <i class="fas ${iconClass}"></i>
        </div>
        <div class="material-title">${material.title}</div>
        <div class="material-description">${material.description}</div>
        <div class="material-meta">
            <span class="meta-item">
                <i class="fas fa-tag"></i>
                ${capitalizeFirst(material.type)}
            </span>
            <span class="meta-item">
                <i class="fas fa-file"></i>
                ${material.fileName}
            </span>
            <span class="meta-item">
                <i class="fas fa-calendar"></i>
                ${material.date}
            </span>
        </div>
        <div class="material-actions">
            <button class="download-btn" onclick="downloadMaterial('${material.fileName}')">
                <i class="fas fa-download"></i>
                Download
            </button>
            <button class="menu-btn">
                <i class="fas fa-ellipsis-v"></i>
            </button>
        </div>
    `;
    
    return card;
}

function getIconClass(type) {
    const icons = {
        lecture: 'fa-chalkboard-teacher',
        document: 'fa-file-alt',
        reading: 'fa-book',
        assignment: 'fa-tasks'
    };
    return icons[type] || 'fa-file';
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function setupEventListeners() {
    // Filter tabs
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const filter = tab.dataset.filter;
            currentFilter = filter;
            filterMaterials(filter);
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchMaterials(e.target.value);
    });
}

function filterMaterials(filter) {
    let filtered = materials;
    
    if (filter !== 'all') {
        filtered = materials.filter(m => m.type === filter);
    }
    
    renderMaterials(filtered);
}

function searchMaterials(query) {
    const searchTerm = query.toLowerCase();
    let filtered = materials;
    
    if (currentFilter !== 'all') {
        filtered = materials.filter(m => m.type === currentFilter);
    }
    
    if (searchTerm) {
        filtered = filtered.filter(m => 
            m.title.toLowerCase().includes(searchTerm) ||
            m.description.toLowerCase().includes(searchTerm) ||
            m.fileName.toLowerCase().includes(searchTerm)
        );
    }
    
    renderMaterials(filtered);
}

function updateMaterialCount(count) {
    // Material count removed from new design
}

function scrollToMaterials() {
    document.getElementById('materials').scrollIntoView({ behavior: 'smooth' });
}

function downloadMaterial(fileName) {
    // In a real implementation, this would trigger an actual download
    // For this static demo, we'll show an alert
    alert(`Downloading: ${fileName}\n\nIn a real implementation, this would download the file from your server.`);
    
    // Example of how you would implement actual downloads:
    // const link = document.createElement('a');
    // link.href = `/materials/${fileName}`;
    // link.download = fileName;
    // link.click();
}
