// Abrir/Fechar Modal
function openModal() {
  document.getElementById("modalLogin").style.display = "flex";
}

function closeModal() {
  document.getElementById("modalLogin").style.display = "none";
}

// Trocar visões (Cliente/Lojista)
function switchView(view) {
  document
    .querySelectorAll(".view-section")
    .forEach((v) => v.classList.remove("active"));
  document.getElementById("view-" + view).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openSearch() {
  alert("Emily, aqui você pode criar um campo de busca flutuante no futuro!");
}

// Toggle menu mobile
function toggleMobileMenu() {
  const menu = document.querySelector(
    ".navbar-top-fixed.mobile-only .gaveta-flutuante",
  );
  const overlay = document.querySelector(
    ".navbar-top-fixed.mobile-only .mobile-overlay",
  );

  const isOpen = menu.classList.toggle("open");
  overlay.classList.toggle("active", isOpen);
}

function closeMobileMenu() {
  const menu = document.querySelector(
    ".navbar-top-fixed.mobile-only .gaveta-flutuante",
  );
  const overlay = document.querySelector(
    ".navbar-top-fixed.mobile-only .mobile-overlay",
  );

  menu.classList.remove("open");
  overlay.classList.remove("active");
}

// Fechar menu ao pressionar ESC
function onDocumentKeydown(event) {
  if (event.key === "Escape" || event.key === "Esc") {
    const menu = document.querySelector(
      ".navbar-top-fixed.mobile-only .gaveta-flutuante",
    );
    if (menu && menu.classList.contains("open")) {
      closeMobileMenu();
    }
  }
}

document.addEventListener("keydown", onDocumentKeydown);
