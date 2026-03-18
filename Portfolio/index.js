const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const siblings = [...e.target.parentElement.querySelectorAll('.reveal')];
          e.target.style.transitionDelay = (siblings.indexOf(e.target) * 0.09) + 's';
          e.target.classList.add('on');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
 
    document.querySelectorAll('.proj-card').forEach(card => {
      card.addEventListener('mousemove', function(e) {
        const r = this.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width  - 0.5;
        const y = (e.clientY - r.top)  / r.height - 0.5;
        this.style.transform = `translateY(-7px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
      });
      card.addEventListener('mouseleave', function() { this.style.transform = ''; });
    });
 
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');
    window.addEventListener('scroll', () => {
      let cur = '';
      sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
      navLinks.forEach(a => { a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--rose)' : ''; });
    });