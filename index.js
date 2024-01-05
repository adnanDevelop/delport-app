const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  window.scrollY > 100
    ? navbar.classList.add("nav-scroll")
    : navbar.classList.remove("nav-scroll");
});

// SWIPER JS

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// SERVICE CARD SECTION START
const serviceBody = document.querySelector(".serviceCard");
const serviceContent = [
  {
    count: "01",
    icon: `<i class="fa-solid fa-ship"></i>`,
    title: "OCEAN Transportation",
    content:
      "The quality data, best network building uptime, fastest output from uur team jackle.",
  },
  {
    count: "02",
    icon: `<i class="fa-solid fa-plane-departure"></i>`,
    title: "AIR Transportation",
    content:
      "The quality data, best network building uptime, fastest output from uur team jackle.",
  },
  {
    count: "03",
    icon: `<i class="fa-solid fa-truck"></i>`,
    title: "TRUCK Transportation",
    content:
      "The quality data, best network building uptime, fastest output from uur team jackle.",
  },
  {
    count: "04",
    icon: ` <i class="fa-solid fa-train"></i>`,
    title: "TRAIN Transportation",
    content:
      "The quality data, best network building uptime, fastest output from uur team jackle.",
  },
  {
    count: "05",
    icon: `<i class="fa-solid fa-cube"></i>`,
    title: "PACKAGE Transportation",
    content:
      "The quality data, best network building uptime, fastest output from uur team jackle.",
  },
  {
    count: "06",
    icon: `<i class="fa-solid fa-motorcycle"></i>`,
    title: "BICYCLE Transportation",
    content:
      "The quality data, best network building uptime, fastest output from uur team jackle.",
  },
];

serviceContent.map((element, index) => {
  const serviceCard = document.createElement("div");
  serviceCard.className = "col-lg-4 col-sm-6 mb-md-5 mb-4";
  serviceCard.innerHTML = ` <div class="bg-white service_card position-relative">
  <div class="service_count">
    <span>${element.count}</span>
  </div>
  <div class="service_icon">
   ${element.icon}
  </div>
  <div class=" service_body">
    <a href="#">${element.title}</a>
    <p class="text-justify-left text-color">
      ${element.content}
    </p>
  </div>
</div>`;
  return serviceBody.appendChild(serviceCard);
});

// COUNTER SECTION START
const counterBox = document.querySelector(".counterCardSection");
const counterContent = [
  {
    icon: `<i class="fa-solid fa-globe"></i>`,
    title: 19300,
    content: "Worldwide Clients",
  },
  {
    icon: `<i class="fa-solid fa-users"></i>`,
    title: 17083,
    content: "Company Staffs",
  },
  {
    icon: `<i class="fa-regular fa-face-smile"></i>`,
    title: 17227,
    content: "Satisfied Clients",
  },
  {
    icon: `<i class="fa-solid fa-truck"></i> `,
    title: 18907,
    content: "Successfull Delivery",
  },
];

counterContent.map((element) => {
  const counterCard = document.createElement("div");
  counterCard.className = "col-lg-3 col-6 mb-md-1 mb-4";
  counterCard.innerHTML = `  <div class="counter_card d-flex align-items-center justify-content-sm-start justify-content-center flex-sm-row flex-column ">
  <div class="counter_icon mb-sm-0 mb-4">${element.icon}</div>
  <div class="counter_content ps-4 text-sm-start text-center">
  <h2>${element.title}</h2>
  <p class="text-color mb-0">${element.content}</p>
  </div>
</div>`;
  return counterBox.append(counterCard);
});

// Function to animate the counter
function animateCounter(targetElement, start, end, duration) {
  let current = start;
  const range = end - start;
  const increment = (range / duration) * 10; // Adjusted increment calculation
  const stepTime = 10; // Adjusted step time

  const timer = setInterval(() => {
    current += increment;
    targetElement.innerHTML = Math.floor(current);

    if (current >= end) {
      clearInterval(timer);
      targetElement.innerHTML = end; // Ensure the final value is accurate
    }
  }, stepTime);
}

// Intersection Observer setup
const observer = new IntersectionObserver((entries) => {
  console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Animate the counter when it becomes visible
        const counterElements = entry.target.querySelectorAll(".counter_content h2");
        
        counterElements.forEach((counter, index) => {
          animateCounter(counter, 0, counterContent[index].title, 2000);
        });

        // Stop observing once animation is triggered
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

// Observe the counter box
observer.observe(counterBox);
