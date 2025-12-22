// Contact Form Handler
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
});

function handleSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Create email content
    const recipientEmail = 'garabiag.arjay04@gmail.com';
    const emailSubject = `Contact Form: ${subject}`;
    const emailBody = `
Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `.trim();
    
    // Create mailto link
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Show success message
    showSuccessMessage();
    
    // Reset form after a short delay
    setTimeout(() => {
        document.getElementById('contactForm').reset();
    }, 1000);
}

function showSuccessMessage() {
    // Create success toast
    const toast = document.createElement('div');
    toast.className = 'success-toast';
    toast.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <div>
            <strong>Message Sent!</strong>
            <p>We'll get back to you within 24 hours.</p>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 5000);
}

// Add styles for success toast
const style = document.createElement('style');
style.textContent = `
    .success-toast {
        position: fixed;
        top: 100px;
        right: 30px;
        background: white;
        padding: 20px 24px;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        gap: 15px;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        border-left: 4px solid #1a4d2e;
    }
    
    .success-toast.show {
        transform: translateX(0);
    }
    
    .success-toast i {
        font-size: 2rem;
        color: #1a4d2e;
    }
    
    .success-toast strong {
        display: block;
        color: #1a4d2e;
        font-size: 1.1rem;
        margin-bottom: 4px;
    }
    
    .success-toast p {
        margin: 0;
        color: #6c757d;
        font-size: 0.9rem;
    }
`;
document.head.appendChild(style);
