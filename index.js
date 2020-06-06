var temp = 0;

function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
}
    
function display_ct() {
    temp++;
    display_c();
    if(temp%5==0) document.getElementById('header-front').innerHTML = 'Responzívny dizajn';
    if(temp%10==0) document.getElementById('header-front').innerHTML = 'Tvorba uživateľského rozhrania';
    if(temp%15==0) document.getElementById('header-front').innerHTML = 'Webové stránky na mieru';
}
