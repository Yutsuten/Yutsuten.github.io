#### index.css
```css
/* Background with gradient */
.my-element {
    background-color: #fff; /* Backwards compatibility */
    background: -moz-linear-gradient(top, #ffffff 0%, #a6dbfb 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, #ffffff 0%, #a6dbfb 100%); /* Chrome10-25, Safari5.1-6 */
    background: linear-gradient(to bottom, #ffffff 0%, #a6dbfb 100%);
}

/* Inner shadow */
.my-element {
    -moz-box-shadow:    inset 0 0 15px #96d7fc;
    -webkit-box-shadow: inset 0 0 15px #96d7fc;
    box-shadow:         inset 0 0 15px #96d7fc;
}
```

