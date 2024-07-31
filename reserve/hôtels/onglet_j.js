function ligne_menu() {
  var menu = document.getElementById('menu');
  menu.classList.toggle('active');

  var menuToggle = document.querySelector('.menu_ligne');
  menuToggle.classList.toggle('active');
}

const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`; 
       document.getElementById('date_ini1').value = formattedDate; 
       document.getElementById('date_ini2').value = formattedDate; 
                
