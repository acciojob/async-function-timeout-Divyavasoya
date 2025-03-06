document.getElementById("btn").addEventListener("click", async function () {
  let textInput = document.getElementById("text").value;
  let delayInput = document.getElementById("delay").value;
  let outputDiv = document.getElementById("output");

  if (!textInput || !delayInput) {
    outputDiv.innerHTML = "Please enter both text and delay.";
    return;
  }

  let delay = parseInt(delayInput);

  outputDiv.innerHTML = ""; // Clear output before waiting

  await new Promise((resolve) => setTimeout(resolve, delay));

  outputDiv.innerHTML = textInput;
});
