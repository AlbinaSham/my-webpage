
$(document).ready(function(){
  $(`.header__burger`).click(function(event){
    $(`.header__burger,.header__menu`).toggleClass('active');
  });
});

$(document).ready(function(){
  $(`.header__list`).click(function(event){
  $(`.header__burger,.header__menu`).removeClass('active');
});
});



$('#btn-cliked').on('click', function(){
  window.location = 'https://book-library2021.herokuapp.com/';
});
$('#btn-cliked2').on('click', function(){
  window.location = 'https://github.com/AlbinaSham/TODOLIST';
});
$('#linkedin').on('click', function(){
  window.location = 'https://www.linkedin.com/in/asavinova/';
});
$('#github').on('click', function(){
  window.location = 'https://github.com/AlbinaSham';
});
