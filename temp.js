var click=1;
$('#box').click(function(){
  if(click==1){
    $('#ball').css({
      marginLeft:"120px",
    });
    $('body').css({
      backgroundColor:"black",
    });
    $('#text').css({
      color:"white",
    });
    click=2;
  }
  else{
    $('#ball').css({
      marginLeft:"1px",
    });
    $('body').css({
      backgroundColor:"white",
    });
    $('#text').css({
      color:"black",
    });
    click=1;
  }
});
