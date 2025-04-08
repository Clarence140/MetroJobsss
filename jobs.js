// Job Data - Replace with your actual 43 job listings
const jobData = [
  //----------------------------IT TECHNICAL(5 jobs)------------------------------------
  {
    id: 1,
    title: "CCTV Technician Installer",
    industry: "it",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/cctv.gif",

    qualifications: [
      "Vocational Diploma / Short Course Certificate, Bachelor's/College Degree Engineering (Electrical/Electronics)",
      "Knowledge in repair, maintenance and installation of various electronic or computer-based products such as security, auxiliary systems and/or electrical devices",
      "Willing to do field works",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 2,
    title: "Technical Coordinator Support Engr.",
    industry: "it",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/techcor.gif",

    qualifications: [
      "A graduate of any Bachelor's/College Degree, BSBA Major in Marketing, or any administrative courses.",
      "With good communication skills",
      "Accepts fresh graduates",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 3,
    title: "Office Staff Encoder",
    industry: "it",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/encoder.gif",

    qualifications: [
      "A graduate of any Bachelor's/College Degree, BSBA Major in Marketing, or any administrative and computer related course",
      "Computer Literate (MS Word, Excel, Clerical / Administrative Support)",
      "Work experience in answering phone call / reports / email",
      "With good communication skills",
      "Accepts fresh graduates",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 4,
    title: "Sales & Marketing Staff Sales Admin",
    industry: "it",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/SalesAdmin.gif",

    qualifications: [
      "A graduate of any Bachelor's/College Degree, BSBA Major in Marketing, or any administrative courses",

      "With good communication skills",
      "Accepts fresh graduates",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 5,
    title: "Technical Staff IT Staff",
    industry: "it",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/technicalstaff.gif",

    qualifications: [
      "Graduate of any computer related courses",
      "Knowledge in Computer hardware and software literate, preferably with experience in troubleshooting, networking, assembling & disassembling of PC and computer peripherals",
    ],
    howToApply: "Submit your application here: ",
  },

  //---------------------------- Warehouse/Distribution/Delivery (5 jobs)------------------------------------
  {
    id: 6,
    title: "Janitor / Janitress",
    industry: "warehouse",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/janitor.gif",

    qualifications: [
      "With at least work experience in the field of housekeeping or janitoral",
      "With training background",
      "Willing to do Housekeeping/General Cleaning/Garbage Collection & Disposal/Office Supplies Inventory",
      "Can do-it repair and basic maintenance",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 7,
    title: "On-call Helpers Utility",
    industry: "warehouse",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/oncall.gif",

    qualifications: [
      "At least High School and or Vocational level and/or Graduate",
      "With work experience in field of Delivery, Dispatching, Facilities & Equipment Inspections",
      "Computer Deliveries & Installations",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 8,
    title: "Rider / Messenger",
    industry: "warehouse",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/rider.gif",

    qualifications: [
      "Preferable MALE",
      "With Valid Driver's License",
      "Must be familiar with Metro Manila",
      "Willing to do field works(Collection/Bank Transactions/Documentation)",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 9,
    title: "Warehouse Staff / Delivery Helper",
    industry: "warehouse",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/warehousestaff.gif",

    qualifications: [
      "Knowledge in Inventory of Stocks",
      "Willing to do Field works",
      "Physically fit to work",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 10,
    title: "Company Driver / Delivery Driver",
    industry: "warehouse",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/companydriver.gif",

    qualifications: [
      "With License Restriction code 12/123",
      "Can drive 4 wheel car (manual/automatic) and /Closed van",
      "Must be familiar within Metro Manila",
      "Preferably with at least 1 year work experience in driving and messenger work",
      "Willing to do field works",
    ],
    howToApply: "Submit your application here: ",
  },
  //------------------------------- MEDICAL PART------------------------
  {
    id: 11,
    title: "Information Staff / Admitting Staff",
    industry: "medical",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/admittingstaff.gif",

    qualifications: [
      "Graduate of any 4 years course (Fresh graduates are welcome to apply)",
      "Experience on being Admitting staff/Hospital Information Staff is an advantage",
      "With good public relations and customer service",
      "With pleasing personality",
      "Amendable to work on SHIFTING SCHEDULE",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 12,
    title: "Clinical Encoder",
    industry: "medical",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/clinicalencoder.gif",

    qualifications: [
      "Graduate of any 4 year course (Medical related course is an advantage)",
      "Relevant experience is an advantage, fresh graduates are welcome to apply",
      "Proficient computer skills and keen on details",
      "Proficient computer skills",
      "Amendable to work on shifting schedule",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 13,
    title: "Nursing Aide",
    industry: "medical",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/nursingaide.gif",

    qualifications: [
      "College level/Vocational course preferably health care related course",
      "With Basic Life Support training, within 3 months upon hiring",
      "With the ability to communicate effectively to patients and customers in both oral & written medium",
      "Amendable to work on shifting schedule",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 14,
    title: "Ambulance Driver",
    industry: "medical",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/ambulance.gif",

    qualifications: [
      "Vocational/College level on any course",
      "With NCII on driving",
      "With at least 1 year experience as Driver, Ambulance driver/Can drive VAN Type Vehicle",
      "With Professional Driver's License",
      "Knowledgeable on using Waze/Google Maps",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 15,
    title: "Orderly Staff",
    industry: "medical",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/orderly.gif",

    qualifications: [
      "College/Vocational Course preferably in health care field (Caregiving/Nursing Assistant Course)",
      "With Basic Life Support training Certificate Valid 3 months upon hiring",
      "With the ability to communicate effectively to patients and customers in both oral & written medium",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 16,
    title: "Linen Staff",
    industry: "medical",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/linen.gif",

    qualifications: [
      "Graduate of Caregiving/Nursing Assistant Course",
      "With Valid Basic Life Support training certificate",
      "With good public relations and customer service",
      "Willing to do 2days minimum duty per week. (Nursing Aide/Linen Assistant duty)",
      "Amendable to work on SHIFTING SCHEDULE",
    ],
    howToApply: "Submit your application here: ",
  },

  //---------------------------- FOOD SERVICE PART ---------------------------------
  {
    id: 17,
    title: "Kitchen Staff Dishwasher",
    industry: "food",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/kitchenstaff.gif",

    qualifications: [
      "With experience in Hospital food service setting or other equivalent food service setting",
      "With broad knowledge in Food preparations & Handling, Food supplies & equipment",
      "Amendable to work on SHIFTING SCHEDULE",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 18,
    title: "Cashier",
    industry: "food",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/cashier.gif",

    qualifications: [
      "Knowledgeable in P.O.S Machine",
      "With broad knowledge in Food preparations & Handling, Food supplies & equipment",
      "Amendable to work on SHIFTING SCHEDULE",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 19,
    title: "Barista",
    industry: "food",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/barista.gif",

    qualifications: [
      "Bachelor's Degree in food & Beverage Service Management, Hospitality/Tourism/Hotel Managements/Vocational Short course Diploma or K-12 Graduate",
      "With Experience in food and beverage preparation is an advantage",
      "With good English communication skills and pleasing personality",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 20,
    title: "Cook",
    industry: "food",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/cook.gif",

    qualifications: [
      "College level/NCII/Tesda with certificate in related culinary/basic cooking",
      "Experience in Catering/Concessionaire is a plus",
      "With full knowledge on food products & kitchen cooking equipments or more years of kitchen cooking experience",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 21,
    title: "Food Server",
    industry: "food",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/foodserver.gif",

    qualifications: [
      "Completed at least Vocational Diploma/Short course, - Bachelor/College Degree preferably in HRM or other related course",
      "Accepts fresh graduates",
      "With pleasing personality; Customer service oriented",
      "Work experience in a hotel/fine dining restaurant is an advantage",
    ],
    howToApply: "Submit your application here: ",
  },
  //------------------- MANUFACTURING PRODUCTION PART -------------------------------
  {
    id: 22,
    title: "Machine Operator",
    industry: "manufacturing",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/machineoperator.gif",

    qualifications: [
      "At least High School Graduate",
      "With work experience in manufacturing and production machinery",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 23,
    title: "Piece Rate or Pakyawan Production Staff",
    industry: "manufacturing",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/pakyawan.gif",

    qualifications: [
      "At least High School Graduate",
      "With work experience in Quality Control/Production",
    ],
    howToApply: "Submit your application here: ",
  },
  //------------------- HR OFFICE ACCOUNTING PART -------------------------------
  {
    id: 24,
    title: "HR Coordinator",
    industry: "hr",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/hrcoordinator.gif",

    qualifications: [
      "College Graduate or any 4 years course graduate",
      "With at least 1 year work experience in the field of recruitment/HR Admin/Sales Coordinator",
      "Willing to do fieldworks",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 25,
    title: "Payroll & Billing Staff",
    industry: "hr",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/payroll.gif",

    qualifications: [
      "Work experience in the field of accounting report, A/R, Billing, Time Keeping, Payroll, etc.",
      "College graduate of any business course",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 26,
    title: "HR Recruitment Staff HR Admin",
    industry: "hr",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/hrrecruitment.gif",

    qualifications: [
      "College Graduate in Business Administration, Human Resource Management, or any Business Administration courses",
      "Willing to do fieldworks",
      "Experience in the same field is an advantage",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 27,
    title: "Accounting Staff",
    industry: "hr",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/accountingstaff.gif",

    qualifications: [
      "Graduate of any course (Accounting or computer related courses)",
      "Working with spreadsheets, sales & purchasing ledgers and journal",
      "Calculating and checking to make sure payment, amounts and records are correct",
      "Accounting reports, A/R, Billing, Time Keeping, Payroll etc.",
      "Accepts fresh graduates",
    ],
    howToApply: "Submit your application here: ",
  },
  //-------------------SKILLED WORKERS PART -------------------------------
  {
    id: 28,
    title: "Welder",
    industry: "skilled",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/welder.gif",

    qualifications: [
      "High School graduate and/or Vocational course/Tesda NC II Certificate",
      "With experience in the same field for construction projects/High rise Building",
      "Experience in SMAW Welding",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 29,
    title: "Overall Maintenance",
    industry: "skilled",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/overall.gif",

    qualifications: [
      "Vocational Course graduate/College level",
      "With experience in Carpentry/Electrical/Plumbing/Painting",
      "Able to handle a number of skilled workers experienced as team leader",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 30,
    title: "Aircon Technician",
    industry: "skilled",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/aircon.gif",

    qualifications: [
      "High School graduate and/or Vocational course/Tesda NC II Certificate",
      "With experience in the same field for Construction projects/High Rise Building",
      "Aircon Troubleshooting and Installation",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 31,
    title: "Mason",
    industry: "skilled",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/mason.gif",

    qualifications: [
      "High school graduate and/or Vocational course/Tesda NC II Certificate",
      "With experience in the same field for Construction projects/High Rise building",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 32,
    title: "Automotive Mechanic",
    industry: "skilled",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/automative.gif",

    qualifications: [
      "Preferably Bachelor of Science in Industrial Technology major in Automotive / NCII or any 4 year course graduate",
      "Knowledge in AC System Body Restoration and etc.",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 33,
    title: "Carpenter",
    industry: "skilled",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/carpenter.gif",

    qualifications: [
      "High school graduate and/or Vocational",
      "Knowledge and have skills in cabinet making",
      "Assemble prepared components for various structures",
      "Sufficient strength and physical dexterity to perform related duties and includes heavy lifting",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 34,
    title: "Tile Setter",
    industry: "skilled",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/tilesetter.gif",

    qualifications: [
      "High school graduate and/or Vocational course/Tesda NC II Certificate",
      "With experience in the same field or Construction projects/High Rise Building.",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 35,
    title: "Electrician",
    industry: "skilled",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/electrician.gif",

    qualifications: [
      "High School graduate and/or Vocational course / Tesda NC II Certificate",
      "With experience in the same field or Construction projects/High Rise Building.",
      "Experience in Electrical Maintenance or Building and wiring Installations",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 36,
    title: "Safety Officer",
    industry: "skilled",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/safetyofficer.gif",

    qualifications: [
      "High School graduate and/or Vocational course / Tesda NC II Certificate",
      "With experience in the same field or Construction projects/High Rise Building.",
      "With COSH and BOSH Certificate",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 37,
    title: "Laborer / Helper",
    industry: "skilled",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/laborer.gif",

    qualifications: [
      "High School graduate and/or Vocational course / Tesda NC II Certificate",
      "With experience in the same field or Construction projects/High Rise Building.",
      "Physically fit to work",
    ],
    howToApply: "Submit your application here: ",
  },

  //-------------------RETAIL MERCHANDISING PART -------------------------------
  {
    id: 38,
    title: "Merchandiser Promodiser",
    industry: "retail",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/merchandiser.gif",

    qualifications: [
      "At least High School Graduate (With Diploma)",
      "At least 6 months of working experience in the field of Retail Merchandising (Sales Clerk / Sales Associate / Promodiser)",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 39,
    title: "Gift Wrapper Staff Bagger",
    industry: "retail",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/giftwrapper.gif",

    qualifications: [
      "At least High School Graduate / Vocational Level and/or Graduate.",
      "With or without experience",
      "Willing to be trained",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 40,
    title: "Brand Ambassador",
    industry: "retail",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/brandambassador.gif",

    qualifications: [
      "With at least work experience in the field of retail / sales merchandising.",
      "With pleasing personality and good communication skills.",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 41,
    title: "Sales Clerk / Sales Promo Sales Associate",
    industry: "retail",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/salesclerk.gif",

    qualifications: [
      "With at least work experience in the field of Retail or Sales Merchandising.",
      "With a pleasing personality and good communication skills.",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 42,
    title: "Tactical Coordinator / Sales Coordinator",
    industry: "retail",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/tacticalcoordinator.gif",

    qualifications: [
      "College Graduate",
      "With work experience as Roving Merchandiser / Sales Coordinator.",
      "Willing to do field works.",
    ],
    howToApply: "Submit your application here: ",
  },
  {
    id: 43,
    title: "Motorized Sales Coordinator",
    industry: "retail",
    experience: "entry",
    type: "fulltime",
    gif: "./GIF/motorizedsales.gif",

    qualifications: [
      "College Level or College Graduate.",
      "With valid/Updated Drivers License, Motorcycle OR/CR.",
      "With good communication skills.",
    ],
    howToApply: "Submit your application here: ",
  },

  // Continue with all 43 jobs across all categories...
];

// DOM Elements
const jobsContainer = document.getElementById("jobs-container");
const paginationContainer = document.getElementById("pagination-container");
const industryFilter = document.getElementById("industry-filter");

const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");
const modalOverlay = document.getElementById("modal-overlay");
const jobModal = document.getElementById("job-modal");
const modalContent = document.getElementById("modal-content");
const closeModal = document.getElementById("close-modal");

// Pagination Variables
const jobsPerPage = 9;
let currentPage = 1;
let filteredJobs = [...jobData];

// Initialize the page
function init() {
  renderJobs();
  renderPagination();
  setupEventListeners();
}

// Render jobs based on current filters and page
function renderJobs() {
  jobsContainer.innerHTML = "";

  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const jobsToShow = filteredJobs.slice(startIndex, endIndex);

  if (jobsToShow.length === 0) {
    jobsContainer.innerHTML =
      '<div class="no-jobs">No jobs found matching your criteria.</div>';
    return;
  }

  jobsToShow.forEach((job) => {
    const jobCard = document.createElement("div");
    jobCard.className = "job-card";
    jobCard.innerHTML = `
        <div class="job-gif-container">
          <img src="${job.gif}" alt="${job.title}" class="job-gif">
        </div>
        <div class="job-content">
          <h3 class="job-title">${job.title}</h3>
          <span class="job-industry">${getIndustryName(job.industry)}</span>
          
          <div class="job-meta">
           
            
          </div>
          <button class="more-info-btn" data-id="${job.id}">More Info</button>
        </div>
      `;
    jobsContainer.appendChild(jobCard);
  });
}

// Render pagination buttons
function renderPagination() {
  paginationContainer.innerHTML = "";

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  if (totalPages <= 1) return;

  // Previous button
  const prevButton = document.createElement("button");
  prevButton.className = `page-btn ${currentPage === 1 ? "disabled" : ""}`;
  prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderJobs();
      renderPagination();
      window.scrollTo({
        top: jobsContainer.offsetTop - 100,
        behavior: "smooth",
      });
    }
  });
  paginationContainer.appendChild(prevButton);

  // Page buttons
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.className = `page-btn ${currentPage === i ? "active" : ""}`;
    pageButton.textContent = i;
    pageButton.addEventListener("click", () => {
      currentPage = i;
      renderJobs();
      renderPagination();
      window.scrollTo({
        top: jobsContainer.offsetTop - 100,
        behavior: "smooth",
      });
    });
    paginationContainer.appendChild(pageButton);
  }

  // Next button
  const nextButton = document.createElement("button");
  nextButton.className = `page-btn ${
    currentPage === totalPages ? "disabled" : ""
  }`;
  nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderJobs();
      renderPagination();
      window.scrollTo({
        top: jobsContainer.offsetTop - 100,
        behavior: "smooth",
      });
    }
  });
  paginationContainer.appendChild(nextButton);
}

// Filter jobs based on selected filters
function filterJobs() {
  const industry = industryFilter.value;

  const searchTerm = searchInput.value.toLowerCase();

  filteredJobs = jobData.filter((job) => {
    return (
      (industry === "all" || job.industry === industry) &&
      (job.title.toLowerCase().includes(searchTerm) ||
        job.location.toLowerCase().includes(searchTerm))
    );
  });

  currentPage = 1;
  renderJobs();
  renderPagination();
}

// Show job details in modal
function showJobDetails(jobId) {
  const job = jobData.find((j) => j.id === jobId);
  if (!job) return;

  modalContent.innerHTML = `
      <h2>${job.title}</h2>
      <div class="job-meta">
        <span class="job-meta-item"><i class="fas fa-building"></i> ${getIndustryName(
          job.industry
        )}</span>
       
       
      </div>
      
  
      
      <h3>Qualifications</h3>
      <ul>
        ${job.qualifications.map((q) => `<li>${q}</li>`).join("")}
      </ul>
      
      <h3>How to Apply</h3>
      <p>${job.howToApply}</p>
      
      <a href="contacts.html" class="modal-apply-btn">Contacts</a>
    `;

  modalOverlay.classList.add("active");
  jobModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close modal
function closeJobModal() {
  modalOverlay.classList.remove("active");
  jobModal.classList.remove("active");
  document.body.style.overflow = "";
}

// Helper function to get industry display name
function getIndustryName(industryCode) {
  const industries = {
    it: "IT Technical",
    warehouse: "Warehouse/Distribution",
    medical: "Medical Service",
    food: "Food Service",
    manufacturing: "Manufacturing",
    hr: "HR/Office/Accounting",
    skilled: "Skilled Workers",
    retail: "Retail Merchandising",
  };
  return industries[industryCode] || industryCode;
}
// Filter jobs based on selected filters
function filterJobs() {
  const industry = industryFilter.value;

  const searchTerm = searchInput.value.toLowerCase();

  filteredJobs = jobData.filter((job) => {
    return (
      (industry === "all" || job.industry === industry) &&
      (job.title.toLowerCase().includes(searchTerm) ||
        (job.qualifications &&
          job.qualifications.some((q) => q.toLowerCase().includes(searchTerm))))
    );
  });

  currentPage = 1;
  renderJobs();
  renderPagination();
}

// Set up event listeners
function setupEventListeners() {
  industryFilter.addEventListener("change", filterJobs);

  // Search functionality
  searchInput.addEventListener("input", filterJobs);
  searchButton.addEventListener("click", filterJobs);
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      filterJobs();
    }
  });

  // Rest of your event listeners...
}

// Set up event listeners
function setupEventListeners() {
  industryFilter.addEventListener("change", filterJobs);

  searchInput.addEventListener("input", filterJobs);
  searchButton.addEventListener("click", filterJobs);

  // Event delegation for more info buttons
  jobsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("more-info-btn")) {
      const jobId = parseInt(e.target.getAttribute("data-id"));
      showJobDetails(jobId);
    }
  });

  closeModal.addEventListener("click", closeJobModal);
  modalOverlay.addEventListener("click", closeJobModal);

  // Close modal with ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeJobModal();
  });
}

// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", init);
