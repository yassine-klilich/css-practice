let datePicker = document.getElementById('date-picker');
let datePickerCalenderWeek = datePicker.querySelector('.date-picker-calender-week-numbers');

window.addEventListener('load', function() {
	initCalendar(new Date());
})


let currentDate = new Date();

/**
 * Initialize the calendar
 * @param {Date} date 
 */
function initCalendar(date) {
	generateCalendar(date);

}




function generateCalendar(date) {
	let currentMonth = date.getMonth();
	let actualCurrentMonth = currentMonth + 1;
	let currentYear = date.getFullYear();
	let numberOfDaysForCurrentMonth = new Date(currentYear, actualCurrentMonth, 0).getDate();
	let firstDayOfTheCurrentMonth = new Date(currentYear, currentMonth, 1).getDay();
	let numberOfDaysForPreviousMonth = getNumberOfDaysForPreviousMonth(currentYear, currentMonth);
	let startIterateAt = (firstDayOfTheCurrentMonth == 0) ? 1 : ((firstDayOfTheCurrentMonth - 1) * -1);
	let weekDayNumber = 1;
	

	datePickerCalenderWeek.innerHTML = "";
	//let trElement = document.createElement('tr');
	let weekRow = document.createElement('div');
	weekRow.classList.add('date-picker-calender-week');
	
	let i = startIterateAt;
	for (; i <= numberOfDaysForCurrentMonth; i++) {
			//let tdElement = document.createElement('td');
	
			let weekDayCell = document.createElement('div');
			let dayNumberWrapper = document.createElement('div');
			let dayNumber = document.createElement('div');
			weekDayCell.classList.add('date-picker-calender-week-number-cell');
			dayNumberWrapper.classList.add('date-picker-calender-week-number-wrapper');
			dayNumber.classList.add('date-picker-calender-week-number');
			dayNumberWrapper.appendChild(dayNumber);
			weekDayCell.appendChild(dayNumberWrapper);

			if(i <= 0) {
					//tdElement.textContent = numberOfDaysForPreviousMonth + i;
					dayNumber.textContent = numberOfDaysForPreviousMonth + i;
			}
	
			if(i > 0){
					//tdElement.textContent = i;
					//tdElement.classList.add('active');
					dayNumber.textContent = i;
					weekDayCell.classList.add('date-picker-calender-active');
			}
			
			
			if(weekDayNumber == 7){
					weekDayNumber = 1;
					weekRow.appendChild(weekDayCell);
					datePickerCalenderWeek.appendChild(weekRow);
					weekRow = document.createElement('div');
					weekRow.classList.add('date-picker-calender-week');
			}
			else {
					++weekDayNumber;
					weekRow.appendChild(weekDayCell);
			}
	}
	
	if(weekDayNumber != 1){
			let stopAt = 7 - weekDayNumber; 
			for (let j = 0; j <= stopAt; j++) {
					let weekDayCell = document.createElement('div');
					let dayNumberWrapper = document.createElement('div');
					let dayNumber = document.createElement('div');
					weekDayCell.classList.add('date-picker-calender-week-number-cell');
					dayNumberWrapper.classList.add('date-picker-calender-week-number-wrapper');
					dayNumber.classList.add('date-picker-calender-week-number');
					dayNumberWrapper.appendChild(dayNumber);
					weekDayCell.appendChild(dayNumberWrapper);

					dayNumber.textContent = (j + 1);
					weekRow.appendChild(weekDayCell);
			}
	}
	datePickerCalenderWeek.appendChild(weekRow);
	
	
	function getNumberOfDaysForPreviousMonth(currentYear, currentMonth) {
			if(currentMonth == 0){
					return new Date(currentYear - 1, 11, 0).getDate();
			}
			else{
					return new Date(currentYear, currentMonth, 0).getDate();
			}
	}    
}


function previousMonth() {
	let currentMonth = currentDate.getMonth();
	let currentYear = currentDate.getFullYear();

	if(currentMonth == 0){
			currentDate = new Date(currentYear - 1, 11, 1);
	}
	else {
			currentDate = new Date(currentYear, currentMonth - 1, 1)
	}
	
	generateCalendar(currentDate);
}

function nextMonth() {
	let currentMonth = currentDate.getMonth();
	let currentYear = currentDate.getFullYear();

	if(currentMonth == 11){
			currentDate = new Date(currentYear + 1, 0, 1);
	}
	else {
			currentDate = new Date(currentYear, currentMonth + 1, 1);
	}
	
	generateCalendar(currentDate);
}

generateCalendar(currentDate);