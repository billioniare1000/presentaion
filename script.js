document.addEventListener("DOMContentLoaded", function () {
  // تهيئة AOS
  AOS.init({
    duration: 800, // مدة الرسوم المتحركة
    once: true, // التأثير يحدث مرة واحدة
  });

  // تأثير التمرير السلس
  const links = document.querySelectorAll("nav ul li a");
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // معالجة إرسال النموذج
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const message = document.getElementById("formMessage");
      message.textContent = "شكراً على رسالتك، سنرد عليك قريباً!";
      this.reset(); // إعادة تعيين النموذج
    });
});
