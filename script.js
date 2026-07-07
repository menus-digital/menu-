(() => {
  "use strict";

  /* ---------------------------------------------------------------
     INTRO SEQUENCE
     Auto-advances after a short beat, or on tap. Skips instantly on
     repeat visits within the same session (nice for staff/regulars).
  --------------------------------------------------------------- */
  const intro = document.getElementById("intro");
  const introEnter = document.getElementById("introEnter");
  const app = document.getElementById("app");
  const SEEN_KEY = "lg_menu_intro_seen";

  function leaveIntro(){
    if (intro.classList.contains("is-leaving")) return;
    intro.classList.add("is-leaving");
    app.classList.add("is-ready");
    document.body.style.overflow = "";
    window.setTimeout(() => {
      intro.classList.add("is-hidden");
    }, 900);
    try { sessionStorage.setItem(SEEN_KEY, "1"); } catch(e) {}
  }

  let alreadySeen = false;
  try { alreadySeen = !!(sessionStorage && sessionStorage.getItem(SEEN_KEY)); } catch(e) {}

  if (alreadySeen) {
    intro.style.transition = "none";
    intro.classList.add("is-hidden");
    app.classList.add("is-ready");
  } else {
    document.body.style.overflow = "hidden";
    const autoTimer = setTimeout(leaveIntro, 3400);
    introEnter.addEventListener("click", () => { clearTimeout(autoTimer); leaveIntro(); });
    intro.addEventListener("click", (e) => {
      if (e.target === intro) { clearTimeout(autoTimer); leaveIntro(); }
    });
  }

  /* ---------------------------------------------------------------
     STICKY NAV — scrollspy + smooth scroll + horizontal auto-center
  --------------------------------------------------------------- */
  const pills = Array.from(document.querySelectorAll(".catnav__pill"));
  const sections = pills
    .map(p => document.getElementById(p.dataset.target))
    .filter(Boolean);
  const track = document.getElementById("catnavTrack");

  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      const target = document.getElementById(pill.dataset.target);
      if (!target) return;
      const offset = document.getElementById("control").offsetHeight + 14;
      const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });

  function setActivePill(id){
    pills.forEach(p => p.classList.toggle("is-active", p.dataset.target === id));
    const active = pills.find(p => p.dataset.target === id);
    if (active && track) {
      const left = active.offsetLeft - track.clientWidth / 2 + active.clientWidth / 2;
      track.scrollTo({ left, behavior: "smooth" });
    }
  }

  let spyTicking = false;
  function updateScrollSpy(){
    spyTicking = false;
    const controlH = document.getElementById("control").offsetHeight;
    const probe = controlH + 40;
    let currentId = sections[0] && sections[0].id;
    for (const sec of sections) {
      const rect = sec.getBoundingClientRect();
      if (rect.top - probe <= 0) currentId = sec.id;
    }
    setActivePill(currentId);
  }
  window.addEventListener("scroll", () => {
    if (!spyTicking) { window.requestAnimationFrame(updateScrollSpy); spyTicking = true; }
  }, { passive:true });

  /* ---------------------------------------------------------------
     BACK TO TOP
  --------------------------------------------------------------- */
  const toTop = document.getElementById("toTop");
  window.addEventListener("scroll", () => {
    toTop.classList.toggle("is-visible", window.pageYOffset > 700);
  }, { passive:true });
  toTop.addEventListener("click", () => window.scrollTo({ top:0, behavior:"smooth" }));

  /* ---------------------------------------------------------------
     SCROLL-REVEAL for item cards
  --------------------------------------------------------------- */
  const items = Array.from(document.querySelectorAll(".item"));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    items.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i % 6, 6) * 40}ms`;
      io.observe(el);
    });
  } else {
    items.forEach(el => el.classList.add("is-visible"));
  }

  /* ---------------------------------------------------------------
     SEARCH / FILTER
  --------------------------------------------------------------- */
  const searchInput = document.getElementById("searchInput");
  const searchWrap = document.querySelector(".control__search");
  const searchClear = document.getElementById("searchClear");
  const noResults = document.getElementById("noResults");
  const cats = Array.from(document.querySelectorAll(".cat"));

  function stripDiacritics(str){
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function highlight(el, query){
    const original = el.dataset.original || el.textContent;
    el.dataset.original = original;
    if (!query) { el.innerHTML = original; return; }
    const norm = stripDiacritics(original.toLowerCase());
    const nq = stripDiacritics(query.toLowerCase());
    const idx = norm.indexOf(nq);
    if (idx === -1) { el.innerHTML = original; return; }
    el.innerHTML = original.slice(0, idx) + "<mark>" + original.slice(idx, idx + query.length) + "</mark>" + original.slice(idx + query.length);
  }

  function runSearch(){
    const raw = searchInput.value.trim();
    searchWrap.classList.toggle("has-text", raw.length > 0);
    const q = stripDiacritics(raw.toLowerCase());
    let anyVisible = false;

    items.forEach(item => {
      const nameEl = item.querySelector(".item__name");
      const descEl = item.querySelector(".item__desc");
      const haystack = stripDiacritics(item.textContent.toLowerCase());
      const match = q === "" || haystack.includes(q);
      item.style.display = match ? "" : "none";
      if (match) {
        item.classList.add("is-visible");
        anyVisible = true;
      }
      if (nameEl) highlight(nameEl, q);
    });

    cats.forEach(cat => {
      const visibleItems = cat.querySelectorAll(".item:not([style*='display: none'])").length;
      const totalItems = cat.querySelectorAll(".item").length;
      cat.style.display = (q !== "" && totalItems > 0 && visibleItems === 0) ? "none" : "";
    });

    noResults.hidden = !(q !== "" && !anyVisible);
  }

  searchInput.addEventListener("input", runSearch);
  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    runSearch();
    searchInput.focus();
  });

  /* ---------------------------------------------------------------
     INIT
  --------------------------------------------------------------- */
  updateScrollSpy();
})();
