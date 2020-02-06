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
    showMenu: function() {
      if (!this.menuShown) {
        this.$root.$emit('bv::toggle::collapse', 'index')
      }
    }
  },
  updated: function () {
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
    // Update URL with new search value
    let url = new URL(window.location.href)
    if (this.search) {
      url.searchParams.set('search', this.search)
    } else {
      url.searchParams.delete('search')
    }
    window.history.replaceState({}, null, url.href)
  },
  mounted: function () {
    let self = this
    window.addEventListener('keydown', function (e) {
      let ctrl = e.ctrlKey
      let backspace = e.keyCode === 8
      let slash = e.keyCode === 191
      let letter = e.keyCode >= 65 && e.keyCode <= 90
      if (!ctrl && (backspace || slash || letter)) {
        document.getElementById('search').focus()
      }
    })
    self.$root.$on('bv::collapse::state', function (collapseId, isJustShown) {
      self.menuShown = isJustShown
    })

    let url = new URL(window.location.href)
    let search = url.searchParams.get('search', '')
    if (search) {
      self.search = search
    }
  }
})
