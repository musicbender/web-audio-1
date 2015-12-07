$(document).ready(function(){
    
    var xhr = new XMLHttpRequest();
    
    $('#sub-btn').click(function() {
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                $('#scores').html(xhr.responseText);
            }
            else {
                $('#scores').html('<p>Waiting for Server Response...</p>');
            }
        }

        xhr.open("GET", "test.txt", true);
        xhr.send();
    });
    
    
    
    
    
    //practicing factory functions
    function makeGoblin (name, element, weapon) {
        var goblin = {};
        goblin.name = name;
        goblin.element = element;
        goblin.weapon = weapon;
        goblin.battlecry = function () {
            $('.goblin').append("<p>I'm " + name + ", and I will hit you with my " + weapon);
        }
        
        return goblin;
    }
    
    var goblin1 = makeGoblin('Shogli', 'fire', 'fork');
    var goblin2 = makeGoblin('Flanflan', 'water', 'wad of seaweed');
    var goblin3 = makeGoblin('Reet', 'lightning', 'mop');
    
    
    
    var goblinGroup = [goblin1, goblin2, goblin3];
    
    for (var i = 0; i < 3; i++){
        goblinGroup[i].battlecry();
    }
});
