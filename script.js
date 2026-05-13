
// Theme toggle
document.getElementById('themeToggle').onclick = () => {
  const t = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', t === 'dark' ? 'light' : 'dark');
};

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal, .tl-item').forEach(el => obs.observe(el));

// Skill bars
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.bar-fill').forEach(b => { b.style.width = b.dataset.w + '%'; });
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skills-bars').forEach(el => barObs.observe(el));


// =========================
// CONTRIBUTION GRID
// =========================

const g =
  document.getElementById('cGrid');

if (g) {

  for (let i = 0; i < 364; i++) {

    const d =
      document.createElement('div');

    d.className = 'cc';

    const r = Math.random();

    if (r > 0.88) {

      d.classList.add('c4');

    }

    else if (r > 0.74) {

      d.classList.add('c3');

    }

    else if (r > 0.56) {

      d.classList.add('c2');

    }

    else if (r > 0.38) {

      d.classList.add('c1');

    }

    g.appendChild(d);

  }

}



// =========================
// TOASTR SETTINGS
// =========================

toastr.options = {

  closeButton: true,

  progressBar: true,

  positionClass: "toast-top-right",

  timeOut: "3000"

};


// =========================
// EMAILJS INIT
// =========================

emailjs.init("C_Vs1YgGZGuS7Kqb3");

toastr.options = {

  closeButton: true,

  progressBar: true,

  positionClass: "toast-top-right",

  timeOut: 3000

};

const contactForm =
  document.getElementById("contact-form");

contactForm.addEventListener(
  "submit",
  function (e) {

    e.preventDefault();

    emailjs.send(

      "service_l0juaul",

      "template_62w0y7w",

      {

        from_name:
          document.getElementById("name").value,

        from_email:
          document.getElementById("email").value,

        message:
          document.getElementById("message").value

      }

    )

    .then(function(response) {

      console.log(
        "SUCCESS!",
        response.status,
        response.text
      );

      toastr.success(
        "Message Sent Successfully!"
      );

      contactForm.reset();

    })

    .catch(function(error) {

      console.log(
        "FAILED...",
        error
      );

      toastr.error(
        "Failed To Send Message"
      );

    });

});



