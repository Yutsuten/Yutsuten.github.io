### Basic
```html
<p>First name: <input data-bind="value: firstName"></input></p>
<p>Last name: <input data-bind="value: lastName"></input></p>

<p>Full name: <strong data-bind="text: fullName"></strong></p>
<button data-bind="click: capitalizeLastName">Go caps</button>
```

```javascript
function AppViewModel() {
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("Bertington");
    this.fullName = ko.computed(function () {
        return this.firstName() + ' ' + this.lastName();
    }, this);

    this.capitalizeLastName = function() {
        var currentVal = this.lastName();        // Read the current value
        this.lastName(currentVal.toUpperCase()); // Write back a modified value
    };
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
```

### Lists and Collections
```html
<h2>Your seat reservations (<span data-bind="text: seats().length"></span>)</h2>
<button data-bind="click: addSeat, enable: seats().length < 5">Reserve another seat</button>

<table>
    <thead><tr>
        <th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th>
    </tr></thead>
    <tbody data-bind="foreach: seats">
        <tr>
            <td><input data-bind="value: name" /></td>
            <td><select data-bind="options: $root.availableMeals, value: meal, optionsText: 'mealName'"></select></td>
            <td data-bind="text: formattedPrice"></td>
            <td><a href="#" data-bind="click: $root.removeSeat">Remove</a></td>
        </tr>
    </tbody>
</table>

<h3 data-bind="visible: totalSurcharge() > 0">
    Total surcharge: $<span data-bind="text: totalSurcharge().toFixed(2)"></span>
</h3>
```

```javascript
// Class to represent a row in the seat reservations grid
function SeatReservation(name, initialMeal) {
    var self = this;
    self.name = name;
    self.meal = ko.observable(initialMeal);

    self.formattedPrice = ko.computed(function() {
        var price = self.meal().price;
        return price ? "$" + price.toFixed(2) : "None";
    });
}

// Overall viewmodel for this screen, along with initial state
function ReservationsViewModel() {
    var self = this;

    // Non-editable catalog data - would come from the server
    self.availableMeals = [
        { mealName: "Standard (sandwich)", price: 0 },
        { mealName: "Premium (lobster)", price: 34.95 },
        { mealName: "Ultimate (whole zebra)", price: 290 }
    ];

    // Editable data
    self.seats = ko.observableArray([
        new SeatReservation("Steve", self.availableMeals[0]),
        new SeatReservation("Bert", self.availableMeals[0])
    ]);

    self.addSeat = function() {
        self.seats.push(new SeatReservation("", self.availableMeals[0]));
    }
    self.removeSeat = function(seat) { self.seats.remove(seat) }

    self.totalSurcharge = ko.computed(function() {
       var total = 0;
       for (var i = 0; i < self.seats().length; i++)
           total += self.seats()[i].meal().price;
       return total;
    });
}

ko.applyBindings(new ReservationsViewModel());
```

### Loading and saving data
```html
<h3>Tasks</h3>

<form data-bind="submit: addTask">
    Add task: <input data-bind="value: newTaskText" placeholder="What needs to be done?" />
    <button type="submit">Add</button>
</form>

<ul data-bind="foreach: tasks, visible: tasks().length > 0">
    <li>
        <input type="checkbox" data-bind="checked: isDone" />
        <input data-bind="value: title, disable: isDone" />
        <a href="#" data-bind="click: $parent.removeTask">Delete</a>
    </li>
</ul>

You have <b data-bind="text: incompleteTasks().length">&nbsp;</b> incomplete task(s)
<span data-bind="visible: incompleteTasks().length == 0"> - it's beer time!</span>

<button data-bind="click: save">Save</button>
```

```javascript
function Task(data) {
    this.title = ko.observable(data.title);
    this.isDone = ko.observable(data.isDone);
}

function TaskListViewModel() {
    // Data
    var self = this;
    self.tasks = ko.observableArray([]);
    self.newTaskText = ko.observable();
    self.incompleteTasks = ko.computed(function() {
        return ko.utils.arrayFilter(self.tasks(), function(task) { return !task.isDone() && !task._destroy });
    });

    // Operations
    self.addTask = function() {
        self.tasks.push(new Task({ title: this.newTaskText() }));
        self.newTaskText("");
    };
    self.removeTask = function(task) { self.tasks.destroy(task) };

    $.getJSON("/tasks", function(allData) {
        var mappedTasks = $.map(allData, function(item) { return new Task(item) });
        self.tasks(mappedTasks);
    });

    self.save = function() {
        $.ajax("/tasks", {
            data: ko.toJSON({ tasks: self.tasks }),
            type: "post", contentType: "application/json",
            success: function(result) { alert(result) }
        });
    };
}

ko.applyBindings(new TaskListViewModel());
```
