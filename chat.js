
//document.getElementById('openRoom').onclick = function() {
 //   new RTCMultiConnection().open();
//};
//document.getElementById('joinRoom').onclick = function() {
 //   new RTCMultiConnection().connect();
//};



document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('openRoom');
    // onClick's logic below:
    link.addEventListener('click', function() {
         new RTCMultiConnection().open();

    });
})

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('joinRoom');
    // onClick's logic below:
    link.addEventListener('click', function() {
         new RTCMultiConnection().join();
    });
})