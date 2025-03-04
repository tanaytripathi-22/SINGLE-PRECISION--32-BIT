function floatToBinary(num) {
    let buffer = new ArrayBuffer(4); // 4 bytes = 32 bits
    let view = new DataView(buffer);
    view.setFloat32(0, num);
    let binary = "";
    for (let i = 0; i < 4; i++) {
        let byte = view.getUint8(i).toString(2).padStart(8, '0');
        binary += byte;
    }
    return binary;
}

function multiply() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    let result = num1 * num2;
    document.getElementById("resultDecimal").innerText = result;
    document.getElementById("resultBinary").innerText = floatToBinary(result);
}
