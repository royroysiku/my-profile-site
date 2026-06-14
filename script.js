// 네비게이션 스크롤 효과
const navbar = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobile-menu');
const menuToggle = document.getElementById('menu-toggle');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 모바일 메뉴 토글
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// 모바일 메뉴 링크 클릭 시 닫기
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer를 사용한 페이드인 효과
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// 섹션에 fade-in 클래스 추가하고 옵저버 등록
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// 카드 요소들에도 페이드인 효과 적용
document.querySelectorAll('.glass-card, .tech-card, .project-card').forEach(card => {
    card.classList.add('fade-in');
    observer.observe(card);
});

// 페이지 로드 시 hero 섹션은 즉시 보이도록
document.querySelector('section').classList.remove('fade-in');
document.querySelector('section').classList.add('visible');

// 스크롤 시 활성 섹션 네비게이션 표시
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
}, { threshold: 0.4 });

sections.forEach(section => sectionObserver.observe(section));
