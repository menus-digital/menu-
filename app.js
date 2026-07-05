const menuSections = [
  {
    id: "petit-dejeuner",
    group: "breakfast",
    title: "Petit-déjeuner",
    items: [
      { name: "Simple", price: 24, desc: "Boisson chaude - viennoiseries - jus d'orange" },
      { name: "Marocaine", price: 30, desc: "Semoule - boisson chaude - pain complet - meloui - harcha fromage - huile d'olives - miel - olive noire - jus d'orange" },
      { name: "Fassi", price: 34, desc: "Semoule - boisson chaude - tajine oeufs aux khlii - pain complet - jus d'orange" },
      { name: "Narjisse", price: 32, desc: "Semoule - boisson chaude - omelette - jben - huile d'olives - olive noire - pain complet - jus d'orange" },
      { name: "Viennoiseries", price: 6 },
      { name: "Meloui", price: 6 },
      { name: "Harcha", price: 6 },
      { name: "Olive noire", price: 5, badge: "Supplément" },
      { name: "Huile d'olive", price: 5, badge: "Supplément" },
      { name: "Jben", price: 5, badge: "Supplément" }
    ]
  },
  {
    id: "tranches-patisserie",
    group: "sweet",
    title: "Tranches pâtisserie",
    items: [
      { name: "Caramel", price: 15 },
      { name: "Chocolat au lait", price: 15 },
      { name: "Chocolat noir", price: 15 },
      { name: "Praliné", price: 15 },
      { name: "Mille feuille", price: 15 }
    ]
  },
  {
    id: "salades",
    group: "food",
    title: "Nos Salades",
    items: [
      { name: "Salade Marocaine", price: 25, desc: "Laitues - tomates - oignons - thon - oeufs - olives" },
      { name: "Salade Nicoise", price: 28, desc: "Laitues - légumes - thon - oeufs - olives - cornichon" },
      { name: "Salade du chef", price: 30, desc: "Laitues - légumes - thon - riz - maïs - oeufs - fromage - olives - cornichon" },
      { name: "Salade Narjisse", price: 38, desc: "Laitues - légumes - ananas - charcuterie - ricotta - crevettes - oeufs - blé - maïs - fromage - olives" },
      { name: "Salade Hawaienne", price: 40, desc: "Laitues - riz - pomme - ananas - maïs - raisin sec - tomate - olive - noix - pêche" }
    ]
  },
  {
    id: "hamburgers",
    group: "food",
    title: "Nos Hamburgers",
    items: [
      { name: "Hamburger simple + frites", price: 32 },
      { name: "Cheeseburger + frites", price: 35 },
      { name: "Egg cheese", price: 35 },
      { name: "Chicken burger + frites", price: 35 },
      { id: "plat-jour", name: "Plat de jour", price: 60, badge: "Suggestion du jour", featured: true }
    ]
  },
  {
    id: "sandwichs",
    group: "food",
    title: "Nos Sandwichs",
    items: [
      { name: "Sandwich saucisses + frites", price: 40 },
      { name: "Sandwich de viande hachée + frites", price: 40 },
      { name: "Sandwich de poulet + frites", price: 40 },
      { name: "Sandwich de dinde + frites", price: 40 },
      { name: "Sandwich mixte + frites", price: 40 }
    ]
  },
  {
    id: "paninis",
    group: "food",
    title: "Nos Paninis",
    items: [
      { name: "Panini poulet", price: 35, desc: "Tomate fraîche - poulet - fromage - frites" },
      { name: "Panini viande hachée", price: 35, desc: "Tomate fraîche - viande hachée - fromage - frites" },
      { name: "Panini charcuterie", price: 35, desc: "Tomate fraîche - jambon de dinde - fromage - frites" },
      { name: "Panini thon", price: 35, desc: "Tomate fraîche - thon - fromage - frites" },
      { name: "Panini mixte", price: 40, desc: "Tomate fraîche - viande hachée - poulet - fromage - frites" }
    ]
  },
  {
    id: "plats",
    group: "food",
    title: "Nos Plats",
    items: [
      { name: "Escalope de dinde farcie", price: 48, desc: "+ garnitures" },
      { name: "Émincés de poulet", price: 48, desc: "+ garnitures" },
      { name: "Émincés de boeuf", price: 55, desc: "+ garnitures" },
      { name: "Émincés mixtes", price: 55, desc: "+ garnitures" },
      { name: "Brochettes de dinde", price: 45, desc: "+ garnitures" },
      { name: "Brochettes mixtes", price: 55, desc: "+ garnitures" },
      { name: "Brochettes filet de boeuf", price: 75, desc: "+ garnitures" },
      { name: "Poulet à la Romaine", price: 48, desc: "+ garnitures" },
      { name: "Steak de veau grillé", price: 50, desc: "+ garnitures" },
      { name: "Filet poisson en sauce", price: 80, desc: "+ garnitures" },
      { name: "Filet poisson grillé", price: 75, desc: "+ garnitures" }
    ]
  },
  {
    id: "pates-couscous",
    group: "food",
    title: "Nos Pâtes",
    items: [
      { name: "Tagliatelle fruits de mer", price: 50 },
      { name: "Tagliatelle Bolognaise", price: 40 },
      { name: "Spaghettis Bolognaise", price: 40 },
      { name: "Spaghettis thon", price: 40 },
      { id: "couscous", name: "Couscous viande", price: 50, badge: "Chaque vendredi", featured: true },
      { name: "Couscous poulet", price: 45, badge: "Chaque vendredi", featured: true }
    ]
  },
  {
    id: "tacos",
    group: "food",
    title: "Nos Tacos",
    items: [
      { name: "Tacos poulet", price: 45 },
      { name: "Tacos viande hachée", price: 45 },
      { name: "Tacos mixte", price: 45 },
      { name: "Tacos nuggets", price: 45 },
      { name: "Sauce", price: 8, badge: "Supplément" }
    ]
  },
  {
    id: "pizzas",
    group: "food",
    title: "Nos Pizzas",
    items: [
      { name: "Pizza Margarita", price: 38, desc: "Tomates - fromage - olives" },
      { name: "Pizza Végétarienne", price: 40, desc: "Tomates - fromage - poivrons - oignons - champignons - olives" },
      { name: "Pizza Thon", price: 45, desc: "Tomates - fromage - thon - olives" },
      { name: "Pizza Bolognaise", price: 48, desc: "Tomates - fromage - viande hachée - champignons - poivrons - olives" },
      { name: "Pizza Chicken", price: 48, desc: "Tomates - fromage - poulet - poivrons - champignons - olives" },
      { name: "Pizza Fruits de mer", price: 65, desc: "Tomates - crevettes - calamar - fromage" },
      { name: "Pizza du chef", price: 60, desc: "Tomates - oignons - viande hachée - poulet - jambon de dinde - crevettes - olives - poivrons - champignons" }
    ]
  },
  {
    id: "kids",
    group: "food",
    title: "Kids Menu",
    items: [
      { name: "Hamburger kids", price: 40, desc: "Frite - boisson - yaourt", featured: true },
      { name: "Pizza kids", price: 40, desc: "Boisson - yaourt", featured: true }
    ]
  },
  {
    id: "supplements",
    group: "food",
    title: "Suppléments",
    items: [
      { name: "Frites", price: 12 },
      { name: "Riz", price: 12 },
      { name: "Légumes sautés", price: 12 }
    ]
  },
  {
    id: "boissons-chaudes",
    group: "drinks",
    title: "Nos Boissons Chaudes",
    items: [
      { name: "Café espresso", price: 16, desc: "Capsule" },
      { name: "Café noir", price: 13 },
      { name: "Café au lait", price: 15 },
      { name: "Café allongé", price: 15 },
      { name: "Café séparé", price: 15 },
      { name: "Chocolat chaud", price: 18 },
      { name: "Thé Marocain", price: 12 },
      { name: "Thé noir", price: 12 },
      { name: "Verveine", price: 12 },
      { name: "Cappuccino Italien", price: 18 },
      { name: "Cappuccino Viennois", price: 19 },
      { name: "Cappuccino aromatisé", price: 18 }
    ]
  },
  {
    id: "boissons-froides",
    group: "drinks",
    title: "Nos Boissons Froides",
    items: [
      { name: "Canettes 33ml au choix", price: 9 },
      { name: "Canettes slim au choix", price: 6 },
      { name: "Oulmès", price: 9 },
      { name: "Eau minérale 1/2 L", price: 6 },
      { name: "Eau minérale 1,5 L", price: 9 },
      { name: "Jus d'Orange", price: 15 },
      { name: "Jus de Banane", price: 15 },
      { name: "Jus de Pomme", price: 15 },
      { name: "Jus d'Avocat", price: 20 },
      { name: "Jus de Fraise", price: 15 },
      { name: "Jus de Citron au Gingembre", price: 15 },
      { name: "Panaché au lait ou à l'orange", price: 20 }
    ]
  },
  {
    id: "jus",
    group: "drinks",
    title: "Nos Jus",
    items: [
      { name: "Jus d'Orange", price: 15 },
      { name: "Jus de Banane", price: 15 },
      { name: "Jus de Pomme", price: 15 },
      { name: "Jus d'Avocat", price: 20 },
      { name: "Jus de Fraise", price: 15 },
      { name: "Panaché au lait ou à l'orange", price: 20 }
    ]
  },
  {
    id: "tartes",
    group: "sweet",
    title: "Nos Tartes",
    items: [
      { name: "Tarte amandes", price: 15 },
      { name: "Tarte noix", price: 15 },
      { name: "Tarte fruit", price: 15 },
      { name: "Tarte citron", price: 15 }
    ]
  },
  {
    id: "desserts",
    group: "sweet",
    title: "Nos Desserts",
    items: [
      { name: "Salade de fruits", price: 18 },
      { name: "Crème caramel", price: 18 },
      { name: "Tiramisu", price: 18 },
      { name: "Nougat glacé", price: 18 },
      { name: "Glaces au choix", price: 18 }
    ]
  }
];

const galleryPhotos = [
  { src: "images/download.png",  alt: "Légende de Goût" },
  { src: "images/frite.jpg",  alt: "Frites croustillantes" },
  { src: "images/patte.jpg",  alt: "Pâtes délicieuses" },
  { src: "images/pizza.jpg",  alt: "Pizza savoureuse" }
];

const grids = {
  breakfast: document.querySelector("#breakfastGrid"),
  food: document.querySelector("#foodGrid"),
  drinks: document.querySelector("#drinksGrid"),
  sweet: document.querySelector("#sweetGrid")
};

const sectionTemplate = document.querySelector("#sectionTemplate");
const itemTemplate = document.querySelector("#itemTemplate");
const nav = document.querySelector("#categoryNav");
const search = document.querySelector("#menuSearch");
const photoGrid = document.querySelector("#photoGrid");

function priceLabel(price) {
  return `${price}Dh`;
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function renderItem(item) {
  const node = itemTemplate.content.firstElementChild.cloneNode(true);
  const title = node.querySelector("h4");
  const desc = node.querySelector("p");
  const price = node.querySelector(".price");
  const badge = node.querySelector(".badge");

  title.textContent = item.name;
  price.textContent = priceLabel(item.price);
  desc.textContent = item.desc || "";
  badge.textContent = item.badge || "";

  if (!item.desc) desc.hidden = true;
  if (item.featured) node.classList.add("is-featured");
  if (item.id) node.id = item.id;

  node.dataset.search = normalizeText(`${item.name} ${item.desc || ""} ${item.badge || ""} ${item.price}`);
  return node;
}

function renderSection(section) {
  const node = sectionTemplate.content.firstElementChild.cloneNode(true);
  const title = node.querySelector("h3");
  const items = node.querySelector(".menu-items");

  node.id = section.id;
  title.textContent = section.title;
  section.items.forEach((item) => items.append(renderItem(item)));

  return node;
}

function renderNav() {
  const groupOrder = ["breakfast", "food", "drinks", "sweet"];
  const orderedSections = menuSections
    .map((section, index) => ({ section, index }))
    .sort((a, b) => {
      const groupDiff = groupOrder.indexOf(a.section.group) - groupOrder.indexOf(b.section.group);
      return groupDiff || a.index - b.index;
    })
    .map(({ section }) => section);

  orderedSections.map((section) => ({ href: `#${section.id}`, label: section.title.replace("Nos ", "") })).forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.textContent = link.label;
    nav.append(anchor);
  });
}

function renderMenu() {
  menuSections.forEach((section) => {
    grids[section.group].append(renderSection(section));
  });
  renderNav();
}

function renderPhotos() {
  const photos = galleryPhotos.length
    ? galleryPhotos
    : Array.from({ length: 4 }, (_, index) => ({ label: `Photo ${index + 1}` }));

  photos.forEach((photo, index) => {
    const card = document.createElement("figure");
    const data = typeof photo === "string" ? { src: photo } : photo;

    card.className = "photo-card";
    card.dataset.label = data.label || `Photo ${index + 1}`;

    if (data.src) {
      const image = document.createElement("img");
      image.src = data.src;
      image.alt = data.alt || data.label || `Photo ${index + 1}`;
      image.loading = "lazy";
      card.append(image);
    }

    photoGrid.append(card);
  });
}

function filterMenu(query) {
  const needle = normalizeText(query.trim());
  let visibleItems = 0;

  document.querySelectorAll(".menu-section").forEach((section) => {
    let sectionHasMatch = false;

    section.querySelectorAll(".menu-item").forEach((item) => {
      const match = !needle || item.dataset.search.includes(needle);
      item.classList.toggle("is-hidden", !match);
      if (match) {
        sectionHasMatch = true;
        visibleItems += 1;
      }
    });

    section.classList.toggle("is-empty", !sectionHasMatch);
  });

  document.body.classList.toggle("has-no-results", visibleItems === 0);
}

function setupActiveNav() {
  const links = [...nav.querySelectorAll("a")];
  const lookup = new Map(links.map((link) => [link.getAttribute("href").slice(1), link]));
  const targets = [...document.querySelectorAll(".section-band, .menu-section")];

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    links.forEach((link) => link.classList.remove("is-active"));
    const active = lookup.get(visible.target.id);
    if (active) active.classList.add("is-active");
  }, {
    rootMargin: "-35% 0px -58% 0px",
    threshold: [0.05, 0.25, 0.55]
  });

  targets.forEach((target) => observer.observe(target));
}

function setupIntro() {
  const intro = document.querySelector("#intro");
  const button = document.querySelector("#enterMenu");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let closed = false;

  const closeIntro = () => {
    if (closed) return;
    closed = true;
    intro.classList.add("is-hidden");
    document.body.classList.remove("intro-active");
  };

  button.addEventListener("click", closeIntro);
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" || event.key === "Enter") closeIntro();
  });
  window.setTimeout(closeIntro, reduceMotion ? 900 : 4300);
}

function setupScrollTop() {
  document.querySelectorAll("[data-scroll-top]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      search.blur();
      const root = document.documentElement;
      const previousScrollBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      requestAnimationFrame(() => {
        root.style.scrollBehavior = previousScrollBehavior;
      });
      if (history.replaceState) history.replaceState(null, "", location.pathname + location.search);
    });
  });
}

renderMenu();
renderPhotos();
setupActiveNav();
setupIntro();
setupScrollTop();

search.addEventListener("input", (event) => filterMenu(event.target.value));
