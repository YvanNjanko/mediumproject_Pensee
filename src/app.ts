document.addEventListener("DOMContentLoaded", function() {
    const restartButton = document.querySelector(".restart") as HTMLButtonElement;
    const nextButton = document.querySelector(".next") as HTMLButtonElement;
    const guessInput = document.getElementById("guess") as HTMLInputElement;
    const checkButton = document.getElementById("check-btn") as HTMLButtonElement;
    const resultDisplay = document.querySelector(".text") as HTMLDivElement;

    let currentMessages: string[] = [];
    let currentCalculations: ((n: number) => number)[] = [];
    let step = 0;

    const messages1 = [
        "Multiplie par 3 (*3)",
        "Ajoute 6 au résultat (+6)",
        "Divise par 2 (/2)",
        "Retire 5 (-5)",
        "Ajoute 7 au résultat (+7)",
        "Multiplie par 2 (*2)",
        "Retire 20 (-20)"
    ];

    const calculations1 = [
        (n: number) => n + 20,
        (n: number) => n / 2,
        (n: number) => n - 7,
        (n: number) => n + 5,
        (n: number) => n * 2,
        (n: number) => n - 6,
        (n: number) => n / 3
    ];

    const messages2 = [
        "Multiplie par 2 (*2)",
        "Ajoute 5 au résultat (+5)",
        "Divise par 3 (/3)",
        "Soustrais 4 (-4)",
        "Multiplie par 4 (*4)",
        "Ajoute 10 au résultat (+10)",
        "Divise par 5 (/5)"
    ];

    const calculations2 = [
        (n: number) => n * 5,
        (n: number) => n - 10,
        (n: number) => n / 4,
        (n: number) => n + 4,
        (n: number) => n * 3,
        (n: number) => n - 5,
        (n: number) => n / 2
    ];
    
    const messages3 = [
        "Ajoute 20 (+20)",
        "Divise par 5 (/5)",
        "Multiplie par 3 (*3)",
        "Soustrais 10 (-10)",
        "Divise par 4 (/4)",
        "Ajoute 7 au résultat (+7)",
        "Multiplie par 2 (*2)"
    ];

    const calculations3 = [
        (n: number) => n / 2,
        (n: number) => n - 7,
        (n: number) => n * 4,
        (n: number) => n + 10,
        (n: number) => n / 3,
        (n: number) => n * 5,
        (n: number) => n - 20
    ];
    

    const messageBlocks = [messages1, messages2, messages3];
    const calculationBlocks = [calculations1, calculations2, calculations3];

    function selectRandomBlock() {
        const randomIndex = Math.floor(Math.random() * messageBlocks.length);
        currentMessages = messageBlocks[randomIndex];
        currentCalculations = calculationBlocks[randomIndex];
        step = 0;
        displayMessage();
    }

    function displayMessage() {
        if (step < currentMessages.length) {
            resultDisplay.innerHTML = `<p>${currentMessages[step]}</p>`;
        } else {
            resultDisplay.innerHTML = `<p>Entrez un nombre et cliquez sur "Voir dans les pensées" pour voir le résultat.</p>`;
            guessInput.style.display = "block";
            checkButton.style.display = "block";
        }
    }

    let finalNumber: number;

    nextButton.addEventListener("click", () => {
        if (step < currentMessages.length) {
            step++;
            displayMessage();
        }
    });

    restartButton.addEventListener("click", () => {
        guessInput.value = '';
        guessInput.style.display = "none";
        checkButton.style.display = "none";
        resultDisplay.innerHTML = '';
        nextButton.disabled = false;
        checkButton.disabled = false;
        selectRandomBlock();
    });

    checkButton.addEventListener("click", () => {
        const initialNumber = parseInt(guessInput.value);
        if (!isNaN(initialNumber)) {
            finalNumber = initialNumber;
            currentCalculations.forEach(calculation => {
                finalNumber = calculation(finalNumber);
            });
            resultDisplay.innerHTML = `<p>Ton esprit est comme un livre ouvert 🔮 ton nombre est : ${finalNumber}</p>`;
            checkButton.disabled = true;
        } else {
            alert("Veuillez entrer un nombre valide.");
        }
    });

    // Initialiser avec un bloc de messages et de calculs aléatoire
    selectRandomBlock();
});
