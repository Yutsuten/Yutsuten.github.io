new Vue({
  el: '#app',
  delimiters: ['[[', ']]'],
  data: {
    menu_class: 'menu',
    profile_class: 'active',
    education_class: '',
    work_class: '',
    skills_class: '',
    contact_class: '',
  },
  methods: {
    handleScroll: function () {
      if (window.scrollY > 370) {
        this.menu_class = 'menu affix'
      } else {
        this.menu_class = 'menu'
      }

      let elementsId = ['education', 'work-experience', 'skills', 'contact']
      let elementsTop = {}

      // Find top of each element relative to the viewport
      for (let i = 0; i < elementsId.length; i++) {
        let elem = document.getElementById(elementsId[i])
        let elemRect = elem.getBoundingClientRect()
        elementsTop[elementsId[i]] = elemRect.top
      }

      // Find the biggest that doesn't surpass the threshold
      let threshold = 20
      let biggestTopElement = 'top'
      let biggestTop = -999999
      for (let elementId in elementsTop) {
        let top = elementsTop[elementId]
        if (top < threshold && top > biggestTop) {
          biggestTop = top
          biggestTopElement = elementId
        }
      }

      this.profile_class = ''
      this.education_class = ''
      this.work_class = ''
      this.skills_class = ''
      this.contact_class = ''
      switch (biggestTopElement) {
        case 'top':
          this.profile_class = 'active'
          break
        case 'education':
          this.education_class = 'active'
          break
        case 'work-experience':
          this.work_class = 'active'
          break
        case 'skills':
          this.skills_class = 'active'
          break
        case 'contact':
          this.contact_class = 'active'
          break
      }
    }
  },
  created () {
    document.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    document.removeEventListener('scroll', this.handleScroll)
  }
})
