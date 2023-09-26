// Récupération des éléments HTML
const charEl = document.getElementById('character-container');
//const toneEl = document.getElementById('tone');
//const lessonEl = document.getElementById('lesson');
const choicesEls = document.querySelectorAll('.choice');

//trois noir 4 rouge 2 violet premier bleu


// Chargement des données du fichier JSON
fetch('data.json')
	.then(response => response.json())
	.then(data => {
		// Mélange des données
		shuffle(data);

		// Initialisation de l'indice du caractère actuel
		let currentCharIndex = 0;

		// Affichage du premier caractère et des choix de pinyin
		let pinyinChoices = [data[currentCharIndex].pinyin];
		let toneChoices = [data[currentCharIndex].tone];
		let rdmNb = Math.floor(Math.random()*data.length);
		console.log(data[rdmNb].pinyin);
		pinyinChoices.push(data[rdmNb].pinyin);
		toneChoices.push([data[rdmNb].tone]);
		console.log(pinyinChoices);
		console.log(toneChoices);
		rdmNb = Math.floor(Math.random()*data.length);
		pinyinChoices.push(data[rdmNb].pinyin);
		toneChoices.push([data[rdmNb].tone]);
		console.log(pinyinChoices);
		console.log(toneChoices);
		rdmNb = Math.floor(Math.random()*data.length);
		pinyinChoices.push(data[rdmNb].pinyin);
		toneChoices.push([data[rdmNb].tone]);
		console.log(pinyinChoices);
		console.log(toneChoices);
		(displayCharData)(data[currentCharIndex],pinyinChoices,toneChoices);

		// Ajout d'un gestionnaire d'événement sur chaque bouton de choix de pinyin
		choicesEls.forEach(choiceEl => {
			choiceEl.addEventListener('click', () => {
				// Vérification de la réponse
				const selectedPinyin = choiceEl.innerText;
				const correctPinyin = data[currentCharIndex].pinyin;
				if (selectedPinyin === correctPinyin) {
					alert('Bonne réponse!');
				} else {
					alert('Mauvaise réponse.');
				}

				// Passage au caractère suivant
				currentCharIndex++;
				if (currentCharIndex < data.length) {
					let pinyinChoices = [data[currentCharIndex].pinyin];
					let toneChoices = [data[currentCharIndex].tone];
					console.log(data[currentCharIndex].pinyin);
					for (let index = 0; index < 3; index++) {
						let randomNb = Math.floor(Math.random()*data.length);
						pinyinChoices.push(data[randomNb].pinyin);
						toneChoices.push(data[randomNb].tone);
					}
					displayCharData(data[currentCharIndex],pinyinChoices,toneChoices);
				} else {
					alert('Vous avez terminé!');
				}
			});
		});

		// Fonction pour afficher les données d'un caractère chinois
		function displayCharData(charData, pinyinchoices, toneChoices) {
			console.log(charData);
			charEl.innerText = charData.chinese_character;
			switch (charData.tone) {
				case "1":
					charEl.style.color = "blue";
					break;
				case "2":
					charEl.style.color = "purple";
					break;
				case "3":
					charEl.style.color = "black";
					break;
				case "4":
					charEl.style.color = "red";
					break;
			
				default:
					break;
			}

			//toneEl.innerText = charData.tone;
			//lessonEl.innerText = charData.lesson;
			//const pinyinArray = charData.pinyin.split(' ');
			//shuffle(pinyinArray);
			// Affichage des choix de pinyin dans les boutons
			choicesEls.forEach((choiceEl, i) => {
				let rdmIndex = Math.floor(Math.random()*pinyinchoices.length);
				choiceEl.innerText = pinyinchoices[rdmIndex];
				switch (toneChoices[rdmIndex]) {
					case "1":
						choiceEl.style.color = "blue";
						break;
					case "2":
						choiceEl.style.color = "purple";
						break;
					case "3":
						choiceEl.style.color = "black";
						break;
					case "4":
						choiceEl.style.color = "red";
						break;
				
					default:
						break;
				}
				pinyinchoices.splice(rdmIndex,1);
				toneChoices.splice(rdmIndex,1);
			});
		}

		// Fonction pour mélanger un tableau
		function shuffle(array) {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}
		}
	})
	.catch(error => console.error(error));
/*
// Récupération des éléments HTML
const charEl = document.getElementById('character-container');
//const toneEl = document.getElementById('tone');
//const lessonEl = document.getElementById('lesson');
const choicesEls = document.querySelectorAll('.choice');


// Chargement des données du fichier JSON
fetch('data.json')
	.then(response => response.json())
	.then(data => {
		// Mélange des données
		shuffle(data);

		// Initialisation de l'indice du caractère actuel
		let currentCharIndex = 0;

		// Affichage du premier caractère et des choix de pinyin
		let pinyinChoices = [data[currentCharIndex].pinyin];
		console.log(data[currentCharIndex].pinyin);
		pinyinChoices.push(data[Math.floor(Math.random()*data.length)].pinyin);
		console.log(pinyinChoices);
		pinyinChoices.push(data[Math.floor(Math.random()*data.length)].pinyin);
		console.log(pinyinChoices);
		pinyinChoices.push(data[Math.floor(Math.random()*data.length)].pinyin);
		console.log(pinyinChoices);
		displayCharData(data[currentCharIndex],pinyinChoices);

		// Ajout d'un gestionnaire d'événement sur chaque bouton de choix de pinyin
		choicesEls.forEach(choiceEl => {
			choiceEl.addEventListener('click', () => {
				// Vérification de la réponse
				const selectedPinyin = choiceEl.innerText;
				const correctPinyin = data[currentCharIndex].pinyin;
				if (selectedPinyin === correctPinyin) {
					alert('Bonne réponse!');
				} else {
					alert('Mauvaise réponse.');
				}

				// Passage au caractère suivant
				currentCharIndex++;
				if (currentCharIndex < data.length) {
					let pinyinChoices = [data[currentCharIndex].pinyin];
					console.log(data[currentCharIndex].pinyin);
					pinyinChoices.push(data[Math.floor(Math.random()*data.length)].pinyin);
					console.log(pinyinChoices);
					pinyinChoices.push(data[Math.floor(Math.random()*data.length)].pinyin);
					console.log(pinyinChoices);
					pinyinChoices.push(data[Math.floor(Math.random()*data.length)].pinyin);
					displayCharData(data[currentCharIndex],pinyinChoices);
				} else {
					alert('Vous avez terminé!');
				}
			});
		});

		// Fonction pour afficher les données d'un caractère chinois
		function displayCharData(charData, pinyinchoices) {
			console.log(charData);
			charEl.innerText = charData.chinese_character;
			//toneEl.innerText = charData.tone;
			//lessonEl.innerText = charData.lesson;
			//const pinyinArray = charData.pinyin.split(' ');
			//shuffle(pinyinArray);
			// Affichage des choix de pinyin dans les boutons
			choicesEls.forEach((choiceEl, i) => {
				let rdmIndex = Math.floor(Math.random()*pinyinchoices.length);

				choiceEl.innerText = pinyinchoices[rdmIndex];
				pinyinchoices.splice(rdmIndex,1);
			});
		}

		// Fonction pour mélanger un tableau
		function shuffle(array) {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}
		}
	})
	.catch(error => console.error(error));
*/
