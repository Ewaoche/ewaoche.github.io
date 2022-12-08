// Toggle Sidenav
const menuBar = document.querySelector('#content nav .bx.bx-menu');

const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function(){
    sidebar.classList.toggle('hide');
});


if(window.innerWidth < 768){
  sidebar.classList.add('hide');
}