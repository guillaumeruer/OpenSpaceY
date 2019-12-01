$(document).ready(function(){
  $("#logo").css("filter","invert(65%) sepia(15%) saturate(6776%) hue-rotate(178deg) brightness(100%) contrast(95%)");
})


$("#logo").hover(function(){
  $("#logo").css("filter","invert(88%) sepia(25%) saturate(6729%) hue-rotate(79deg) brightness(107%) contrast(116%)")
}, function(){
  $("#logo").css("filter","invert(65%) sepia(15%) saturate(6776%) hue-rotate(178deg) brightness(100%) contrast(95%)")
});
