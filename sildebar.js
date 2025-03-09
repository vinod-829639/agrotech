 // 2. Close Sidebar When Clicking Outside (Important!)
 function closeSidebar() {
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        content.classList.remove('active');
    }
}

document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
        closeSidebar();
    }
});