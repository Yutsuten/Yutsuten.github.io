new Vue({
  el: '#app',
  delimiters: ['[[', ']]'],
  data: {
    search: '',
    activeNote: window.location.href.split('#')[1],
    notesIndexList: [],
    indexTree: [],
    menuShown: true
  },
  methods: {
    seeNote: function (click) {
      this.activeNote = click.target.hash.substr(1)
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
    },
    updateIndexTree: function () {
      let self = this
      self.indexTree = []

      let notesIndexDict = {}
      self.notesIndexList.forEach(function (noteIndex) {
        let pathArray = noteIndex.split('/')
        let rootIndex = pathArray.shift()
        if (!Object.prototype.hasOwnProperty.call(notesIndexDict, rootIndex)) {
          notesIndexDict[rootIndex] = []
        }
        notesIndexDict[rootIndex].push({
          text: pathArray.join('/'),
          href: `#${noteIndex.replace(/\//g, '-')}`
        })
      })

      for (let rootIndex in notesIndexDict) {
        self.indexTree.push({
          text: rootIndex.charAt(0).toUpperCase() + rootIndex.slice(1),
          list: notesIndexDict[rootIndex]
        })
      }
    }
  },
  updated: function () {
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
    let rawIndexDataElement = document.getElementById('raw-index-data')
    this.notesIndexList = JSON.parse(rawIndexDataElement.textContent)
    rawIndexDataElement.remove()
    this.updateIndexTree()

    window.addEventListener('keydown', this.keydown)
    this.$root.$on('bv::collapse::state', this.collapseStateChanged)

    let search = new URL(window.location.href).searchParams.get('search')
    this.search = search ? search : ''
  }
})
