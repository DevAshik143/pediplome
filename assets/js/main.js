document.addEventListener('keydown', function (e) {
  // RTL ভাষার জন্য (lang-ar)
  const shadowBox = document.querySelector('.lang-ar');

  if (!shadowBox) return; // যদি lang-ar না থাকে, কিছু করো না

  const arrows = shadowBox.querySelectorAll('.arrow-icon');

  // ধরে নিচ্ছি: arrows[0] = → (left link), arrows[1] = ← (right link)

  if (e.key === 'ArrowRight') {
    // এখন → চাপলে ← আইকনে ক্লিক হবে (উল্টো)
    if (arrows[1]) arrows[1].click();
  }

  if (e.key === 'ArrowLeft') {
    // এখন ← চাপলে → আইকনে ক্লিক হবে (উল্টো)
    if (arrows[0]) arrows[0].click();
  }
});


/*FAQ*/
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      item.classList.toggle('active');

      // Close others
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
        }
      });
    });
  });




  /*<!-- Keyboard Navigation Script -->
  */
    document.addEventListener("keydown", function(event) {
      if (event.key === "ArrowLeft") {
        window.location.href = document.getElementById("prevPage").href;
      } else if (event.key === "ArrowRight") {
        window.location.href = document.getElementById("nextPage").href;
      }
    });


/*Dropdown Click*/
    // Click toggle submenu
  document.querySelectorAll('.submenu-toggle').forEach(toggle => {
    toggle.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();

      const parent = toggle.parentElement;

      // Close all other submenus
      document.querySelectorAll('.dropdown-submenu').forEach(el => {
        if(el !== parent) el.classList.remove('show');
      });

      // Toggle current submenu
      parent.classList.toggle('show');
    });
  });

  // Prevent submenu item click from closing dropdown
  document.querySelectorAll('.dropdown-submenu .dropdown-item').forEach(item => {
    item.addEventListener('click', e => {
      e.stopPropagation();
    });
  });
















  /*For lock page*/


    function togglePassword() {
      const passwordInput = document.getElementById('password');
      const icon = document.querySelector('.toggle-password');
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.textContent = '🙈';
      } else {
        passwordInput.type = 'password';
        icon.textContent = '👁️';
      }
    }

    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
      const errorMsg = document.getElementById('errorMsg');

      if (username === 'logingsportteacher.com' && password === '@SportTeacher125990#') {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'course.html';
      } else {
        errorMsg.innerText = '❌ Invalid username or password!';
        errorMsg.style.animation = 'shake 0.3s';
        setTimeout(() => errorMsg.style.animation = '', 300);
      }
    });

    // Slider & Heading Sync
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slider-img');
    const headings = document.querySelectorAll('.slider-heading');

    setInterval(() => {
      // Remove active from current slide and heading
      slides[currentIndex].classList.remove('active');
      headings[currentIndex].classList.remove('active');

      // Move to next
      currentIndex = (currentIndex + 1) % slides.length;

      // Add active to new slide and heading
      slides[currentIndex].classList.add('active');
      headings[currentIndex].classList.add('active');
    }, 4000); // every 4 seconds