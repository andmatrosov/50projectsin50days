const container = document.querySelector('.container')
const left = document.querySelector('.left')
const right = document.querySelector('.right');

left.addEventListener('mouseenter', () => {
	container.classList.add('hover-left')
})

left.addEventListener('mouseleave', () => {
	container.classList.remove('hover-left')
})

right.addEventListener('mouseenter', () => {
	container.classList.add('hover-right')
})

right.addEventListener('mouseleave', () => {
	container.classList.remove('hover-right')
})


// for mobile browsers
//pointerleave - it's one more tap to target block

left.addEventListener('pointerenter', () => {
	container.classList.add('hover-left')
})

left.addEventListener('pointerleave', () => {
	container.classList.remove('hover-left')
})

right.addEventListener('pointerenter', () => {
	container.classList.add('hover-right')
})

right.addEventListener('pointerleave', () => {
	container.classList.remove('hover-right')
})