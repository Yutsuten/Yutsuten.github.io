### Selectors
```css
/* Selects the nth child. if the element specified doesn't match the
child element (ie: div), it won't select anything. */
:first-child
:last-child
:nth-child(n)

/* Selects the nth of the type. If no element is specified before this
pseudo class, every first of type will be selected (ie: h1, div) */
:first-of-type
:last-of-type
:nth-of-type(n)

/* Selects every element that does not match the selector */
:not(selector)

/* Pseudo-elements */
::before
::after
::selection
```

### Examples
```css
/* If the second child isn't a div, it won't select anything */
.parent > div:nth-child(2) {
    background: blue;
}

/* Select the second div */
.parent > div:nth-of-type(2) {
    background: blue;
}

/* Select even or odd */
tr td:nth-child(even) {
    background-color: #fff;
}
tr td:nth-child(odd) {
    background-color: #ebf4f9;
}

/* Pseudo-elements content */
h1::before {
    content: '- ';
}
h1::after {
    content: ':';
}
```

