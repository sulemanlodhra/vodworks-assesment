// -------------------Read Jason File -------------------

$(document).ready(function(){
	var j=0;
	$('body').on('click','.load_project',function(event){
		event.preventDefault();
		var mydata = JSON.parse(data);
		var length=mydata.length;
		var html='';
		var k=1;
		var total=4;
		var i;
		for(i=j; i <= length-1; i++)
		{
			if(k <= total)
			{
				html+='<div class="col-lg-3  col-md-3 col-sm-12 col-xs-12">';
					html+='<div class="card">';
						html+='<img src="'+mydata[i].image+'" alt="product-1">';
						html+='<a href="#">';
							html+='<div class="card-body">';
							html+='<p>'+mydata[i].title+'</p>';
							html+='</div>';
						html+='</a>';
					html+='</div>';
				html+='</div>';
				if(i == length-1){
					$(this).hide();
				}
				j++;
				k++;
			}
			else
			{
				break;
			}
		}
		$('body').find('.new_projects').append(html);

	});
})

// -------------------Fixed Navbar -------------------
$(window).scroll(function(){
  if ($(window).scrollTop() >= 230) {
    $('header').addClass('fixed');
   }
   else {
    $('header').removeClass('fixed');
   }
});

// -------------------Toggle Button -------------------
$(".navbar-toggler").click(function(){
 $(".navbar-toggler").toggleClass("open");
});

// -------------------Scroll to Top -------------------
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
        $('#return-to-top').fadeIn(200);
    } else {
        $('#return-to-top').fadeOut(200);
    }
});

$('#return-to-top').click(function() {
    $('body,html').animate({
        scrollTop : 0 
    }, 500);
});

// -------------------Form Valiadaiton -------------------
function Validate(){
	var s="";
		var your_name=document.getElementById("name").value;
		console.log(your_name);
	if(your_name=="" )
		{
		s=s+" Please Enter Your Name\n";
		document.getElementById("name").style.borderColor="red";
		}
	else
		{
		document.getElementById("name").style.borderColor="grey";
		}
		var email=document.getElementById("email").value;
	if(email=="")
		{	
		s=s+" Please Enter Your Email\n";
		document.getElementById("email").style.borderColor="red";	
		}
	else{
		document.getElementById("email").style.borderColor="grey";
		}
		var message=document.getElementById("comments").value;		
	if(message=="")
		{	
		s=s+" Please Enter Your Message\n";
		document.getElementById("comments").style.borderColor="red";	
		}
	else{
		document.getElementById("comments").style.borderColor="grey";
		}
	if(s=="")
		{
		alert("Form Validation Has been Succsessfully done");
		return true;
		}
	else
		{
		alert(s);
		return false;
		}
}

