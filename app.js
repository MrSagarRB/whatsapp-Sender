
var url;


$("button").click(function(){
    $("p").css("color", "red");


   var mobileNo= $("#mobile-no").val();

 var url="https://wa.me/+91"+mobileNo+"";


//  console.log(mobileNo);


location.replace(url)



console.log(url);
});





