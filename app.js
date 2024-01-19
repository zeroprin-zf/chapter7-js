$(function(){
  $('.box1').on('click', function(){
    $(this).slideUp();
  });
});

//this イベントが発生した要素のみを変化させたいときに使う。今回の場合クリックされた要素を指している