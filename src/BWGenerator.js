/**
 * Buzzword Generator
 */
export default class BWGenerator {
	constructor(words) {
		if (!words || !Array.isArray(words)) {
			this.words = ["NO_WORDS"];
		} else {
			this.words = words;
		}
		this.wordCount = this.words.length;
	}

	getRandomWord() {
		const idx = Math.floor(Math.random() * Math.floor(this.wordCount));
		return this.words[idx];
	}
}
