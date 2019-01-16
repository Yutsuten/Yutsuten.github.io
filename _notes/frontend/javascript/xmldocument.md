---
---

### Generating a XMLDocument
```javascript
// A XML
var doc = document.implementation.createDocument(null, 'root', null);

// RDF
var doc = document.implementation.createDocument('http://www.w3.org/1999/02/22-rdf-syntax-ns#', 'rdf:RDF', null);

// Common commands
var root = doc.documentElement;
var anElement = doc.createElement('div');
anElement.setAttribute('class', 'container');
anElement.textContent('Hello World');
root.appendChild(anElement);

// Serialize
var serializer = new XMLSerializer();
return serializer.serializeToString(doc);
```
