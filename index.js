function move {
window.posX = math.random();
  window.posZ = math.random();
  window.posY = math.random();
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
}
if (window.open) {
  move()
  move()
  move()
}
