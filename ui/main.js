//counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function() {
    
    
    
    
    //render the variable in the correct span
    counter = counter + 1;
    var span = document.getElemenetById('count');
    span.innerHTML = counter.toString();
};