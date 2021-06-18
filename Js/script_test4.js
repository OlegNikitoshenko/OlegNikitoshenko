//_______________________________сброс инпута_________________________________________
function resetInput(inp) {
	inp.addEventListener('focus', () => {
		inp.value = '';
	})
}
//_______________________________________________Game___________________________________

const startBut = document.querySelector('.start');
const input = document.querySelector('.input');
const game = document.querySelector('.game');
const messageWind = document.querySelector('.result');
const messageCont = document.querySelector('.result__message');
const messageBut = document.querySelector('.result__admit');
const admitBtn = document.querySelector('.admit');
let tries = 0;
let startNum;

const messages = (num) => {
	const obj = {
		start: 'I remembered a number from 1 to 100. Try to guess:)',
		error: 'It is not a number',
		more: `${num} - too high. Try lower number.`,
		less: `${num} - too low. Try higher number.`,
		victory: `You found the number! You had ${tries} tries:)`
	}
	return obj;
}

const getRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const switchVis = (vari) => {
	vari.classList.toggle('invisible');
}

resetInput(input);
startBut.addEventListener('click', function () {
	switchVis(game);
	switchVis(this);
	startNum = getRandomInt(1, 100);
	switchVis(messageWind);
	messageCont.innerHTML = messages().start;
})

messageBut.addEventListener('click', () => {
	switchVis(messageWind);
})

admitBtn.addEventListener('click', function () {
	if (!isNaN(input.value)) {
		tries++;
		if (parseInt(input.value) === startNum) {
			messageCont.innerHTML = messages().victory;
			switchVis(messageWind);
			messageBut.addEventListener('click', () => {
				document.location.reload();
			})

		} else if (parseInt(input.value) > startNum) {
			messageCont.innerHTML = messages(input.value).more;
			switchVis(messageWind);
		} else if (parseInt(input.value) < startNum) {
			messageCont.innerHTML = messages(input.value).less;
			switchVis(messageWind);
		}
	} else {
		messageCont.innerHTML = messages().error;
		switchVis(messageWind);
	}
})
