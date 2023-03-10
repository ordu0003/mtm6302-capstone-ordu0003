// Get the calendar table and body elements
const table = document.querySelector('.calendar-table');
const body = document.querySelector('.calendar-body');

// Set the initial date to the current date
let currentDate = new Date();

// Function to generate the calendar for a given month and year
function generateCalendar(month, year) {
  // Clear the calendar body
  body.innerHTML = '';

  // Set the date to the first day of the given month and year
  let date = new Date(year, month, 1);

  // Set the calendar month header
  const monthHeader = document.querySelector('.calendar-month');
  monthHeader.innerHTML = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  // Loop through the days of the week and create the calendar cells
  for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td');
      if (date.getMonth() === month) {
        cell.innerHTML = date.getDate();
      }
      row.appendChild(cell);
      date.setDate(date.getDate() + 1);
    }
    body.appendChild(row);
  }
}

// Generate the calendar for the current month and year
generateCalendar(currentDate.getMonth(), currentDate.getFullYear());

// Add event listeners to the prev-month and next-month buttons
const prevMonthButton = document.querySelector('.prev-month');
prevMonthButton.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  generateCalendar(currentDate.getMonth(), currentDate.getFullYear());
});

const nextMonthButton = document.querySelector('.next-month');
nextMonthButton.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  generateCalendar(currentDate.getMonth(), currentDate.getFullYear());
});
