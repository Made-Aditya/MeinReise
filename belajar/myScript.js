function wordnew(){
    document.getElementById("demo").innerHTML = "Paragraph Changed"
}
function wordback(){
    document.getElementById("demo").innerHTML = "Paragraph hasn't changed"
}
function stylebigger(){
    document.getElementById("demo").style.fontSize='35px'
}
function stylesmaller(){
    document.getElementById("demo").style.fontSize='16px'
}
function back_image(){
    document.getElementById("myImage").src='assets/badminton.jpg'
}
function change_image(){
    document.getElementById("myImage").src='assets/drawing.jpg'
}
function hide_image(){
    document.getElementById("myImage").style.display='none'
}
function show_image(){
    document.getElementById("myImage").style.display='block'
}