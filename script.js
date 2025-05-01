const catImg = document.getElementById('c-img');
const buttons = document.querySelectorAll('.c-btn');
const gift = document.querySelector('.gift');
const modal = document.querySelector('.modal');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        catImg.src = 'images/cat_hover.png';
    });

    button.addEventListener('mouseleave', () => {
        catImg.src = 'images/cat_idle.png';
    });

    button.addEventListener('click', () => {
        catImg.src = 'images/cat_active.png';
    });
});

gift.addEventListener('mouseover', () => {
    catImg.classList.add('hidden');  
    modal.classList.remove('hidden');  
});

gift.addEventListener('mouseout', () => {
    catImg.classList.remove('hidden'); 
    modal.classList.add('hidden'); 
});

function swapButtonClasses() {
    const currentNo = document.querySelector('.btn-no');
    const currentYes = document.querySelector('.btn-yes');

    currentNo.classList.remove('btn-no');
    currentNo.classList.add('btn-yes');
    currentNo.textContent = 'yes';

    currentYes.classList.remove('btn-yes');
    currentYes.classList.add('btn-no');
    currentYes.textContent = 'no';
}

document.querySelectorAll('.c-btn').forEach(btn => {
    btn.addEventListener('mouseover', () => {
        if (btn.classList.contains('btn-no')) {
            swapButtonClasses();
        }
    });
});