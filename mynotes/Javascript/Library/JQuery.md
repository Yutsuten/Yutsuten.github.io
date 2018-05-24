#### index.js
```javascript
// Get the number of selected items by the selector
$('.selector').length;

// Add and remove class
$('.selector').addClass('selected');
$('.selector').removeClass('selected');

// Selected radio box
$('input[name=group1]:checked').val()

// Events
$('select').change(function() {
    // Remove element in select
    $(this).find('option[value=""]').remove();
});

// Ajax
$.get(url, function(response) {
    console.log(response);
});
var data = {field1: 'hello'}
$.post(url, data, function(response) {
    console.log(response);
});
```
