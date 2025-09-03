// products page start
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

// Add to cart function
function addToCart(name, description, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, description, price, image, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    let btn = event.target;
    btn.innerText = "Added";
    btn.style.backgroundColor = "blue";
    btn.style.color = "white";
    btn.style.pointerEvents = "none"; 
    updateCartCount();
}

// Cart Icon Count 
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let count = cart.reduce((acc, item) => acc + item.quantity, 0);
    let cartIcon = document.getElementById('cart-count');
    if (cartIcon) {
        cartIcon.innerText = count;
    }
}
document.addEventListener('DOMContentLoaded', updateCartCount);


// Products End

// About Start
  const track = document.getElementById("carouselTrack");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  let index = 0;
  const items = document.querySelectorAll(".feature1");
  const totalItems = items.length;
  const visibleItems = 3; 

  function updateCarousel() {
    const itemWidth = items[0].offsetWidth;
    track.style.transform = `translateX(${-index * itemWidth}px)`;
  }

  function nextSlide() {
    if (index < totalItems - visibleItems) {
      index++;
    } else {
      index = 0; 
    }
    updateCarousel();
  }

  function prevSlide() {
    if (index > 0) {
      index--;
    } else {
      index = totalItems - visibleItems; 
    }
    updateCarousel();
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  setInterval(nextSlide, 1000);

  // About End
