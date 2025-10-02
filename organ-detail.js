const selectedOrgan = localStorage.getItem('selectedOrgan');

const organName = document.getElementById('organ-name');
const organImg = document.getElementById('organ-img');
const organDesc = document.getElementById('organ-description');
const herbsFruitsList = document.getElementById('herbs-fruits-list');

const organDetails = {
  "Heart": {
    description: "The heart pumps blood and nutrients throughout the body. Maintaining heart health is vital for energy, circulation, and overall wellness.",
    herbsFruits: [
      { name: "Garlic", usage: "Consume 1-2 cloves raw daily or add to meals.", benefit: "Supports healthy blood circulation and lowers cholesterol." },
      { name: "Hawthorn", usage: "Drink as tea or capsule.", benefit: "Strengthens heart function and improves blood flow." },
      { name: "Pomegranate", usage: "Eat fresh or drink juice.", benefit: "Reduces arterial plaque and provides antioxidants." },
      { name: "Green Tea", usage: "Drink 1-2 cups daily.", benefit: "Maintains healthy blood pressure and cholesterol." },
      { name: "Omega-3 Fish Oil", usage: "Eat fatty fish or supplement.", benefit: "Reduces risk of heart disease." }
    ]
  },
  "Liver": {
    description: "The liver detoxifies blood, metabolizes nutrients, and produces bile. Supporting liver function helps digestion and hormone balance.",
    herbsFruits: [
      { name: "Milk Thistle", usage: "Take capsules or tea.", benefit: "Promotes liver detoxification and repair." },
      { name: "Turmeric", usage: "Add to meals or warm milk.", benefit: "Reduces liver inflammation and oxidative stress." },
      { name: "Lemon", usage: "Drink warm lemon water in the morning.", benefit: "Stimulates liver detox." },
      { name: "Beetroot", usage: "Eat fresh or juice.", benefit: "Improves bile flow and liver cleansing." },
      { name: "Dandelion Root", usage: "Drink tea.", benefit: "Supports liver detox and digestion." }
    ]
  },
  "Kidney": {
    description: "The kidneys filter waste, balance electrolytes, and regulate blood pressure. Kidney health is crucial for body detoxification.",
    herbsFruits: [
      { name: "Dandelion", usage: "Drink as tea or infusion.", benefit: "Promotes urine flow and reduces kidney strain." },
      { name: "Cranberry", usage: "Eat fresh or drink juice.", benefit: "Prevents urinary tract infections." },
      { name: "Parsley", usage: "Add to meals or drink as tea.", benefit: "Helps flush out toxins." },
      { name: "Ginger", usage: "Drink tea or use in meals.", benefit: "Reduces inflammation and improves circulation." },
      { name: "Watermelon", usage: "Eat fresh.", benefit: "Hydrates and supports kidney function." }
    ]
  },
  "Lungs": {
    description: "The lungs provide oxygen to the blood and remove carbon dioxide. Proper lung health ensures stamina and overall well-being.",
    herbsFruits: [
      { name: "Peppermint", usage: "Drink tea or inhale steam.", benefit: "Clears airways and soothes the respiratory system." },
      { name: "Eucalyptus", usage: "Use essential oil for steam inhalation.", benefit: "Supports respiratory health." },
      { name: "Ginger", usage: "Drink tea.", benefit: "Reduces lung inflammation." },
      { name: "Honey", usage: "Consume raw.", benefit: "Soothes the throat and reduces cough." },
      { name: "Apple", usage: "Eat fresh.", benefit: "Provides antioxidants for lung protection." }
    ]
  },
  "Brain": {
    description: "The brain controls thought, memory, and body functions. Cognitive health improves focus, learning, and memory.",
    herbsFruits: [
      { name: "Ginkgo Biloba", usage: "Take capsules or tea.", benefit: "Improves blood flow to the brain and memory." },
      { name: "Blueberries", usage: "Eat fresh daily.", benefit: "Protects brain cells from oxidative stress." },
      { name: "Walnuts", usage: "Eat raw.", benefit: "Supports neurotransmitter function." },
      { name: "Turmeric", usage: "Include in meals.", benefit: "Reduces brain inflammation." },
      { name: "Dark Chocolate", usage: "Consume in moderation.", benefit: "Boosts circulation and mood." }
    ]
  },
  "Stomach": {
    description: "The stomach digests food and absorbs nutrients. Healthy digestion prevents bloating and enhances energy.",
    herbsFruits: [
      { name: "Ginger", usage: "Use in tea or meals.", benefit: "Reduces nausea and aids digestion." },
      { name: "Fennel", usage: "Chew seeds or drink tea.", benefit: "Relieves bloating and gas." },
      { name: "Banana", usage: "Eat fresh.", benefit: "Soothes the stomach lining and prevents acidity." },
      { name: "Peppermint", usage: "Drink tea.", benefit: "Relaxes stomach muscles." },
      { name: "Papaya", usage: "Eat fresh.", benefit: "Contains enzymes that help digest proteins." }
    ]
  },
  "Skin": {
    description: "The skin protects the body and regulates temperature. Healthy skin reflects overall wellness.",
    herbsFruits: [
      { name: "Aloe Vera", usage: "Apply gel or drink juice.", benefit: "Hydrates and heals skin." },
      { name: "Cucumber", usage: "Apply slices or eat fresh.", benefit: "Refreshes and hydrates skin." },
      { name: "Carrot", usage: "Eat fresh.", benefit: "Provides vitamin A for skin regeneration." },
      { name: "Turmeric", usage: "Use paste or in meals.", benefit: "Reduces inflammation and acne." },
      { name: "Avocado", usage: "Consume daily.", benefit: "Nourishes skin with healthy fats." }
    ]
  },
  "Eyes": {
    description: "Eyes provide vision and are supported by antioxidants and vitamins.",
    herbsFruits: [
      { name: "Carrot", usage: "Eat fresh.", benefit: "Improves vision with vitamin A." },
      { name: "Spinach", usage: "Include in meals.", benefit: "Protects eyes with lutein and zeaxanthin." },
      { name: "Bilberry", usage: "Take as tea or supplement.", benefit: "Enhances night vision." },
      { name: "Blueberries", usage: "Eat fresh.", benefit: "Protects retinal cells from damage." },
      { name: "Almonds", usage: "Eat raw.", benefit: "Provides vitamin E for eye health." }
    ]
  },
  "Bones": {
    description: "Bones provide structure and store minerals. Adequate calcium, vitamin D, and activity are essential.",
    herbsFruits: [
      { name: "Almonds", usage: "Eat daily.", benefit: "Strengthens bones with calcium." },
      { name: "Spinach", usage: "Eat fresh.", benefit: "Provides magnesium and vitamin K." },
      { name: "Milk", usage: "Drink daily.", benefit: "Supplies calcium and vitamin D." },
      { name: "Sesame Seeds", usage: "Sprinkle on food.", benefit: "Supports bone density." },
      { name: "Broccoli", usage: "Eat fresh or cooked.", benefit: "Provides bone-protecting nutrients." }
    ]
  },
  "Pancreas": {
    description: "The pancreas regulates blood sugar and produces digestive enzymes.",
    herbsFruits: [
      { name: "Bitter Melon", usage: "Eat fresh or juice.", benefit: "Helps regulate blood sugar." },
      { name: "Fenugreek", usage: "Use seeds or tea.", benefit: "Improves glucose metabolism." },
      { name: "Cinnamon", usage: "Add to meals.", benefit: "Maintains insulin sensitivity." },
      { name: "Turmeric", usage: "Include in food.", benefit: "Reduces pancreatic inflammation." },
      { name: "Blueberries", usage: "Eat fresh.", benefit: "Protects pancreatic cells with antioxidants." }
    ]
  },
  "Testes": {
    description: "Testes produce sperm and testosterone, supporting male fertility and hormonal balance.",
    herbsFruits: [
      { name: "Ashwagandha", usage: "Take powder or capsule daily.", benefit: "Improves sperm count and testosterone." },
      { name: "Pumpkin Seeds", usage: "Eat raw.", benefit: "Supplies zinc for reproductive health." },
      { name: "Walnuts", usage: "Consume daily.", benefit: "Enhances fertility and hormone production." },
      { name: "Maca Root", usage: "Use powder or capsules.", benefit: "Boosts stamina and libido." },
      { name: "Tribulus Terrestris", usage: "Take as supplement.", benefit: "Naturally increases testosterone." }
    ]
  },
  "Ovaries": {
    description: "Ovaries produce eggs and hormones, supporting fertility and hormonal balance.",
    herbsFruits: [
      { name: "Maca Root", usage: "Take powder or capsule.", benefit: "Balances hormones and improves fertility." },
      { name: "Flaxseed", usage: "Add to meals or smoothies.", benefit: "Supports estrogen regulation." },
      { name: "Blueberries", usage: "Eat fresh.", benefit: "Protects ovarian cells with antioxidants." },
      { name: "Ashwagandha", usage: "Consume to reduce stress.", benefit: "Supports hormonal balance." },
      { name: "Chasteberry (Vitex)", usage: "Take as supplement.", benefit: "Regulates menstrual cycle and ovarian function." }
    ]
  }
};

// Display organ info
if (selectedOrgan && organDetails[selectedOrgan]) {
  organName.textContent = selectedOrgan;
  organImg.src = `${selectedOrgan.toLowerCase().replace(/ /g,'-')}.png`;
  organImg.alt = selectedOrgan;
  organImg.onerror = () => { organImg.src = 'default.png'; };

  organDesc.textContent = organDetails[selectedOrgan].description;

  herbsFruitsList.innerHTML = '';
  organDetails[selectedOrgan].herbsFruits.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${item.name}</strong><br>Usage: ${item.usage}<br>Benefit: ${item.benefit}`;
    herbsFruitsList.appendChild(li);
  });
} else {
  organName.textContent = "Organ Not Found";
  organImg.src = "default.png";
  organDesc.textContent = "Please select an organ from the organ selection page.";
  herbsFruitsList.innerHTML = '';
}
// Open AI Botpress Webchat on click
document.getElementById("ai-toy").addEventListener("click", () => {
  window.open(
    "https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/09/30/11/20250930115634-ERIL9V67.json",
    "_blank"
  );
});
