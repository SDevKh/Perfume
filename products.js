const products = [
    {
      title: "Cool Water",
      description: "Floral tones blended with fresh morning dew.",
      image: "pics/page_14.jpg"
    },
    {
      title: "Khails Oudh",
      description: "Dark, seductive, with a touch of oud and spice.",
      image: "pics/page_13.jpg"
    },
    {
      title: "Dior Sauvage",
      description: "A fresh and spicy fragnance with a hint of warmth.",
      image: "pics/page_15.jpg"
    },
    {
      title: "Eau de Parfum",
      description: "A rich and long-lasting fragnance.",
      image: "pics/page_16.jpg"
    },
    {
      title: "Deep Blue",
      description: "Fresh aquatic fragnancewith citrus notes.",
      image: "pics/page_12.jpg"
    },
    {
      title: "Oudh Kuwaiti",
      description: "A bold symphony of rich oud and Eastern allure, echoing the timeless elegance of Arabian nights.",
      image: "pics/page_10.jpg"
    },
    {
      title: "Pacific Chill",
      description: "A cool, refreshing wave of serenity that evokes the calm of the open sea and crisp ocean air.",
      image: "pics/page_9.jpg"
    },
    
    {
      title: "Beach Flower",
      description: "A breezy bloom of ocean-kissed petals, capturing the essence of a sunlit coastal escape.",
      image: "pics/page_6.jpg"
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
