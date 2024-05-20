document.addEventListener("DOMContentLoaded", function() {
    const restartButton = document.getElementById("restart") as HTMLButtonElement;
    const guessInput = document.getElementById("guess") as HTMLInputElement;
    const checkButton = document.getElementById("check-btn") as HTMLButtonElement;
    const resultDisplay = document.querySelector(".result") as HTMLDivElement;

    restartButton.addEventListener("click", () => {
        const guessedNumber = prompt("Pensez à un nombre entre 1 et 100 :");
        if (guessedNumber !== null) {
            const initialNumber = parseInt(guessedNumber);
            if (!isNaN(initialNumber) && initialNumber >= 1 && initialNumber <= 100) {
                let operationsList = "Opérations à effectuer sur votre nombre mystère :\n";
                operationsList += `1. Ajoutez 10\n`;
                operationsList += `2. Multipliez par 3\n`;
                operationsList += `3. Retirez 20\n`;
                operationsList += `4. Divisez par 2\n`;
                operationsList += `5. Ajoutez 15\n`;
                operationsList += `6. Multipliez par 6\n`;
                operationsList += `7. Retirez 10\n`;
                operationsList += `8. Divisez par 4\n`;
                resultDisplay.textContent = operationsList;
            } else {
                alert("Veuillez entrer un nombre valide entre 1 et 100.");
            }
        }
    });

    checkButton.addEventListener("click", () => {
        const guessedNumber = parseInt(guessInput.value);
        if (!isNaN(guessedNumber)) {
            let finalNumber = guessedNumber;
            finalNumber *=4;
            finalNumber +=10;
            finalNumber /=6;
            finalNumber -=15;
            finalNumber *=2;
            finalNumber +=20;
            finalNumber /=3;
            finalNumber -=10;
            resultDisplay.textContent = `Ton esprit est comme un livre ouvert 🔮 ton nombre est : ${finalNumber}`;
        } else {
            alert("Veuillez entrer un nombre valide.");
        }
    });
});
