// Get the relevant elements
const decButton = document.querySelector(".dec");
const incButton = document.querySelector(".inc");
const inputField = document.querySelector("#buy_count");

// Add event listeners to the buttons
decButton.addEventListener("click", () => {
  // Decrease the value of the input field, but not below 1
  if (inputField.value > 1) {
    inputField.value--;
  }
});

incButton.addEventListener("click", () => {
  // Increase the value of the input field, but not above 10
  if (inputField.value < 99) {
    inputField.value++;
  }
});

const buyButton = document.querySelector("#buy-now"); // Get the button element
const inputfield = document.querySelector("#buy_count"); // Get the input field element

buyButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  
  const inputValue = inputfield.value; // Get the value of the input field
  console.log(`Dat hang voi so luong: ${inputValue}`); // Log the value to the console (or do something else with it)
  
  const checkoutUrl = `checkout.html?quantity=${inputValue}`; // Construct the checkout URL with the quantity parameter
  window.location.href = checkoutUrl ; // Redirect the user to the checkout page
});

function gui(){
        alert("We will contact you to advise, thank you");
    
}


function comment() {

  alert("Thank you for your comment, we will review your comment");
  var name = document.getElementById("hovaten").value;
  var comment = document.getElementById("cmt_content").value

  document.getElementById("infocomment").innerHTML = "<br> Name:" + name + "<br> Comment:" + comment
  return false;
}

function RateStar(){
  var element = document.getElementsByClassName("rateStar");
   element.classList.add("fa-solid");
}

// Get all the star elements
const stars = document.querySelectorAll(".ratings i");

// Add a click event listener to each star
stars.forEach((star) => {
  star.addEventListener("click", () => {
    // Get the index of the clicked star
    const index = Array.prototype.indexOf.call(stars, star);

    // Highlight all the stars up to and including the clicked star
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add("fa-solid");
    }

    // Unhighlight all the stars after the clicked star
    for (let i = index + 1; i < stars.length; i++) {
      stars[i].classList.remove("fa-solid");
    }
  });
});


const backToTopButton = document.querySelector("#back-to-top");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show back-to-top button when user scrolls down 300px from top
    if (!backToTopButton.classList.contains("show")) {
      backToTopButton.classList.add("show");
    }
  } else { // Hide back-to-top button when user is at top of page
    if (backToTopButton.classList.contains("show")) {
      backToTopButton.classList.remove("show");
    }
  }
}

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
  window.scrollTo(0, 0);
}


document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const href = card.getAttribute("data-href");
    if (href) {
      window.location.href = href;
    }
  });
});


// Lấy phần tử HTML cho nút back-to-top
var backToTop = document.getElementById("back-to-top");

// Thêm sự kiện scroll vào window
window.addEventListener("scroll", function() {
  // Tính toán vị trí hiện tại của trình duyệt
  var currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  var halfScreenHeight = window.innerHeight / 2;

  // Nếu vị trí hiện tại lớn hơn nửa màn hình thì hiển thị nút back-to-top
  if (currentScrollPosition > halfScreenHeight) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});









