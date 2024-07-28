//turn pages whenn click next or prev buttton

const pageTurnBtn=document.querySelectorAll('.nextpage-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
            setTimeout(()=>{
                pageTurn.style.zIndex = 20 - index;
            },500);
        }
        else{
            pageTurn.classList.add('turn');
            setTimeout(()=>{
                pageTurn.style.zIndex = 20 + index;
            },500);
        }
    }
})

// contact button when click

const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtns = document.querySelectorAll('.btn.contact-me');

contactMeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    pages.forEach((page, index) => {
      setTimeout(() => {
        page.classList.add('turn');
        setTimeout(() => {
          page.style.zIndex = 20 + index;
        }, 500);
      }, (index + 1) * 200 + 100);
    });
  });
});


// create a new reverse function 

let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex  (){

pageNumber--;
if(pageNumber<0){
    pageNumber= totalPages-1;
}

}

//back profile buttton when click 
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) =>{
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');
            
            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            
        },500)

    }, (index + 1) * 200 + 100)

    })
}

// openinig animation (cover right animation)
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');


setTimeout(() => {
    coverRight.classList.add('turn');
},2100)

setTimeout(() => {
    coverRight.style.zIndex = -1;
},2800)

// openinig animation ( page left aniimation)

setTimeout(() => {
    pageLeft.style.zIndex = 20;
},3200)

// openinig animation ( all page animation)
pages.forEach((_, index) =>{
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');
        
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        
    },500)

}, (index + 1) * 200 + 2100)

})

// Disable right-click context menu
 document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Prevent zooming using Ctrl + / Ctrl - and other keys
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey || event.metaKey) {
        if (event.key === '+' || event.key === '-' || event.key === '0' || event.key === '=' || event.key === '_') {
            event.preventDefault();
        }
    }
});

// Prevent zooming using mouse wheel
document.addEventListener('wheel', function(event) {
    if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
    }
}, { passive: false });
