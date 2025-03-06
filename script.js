//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function () {
    const text = document.getElementById("text").value.trim();
    const delay = parseInt(document.getElementById("delay").value.trim());
    const outputDiv = document.getElementById("output");
    
    if (!text || isNaN(delay) || delay < 0) {
        outputDiv.innerText = "Please enter valid text and delay time.";
        return;
    }
    
    outputDiv.innerText = "Waiting...";
    
    await new Promise(resolve => setTimeout(resolve, delay));
    
    outputDiv.innerText = text;
});
