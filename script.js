
function check(){
var n = document.getElementById("name")
var a = document.getElementById("age")
var nu = document.getElementById("number")
var em = document.getElementById("email")

var noo = nu.value;
    
var fs = noo.charAt(0);
var sl = noo.length;


    if(n.value == "" || n.value == null)
    {
        document.getElementById("s1").innerHTML="This field needs to be filled";
        return false;   
    }
    else{document.getElementById("s1").innerHTML=""}
    
    if (a.value === "" || a.value === null)
    {
        document.getElementById("s2").innerHTML="This need to be filled";
        return false;
    }
    else{document.getElementById("s2").innerHTML=""}

    if (noo == "" || noo == null)
    {
        document.getElementById("s3").innerHTML="This need to be filled";
        return false;
    }

    else if (sl != 10 || fs !== "9")
    {
        document.getElementById("s3").innerHTML="plz enter a valid number";
        return false;
    }

    else{document.getElementById("s3").innerHTML=""}

    if (em.value === "" || em.value === null)
    {
        document.getElementById("s4").innerHTML="This need to be filled";
        return false;
    }
    else{document.getElementById("s4").innerHTML=""}

}