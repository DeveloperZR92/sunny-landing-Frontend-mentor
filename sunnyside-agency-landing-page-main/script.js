const hamBtn = document.getElementById('btn')
const navLinks = document.getElementById('menu')

hamBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})
