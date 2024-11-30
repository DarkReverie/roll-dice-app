export class DiceScript {
    constructor() {
        this.init();
    }

    init() {
        const diceImage = document.querySelector('.diceImage img') as HTMLImageElement;
        if (diceImage) {
            console.log('Dice image found:', diceImage);
            diceImage.addEventListener('click', () => {
                alert('Dice clicked!');
            });
        } else {
            console.error('Dice image not found');
        }
    }
}