function getDeviceType() {
  const width = window.innerWidth;
  if (width >= 1200) return "Computer";
  if (width >= 992) return "Laptop";
  if (width >= 768) return "Tablet";
  return "Phone";
}

window.addEventListener("resize", () => {
  console.log("Current device type:", getDeviceType());
});

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(drop => {
  const header = drop.querySelector('.dropdown-header');
  const panel = drop.querySelector('.dropdown-window');

  header.addEventListener('click', () => {
    const isOpen = drop.classList.contains('open');

    dropdowns.forEach(d => {
      d.classList.remove('open');
      d.querySelector('.dropdown-window').style.maxHeight = null;
    });

    if (!isOpen) {
      drop.classList.add('open');
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });

  panel.addEventListener('transitionend', () => {
    if (drop.classList.contains('open')) {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

window.addEventListener('resize', () => {
  dropdowns.forEach(drop => {
    if (drop.classList.contains('open')) {
      const panel = drop.querySelector('.dropdown-window');
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});
