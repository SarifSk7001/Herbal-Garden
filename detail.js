// Full herbs object (40 herbs/fruits)
const herbs = {
  "Tulsi": { image:"tulsi.jpg", help:"Boosts immunity, relieves stress, and improves respiratory health.", work:"Contains antioxidants and compounds that fight infections, reduce inflammation, and support lung function.", use:"Chew fresh leaves, make tea, or use extracts daily.", side:"Overconsumption may lower blood pressure." },
  "Neem": { image:"neem.jpg", help:"Purifies blood, improves skin health, and supports dental hygiene.", work:"Contains antibacterial and antifungal compounds that help prevent infections and maintain oral health.", use:"Neem leaves can be boiled for tea, neem oil applied topically, or extracts consumed.", side:"May lower blood sugar if overused." },
  "Aloe Vera": { image:"aloevera.jpg", help:"Soothes burns, aids digestion, and promotes skin health.", work:"Gel contains bioactive compounds that heal skin and improve gut function.", use:"Apply gel to burns or drink aloe juice.", side:"Excess consumption may cause diarrhea." },
  "Amla": { image:"amla.jpg", help:"Rich in Vitamin C, boosts immunity, and improves digestion.", work:"Acts as a natural antioxidant, neutralizing free radicals and supporting liver function.", use:"Consume raw, juice, or powder daily.", side:"May cause mild stomach upset if taken in large amounts." },
  "Ashwagandha": { image:"ashwagandha.jpg", help:"Reduces stress, boosts energy, and enhances cognitive function.", work:"Contains adaptogens that regulate cortisol levels and improve resilience to stress.", use:"Take capsules, powder, or decoction daily.", side:"May cause mild drowsiness." },
  "Ginger": { image:"ginger.jpg", help:"Relieves nausea, improves digestion, and reduces inflammation.", work:"Contains gingerol compounds that soothe the stomach and reduce inflammation.", use:"Consume fresh, in tea, or as powder.", side:"Excess may cause heartburn." },
  "Garlic": { image:"garlic.jpg", help:"Supports heart health, boosts immunity, and reduces blood pressure.", work:"Contains allicin which has antibacterial, antiviral, and antioxidant properties.", use:"Eat raw, cooked, or as a supplement.", side:"May cause bad breath or stomach upset." },
  "Mint": { image:"mint.jpg", help:"Soothes digestive issues, freshens breath, and relieves headaches.", work:"Menthol compounds relax muscles and improve digestion.", use:"Chew fresh leaves, use in tea or salads.", side:"Excess may cause heartburn in sensitive individuals." },
  "Coriander": { image:"coriander.jpg", help:"Improves digestion, detoxifies the body, and supports skin health.", work:"Contains antioxidants that cleanse the body and aid in gut function.", use:"Use fresh leaves in meals or make coriander tea.", side:"May cause allergic reactions in some people." },
  "Cardamom": { image:"cardamom.jpg", help:"Aids digestion, freshens breath, and reduces bloating.", work:"Compounds in cardamom stimulate digestion and support gut health.", use:"Chew pods, add to tea or meals.", side:"Excessive consumption may cause nausea." },
  "Lemon": { image:"lemon.jpg", help:"Boosts immunity, aids digestion, and promotes hydration.", work:"Rich in Vitamin C and antioxidants, supports liver and skin health.", use:"Drink lemon water or add to food.", side:"May cause acidity in sensitive individuals." },
  "Holy Basil": { image:"holybasil.jpg", help:"Reduces stress, supports immunity, and improves respiratory health.", work:"Contains eugenol and antioxidants that reduce inflammation and stress.", use:"Chew leaves, make tea, or take extracts.", side:"Overuse may lower blood sugar." },
  "Papaya": { image:"papaya.jpg", help:"Improves digestion, supports skin health, and boosts immunity.", work:"Contains enzymes like papain that help digest proteins and antioxidants that protect cells.", use:"Eat ripe fruit or juice.", side:"May cause mild stomach upset in excess." },
  "Banana": { image:"banana.jpg", help:"Provides energy, supports heart health, and aids digestion.", work:"Rich in potassium and fiber, which maintain heart and gut function.", use:"Eat fresh or in smoothies.", side:"Excess may lead to weight gain." },
  "Peppermint": { image:"peppermint.jpg", help:"Relieves headaches, soothes digestion, and freshens breath.", work:"Menthol compounds relax muscles and improve gut motility.", use:"Chew leaves, make tea, or use oil.", side:"May trigger heartburn in sensitive people." },
  "Fenugreek": { image:"fenugreek.jpg", help:"Regulates blood sugar, improves digestion, and boosts lactation.", work:"Contains soluble fiber and antioxidants that support metabolism.", use:"Soak seeds, use powder, or take capsules.", side:"May cause mild bloating or diarrhea." },
  "Pomegranate": { image:"pomegranate.jpg", help:"Supports heart health, boosts immunity, and improves digestion.", work:"Rich in antioxidants and polyphenols that reduce inflammation.", use:"Eat seeds or drink juice.", side:"Excess may cause digestive discomfort." },
  "Cinnamon": { image:"cinnamon.jpg", help:"Regulates blood sugar, improves heart health, and aids digestion.", work:"Contains cinnamaldehyde which has antioxidant and anti-inflammatory effects.", use:"Add powder to meals, tea, or desserts.", side:"Overuse may irritate the mouth or stomach." },
  "Clove": { image:"clove.jpg", help:"Relieves toothache, improves digestion, and boosts immunity.", work:"Contains eugenol which has antibacterial and analgesic properties.", use:"Chew cloves, make tea, or use oil topically.", side:"May cause mouth irritation if overused." },
  "Turmeric": { image:"turmeric.jpg", help:"Reduces inflammation, improves liver function, and supports immunity.", work:"Curcumin in turmeric has antioxidant and anti-inflammatory effects.", use:"Use powder in meals, make tea, or take supplements.", side:"May cause mild stomach upset in excess." },
  "Gotu Kola": { image:"gotukola.jpg", help:"Enhances memory, reduces anxiety, and improves circulation.", work:"Contains triterpenoids that improve cognitive and vascular health.", use:"Consume as tea, juice, or powder.", side:"Overuse may cause headache or nausea." },
  "Sage": { image:"sage.jpg", help:"Supports brain health, reduces inflammation, and improves digestion.", work:"Contains antioxidants that protect brain cells and aid gut function.", use:"Add to meals or brew tea.", side:"May cause stomach upset in high amounts." },
  "Rosemary": { image:"rosemary.jpg", help:"Boosts memory, improves circulation, and supports digestion.", work:"Contains compounds that stimulate brain and digestive functions.", use:"Add leaves to food or brew as tea.", side:"Overconsumption may cause nausea." },
  "Chamomile": { image:"chamomile.jpg", help:"Relieves stress, aids sleep, and soothes digestive issues.", work:"Contains apigenin which has calming and anti-inflammatory effects.", use:"Drink chamomile tea before sleep.", side:"May trigger allergies in sensitive individuals." },
  "Lavender": { image:"lavender.jpg", help:"Reduces stress, improves sleep, and supports skin health.", work:"Contains linalool which has relaxing and antibacterial properties.", use:"Use oil, bath, or tea.", side:"May cause skin irritation if applied directly." },
  "Basil": { image:"basil.jpg", help:"Reduces inflammation, supports immunity, and aids digestion.", work:"Contains antioxidants and eugenol for overall wellness.", use:"Add fresh leaves to meals or make tea.", side:"Overuse may lower blood sugar." },
  "Black Pepper": { image:"blackpepper.jpg", help:"Improves digestion, boosts nutrient absorption, and supports immunity.", work:"Contains piperine which enhances bioavailability of nutrients.", use:"Add to food or make tea.", side:"May cause stomach irritation in excess." },
  "Holy Fruit Amla": { image:"holyfruitamla.jpg", help:"Boosts immunity, improves digestion, and strengthens hair.", work:"Rich in Vitamin C and antioxidants that protect cells and improve gut health.", use:"Consume raw, juice, or powder daily.", side:"May cause mild acidity if consumed in excess." },
  "Gooseberry": { image:"gooseberry.jpg", help:"Enhances immunity, promotes digestion, and improves skin health.", work:"Contains Vitamin C and fiber which aid gut function and skin repair.", use:"Eat raw or as juice/powder.", side:"May cause mild stomach upset if overconsumed." },
  "Mango": { image:"mango.jpg", help:"Provides vitamins, improves digestion, and supports eye health.", work:"Rich in Vitamin A and antioxidants that protect vision and immunity.", use:"Eat ripe fruit or drink mango juice.", side:"Excess may cause weight gain or acidity." },
  "Jackfruit": { image:"jackfruit.jpg", help:"Boosts energy, supports digestion, and strengthens immunity.", work:"Contains fiber and antioxidants that improve gut health and reduce oxidative stress.", use:"Eat ripe fruit or seeds, or make juice/pulp.", side:"May cause bloating if consumed in excess." },
  "Guava": { image:"guava.jpg", help:"Enhances immunity, improves digestion, and supports skin health.", work:"Rich in Vitamin C and fiber which help fight infections and improve gut function.", use:"Eat raw, juice, or add to smoothies.", side:"May cause mild stomach upset if eaten excessively." },
  "Strawberry": { image:"strawberry.jpg", help:"Rich in antioxidants, improves skin health, and boosts immunity.", work:"Contains Vitamin C and flavonoids that neutralize free radicals.", use:"Eat raw or in smoothies.", side:"May cause allergic reactions in sensitive individuals." },
  "Blueberry": { image:"blueberry.jpg", help:"Supports brain health, improves heart function, and boosts immunity.", work:"Contains anthocyanins and antioxidants that protect cells from oxidative stress.", use:"Eat raw, juice, or add to meals.", side:"Excessive consumption may cause mild digestive upset." },
  "Raspberry": { image:"raspberry.jpg", help:"Improves digestion, supports immunity, and promotes healthy skin.", work:"Contains fiber and antioxidants that aid gut and skin health.", use:"Eat raw or in smoothies and desserts.", side:"May cause mild bloating if overconsumed." },
  "Cranberry": { image:"cranberry.jpg", help:"Prevents urinary tract infections, boosts immunity, and supports heart health.", work:"Contains proanthocyanidins which prevent bacterial adhesion and oxidative damage.", use:"Drink juice or consume berries daily.", side:"May cause acidity or digestive discomfort in excess." },
  "Clitoria": { image:"clitoria.jpg", help:"Enhances memory, reduces anxiety, and supports brain health.", work:"Contains flavonoids that protect neurons and improve cognitive function.", use:"Use as tea or extracts.", side:"May cause mild dizziness in high amounts." },
  "Moringa": { image:"moringa.jpg", help:"Boosts energy, supports immunity, and improves digestion.", work:"Rich in vitamins, minerals, and antioxidants that enhance overall wellness.", use:"Consume leaves, powder, or capsules.", side:"Excess may cause digestive discomfort." },
  "Jackalberry": { image:"jackalberry.jpg", help:"Supports digestion, boosts immunity, and improves heart health.", work:"Contains fiber and antioxidants beneficial for gut and heart.", use:"Eat ripe fruit or seeds.", side:"Excess may cause mild stomach upset." },
  "Sapodilla": { image:"sapodilla.jpg", help:"Provides energy, supports digestion, and improves immunity.", work:"Rich in fiber and vitamins that aid gut and immune health.", use:"Eat ripe fruit or make juice.", side:"May cause mild bloating if overconsumed." }
};

// Get selected plant
const plantName = localStorage.getItem("selectedPlant");

if (plantName && herbs[plantName]) {
  const plant = herbs[plantName];
  document.getElementById("plant-name").innerText = plantName;
  document.getElementById("plant-image").src = plant.image;
  document.getElementById("plant-help").innerText = plant.help;
  document.getElementById("plant-work").innerText = plant.work;
  document.getElementById("plant-use").innerText = plant.use;
  document.getElementById("plant-side").innerText = plant.side;
} else {
  document.getElementById("plant-name").innerText = "Data Not Available";
}

// Open AI Botpress Webchat on click
document.getElementById("ai-toy").addEventListener("click", () => {
  window.open(
    "https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/09/30/11/20250930115634-ERIL9V67.json",
    "_blank"
  );
});
