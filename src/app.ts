document.addEventListener("DOMContentLoaded", function() {
    const restartButton = document.querySelector(".restart") as HTMLButtonElement;
    const guessInput = document.getElementById("guess") as HTMLInputElement;
    const checkButton = document.getElementById("check-btn") as HTMLButtonElement;
    const resultDisplay = document.querySelector(".text") as HTMLDivElement;

    let currentCalculations: ((n: number) => number)[] = [];

    const calculations1 = [
        (n: number) => n + 10,
        (n: number) => n * 3,
        (n: number) => n - 20,
        (n: number) => n / 2,
        (n: number) => n + 15,
        (n: number) => n * 6,
        (n: number) => n - 10,
        (n: number) => n / 4,
    ];

    const calculations2 = [
        (n: number) => n * 2,
        (n: number) => n + 5,
        (n: number) => n / 3,
        (n: number) => n - 7,
        (n: number) => n * 4,
        (n: number) => n - 9,
        (n: number) => n / 2,
        (n: number) => n + 8,
    ];

    const calculations3 = [
        (n: number) => n + 20,
        (n: number) => n / 5,
        (n: number) => n * 3,
        (n: number) => n - 8,
        (n: number) => n / 4,
        (n: number) => n + 7,
        (n: number) => n * 2,
        (n: number) => n - 6,
    ];

    const calculationsBlocks = [calculations1, calculations2, calculations3];

    function selectRandomCalculations() {
        const randomIndex = Math.floor(Math.random() * calculationsBlocks.length);
        currentCalculations = calculationsBlocks[randomIndex];
    }

    function performCalculations(number: number): number {
        return currentCalculations.reduce((acc, calc) => calc(acc), number);
    }

    function displayOperations() {
        const operationsList = currentCalculations
            .map((calc, index) => `Étape ${index + 1}: ${calc.toString()}`)
            .join("\n");
        resultDisplay.innerText = `Opérations à effectuer sur votre nombre mystère :\n${operationsList}`;
    }

    restartButton.addEventListener("click", () => {
        selectRandomCalculations();
        displayOperations();
        guessInput.value = '';
        resultDisplay.textContent = '';
    });

    checkButton.addEventListener("click", () => {
        const guessedNumber = parseInt(guessInput.value);
        if (!isNaN(guessedNumber)) {
            const finalNumber = performCalculations(guessedNumber);
            resultDisplay.textContent = `Ton esprit est comme un livre ouvert 🔮 ton nombre est : ${finalNumber}`;
        } else {
            alert("Veuillez entrer un nombre valide.");
        }
    });

    // Initialiser avec un bloc de calculs aléatoire
    selectRandomCalculations();
    displayOperations();
});
