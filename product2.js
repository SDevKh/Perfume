const products = [
    {
      title: "Pacific Ocean",
      description: " A deep, aquatic embrace of salt, breeze, and boundless blue, capturing the soul of the open sea.",
      image: "pics/7.jpg"
    },
    {
      title: "Club De Nuit Intense",
      description: "A powerful, captivating blend of citrus and smoky woods, designed for the bold and daring",
      image: "pics/6.jpg"
    },
    {
      title: "Dunhill Icon Racing",
      description: "A vibrant, energetic fragnance that captures the thrill of speed and adventure.",
      image: "pics/5.jpg"
    },
    {
      title: "Ombre Leather",
      description: "A rich, leathery scent with a hint of floral and spice, evoking the allure of the open road.",
      image: "pics/4.jpg"
    },
    {
      title: "Oud Wood",
      description: "A warm, woody fragnance with a hint of spice, perfect for those who appreciate the finer things in life.",
      image: "pics/3.jpg"
    },
    {
      title: "YSLY Elixir",
      description: "A luxurious, sensual fragnance that combines floral and fruity notes for a captivating scent.",
      image: "pics/2.jpg"
    },
    {
      title: "Azure The Most Wanted",
      description: "A bold, daring fragnance that combines sweet and spicy notes for a unique scent.",
      image: "pics/1.jpg"
    },
    {
      title: "Imperial Valley",
      description: "A bold, daring fragnance that combines sweet and spicy notes for a unique scent.",
      image: "pics/imperial valley.jpg"
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