const products = [
    {
      title: "Desire Red",
      description: "A seductive burst of passion and warmth, enveloping you in a daring, irresistible allure.",
      image: "pics/IMG-20250430-WA0002.jpg"
    },
    {
      title: "Desire Blue",
      description: "Floral tones blended with fresh morning dew.",
      image: "pics/IMG-20250430-WA0003.jpg"
    },
    {
      title: "Eau De Toilette",
      description: "A delicate yet invigorating fragnance, perfect for those who appreciate timeless freshness and subtle elegance.",
      image: "pics/IMG-20250430-WA0004.jpg"
    },
    {
      title: "Gucci Flora",
      description: "A sophisticated bouquet of vibrant blooms, evoking grace and femininity with every delicate note.",
      image: "pics/prod.jpg"
    },
    {
      title: "Cool Waves",
      description: " A refreshing rush of crisp, oceanic breeze, capturing the essence of freedom and tranquility.",
      image: "pics/0003.jpg"
    },
    {
      title: "Eu de Noir",
      description: "A mysterious and captivating blend of deep, smoky woods and soft, intoxicating florals, embodying elegance with a dark allure.",
      image: "pics/page_11.jpg"
    },
    {
      title: "Elixir Noir",
      description: "A blend of spices and dark woods.",
      image: "pics/page_2.jpg"
    },
    {
      title: "Wanted By Night",
      description: "A bold, spicy fragnance with a smoky sweetness that lures you into a world of mystery and temptation.",
      image: "pics/page_3.jpg"
    },
    {
      title: "King Oudh",
      description: "A regal, commanding fragnance of rich oud and exotic spices, fit for those who wear power and luxury.",
      image: "pics/page_4.jpg"
    },
    {
      title: "Miss Dior",
      description: "A floral bouquet with a hint of citrus.",
      image: "pics/page_5.jpg"
    }
  ];
  
  const container = document.getElementById("product-container");
  
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.title}" />
      <h3>${p.title}</h3>
      <p>${p.description}</p>
    `;
    container.appendChild(div);
  });
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });