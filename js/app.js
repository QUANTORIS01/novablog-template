const openBtn = document.getElementById('open-search');
const closeBtn = document.getElementById('close-search');
const overlay = document.getElementById('search-overlay');
openBtn.addEventListener('click', () => {
    overlay.classList.add('active');
});
closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        overlay.classList.remove('active');
    }
});
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.remove('active');
    }
});