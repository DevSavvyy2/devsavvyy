function toggleSidebar(){
document.querySelector('.sidebar').classList.toggle('active');
}

document.getElementById('menu-btn').addEventListener('click', toggleSidebar); 
document.getElementById('close-btn').addEventListener('click', toggleSidebar);

