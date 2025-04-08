document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS animations with improved mobile support
  AOS.init({
    duration: 600,
    easing: "ease-out-quad",
    once: false, // Allow animations to replay
    offset: 100,
    disable: function () {
      return false; // Always enable animations, even on mobile
    },
  });

  // Branch data
  const branches = {
    cubao: {
      name: "Cubao Branch (Main)",
      phone: "+63 2 8912 0242",
      mobiles: ["0920 564 4917", "0916 209 5293"],
      address:
        "150 P. Tuazon Avenue corner EDSA, Regalia Park Towers, Units G-03, G-04, G-05, Cubao, Quezon City, Philippines",
      emails: ["hrd.teamwhel@gmail.com", "jdescolano.metrojobs@gmail.com"],
      facebookLinks: [
        { url: "https://www.facebook.com/shine.rivera.71", text: "HR Shine" },
        {
          url: "https://www.facebook.com/clark.sparrow.28",
          text: "RG Whel MetroJobs",
        },
        {
          url: "https://www.facebook.com/metrojobsteamwhel",
          text: "Metrojobs Cubao",
        },
      ],
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.703355899629!2d121.05065207384203!3d14.615967176702815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b794a166e319%3A0x6651aa86fc154b2f!2sMetro%20Jobs%20%26%20Payment%20Solutions%2C%20Incorporated!5e0!3m2!1sen!2sph!4v1742804346824!5m2!1sen!2sph",
      directionsLink:
        "https://www.google.com/maps/place/Metro+Jobs+%26+Payment+Solutions,+Incorporated/@14.6159672,121.0506521,17z/data=!3m1!4b1!4m6!3m5!1s0x3397b794a166e319:0x6651aa86fc154b2f!8m2!3d14.6159672!4d121.053227!16s%2Fg%2F11qprj7l2y?entry=ttu",
      contactPerson: "HR Shine / RG Eagle Whel MetroJobs ",
      contactPersonNumber: "09205644917 or 09162095293",
    },
    bulacan: {
      name: "Bulacan Branch",
      phone: "+63 44-761-1133",
      mobiles: ["0915 846 8822", "0917 142 5835"],
      address:
        "3rd Flr. LYSA Queen Bldg. Mac Arthur Highway, Brgy. San Pablo, Malolos City, Bulacan, 3000",
      emails: ["resguerra@metrojobs.com.ph"],
      facebookLinks: [
        {
          url: "https://www.facebook.com/MetroJobsPampanga2023",
          text: "MetroJobs Jim",
        },
      ],
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.6999059961895!2d120.84502837429179!3d14.84209118567337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339653aa3030c62f%3A0x92ebf62f98b2e74b!2sLysa%20Queen%20Bldg!5e0!3m2!1sen!2sph!4v1743577611799!5m2!1sen!2sph",
      directionsLink:
        "https://www.google.com/maps/place/Lysa+Queen+Bldg/@14.8420912,120.8450284,17z/data=!3m1!4b1!4m6!3m5!1s0x339653aa3030c62f:0x92ebf62f98b2e74b!8m2!3d14.8420912!4d120.8476033!16s%2Fg%2F11qprj7l2y?entry=ttu",
      contactPerson: "Ram Esguerra",
      contactPersonNumber: "0917-1425835",
    },
    pampanga: {
      name: "Pampanga Branch",
      phone: "+63 45-404-6766",
      mobiles: ["0927 499 3328"],
      address:
        "Unit 1.C LRK Bldg. Jose Abad Santos Ave. Brgy. Lagundi, Mexico Pampanga, 2021",
      emails: ["jfajardo@metrojobs.com.ph"],
      facebookLinks: [
        {
          url: "https://www.facebook.com/profile.php?id=100014042024654",
          text: "Joanne Fajardo",
        },
      ],
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15412.334847221737!2d120.68248353656206!3d15.04348536794993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f7593fe23037%3A0x4e633056d330f8dc!2sLRK%20Comml%20Bldg!5e0!3m2!1sen!2sph!4v1743562598719!5m2!1sen!2sph",
      directionsLink:
        "https://www.google.com/maps/place/LRK+Comml+Bldg/@15.0434854,120.6824835,17z/data=!3m1!4b1!4m6!3m5!1s0x3396f7593fe23037:0x4e633056d330f8dc!8m2!3d15.0434854!4d120.6850584!16s%2Fg%2F11c5q5t5qy?entry=ttu",
      contactPerson: "Ms. Joanne Adriatico",
      contactPersonNumber: "0927 499 3328",
    },
    visayas: {
      name: "Visayas Branch",
      phone: "+63 32-236-5559",
      mobiles: ["0933 042 7997", "0938 011 7944"],
      address:
        "2nd Flr. Esperanza Bldg. AC Cortez Ave., Barangay Ibabao Estancia, Mandaue, Cebu City, 6014",
      emails: [
        "metrojobs.vizmin@gmail.com",
        "metrojobscebu.recruitment@gmail.com",
      ],
      facebookLinks: [
        {
          url: "https://www.facebook.com/vizmin.metrojobs.1",
          text: "Metrojobs Vizmin",
        },
      ],
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.108468236623!2d123.94137607420218!3d10.333203989789888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9984dae7d2653%3A0xf05d58154e0b696f!2sEsperanza%20Bldg.!5e0!3m2!1sen!2sph!4v1743577734430!5m2!1sen!2sph",
      directionsLink:
        "https://www.google.com/maps/place/Esperanza+Bldg./@10.333204,123.9413761,17z/data=!3m1!4b1!4m6!3m5!1s0x33a9984dae7d2653:0xf05d58154e0b696f!8m2!3d10.3332039!4d123.943951!16s%2Fg%2F11qprj7l2y?entry=ttu",
      contactPerson: "Rowena Bate / Kent Galan",
      contactPersonNumber: "0933 042 7997 / 0938 011 7944",
    },
  };

  // DOM elements
  const branchSelect = document.getElementById("branch-select");
  const phoneNumber = document.querySelector(".phone-number");
  const mobileNumbers = document.querySelectorAll(".mobile-number");
  const address = document.querySelector(".address");
  const emails = document.querySelectorAll(".email");
  const facebookLinks = document.querySelectorAll(".facebook-link");
  const branchMap = document.getElementById("branch-map");
  const directionsLink = document.getElementById("directions-link");
  const contactPerson = document.querySelector(".contact-person");
  const contactPersonNumber = document.querySelector(".contact-person-number");

  // Function to replay animations with improved handling
  function replayAnimations() {
    const animatedElements = document.querySelectorAll("[data-aos]");

    animatedElements.forEach((el) => {
      // Remove the animation class
      el.classList.remove("aos-animate");

      // Force reflow
      void el.offsetWidth;

      // Add the animation class back
      el.classList.add("aos-animate");
    });

    // Refresh AOS to detect new elements
    AOS.refreshHard();
  }

  // Update branch information with animation support
  function updateBranchInfo(branchId) {
    const branch = branches[branchId];

    // First hide elements to trigger animation when showing new content
    const contactMethods = document.querySelectorAll(".contact-method");
    contactMethods.forEach((method) => {
      method.style.opacity = "0";
      method.style.transform = "translateY(20px)";
    });

    // Update content after a brief delay
    setTimeout(() => {
      phoneNumber.textContent = branch.phone;
      mobileNumbers.forEach((el, index) => {
        el.textContent = branch.mobiles[index] || "";
      });
      address.textContent = branch.address;
      emails.forEach((el, index) => {
        el.textContent = branch.emails[index] || "";
      });

      facebookLinks.forEach((el, index) => {
        if (branch.facebookLinks[index]) {
          el.href = branch.facebookLinks[index].url;
          el.innerHTML = `<i class="fab fa-facebook"></i> ${branch.facebookLinks[index].text}`;
          el.style.display = "flex";
        } else {
          el.style.display = "none";
        }
      });

      branchMap.src = branch.mapEmbed;
      directionsLink.href = branch.directionsLink;

      if (contactPerson) contactPerson.textContent = branch.contactPerson || "";
      if (contactPersonNumber)
        contactPersonNumber.textContent = branch.contactPersonNumber || "";

      // Show elements again with animation
      contactMethods.forEach((method, index) => {
        setTimeout(() => {
          method.style.opacity = "1";
          method.style.transform = "translateY(0)";
          method.style.transition = "all 0.5s ease-out";
        }, index * 100);
      });

      // Replay AOS animations
      replayAnimations();
    }, 300);
  }

  // Event listener for branch selection
  branchSelect.addEventListener("change", function () {
    updateBranchInfo(this.value);
  });

  // Initialize with Cubao branch
  updateBranchInfo("cubao");

  // Handle window resize to ensure animations work in mobile view
  window.addEventListener("resize", function () {
    AOS.refresh();
  });

  // Click-to-call functionality for phone numbers
  const phoneElements = document.querySelectorAll(".contact-method p");
  phoneElements.forEach((number) => {
    if (/^[0-9\s\-+]+$/.test(number.textContent.trim())) {
      number.addEventListener("click", function () {
        const cleanNumber = this.textContent.replace(/\s|-/g, "");
        if (window.innerWidth <= 768) {
          window.location.href = `tel:${cleanNumber}`;
        } else {
          navigator.clipboard
            .writeText(cleanNumber)
            .then(() => alert(`Copied to clipboard: ${cleanNumber}`))
            .catch((err) => console.error("Could not copy text: ", err));
        }
      });
      number.style.cursor = "pointer";
      number.title = "Click to call or copy";
    }
  });

  // Click-to-email functionality
  const emailElements = document.querySelectorAll(".contact-method p");
  emailElements.forEach((email) => {
    if (email.textContent.includes("@")) {
      email.addEventListener("click", function () {
        if (window.innerWidth <= 768) {
          window.location.href = `mailto:${this.textContent}`;
        } else {
          navigator.clipboard
            .writeText(this.textContent)
            .then(() => alert(`Copied to clipboard: ${this.textContent}`))
            .catch((err) => console.error("Could not copy text: ", err));
        }
      });
      email.style.cursor = "pointer";
      email.title = "Click to email or copy";
    }
  });
});
