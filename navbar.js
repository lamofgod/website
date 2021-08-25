/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
const navSlide = () => 
{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navbar-links');

  burger.addEventListener('click', () =>
    {
      nav.classList.toggle('.nav-active');
    }
  )
}

navSlide();