$(function(){
  $('button').on('click', function(){
    //button要素がクリックされたときに、処理を実行してください
    $('ul').children().css('color', 'red');
    //children()はHTML要素直下の全ての子要素を取得します。
    //ここでのchildrenはul要素の子要素はliが対象になる
  });
});