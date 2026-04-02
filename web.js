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

// Faz a janelinha do carrinho abrir e fechar
function toggleCarrinho() {
  const modal = document.getElementById("janela-carrinho");
  modal.classList.toggle("show");
}

// Faz o efeito de "Logado": esconde botões e mostra o carrinho
function logarUsuario() {
  document.getElementById("btn-login").classList.add("hidden");
  document.getElementById("btn-cadastro").classList.add("hidden");
  document.getElementById("container-carrinho").classList.remove("hidden");
}

// Função para fechar o menu mobile ao clicar em um link
function closeMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) menu.classList.remove("open");
}

/* ============================================================
   FILTRO DO CARROSSEL: APENAS LOJAS COM +50k VIEWS
   ============================================================ 
function filtrarCarrossel() {
  const marcas = document.querySelectorAll('.brand-item'); // Pega todas as marcas
  const metaViews = 50000; // Define a sua meta de 50 mil

  marcas.forEach(marca => {
    // Pega o número de views que a gente escreveu no HTML
    const views = parseInt(marca.getAttribute('data-views'));

    if (views < metaViews) {
      // Se for menor que 50.000, remove a loja do carrossel
      marca.remove(); 
    }
  });
}

// Executa a função assim que o site carrega
window.addEventListener('DOMContentLoaded', filtrarCarrossel); */
