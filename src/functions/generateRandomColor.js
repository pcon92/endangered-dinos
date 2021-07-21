
export default function generateRandomColor() {
    let rgb1 = Math.floor(256*Math.random()-1);
    let rgb2 = Math.floor(256*Math.random()-1);
    let rgb3 = Math.floor(256*Math.random()-1);
    let alpha = 1 //Math.random().toFixed(1);
    let randomColor = `rgba(${rgb1}, ${rgb2}, ${rgb3}, ${alpha})`;

    return randomColor;
}