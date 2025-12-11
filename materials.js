// Sample materials data
// All files from your 'files' folder are now included!

const materials = [
    {
        id: 1,
        title: "Lesson 1: Introduction to Globalization",
        description: "Comprehensive introduction to globalization concepts and theories",
        type: "lecture",
        fileName: "INTRO-TO-GLOBALIZATION.pptx",
        filePath: "files/INTRO-TO-GLOBALIZATION.pptx",
        date: "December 6, 2025 at 09:20 PM"
    },
    {
        id: 2,
        title: "Lesson 2: Theories of Globalization",
        description: "Exploring different theoretical perspectives on globalization",
        type: "lecture",
        fileName: "u-LESSON4-THEORIES OF GLOBALIZATION.pptx",
        filePath: "files/u-LESSON4-THEORIES OF GLOBALIZATION.pptx",
        date: "December 4, 2025 at 04:22 PM"
    },
    {
        id: 3,
        title: "Lesson 3: History of Modern-Day Globalization",
        description: "Historical development and evolution of globalization",
        type: "lecture",
        fileName: "LESSON 3-HISTORY-OF-MODERN-DAY-GLOBALIZATION.pptx",
        filePath: "files/LESSON 3-HISTORY-OF-MODERN-DAY-GLOBALIZATION.pptx",
        date: "November 28, 2025 at 02:15 PM"
    },
    {
        id: 4,
        title: "Lesson 2: Globalization Metaphor",
        description: "Understanding globalization through metaphors and analogies",
        type: "lecture",
        fileName: "FOR UPLOADGLOBALIZATION-METAPHOR-2.pptx",
        filePath: "files/FOR UPLOADGLOBALIZATION-METAPHOR-2.pptx",
        date: "November 25, 2025 at 03:30 PM"
    },
    {
        id: 5,
        title: "Module 5: Global Inequality",
        description: "Examining global inequality with focus on Latin America and ASEAN regions",
        type: "lecture",
        fileName: "for uploadMODULE 5-GLOBAL-INEQUALITY-LATIN-AMERICA-ASEAN.pptx",
        filePath: "files/for uploadMODULE 5-GLOBAL-INEQUALITY-LATIN-AMERICA-ASEAN.pptx",
        date: "November 22, 2025 at 01:15 PM"
    },
    {
        id: 6,
        title: "Lesson 6: Northern and Southern Countries",
        description: "Analysis of global north-south divide and development disparities",
        type: "lecture",
        fileName: "NORTHERN-AND-SOUTHERN-COUNTRIES.pptx",
        filePath: "files/NORTHERN-AND-SOUTHERN-COUNTRIES.pptx",
        date: "November 20, 2025 at 10:30 AM"
    },
    {
        id: 7,
        title: "Lesson 7-B: Demographic, Migration & Urbanization",
        description: "Understanding global demographic trends, migration patterns, and urbanization",
        type: "lecture",
        fileName: "Lesson 7-B_Demographic_Migration_Urbanization.pptx",
        filePath: "files/Lesson 7-B_Demographic_Migration_Urbanization.pptx",
        date: "November 18, 2025 at 02:45 PM"
    },
    {
        id: 8,
      title: Lesson 7: Global Population and Mobility",
        description: "Comprehensive study of global population dynamics and human mobility",
        type: "lecture",
        fileName: "MODULE 7-Global-Population-and-Mobility.pptx",
        filePath: "files/MODULE 7-Global-Population-and-Mobility.pptx",
        date: "November 15, 2025 at 11:00 AM"
    },
    {
        id: 9,
        title: "Lesson 8: Asian Regionalism",
        description: "Exploring regional integration and cooperation in Asia",
        type: "reading",
        fileName: "UPLOAD-LESSON 8-Asian Regionalism (3).pdf",
        filePath: "files/UPLOAD-LESSON 8-Asian Regionalism (3).pdf",
        date: "November 12, 2025 at 09:30 AM"
    },
    {
        id: 10,
        title: "Lesson 16: Globalization & Pandemic",
        description: "Impact of global pandemics on globalization processes",
        type: "reading",
        fileName: "LAST LESSON 16-Globalization_Pandemic_.pdf",
        filePath: "files/LAST LESSON 16-Globalization_Pandemic_.pdf",
        date: "November 10, 2025 at 03:00 PM"
    },
    {
        id: 11,
        title: "Quiz: Asian Regionalism",
        description: "Assessment quiz for Lesson 8 on Asian Regionalism",
        type: "reading",
        fileName: "QUIZ-LESSON8- ASIAN REGIONALISM.pdf",
        filePath: "files/QUIZ-LESSON8- ASIAN REGIONALISM.pdf",
        date: "November 8, 2025 at 10:00 AM"
    },
    {
        id: 12,
        title: "Presentation Materials",
        description: "Additional presentation resources and materials",
        type: "reading",
        fileName: "Presentation1.pdf",
        filePath: "files/Presentation1.pdf",
        date: "November 5, 2025 at 02:15 PM"
    },
    {
        id: 13,
        title: "Contemporary World Syllabus 2025",
        description: "Complete course syllabus and requirements for 2025",
        type: "reading",
        fileName: "CONTEMPORARY WORLD SYLLABUS 2025.doc",
        filePath: "files/CONTEMPORARY WORLD SYLLABUS 2025.doc",
        date: "September 1, 2025 at 08:00 AM"
    },
    {
        id: 14,
        title: "Activity TWC",
        description: "Class activity and exercises for The World Contemporary",
        type: "assignment",
        fileName: "ACTIVITY TWC 11_20_2025.docx",
        filePath: "files/ACTIVITY TWC 11_20_2025.docx",
        date: "November 20, 2025 at 01:00 PM"
    },
    {
        id: 15,
        title: "TWC September Assignment",
        description: "The World Contemporary assignment for September",
        type: "assignment",
        fileName: "TWC-Sept.docx",
        filePath: "files/TWC-Sept.docx",
        date: "September 15, 2025 at 04:30 PM"
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
    
    if (materialsToRender.length === 0) {
        grid.innerHTML = '<p style="text-align: center; color: var(--text-light); grid-column: 1/-1;">No materials found.</p>';
        return;
    }
    
    materialsToRender.forEach(material => {
        const card = createMaterialCard(material);
        grid.appendChild(card);
    });
}

function createMaterialCard(material) {
    const card = document.createElement('div');
    card.className = 'material-item';
    card.dataset.type = material.type;
    
    const iconClass = getIconClass(material.type);
    
    card.innerHTML = `
        <div class="material-item-icon">
            <i class="fas ${iconClass}"></i>
        </div>
        <div class="material-item-title">${material.title}</div>
        <div class="material-item-description">${material.description}</div>
        <div class="material-item-meta">
            <span class="meta-badge">
                <i class="fas fa-tag"></i>
                ${capitalizeFirst(material.type)}
            </span>
            <span class="meta-info">
                <i class="fas fa-file"></i>
                ${material.fileName}
            </span>
            <span class="meta-info">
                <i class="fas fa-calendar"></i>
                ${material.date}
            </span>
        </div>
        <div class="material-item-actions">
            <button class="download-btn-material" onclick="downloadMaterial('${material.filePath}', '${material.fileName}')">
                <i class="fas fa-download"></i>
                Download
            </button>
            <button class="menu-btn-material" onclick="showMenu(event)">
                <i class="fas fa-ellipsis-v"></i>
            </button>
        </div>
    `;
    
    return card;
}

function getIconClass(type) {
    const icons = {
        lecture: 'fa-file-powerpoint',
        document: 'fa-file-word',
        reading: 'fa-file-pdf',
        assignment: 'fa-clipboard-list'
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
}

function filterMaterials(filter) {
    let filtered = materials;
    
    if (filter !== 'all') {
        filtered = materials.filter(m => m.type === filter);
    }
    
    renderMaterials(filtered);
}

function downloadMaterial(filePath, fileName) {
    console.log('Downloading:', filePath);
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.target = '_blank'; // Open in new tab if download fails
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show feedback
    showDownloadFeedback(fileName);
    
    console.log('Download triggered for:', fileName);
}

function showDownloadFeedback(fileName) {
    // Create a simple toast notification
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #2c3e50;
        color: white;
        padding: 16px 24px;
        border-radius: 50px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    toast.innerHTML = `<i class="fas fa-check-circle"></i> Downloading ${fileName}...`;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}

function showMenu(event) {
    event.stopPropagation();
    alert('Menu options:\n- View details\n- Share\n- Report issue');
}

// Add CSS for toast animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
