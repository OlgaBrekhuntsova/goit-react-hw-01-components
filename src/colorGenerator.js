const genColor = () => {
  let col = 0;
    col = Math.round(255.0 * Math.random());
    const r = col.toString(16).padStart(2, "0");
    col = Math.round(255.0 * Math.random());
    const g = col.toString(16).padStart(2, "0");
    col = Math.round(255.0 * Math.random());
    const b = col.toString(16).padStart(2, "0");
    col = '#' + r + g + b;
    return col;
};

const createBoxes = (amount) => {
  amount = Number(amountInput.value);
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${startWidth + 10 * i}px`;
    box.style.height = `${startHeight + 10 * i}px`;
    box.style.backgroundColor = genColor();
    boxesArray.push(box);
    };
      boxesDiv.append(...boxesArray);
};