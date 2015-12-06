$(document).ready(function(){
    
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "http://www.learntoprogram.tv/baseball.php", true);
    xhr.send();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            
        }
    }
});