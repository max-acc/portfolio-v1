const button = document.querySelector('.forwardbtn');
const icon = document.querySelector('.icon');

icon.style.transition = '300ms ease-in-out';
let open = false;

button.addEventListener('click', () => {
	if(!open) {
		icon.style.transform = 'rotate(-90deg)';
		setTimeout(() => icon.setAttribute('class', 'as fa-times icon'), 120);
		open = true;
	}else {
		icon.style.transform = 'rotate(0)';
		setTimeout(() => icon.setAttribute('class', 'as fa-angle-down icon'), 120);
		open = false;
	}
})
