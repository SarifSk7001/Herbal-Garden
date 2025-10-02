const organGrid = document.getElementById('organ-grid');

const organs = [
  "Heart","Liver","Kidney","Lungs","Brain","Stomach",
  "Skin","Eyes","Bones","Pancreas","Testes","Ovaries"
];

organs.forEach(organ => {
  const div = document.createElement('div');
  div.classList.add('organ');
  div.innerHTML = `
    <img src="${organ.toLowerCase().replace(/ /g, '-')}.png" alt="${organ}" onerror="this.src='assets/images/organs/default.png'">
    <span>${organ}</span>
  `;
  div.addEventListener('click', () => {
    localStorage.setItem('selectedOrgan', organ);
    window.location.href = 'organ-detail.html';
  });
  organGrid.appendChild(div);
});


// Open AI Botpress Webchat on click
document.getElementById("ai-toy").addEventListener("click", () => {
  window.open(
    "https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/09/30/11/20250930115634-ERIL9V67.json",
    "_blank"
  );
});
