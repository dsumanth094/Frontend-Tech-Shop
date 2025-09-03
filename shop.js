function filterProducts(category) {
    let items = document.querySelectorAll('.item-list');
    let buttons = document.querySelectorAll('.sidehead button');

    buttons.forEach(btn => btn.classList.remove('sidehead1'));
    event.target.classList.add('sidehead1');

    items.forEach(item => {
      if (category === 'all' || item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  filterProducts('all');


function addToCart(name, description, price, image) {
    // Get cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if item already exists
    let existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, description, price, image, quantity: 1 });
    }

    // Save back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update button style
    let btn = event.target;
    btn.innerText = "Added";
    btn.style.backgroundColor = "blue";
    btn.style.color = "white";
    btn.style.pointerEvents = "none"; 

    // Update cart count icon
    updateCartCount();
}

// Update cart count function
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let count = cart.reduce((acc, item) => acc + item.quantity, 0);
    let cartIcon = document.getElementById('cart-count');
    if (cartIcon) {
        cartIcon.innerText = count;
    }
}

// Call this on page load to show correct cart count
document.addEventListener('DOMContentLoaded', updateCartCount);





  const track = document.getElementById("carouselTrack");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  let index = 0;
  const items = document.querySelectorAll(".feature1");
  const totalItems = items.length;
  const visibleItems = 3; // how many items visible at once

  function updateCarousel() {
    const itemWidth = items[0].offsetWidth;
    track.style.transform = `translateX(${-index * itemWidth}px)`;
  }

  function nextSlide() {
    if (index < totalItems - visibleItems) {
      index++;
    } else {
      index = 0; // loop back to start
    }
    updateCarousel();
  }

  function prevSlide() {
    if (index > 0) {
      index--;
    } else {
      index = totalItems - visibleItems; // jump to end
    }
    updateCarousel();
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // autoplay every 3 seconds
  setInterval(nextSlide, 3000);
