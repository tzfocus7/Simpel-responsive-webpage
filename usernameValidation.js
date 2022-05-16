var elmsg = document.getElementById('feedback');
var elUsername = document.getElementById('username');
function checkUsername(minLength){
    if (elUsername.value.length < minLength){
        elmsg.textContent = 'Username must be ' + minLength + ' characters or more';
    } else {
        elmsg.textContent = '';
            }
    }
    if (elUsername.addEventListener){
        elUsername.addEventListener('blur', function (){checkUsername(5);}, false);/* For all browsers but internet explorers*/
    } else {
        elUsername.attachEvent('onblur', function (){checkUsername(5);}, false);/* To support internet explorer*/
    }