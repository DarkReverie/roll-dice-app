export class DiceScript {
    constructor() {
        this.init();
    }

    init() {
        this.initDiceHandler();
    }

    initDiceHandler() {
        const diceImage = document.querySelector('.diceImage img') as HTMLImageElement;
        if (diceImage) {
            console.log('Dice image found:', diceImage);

            diceImage.addEventListener('click', () => {
                this.fetchData();
            });
        } else {
            console.error('Dice image not found');
        }
    }

    public async fetchData() {
        try {
          const response = await fetch('http://localhost:3000/api/data');
          const data = await response.json();
          this.handleDiceRoll(data.message);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

      handleDiceRoll(data: number) {
        console.log('Dice roll:', data);
        const diceText = document.querySelector('.diceImage .diceText') as HTMLImageElement;
        if (diceText) {
            diceText.textContent = data.toString();
        } else {
            console.error('Dice text not found');
        }
    }
}