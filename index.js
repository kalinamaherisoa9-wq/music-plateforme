//Dark mode

const switchBtn = document.querySelector('.theme-btn');

const ableDarkmode = () =>{
  document.body.classList.add('darkMode');
  localStorage.setItem('darkMode','activate');
}

const disableDarkmode = () => {
  document.body.classList.remove('darkMode');
  localStorage.removeItem('darkMode');
};

const toDark = localStorage.getItem('darkMode');
if(toDark === 'activate'){
  ableDarkmode();
}

switchBtn.addEventListener('click',() => {
  const isDark = document.body.classList.contains('darkMode');

  if(isDark){
    disableDarkmode();
  }else{
    ableDarkmode();
  }
});

//Hamburger menu

