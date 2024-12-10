var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class DiceScript {
    constructor() {
        this.init();
    }
    init() {
        this.initDiceHandler();
    }
    initDiceHandler() {
        const diceImage = document.querySelector('.diceImage img');
        if (diceImage) {
            console.log('Dice image found:', diceImage);
            diceImage.addEventListener('click', () => {
                this.fetchData();
            });
        }
        else {
            console.error('Dice image not found');
        }
    }
    fetchData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch('http://localhost:3000/api/data');
                const data = yield response.json();
                this.handleDiceRoll(data.message);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        });
    }
    handleDiceRoll(data) {
        console.log('Dice roll:', data);
        const diceText = document.querySelector('.diceImage .diceText');
        if (diceText) {
            diceText.textContent = data.toString();
        }
        else {
            console.error('Dice text not found');
        }
    }
}
//# sourceMappingURL=diceScript.js.map