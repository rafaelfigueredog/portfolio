(function() {
  "use strict";

  window.addEventListener('load', () => {
    on_page_load()
  });

  /**
   * Function gets called when page is loaded.
   */
  function on_page_load() {
    // Initialize On-scroll Animations
    AOS.init({
      anchorPlacement: 'top-left',
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      disable: 'mobile'
    });
  }

  /**
   * Navbar effects and scrolltop buttons upon scrolling
   */
  const navbar = document.getElementById('header-nav')
  var body = document.getElementsByTagName("body")[0]
  const scrollTop = document.getElementById('scrolltop')
  window.onscroll = () => {
    if (window.scrollY > 0) {
      navbar.classList.add('fixed-top', 'shadow-sm')
      body.style.paddingTop = navbar.offsetHeight + "px"
      scrollTop.style.visibility = "visible";
      scrollTop.style.opacity = 1;
    } else {
      navbar.classList.remove('fixed-top', 'shadow-sm')
      body.style.paddingTop = "0px"
      scrollTop.style.visibility = "hidden";
      scrollTop.style.opacity = 0;
    }
  };

  /**
   * Masonry Grid
   */
  var elem = document.querySelector('.grid');
  if(elem) {
    imagesLoaded(elem, function() {
      new Masonry(elem, {
        itemSelector: '.grid-item',
        percentPosition: true,
        horizontalOrder: true
      });
    })
  }

  /**
   * Big Picture Popup for images and videos
   */
   document.querySelectorAll("[data-bigpicture]").forEach((function(e) {
     e.addEventListener("click", (function(t){
       t.preventDefault();
       const data =JSON.parse(e.dataset.bigpicture)
       BigPicture({
        el: t.target,
        ...data
      })
     })
    )
  }))

  /**
   * Big Picture Popup for Photo Gallary
   */
   document.querySelectorAll(".bp-gallery a").forEach((function(e) {
    var caption = e.querySelector('figcaption')
    var img = e.querySelector('img')
    // set the link present on the item to the caption in full view
    img.dataset.caption = '<a class="link-light" target="_blank" href="' + e.href + '">' + caption.innerHTML + '</a>';
    window.console.log(caption, img)
     e.addEventListener("click", (function(t){
       t.preventDefault();
       BigPicture({
        el: t.target,
        gallery: '.bp-gallery',
      })
     })
    )
  }))


  function validateEmail(email) {
    var re = RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    return re.test(email);
  }
  
  function validateName(name) {
    var re = /^[a-zA-Z ]{5,25}$/;
    return re.test(name);
  }
  
  
  function validatePhone(phoneNumber) {
    var re = /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/;
    return re.test(phoneNumber);
  }
      
  function validateMessage(message) {
    var re = /^[a-zA-Z ]{10,400}$/;
    return re.test(message);
  }

  var name = document.getElementById('name'); 
  var email = document.getElementById('email'); 
  var phoneNumber = document.getElementById('phone'); 
  var message = document.getElementById('message');

  var nameError = document.getElementById('nameError'); 
  var emailError = document.getElementById('emailError');
  var phoneError = document.getElementById('phoneError'); 
  var messageError = document.getElementById('messageError');

  var submitButton = document.getElementById('submitButton'); 

  var nameValid = false; 
  var emailValid = false; 
  var phoneValid = false; 
  var messageValid = false; 

  function isFormValid() {
    if (nameValid && emailValid && phoneValid && messageValid) {
      submitButton.removeAttribute("disabled");
    } else {
      submitButton.setAttribute('disabled', ""); 
    }
  }

  name.addEventListener('input', function(e) {
    var currentValue = e.target.value; 
    var isNameValid = validateName(currentValue)  
    nameValid = isNameValid; 
    
    if ( isNameValid ) {
      nameError.style.display = 'none' 
    } else {
      nameError.style.display = 'block'
    }

    
    isFormValid()

  })

  email.addEventListener('input', function(e) {
    var currentValue = e.target.value; 
    var isEmailValid  = validateEmail(currentValue); 
    emailValid = isEmailValid; 
    
    if ( isEmailValid ) {
      emailError.style.display = 'none' 
    } else {
      emailError.style.display = 'block'
    }

    isFormValid()
      
  })

  phoneNumber.addEventListener('input', function(e) {
    var currentValue = e.target.value; 
    var isPhoneValid  = validatePhone(currentValue); 
    phoneValid = isPhoneValid; 
    
    if ( isPhoneValid ) {
      phoneError.style.display = 'none' 
    } else {
      phoneError.style.display = 'block'
    }

    isFormValid()
      
  }); 

  message.addEventListener('input', function(e) {
    var currentValue = e.target.value; 
    var isMessageValid  = validateMessage(currentValue); 
    messageValid = isMessageValid; 
    
    if ( isMessageValid ) {
      messageError.style.display = 'none' 
    } else {
      messageError.style.display = 'block'
    }

    isFormValid()

  }); 







})();




