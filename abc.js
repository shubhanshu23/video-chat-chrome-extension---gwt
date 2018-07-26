var url;
var req = new XMLHttpRequest();
chrome.tabs.query(
    {
        currentWindow: true,    // currently focused window
        active: true            // selected tab
    },
    function (foundTabs) {
        if (foundTabs.length > 0) {
        url = foundTabs[0].url;

         // <--- this is what you are looking for
        var x= url;


//console check test
req.open(
"GET",
"http://127.0.0.1:8889/ser?"+x,true);

req.send();

       }

        else {
         
        }
    }
);




document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('but');
    // onClick's logic below:
    link.addEventListener('click', function() {
     

var DIV = document.createElement("div");
DIV.innerHTML = req.response;
document.body.appendChild(DIV);


//alert(req.response);




    });
})


document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('chat');
    // onClick's logic below:
    link.addEventListener('click', function() {
     

window.open("http://localhost/web/web.html");







    });
})