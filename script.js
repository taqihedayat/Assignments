// Initial count value
let count = 0;

// Get the elements by ID
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const countDisplay = document.getElementById('count');

// Function to update the count display
function updateCount() {
    countDisplay.textContent = count;
}

// Event listener for the + button
increaseButton.addEventListener('click', function() {
    count += 1;
    updateCount();
});

// Event listener for the - button
decreaseButton.addEventListener('click', function() {
    count -= 1;
    updateCount();
});


// Get the table element
const table = document.querySelector('table');

// Add a single event listener to the table
table.addEventListener('click', function(event) {
    // Check if the clicked element is a <td>
    if (event.target.tagName === 'TD') {
        // Get the x and y coordinates of the mouse click
        const x = event.clientX;
        const y = event.clientY;
        
        // Display the coordinates inside the clicked <td> element
        event.target.innerHTML = `x: ${x}, y: ${y}`;
    }
});
// Get the list and the add button
const todoList = document.getElementById('todo-list');
    const addButton = document.getElementById('add-item');

    // Function to create and add a new list item
    function addListItem(itemText) {
        // Create <li> element
        const li = document.createElement('li');
        
        // Create <span> element to hold the item description
        const span = document.createElement('span');
        span.textContent = itemText;
        
        // Create <a> link for deleting the item
        const deleteLink = document.createElement('a');
        deleteLink.textContent = 'Delete';
        deleteLink.classList.add('delete');
        
        // Append <span> and <a> inside <li>
        li.appendChild(span);
        li.appendChild(deleteLink);
        
        // Add event listener for clicking on the <li> to toggle "done" class
        li.addEventListener('click', function() {
            li.classList.toggle('done');
        });
        
        // Add event listener for clicking the delete link to remove the item
        deleteLink.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the click from bubbling up to the <li>
            li.remove(); // Remove the <li> element
        });

        // Append the <li> to the list
        todoList.appendChild(li);
    }

    // Add a default item to demonstrate functionality
    addListItem('Homework');

    // Add event listener to the "Add Item" button to prompt for new item text
    addButton.addEventListener('click', function() {
        const newItemText = prompt('Enter new to-do item:');
        if (newItemText) {
            addListItem(newItemText); // Add the new item to the list
        }
    });