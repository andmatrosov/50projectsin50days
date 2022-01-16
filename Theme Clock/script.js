const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Saturday", "Monday", "Thuesday", "Wednesday", "Thersday", "Friday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

toggle.addEventListener('click', (e) => {
	const html = document.querySelector('html')
	if(html.classList.contains('dark')){
		html.classList.remove('dark')
		e.target.innerText = 'Dark mode'
	} else {
		html.classList.add('dark')
		e.target.innerText = 'Light mode'

	}
})

function setTime() {
	const time = new Date();
	const month = time.getMonth()
	const day = time.getDay()
	const date = time.getDate()
	const hours = time.getHours()
	const hoursForClock = hours % 12
	const minutes = time.getMinutes()
	const seconds = time.getSeconds()
	const ampm = hours >= 12 ? 'PM' : 'AM'


	hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
	minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
	secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`


	hourEl.style.transition = `${hours === 0 ? "none" : "all 1s ease"}`
	minuteEl.style.transition = `${minutes === 0 ? "none" : "all 1s ease"}`
	secondEl.style.transition = `${seconds === 0 ? "none" : "all 1s ease"}`

	timeEl.innerText = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
	dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

function scale (number, inMin, inMax, outMin, outMax) {
	return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
setTime()


setInterval( setTime, 1000);