document.addEventListener('DOMContentLoaded', () => {

    // --- MOBILE MENU TOGGLE ---
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // --- ACTIVE NAV LINK ON SCROLL ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function checkActiveSection() {
        let scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 150; // offset for fixed header
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', checkActiveSection);

    // --- SKILLS FILTERING ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to current button
            button.classList.add('active');
            
            const category = button.getAttribute('data-category');
            
            skillCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || cardCategory === category) {
                    card.classList.remove('hidden');
                    // Add subtle scaling entrance animation
                    card.style.animation = 'fadeInUp 0.4s ease forwards';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // --- PROJECT MODALS DATABASE ---
    const GITHUB_PROFILE = 'https://github.com/ranaramprajapat-alt';
    const GITHUB_USER = 'ranaramprajapat-alt';
    const projectData = {
        "multiplayer-games": {
            title: "Multiplayer Game Zone",
            badge: "TypeScript Platform",
            desc: "A real-time multiplayer minigames platform featuring Drawing Guess, Ludo, and Snake & Ladders, built with React 19, TypeScript, Socket.io, and Express.",
            bullets: [
                "Client app built using React 19, TypeScript, and Tailwind CSS v4.",
                "Real-time multiplayer synchronization and active room lobbies via Socket.io.",
                "Room matchmaking and state management handlers designed on an Express server."
            ],
            tags: ["React 19", "TypeScript", "Tailwind CSS v4", "Socket.io", "Express", "Node.js"],
            badgeColors: { bg: 'rgba(157, 78, 221, 0.15)', text: '#c084fc', border: 'rgba(157, 78, 221, 0.25)' },
            githubUrl: `${GITHUB_PROFILE}/multiplayer-games`,
            previewUrl: 'https://9z8pxw-3000.csb.app/',
            liveLabel: 'Open on CodeSandbox'
        },
        "ai-3d-concept-visualizer": {
            title: "AI 3D Concept Visualizer",
            badge: "3D Visualization",
            desc: "An interactive, web-based tool designed to model and explore artificial intelligence concepts and neural structures in a WebGL-powered 3D space.",
            bullets: [
                "Leverages TypeScript for rigid object-oriented node configurations.",
                "Visualizes complex neural networks and layered data connection graphs.",
                "Supports orbit camera movement controls, zooms, and interactive node selections."
            ],
            tags: ["TypeScript", "WebGL", "Three.js", "AI Visuals", "Graphics Programming"],
            badgeColors: { bg: 'rgba(0, 242, 254, 0.15)', text: '#00f2fe', border: 'rgba(0, 242, 254, 0.25)' },
            githubUrl: `${GITHUB_PROFILE}/ai-3d-concept-visualizer`,
            previewUrl: 'https://c87wcf-3000.csb.app/',
            liveLabel: 'Open on CodeSandbox'
        },
        "Notebook": {
            title: "Notebook",
            badge: "AI Learning Tool",
            desc: "AI Notes Assistant that lets users upload notes, ask questions, and extract insights. Designed to help students recap lectures faster.",
            bullets: [
                "Parses structural notes to extract core summaries and formulas.",
                "Implements conversational question-answering on notes context.",
                "Crafted with vanilla JavaScript for lightweight study tool execution."
            ],
            tags: ["JavaScript", "LLM Integration", "Parsing Algorithms", "Study Tools", "HTML/CSS"],
            badgeColors: { bg: 'rgba(0, 242, 254, 0.15)', text: '#00f2fe', border: 'rgba(0, 242, 254, 0.25)' },
            githubUrl: `${GITHUB_PROFILE}/Notebook`,
            previewUrl: 'https://443ddh.csb.app/',
            liveLabel: 'Open on CodeSandbox'
        },
        "Royal-King-s-Advanger-Game": {
            title: "Royal King's Game",
            badge: "3D Game",
            desc: "A 3D fantasy exploration game concept featuring royal kingdom landscapes, character vectors, and collision logic.",
            bullets: [
                "Implements character controls, boundary collisions, and vector physics.",
                "Programmed scene event loops and trigger states in JavaScript.",
                "Designed responsive game HUD layers using custom HTML and CSS."
            ],
            tags: ["JavaScript", "Game Loop", "Collision Logic", "Math Vectors", "User Interface Design"],
            badgeColors: { bg: 'rgba(244, 63, 94, 0.15)', text: '#fda4af', border: 'rgba(244, 63, 94, 0.25)' },
            githubUrl: `${GITHUB_PROFILE}/Royal-King-s-Advanger-Game`,
            previewUrl: 'https://royal-king-s-advanger-game.vercel.app/',
            liveLabel: 'Open on Vercel'
        },
        "ATS": {
            title: "ATS Resume Screener",
            badge: "HR Tech / AI",
            desc: "Applicant Tracking System logic designed to screen, filter, and score candidate resumes against job description keywords.",
            bullets: [
                "Matches resumes against specific JDs to calculate suitability ratios.",
                "Identifies missing technical credentials and highlights optimization areas.",
                "Designed lightweight text-matching algorithms in JavaScript."
            ],
            tags: ["JavaScript", "Text Parsing", "Regex matching", "Algorithms", "Document Screening"],
            badgeColors: { bg: 'rgba(157, 78, 221, 0.15)', text: '#c084fc', border: 'rgba(157, 78, 221, 0.25)' },
            githubUrl: `${GITHUB_PROFILE}/ATS`,
            previewUrl: null,
            liveLabel: null
        }
    };

    const modal = document.getElementById('projectModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalTitle = document.getElementById('modalTitle');
    const modalBadge = document.getElementById('modalBadge');
    const modalDesc = document.getElementById('modalDesc');
    const modalList = document.getElementById('modalList');
    const modalTags = document.getElementById('modalTags');
    const modalGithubLink = document.getElementById('modalGithubLink');
    const modalPreviewBtn = document.getElementById('modalPreviewBtn');

    // Preview tab elements
    const modalContentDetails = document.getElementById('modalContentDetails');
    const modalContentPreview = document.getElementById('modalContentPreview');
    const tabDetails = document.getElementById('tabDetails');
    const tabPreview = document.getElementById('tabPreview');
    const previewIframe = document.getElementById('previewIframe');
    const previewLoading = document.getElementById('previewLoading');
    const previewError = document.getElementById('previewError');
    const previewUrlText = document.getElementById('previewUrlText');
    const previewOpenExternal = document.getElementById('previewOpenExternal');
    const previewErrorGithub = document.getElementById('previewErrorGithub');

    let currentPreviewUrl = '';
    let currentGithubUrl = '';

    // --- TAB SWITCHING ---
    function switchTab(tab) {
        if (tab === 'details') {
            tabDetails.classList.add('active');
            tabPreview.classList.remove('active');
            modalContentDetails.classList.remove('hidden');
            modalContentPreview.classList.add('hidden');
        } else {
            tabPreview.classList.add('active');
            tabDetails.classList.remove('active');
            modalContentPreview.classList.remove('hidden');
            modalContentDetails.classList.add('hidden');
            loadPreview(currentPreviewUrl, currentGithubUrl);
        }
    }

    tabDetails.addEventListener('click', () => switchTab('details'));
    tabPreview.addEventListener('click', () => switchTab('preview'));

    // --- PREVIEW LOADER ---
    function loadPreview(previewUrl, githubUrl) {
        previewIframe.src = '';
        previewError.style.display = 'none';
        previewLoading.style.display = 'flex';
        previewUrlText.textContent = previewUrl;
        previewOpenExternal.href = previewUrl;
        previewErrorGithub.href = githubUrl;

        // Set iframe src and handle load/error
        previewIframe.onload = () => {
            previewLoading.style.display = 'none';
            // Try to detect if the page loaded properly
            try {
                const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
                if (!iframeDoc || iframeDoc.title === '' && iframeDoc.body.innerHTML.trim() === '') {
                    showPreviewError();
                }
            } catch(e) {
                // Cross-origin — assume loaded OK
                previewLoading.style.display = 'none';
            }
        };
        previewIframe.onerror = () => showPreviewError();

        // Timeout fallback: if no load event in 8s, show error
        const timeout = setTimeout(() => {
            if (previewLoading.style.display !== 'none') showPreviewError();
        }, 8000);

        previewIframe.onload = () => {
            clearTimeout(timeout);
            previewLoading.style.display = 'none';
        };

        previewIframe.src = previewUrl;
    }

    function showPreviewError() {
        previewLoading.style.display = 'none';
        previewIframe.src = '';
        previewError.style.display = 'flex';
    }

    const projectTriggers = document.querySelectorAll('.project-link-btn');

    function openModal(projectId) {
        const data = projectData[projectId];
        if (!data) return;

        // Reset to Details tab
        switchTab('details');

        modalTitle.textContent = data.title;
        modalBadge.textContent = data.badge;
        modalDesc.textContent = data.desc;

        // Store URLs
        currentPreviewUrl = data.previewUrl || '';
        currentGithubUrl = data.githubUrl || `https://github.com/${GITHUB_USER}`;

        // Update GitHub link
        modalGithubLink.href = currentGithubUrl;

        // Preview button
        modalPreviewBtn.onclick = () => switchTab('preview');
        modalBadge.className = 'modal-badge';
        if (data.badgeColors) {
            modalBadge.style.background = data.badgeColors.bg;
            modalBadge.style.color = data.badgeColors.text;
            modalBadge.style.borderColor = data.badgeColors.border;
        } else {
            modalBadge.style.background = 'rgba(0, 242, 254, 0.15)';
            modalBadge.style.color = '#00f2fe';
            modalBadge.style.borderColor = 'rgba(0, 242, 254, 0.25)';
        }

        // Populate lists
        modalList.innerHTML = '';
        data.bullets.forEach(bullet => {
            const li = document.createElement('li');
            li.textContent = bullet;
            modalList.appendChild(li);
        });

        // Populate tags
        modalTags.innerHTML = '';
        data.tags.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'modal-tag';
            span.textContent = tag;
            modalTags.appendChild(span);
        });

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        // Reset iframe to stop loading
        if (previewIframe) previewIframe.src = '';
    }

    projectTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const id = trigger.getAttribute('data-project');
            openModal(id);
        });
    });

    if (modalClose && modalOverlay) {
        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', closeModal);

        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // --- CONTACT FORM SUBMISSION ---
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const btnSubmitForm = document.getElementById('btnSubmitForm');

    if (contactForm && formSuccess) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Visual submission state
            btnSubmitForm.disabled = true;
            btnSubmitForm.innerHTML = 'Sending... <svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10" stroke-dasharray="40" stroke-dashoffset="0"></circle></svg>';
            
            // Simulate server response after 1.5 seconds
            setTimeout(() => {
                formSuccess.style.display = 'block';
                contactForm.reset();
                btnSubmitForm.disabled = false;
                btnSubmitForm.innerHTML = 'Send Message <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>';
                
                // Hide banner after 5 seconds
                setTimeout(() => {
                    formSuccess.style.display = 'none';
                }, 5000);
            }, 1500);
        });
    }

    // --- SCROLL ANIMATIONS USING INTERSECTION OBSERVER ---
    const revealElements = document.querySelectorAll('.skill-card, .project-card, .timeline-content, .fact-card, .resume-box, .contact-form, .contact-method');
    
    // Add default hidden inline styles if they aren't initialized
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(25px)';
        el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // only animate once
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

});
