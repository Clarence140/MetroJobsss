document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo(0, 0);

  loadComponents().then(() => {
    initNavbar();
    initFooter();
    initAnimations();
    initImageSlider();
    initImageModal(); // Add this line to initialize the image modal
  });

  setTimeout(() => window.scrollTo(0, 0), 100);
});

async function loadComponents() {
  try {
    const navResponse = await fetch("components/navbar.html");
    const navData = await navResponse.text();
    document.body.insertAdjacentHTML("afterbegin", navData);

    const footerResponse = await fetch("components/footer.html");
    const footerData = await footerResponse.text();
    document.body.insertAdjacentHTML("beforeend", footerData);
  } catch (error) {
    console.error("Error loading components:", error);
  }
}

function initAnimations() {
  AOS.init({
    duration: 500,
    easing: "ease-out",
    once: true,
    offset: 100,
    delay: 50,
    disable: window.innerWidth < 768,
  });
}

function initImageSlider() {
  const slider = document.querySelector(".image-slider");
  if (!slider) return;

  const images = slider.querySelectorAll(".slider-image");
  if (images.length === 0) return;

  let currentIndex = 0;
  let slideInterval;

  function showNextImage() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
  }

  function startSlider() {
    images[0].classList.add("active");
    slideInterval = setInterval(showNextImage, 5000);
  }

  function pauseSlider() {
    clearInterval(slideInterval);
  }

  function resumeSlider() {
    slideInterval = setInterval(showNextImage, 5000);
  }

  startSlider();

  // Pause on hover for better UX when clicking images
  slider.addEventListener("mouseenter", pauseSlider);
  slider.addEventListener("mouseleave", resumeSlider);
}

function initImageModal() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("imageCaption");
  const counterText = document.getElementById("imageCounter");
  const closeBtn = document.querySelector(".close-modal");
  const prevBtn = document.querySelector(".prev-arrow");
  const nextBtn = document.querySelector(".next-arrow");
  const images = document.querySelectorAll(".slider-image");

  if (
    !modal ||
    !modalImg ||
    !captionText ||
    !counterText ||
    !closeBtn ||
    !prevBtn ||
    !nextBtn ||
    images.length === 0
  ) {
    return;
  }

  let currentModalIndex = 0;
  let isModalOpen = false;
  let touchStartX = 0;
  let touchEndX = 0;

  // Open modal with specific image
  function openModal(index) {
    currentModalIndex = index;
    updateModalImage();
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    isModalOpen = true;
  }

  // Close modal
  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "";
    isModalOpen = false;
  }

  // Navigate between images
  function navigate(direction) {
    currentModalIndex =
      (currentModalIndex + direction + images.length) % images.length;
    updateModalImage();
  }

  // Update modal content
  function updateModalImage() {
    const activeImage = images[currentModalIndex];
    modalImg.src = activeImage.src;
    captionText.textContent = activeImage.alt;
    counterText.textContent = `${currentModalIndex + 1}/${images.length}`;

    // Reset animation for smooth transition
    modalImg.style.animation = "none";
    void modalImg.offsetWidth; // Trigger reflow
    modalImg.style.animation = "zoomIn 0.3s";
  }

  // Add click event to all slider images
  images.forEach((img, index) => {
    img.addEventListener("click", () => openModal(index));
  });

  // Close modal when clicking X
  closeBtn.addEventListener("click", closeModal);

  // Close modal when clicking outside the image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Navigation arrows
  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navigate(-1);
  });

  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navigate(1);
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!isModalOpen) return;

    switch (e.key) {
      case "ArrowLeft":
        navigate(-1);
        break;
      case "ArrowRight":
        navigate(1);
        break;
      case "Escape":
        closeModal();
        break;
    }
  });

  // Touch events for mobile swipe
  modal.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  modal.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    { passive: true }
  );

  function handleSwipe() {
    const diff = touchStartX - touchEndX;
    if (diff > 50) navigate(1); // Swipe left - next image
    if (diff < -50) navigate(-1); // Swipe right - previous image
  }
}

function initNavbar() {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".navbar .menu");

  // Set active page in navigation
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".navbar .menu li a");

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    if (
      currentPage === linkHref ||
      (currentPage === "" && linkHref === "index.html") ||
      (currentPage.endsWith(".html") && linkHref === currentPage)
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", function () {
      this.classList.toggle("active");
      menu.classList.toggle("active");

      document.body.style.overflow = menu.classList.contains("active")
        ? "hidden"
        : "";
    });

    const menuLinks = menu.querySelectorAll("a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        menuToggle.classList.remove("active");
        menu.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  }
}

function initFooter() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const footerLinks = document.querySelectorAll(".quick-links a");

  footerLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (href !== "#" && href.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: "smooth",
          });
        }
      }
    });
  });
});

window.addEventListener("beforeunload", function () {
  window.scrollTo(0, 0);
});

window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    window.scrollTo(0, 0);
    AOS.refresh();
  }
});
