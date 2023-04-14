// Chargement des données du fichier JSON
fetch('data.json')
	.then(response => response.json())
	.then(data => {
		// Mélange des données
		shuffle(data);

		// Initialisation de l'indice du caractère actuel
		let currentCharIndex = 0;

		// Affichage du premier caractère et des choix de pinyin
		displayCharData(data[currentCharIndex]);

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
					displayCharData(data[currentCharIndex]);
				} else {
					alert('Vous avez terminé!');
				}
			});
		});

		// Fonction pour afficher les données d'un caractère chinois
		function displayCharData(charData) {
			charEl.innerText = charData.character;
			//toneEl.innerText = charData.tone;
			//lessonEl.innerText = charData.lesson;
			const pinyinArray = charData.pinyin.split(' ');
			shuffle(pinyinArray);
			// Affichage des choix de pinyin dans les boutons
			choicesEls.forEach((choiceEl, i) => {
				choiceEl.innerText = pinyinArray[i];
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
