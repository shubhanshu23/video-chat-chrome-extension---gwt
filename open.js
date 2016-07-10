  //function abc(){
 // getElementById("but").onclick()=function newDoc() {
  //window.location.assign("web.html")
	//};
//}


document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('but');
    // onClick's logic below:
    link.addEventListener('click', function() {
        window.location.assign("web.html")
    });
})