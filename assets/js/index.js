new Vue({
  el: '#app',
  delimiters: ['[[', ']]'],
  data: {
    search: '',
    activeNote: window.location.href.split('#')[1],
    menuShown: true
  },
  methods: {
    seeNote: function (note) {
      this.activeNote = note
      if (window.innerWidth < 768) {
        this.$root.$emit('bv::toggle::collapse', 'index')
      }
    },
    showMenu: function () {
      if (!this.menuShown) {
        this.$root.$emit('bv::toggle::collapse', 'index')
      }
    },
    keydown: function (e) {
      let ctrl = e.ctrlKey
      let backspace = e.keyCode === 8
      let slash = e.keyCode === 191
      let letter = e.keyCode >= 65 && e.keyCode <= 90
      if (!ctrl && (backspace || slash || letter)) {
        document.getElementById('search').focus()
      }
    },
    collapseStateChanged: function (collapseId, isJustShown) {
      this.menuShown = isJustShown
    }
  },
  updated: function () {
    // Update index in menu
    let ulElem
    for (let refName in this.$refs) {
      ulElem = this.$refs[refName]
      if (ulElem.getElementsByTagName('a').length === 0) {
        ulElem.style.display = 'none'
        ulElem.previousElementSibling.style.display = 'none'
      } else {
        ulElem.style.display = ''
        ulElem.previousElementSibling.style.display = ''
      }
    }
    // Update URL with the new search value
    let url = new URL(window.location.href)
    if (this.search) {
      url.searchParams.set('search', this.search)
    } else {
      url.searchParams.delete('search')
    }
    window.history.replaceState({}, null, url.href)
  },
  mounted: function () {
    window.addEventListener('keydown', this.keydown)
    this.$root.$on('bv::collapse::state', this.collapseStateChanged)

    let search = new URL(window.location.href).searchParams.get('search')
    this.search = search ? search : ''
  }
})
