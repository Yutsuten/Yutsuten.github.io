class IndexTree {
  constructor () {
    this.root = {children: []}
  }

  addNode (path) {
    let currentNode = this.root
    path.split('/').forEach(function (subPath, index, pathArray) {
      let text = subPath.charAt(0).toUpperCase() + subPath.slice(1)
      let childNode = currentNode.children.find(node => node.text === text)
      if (!childNode) {
        let href = index === pathArray.length - 1 ? `#${path.replace(/\//g, '-')}` : null
        childNode = {text: text, href: href, children: []}
        currentNode.children.push(childNode)
      }
      currentNode = childNode
    })
  }
}


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
      let indexTree = new IndexTree()
      this.notesIndexList.forEach(path => indexTree.addNode(path))
      this.indexTree = indexTree.root.children
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
