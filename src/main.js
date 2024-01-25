/*~~~~~~~~~~~~~~~ Mobile Toggle Button ~~~~~~~~~~~~~~~*/
const mobileMenuBtn = document.querySelector('#mobile-menu-btn')
const navMenu = document.querySelector('#nav-menu')
const navCloseMenu = document.querySelector('#nav-close')
const navLink = document.querySelectorAll('.nav__link')

navLink.forEach((link) =>
  link.addEventListener('click', () => {
    navMenu.classList.add('hidden')
  })
)

navCloseMenu.addEventListener('click', () => {
  navMenu.classList.add('hidden')
})

mobileMenuBtn.addEventListener('click', () => {
  navMenu.classList.remove('hidden')
})

/*~~~~~~~~~~~~~~~ Tabs ~~~~~~~~~~~~~~~*/
const tabs = document.querySelectorAll('.tabs_wrap ul li')
const all = document.querySelectorAll('.item_wrap')
const foods = document.querySelectorAll('.food')
const snacks = document.querySelectorAll('.snack')
const beverages = document.querySelectorAll('.beverage')

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((tab) => {
      tab.classList.remove('active')
    })

    tab.classList.add('active')

    const tabVal = tab.getAttribute('data-tabs')
    all.forEach((item) => {
      item.style.display = 'none'
    })

    switch (tabVal) {
      case 'food':
        foods.forEach((item) => {
          item.style.display = 'block'
        })
        break
      case 'snack':
        snacks.forEach((item) => {
          item.style.display = 'block'
        })
        break
      case 'beverage':
        beverages.forEach((item) => {
          item.style.display = 'block'
        })
        break
      default:
        all.forEach((item) => {
          item.style.display = 'block'
        })
    }
  })
})

/*~~~~~~~~~~~~~~~ Scroll Up ~~~~~~~~~~~~~~~*/
const scrollUp = () => {
  const scrollUpBtn = document.querySelector('#scroll-up-btn')

  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove('-bottom-1/2')
    scrollUpBtn.classList.add('bottom-4')
  } else {
    scrollUpBtn.classList.add('-bottom-1/2')
    scrollUpBtn.classList.remove('bottom-4')
  }
}
window.addEventListener('scroll', scrollUp)

/*~~~~~~~~~~~~~~~ Change Header Background ~~~~~~~~~~~~~~~*/
const scrollHeader = () => {
  const header = document.querySelector('#header')

  if (this.scrollY >= 50) {
    header.classList.add('border-b', 'border-theme-secondary')
  } else {
    header.classList.remove('border-b', 'border-theme-secondary')
  }
}
window.addEventListener('scroll', scrollHeader)

/*~~~~~~~~~~~~~~~ Switch Dark/Light Themes ~~~~~~~~~~~~~~~*/
const html = document.querySelector('html')
const themeToggleBtn = document.querySelector('#theme-toggle-btn')

const darkMode = (isDark) => {
  if (isDark) {
    html.classList.remove('dark')
    themeToggleBtn.classList.replace('ri-sun-line', 'ri-moon-line')
    localStorage.removeItem('themeMode')
  } else {
    html.classList.add('dark')
    themeToggleBtn.classList.replace('ri-moon-line', 'ri-sun-line')
    localStorage.setItem('themeMode', 'dark')
  }
}

if (localStorage.getItem('themeMode') == 'dark') darkMode()

themeToggleBtn.addEventListener('click', () => {
  darkMode(localStorage.getItem('themeMode') === 'dark')
})
