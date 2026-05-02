function nextPage(pageNum) {
    // Sabhi pages se 'active' class hatao
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Sirf target page ko 'active' karo
    document.getElementById('page' + pageNum).classList.add('active');
}

// Page 3 Sparkle Effect
const zone = document.getElementById('sparkle-zone');

zone.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.left = e.clientX + 'px';
    sparkle.style.top = e.clientY + 'px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.fontSize = Math.random() * 20 + 10 + 'px';
    
    document.body.appendChild(sparkle);

    // Fade and remove sparkle
    setTimeout(() => {
        sparkle.style.transition = '1s';
        sparkle.style.opacity = '0';
        sparkle.style.transform = 'translateY(-50px)';
        setTimeout(() => sparkle.remove(), 1000);
    }, 100);
});
