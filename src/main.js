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
