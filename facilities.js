document.addEventListener("DOMContentLoaded", function () {
  // Initialize animations
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    offset: 100,
  });

  // Force page to start at top on refresh
  window.scrollTo(0, 0);

  // Image viewer functionality
  const branchImages = {
    cubao: [
      { src: "./Images/RegaliaParkTowers.jpg" },
      { src: "./Images/MetroJobsCubaoBranch/2nd.jpg" },
      { src: "./Images/01.jpg" },
      { src: "./Images/MetroJobsCubaoBranch/3rd.jpg" },
      { src: "./Images/MetroJobsCubaoBranch/4th.jpg" },
      { src: "./Images/MetroJobsCubaoBranch/5th.jpg" },
      { src: "./Images/MetroJobsCubaoBranch/6th.jpg" },
      { src: "./Images/MetroJobsCubaoBranch/7th.jpg" },
      { src: "./Images/MetroJobsCubaoBranch/8th.jpg" },
      { src: "./Images/MetroJobsCubaoBranch/9th.jpg" },
      { src: "./Images/MetroJobsCubaoBranch/MetroJobsAccounting.jpg" },
      { src: "./Images/MetroJobsCubaoBranch/MetroJobsG-03.jpg" },
      { src: "./Images/MetroJobsCubaoBranch/MetroJobsG-04.jpg" },
      { src: "./Images/MetroJobsCubaoBranch/MetrojobsG-05.jpg" },
    ],
    bulacan: [
      { src: "./Images/MetroJobsBulacan Branch/LYSAQUEENBLDG.PNG" },
      { src: "./Images/MetroJobsBulacan Branch/Bulacan1st.png" },
      { src: "./Images/MetroJobsBulacan Branch/Bulacan2nd.png" },
      { src: "./Images/MetroJobsBulacan Branch/Bulacan3rd.png" },
      { src: "./Images/MetroJobsBulacan Branch/Bulacan4th.png" },
    ],
    pampanga: [
      { src: "./Images/MetroJobsPampanga Branch/Pampanga1st.png" },
      { src: "../Images/MetroJobsPampanga Branch/Pampanga2nd.png" },
    ],
    visayas: [
      { src: "./Images/MetroJobsVisayasBranch/Visayas Esperanza Bldg.jpg" },
      { src: "./Images/MetroJobsVisayasBranch/Visayas1st.png" },
      { src: "./Images/MetroJobsVisayasBranch/Visayas2nd.png" },
      { src: "./Images/MetroJobsVisayasBranch/Visayas3rd.png" },
      { src: "./Images/MetroJobsVisayasBranch/Visayas4th.png" },
    ],
  };

  const clickableImages = document.querySelectorAll(".clickable-image");
  const imageViewer = document.querySelector(".image-viewer");
  const viewerImage = document.querySelector(".viewer-image");
  const viewerCaption = document.querySelector(".viewer-caption");
  const viewerCounter = document.querySelector(".viewer-counter");
  const closeViewer = document.querySelector(".close-viewer");
  const prevArrow = document.querySelector(".prev-arrow");
  const nextArrow = document.querySelector(".next-arrow");

  let currentBranch = "";
  let currentIndex = 0;
  let currentImages = [];

  // Open image viewer
  function openImageViewer(branch, index = 0) {
    currentBranch = branch;
    currentImages = branchImages[branch];
    currentIndex = index;

    updateViewerImage();
    imageViewer.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  // Close image viewer
  function closeImageViewer() {
    imageViewer.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Update viewer with current image
  function updateViewerImage() {
    const image = currentImages[currentIndex];
    viewerImage.src = image.src;
    viewerCaption.textContent = ""; // Empty the caption
    viewerCounter.textContent = `${currentIndex + 1}/${currentImages.length}`;
  }

  // Navigate to previous image
  function prevImage() {
    currentIndex =
      (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateViewerImage();
  }

  // Navigate to next image
  function nextImage() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateViewerImage();
  }

  // Add click events to all branch images
  clickableImages.forEach((img) => {
    img.addEventListener("click", function () {
      const branch = this.getAttribute("data-branch");
      openImageViewer(branch);
    });
  });

  // Close events
  closeViewer.addEventListener("click", closeImageViewer);
  imageViewer.addEventListener("click", function (e) {
    if (e.target === imageViewer) {
      closeImageViewer();
    }
  });

  // Navigation events
  prevArrow.addEventListener("click", function (e) {
    e.stopPropagation();
    prevImage();
  });

  nextArrow.addEventListener("click", function (e) {
    e.stopPropagation();
    nextImage();
  });

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (!imageViewer.classList.contains("active")) return;

    switch (e.key) {
      case "ArrowLeft":
        prevImage();
        break;
      case "ArrowRight":
        nextImage();
        break;
      case "Escape":
        closeImageViewer();
        break;
    }
  });
});
