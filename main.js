const timeline = gsap.timeline({defaults: {duration: 1}});

timeline
    .from('.letter-i', {duration: 3, scaleY: 0, transformOrigin: 'bottom', ease: 'elastic.out(1, 0.3)' })
    .from('.logo-circle', {y: '-700%', ease: 'bounce' }, 1)
    .from('.fade-in', {duration: 0.5, scaleY: 0, transformOrigin: 'top', ease: 'power4.inOut'}, 1.5)
    .from('.logo-border', {duration: 0.9, x:-1000, rotation: 720}, 2)

