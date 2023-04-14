// // Get the date and day of the week
// const today = new Date();
// const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const dayOfWeek = daysOfWeek[today.getDay()];

// // Update the date in the HTML
// const dateElement = document.getElementById("date");
// dateElement.textContent = `${dayOfWeek}, ${today.toLocaleDateString()}`;

// // Update the date every day at midnight
// setInterval(() => {
//   const today = new Date();
//   const dayOfWeek = daysOfWeek[today.getDay()];
//   dateElement.textContent = `${dayOfWeek}, ${today.toLocaleDateString()}`;
// }, 24 * 60 * 60 * 1000);


// //Calendar Date picker

// const date_picker_element = document.querySelector('.date-picker');
// const selected_date_element = document.querySelector('.date-picker .selected-date');
// const dates_element = document.querySelector('.date-picker .dates');
// const mth_element = document.querySelector('.date-picker .dates .month .mth');
// const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth');
// const prev_mth_element = document.querySelector('.date-picker .dates .month .prev-mth');
// const days_element = document.querySelector('.date-picker .dates .days');

// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// let date = new Date();
// let day = date.getDate();
// let month = date.getMonth();
// let year = date.getFullYear();

// let selectedDate = date;
// let selectedDay = day;
// let selectedMonth = month;
// let selectedYear = year;

// mth_element.textContent = months[month] + ' ' + year;

// selected_date_element.textContent = formatDate(date);
// selected_date_element.dataset.value = selectedDate;

// populateDates();

// // EVENT LISTENERS
// date_picker_element.addEventListener('click', toggleDatePicker);
// next_mth_element.addEventListener('click', goToNextMonth);
// prev_mth_element.addEventListener('click', goToPrevMonth);

// // FUNCTIONS
// function toggleDatePicker (e) {
// 	if (!checkEventPathForClass(e.path, 'dates')) {
// 		dates_element.classList.toggle('active');
// 	}
// }

// function goToNextMonth (e) {
// 	month++;
// 	if (month > 11) {
// 		month = 0;
// 		year++;
// 	}
// 	mth_element.textContent = months[month] + ' ' + year;
// 	populateDates();
// }

// function goToPrevMonth (e) {
// 	month--;
// 	if (month < 0) {
// 		month = 11;
// 		year--;
// 	}
// 	mth_element.textContent = months[month] + ' ' + year;
// 	populateDates();
// }

// function populateDates (e) {
// 	days_element.innerHTML = '';
// 	let amount_days = 31;

// 	if (month == 1) {
// 		amount_days = 28;
// 	}

// 	for (let i = 0; i < amount_days; i++) {
// 		const day_element = document.createElement('div');
// 		day_element.classList.add('day');
// 		day_element.textContent = i + 1;

// 		if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
// 			day_element.classList.add('selected');
// 		}

// 		day_element.addEventListener('click', function () {
// 			selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
// 			selectedDay = (i + 1);
// 			selectedMonth = month;
// 			selectedYear = year;

// 			selected_date_element.textContent = formatDate(selectedDate);
// 			selected_date_element.dataset.value = selectedDate;

// 			populateDates();
// 		});

// 		days_element.appendChild(day_element);
// 	}
// }

// // HELPER FUNCTIONS
// function checkEventPathForClass (path, selector) {
// 	for (let i = 0; i < path.length; i++) {
// 		if (path[i].classList && path[i].classList.contains(selector)) {
// 			return true;
// 		}
// 	}
	
// 	return false;
// }
// function formatDate (d) {
// 	let day = d.getDate();
// 	if (day < 10) {
// 		day = '0' + day;
// 	}

// 	let month = d.getMonth() + 1;
// 	if (month < 10) {
// 		month = '0' + month;
// 	}

// 	let year = d.getFullYear();

// 	return day + ' / ' + month + ' / ' + year;
// }
 document.querySelector('button').addEventListener('click', getFetch)

 function getFetch() {
    const choice = document.querySelector('input').value
    const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'+choice

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error${err}`)
    });
 }
