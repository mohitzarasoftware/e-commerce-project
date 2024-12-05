// navbar js 
window.onscroll = function () {
    scrollFunction();
};
var first = true;
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").classList.add('activenavbar');
    }
    else {
        document.getElementById("navbar").classList.remove('activenavbar');
    }
}window.onload = init;




const slider = document.getElementById("price-slider");
const currentValue = document.getElementById("current-value");

// Update the displayed value and slider color dynamically
slider.addEventListener("input", () => {
    const value = Number(slider.value);
    currentValue.textContent = `₹ ${value.toLocaleString(undefined, {
        minimumFractionDigits: 2,
    })}`;

    // Update the slider track color dynamically
    const percentage = ((value - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.background = `linear-gradient(to right, red 0%, red ${percentage}%, black ${percentage}%, black 100%)`;
});



// custom dropdown 
const dropdown = document.querySelector('.custom-dropdown');
const dropdownBtn = dropdown.querySelector('.dropdown-btn');
const dropdownMenu = dropdown.querySelector('.filter-review-menu');
const hiddenInput = dropdown.querySelector('#dropdown-value');
dropdownBtn.addEventListener('click', () => {
    dropdown.classList.toggle('open');
});
dropdownMenu.addEventListener('click', (e) => {
    if (e.target.closest('li')) { 
        const selectedItem = e.target.closest('li'); 
        const selectedValue = selectedItem.getAttribute('data-value'); 
        const selectedHTML = selectedItem.innerHTML; 
        dropdownBtn.innerHTML = selectedHTML;
        hiddenInput.value = selectedValue;
        dropdown.classList.remove('open');
    }
});
document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
    }
});


// navbar user dropdown js 
function nav_user(){
    document.getElementById('nav_user-data').classList.toggle('show');
}

