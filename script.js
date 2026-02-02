function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.classList.toggle('active');
}

function closeDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.classList.remove('active');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const logoContainer = document.querySelector('.logo-container');
    const dropdown = document.getElementById('dropdownMenu');
    
    if (!logoContainer.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});
