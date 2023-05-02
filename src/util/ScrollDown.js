const ScrollDown = target => {
    const targetElement = document.getElementById(target);
    targetElement.scrollIntoView({ behavior: 'smooth' });
}

export default ScrollDown;