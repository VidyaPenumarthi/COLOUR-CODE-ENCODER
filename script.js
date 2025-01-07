function encodeText() {
    const inputText = document.getElementById("inputText").value;
    const colorOutput = document.getElementById("colorOutput");
    const decodedText = document.getElementById("decodedText");

    colorOutput.innerHTML = "";
    decodedText.innerHTML = "";

    if (!inputText) {
        alert("Please enter text to encode!");
        return;
    }

    // Loop through each character and generate a distinct color
    for (let char of inputText) {
        const hexCode = char.charCodeAt(0).toString(16).padStart(6, "0");
        
        // Modify color to make it more visually distinct (using RGB)
        const colorBlock = document.createElement("div");
        colorBlock.className = "color-block";
        colorBlock.style.backgroundColor = `rgb(${parseInt(hexCode.substring(0, 2), 16)}, ${parseInt(hexCode.substring(2, 4), 16)}, ${parseInt(hexCode.substring(4, 6), 16)})`;
        colorBlock.setAttribute("data-char", char);
        colorOutput.appendChild(colorBlock);
    }
}

function decodeColors() {
    const colorBlocks = document.querySelectorAll(".color-block");
    const decodedText = document.getElementById("decodedText");

    decodedText.innerHTML = "";

    if (colorBlocks.length === 0) {
        alert("No encoded colors to decode!");
        return;
    }

    let decodedString = "";
    colorBlocks.forEach(block => {
        const char = block.getAttribute("data-char");
        decodedString += char;
    });

    decodedText.textContent = `Decoded Text: ${decodedString}`;
}
