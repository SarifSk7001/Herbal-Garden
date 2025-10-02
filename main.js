// List of 40 herbs/fruits
const herbsList = [
  "Tulsi","Neem","Aloe Vera","Amla","Ashwagandha","Ginger","Garlic","Mint",
  "Coriander","Cardamom","Lemon","Holy Basil","Papaya","Banana","Peppermint",
  "Fenugreek","Pomegranate","Cinnamon","Clove","Turmeric","Gotu Kola","Sage",
  "Rosemary","Chamomile","Lavender","Basil","Black Pepper","Holy Fruit Amla",
  "Gooseberry","Mango","Jackfruit","Guava","Strawberry","Blueberry","Raspberry",
  "Cranberry","Clitoria","Moringa","Jackalberry","Sapodilla"
];

const herbGrid = document.querySelector(".herb-grid");

herbsList.forEach(name => {
  const div = document.createElement("div");
  div.classList.add("herb");
  div.innerHTML = `
    <img src="${name.replace(/ /g,'').toLowerCase()}.jpg" alt="${name}">
    <span>${name}</span>
  `;
  div.addEventListener("click", () => {
    localStorage.setItem("selectedPlant", name);
    window.location.href = "detail.html";
  });
  herbGrid.appendChild(div);
});



// Open AI Botpress Webchat on click
document.getElementById("ai-toy").addEventListener("click", () => {
  window.open(
    "https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/09/30/11/20250930115634-ERIL9V67.json",
    "_blank"
  );
});
