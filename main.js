
class LottoNumbers extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const style = document.createElement('style');
        style.textContent = `
            .lotto-container {
                display: flex;
                justify-content: center;
                gap: 10px;
            }
            .lotto-ball {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 20px;
                font-weight: bold;
                color: white;
                background-color: #f44336;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }
        `;
        const container = document.createElement('div');
        container.setAttribute('class', 'lotto-container');
        shadow.appendChild(style);
        shadow.appendChild(container);
    }

    set numbers(numbers) {
        const container = this.shadowRoot.querySelector('.lotto-container');
        container.innerHTML = '';
        numbers.forEach(number => {
            const ball = document.createElement('div');
            ball.setAttribute('class', 'lotto-ball');
            ball.textContent = number;
            container.appendChild(ball);
        });
    }
}

customElements.define('lotto-numbers', LottoNumbers);

const generatorButton = document.getElementById('generator-button');
const lottoNumbersElement = document.querySelector('lotto-numbers');

function generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

generatorButton.addEventListener('click', () => {
    lottoNumbersElement.numbers = generateNumbers();
});

// Initial number generation
lottoNumbersElement.numbers = generateNumbers();
