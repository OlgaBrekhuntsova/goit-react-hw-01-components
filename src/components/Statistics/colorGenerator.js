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
export default genColor;