// 🔹 Your Personal Details
const userDetails = {
  name: "Hemalatha Mamidi",
  email: "hemalathamamidi77@gmail.com",
  linkedin: "https://www.linkedin.com/in/hemalatha-mamidi-6b9026420"
};


// 🔹 Smooth Scrolling
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// 🔹 Contact Form Handling
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    // Basic validation
    if (name === "" || email === "" || message === "") {
      alert("Please fill all fields ❗");
      return;
    }

    // Success message
    alert(
      "Thank you " + name + " 🙌\n\n" +
      "Your message has been sent to:\n" +
      userDetails.email + "\n\n" +
      "I will contact you soon 😊"
    );

    // Console (for debugging / demo)
    console.log("📩 New Contact Message:");
    console.log("From:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("Portfolio Owner:", userDetails.name);

    form.reset();
  });
}


// 🔹 Show Your Info in Console (Professional Touch)
console.log("👩‍💻 Portfolio Owner:", userDetails.name);
console.log("📧 Contact Email:", userDetails.email);
console.log("🔗 LinkedIn:", userDetails.linkedin);


// 🔹 Scroll Animation (Reveal Sections)
const sections = document.querySelectorAll("section");

function revealSections() {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
}

// Run on scroll + load
window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);