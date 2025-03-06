document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const textInput = document.getElementById("text");
    const delayInput = document.getElementById("delay");
    const button = document.getElementById("btn");
    const outputDiv = document.getElementById("output");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from refreshing the page
    });

    button.addEventListener("click", async function () {
        const text = textInput.value.trim();
        const delay = parseInt(delayInput.value.trim());

        // Input validation
        if (!text || isNaN(delay) || delay < 0) {
            outputDiv.innerText = "Please enter valid text and delay time.";
            return;
        }

        outputDiv.innerText = "Waiting...";
        button.disabled = true; // Disable button to prevent multiple clicks

        await new Promise(resolve => setTimeout(resolve, delay));

        outputDiv.innerText = text;
        button.disabled = false; // Re-enable button after delay
    });
});
