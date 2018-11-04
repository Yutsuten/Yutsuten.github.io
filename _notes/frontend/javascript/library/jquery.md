---
---

#### index.js
```javascript
// Get the number of selected items by the selector
$('.selector').length;

// Add and remove class
$('.selector').addClass('selected');
$('.selector').removeClass('selected');

// Add and remove attributes
$('.selector').attr('disabled', '');
$('.selector').removeAttr('disabled');

// Selected radio box
$('input[name=group1]:checked').val()

// Events
$('select').change(function() {
    // Remove element in select
    $(this).find('option[value=""]').remove();
});

// Select: add/remove options
$('select').empty();
$('select').append($('<option>', {
    value: '',
    text: 'Select an option'
}));

// Ajax
$.get(url, function(response) {
    console.log(response);
});
var data = {field1: 'hello'}
$.post(url, data, function(response) {
    console.log(response);
});
```
