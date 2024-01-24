/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
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

/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/
const tabs = document.querySelectorAll('.tabs_wrap ul li')

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((tab) => {
      tab.classList.remove('active')
    })

    tab.classList.add('active')
  })
})
