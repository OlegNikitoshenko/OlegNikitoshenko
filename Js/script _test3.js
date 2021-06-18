
const parent = document.querySelector('.parent');
const result = (num, string) => {
	const newElem = document.createElement('DIV');
	parent.appendChild(newElem);
	newElem.innerHTML =`${num}: ${string}`;
};
for (i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 !== 0) {
		result(i, 'A/B');

	} else if (i % 5 === 0 && i % 3 !== 0) {
		result(i, 'Testing');

	} else if (i % 3 === 0 && i % 5 === 0) {
		result(i, 'A/B Testing');

	}
}
