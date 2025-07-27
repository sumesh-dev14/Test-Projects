const btn = document.getElementById("btn-gen");
const grid = document.getElementById("plt-grid");
const modeSelector = document.getElementById("color-mode");

function getRandomHSL() {
    const hue = Math.floor(Math.random() * 360); 
    const saturation = Math.floor(Math.random() * 30) + 70; 
    const lightness = Math.floor(Math.random() * 20) + 40; 
    return { hue, saturation, lightness };
}
function generatePalette(mode) {
    grid.innerHTML = ""; 
    const { hue, saturation, lightness } = getRandomHSL();
    let colors = [];

    switch (mode) {
        case "Monochromatic":
            for (let i = 0; i < 5; i++) {
                const l = lightness + (i - 2) * 10;
                colors.push(`hsl(${hue}, ${saturation}%, ${Math.min(Math.max(l, 0), 100)}%)`);
            }
            break;

        case "Analogous":
            for (let i = -2; i <= 2; i++) {
                colors.push(`hsl(${(hue + i * 20 + 360) % 360}, ${saturation}%, ${lightness}%)`);
            }
            break;

        case "Complementary":
            colors.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
            colors.push(`hsl(${(hue + 180) % 360}, ${saturation}%, ${lightness}%)`);
            for (let i = 0; i < 3; i++) {
                colors.push(`hsl(${(hue + (i * 30)) % 360}, ${saturation}%, ${lightness}%)`);
            }
            break;

        case "Triadic":
            for (let i = 0; i < 3; i++) {
                colors.push(`hsl(${(hue + i * 120) % 360}, ${saturation}%, ${lightness}%)`);
            }
            colors.push(`hsl(${hue}, ${saturation}%, ${lightness - 10}%)`);
            colors.push(`hsl(${hue}, ${saturation}%, ${lightness + 10}%)`);
            break;

        default:
            alert("Please select a valid color mode.");
            return;
    }
    colors.forEach(color => {
        const div = document.createElement("div");
        div.style.backgroundColor = color;
        div.style.height = "100px";
        div.style.borderRadius = "8px";
        div.style.boxShadow = "0 2px 6px rgba(0,0,0,0.15)";
        div.title = color;
        grid.appendChild(div);
    });
}

btn.addEventListener("click", () => {
    const mode = modeSelector.value;
    generatePalette(mode);
});
