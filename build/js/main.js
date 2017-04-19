
$(document).ready(function() { 
    $(function(){
      $('select').selectric();
    });
     $('a.modale').click( function(event){ // ловим клик по ссылки с id="go"
         event.preventDefault(); // выключаем стандартную роль элемента
         $('body').css('overflow', 'hidden'); // выключаем скролл
         $('#overlay').fadeIn(400, // сначала плавно показываем темную подложку
             function(){ // после выполнения предъидущей анимации
                 $('.modal') 
                     .css('display', 'flex') // убираем у модального окна display: none;
                     .animate({opacity: 1, top: '50%'}, 200); // плавно прибавляем прозрачность одновременно со съезжанием вниз
         });
     });
     /* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
     $('#modal_close, #overlay').click( function(){ // ловим клик по крестику или подложке
         $('body').css('overflow', 'auto'); // включаем скролл
         $('#modal_form')
             .animate({opacity: 0, top: '45%'}, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
                 function(){ // после анимации
                     $(this).css('display', 'none'); // делаем ему display: none;
                     $('#overlay').fadeOut(400); // скрываем подложку
                 }
             );
     });
});