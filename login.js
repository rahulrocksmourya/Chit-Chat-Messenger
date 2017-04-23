$(document).ready(function(){
	
			$("#start").animate({left:"+=58%"},600);
			$("#first2").animate({left:"-=69%"},600);
			$("#start").click(function(){
				$("#wrong").fadeOut(1);
				$("body").css("background-image","url('http://www.cityhdwallpapers.com/wp-content/uploads/2016/April/8/United%20States/San%20Francisco/1920x1200/The-Golden-Gate-Bridge-1-city-HD-wallpaper-1920x1200.jpg')");
				$("#first").css("display","none");
				$(".firstDiv").css("display","none");
				$("#second").css("display","inline");
				$(".secondDiv").css("display","inline-block");
				//$(".secondDiv").animate({top:"-=80%"},1000);
				$(".secondDiv").animate({top:"+=40%"},500);
			})
			$("#NextButton").click(function(){
				$("#NextButton").css("position","absolute");
				$("#NextButton").css("border-radius","100%");
    				$("#NextButton").animate({
					top: '-=2000px',
					left: '-=2000px',
					height: '+=5000px',
					width: '+=5000px'},
					100
				);
				$(".secondDiv").css("display","none");
				$("#fourth").css("display","block");
				myFunction();
			});
			defaultUsername = "asd";
			defaultPassword = "asd";
			$("#signUpButton").click(function(){
				//$("#login").animate({top:"+=60em"}, 500);
				//loginpage();
				var username2 = document.getElementById("username").value;
				var password2 = document.getElementById("secondDivPass").value;
				if(username2 != "" && password2 != ""){
					defaultUsername = username2;
					defaultPassword = password2;
					alert("User added\nYou can now Login");
				}else
				alert("Username or Password is empry!");
			});
			$("#LogInButton").click(function(){
				var username2 = document.getElementById("username").value;
				var password2 = document.getElementById("secondDivPass").value;
				if(username2.length > 0 && password2.length > 0){
					if(username2 === defaultUsername && password2 === defaultPassword){
						document.getElementById("NextButton").style.display = "inline";
						document.getElementById("person1").innerHTML = username2;
					}else{
						$("#wrong").fadeIn(1);
						$("#wrong").fadeOut(3000);
					}
				}else{
					$("#wrong").fadeIn(1);
					//alert("Invalid Username and Password ...");
					$("#wrong").fadeOut(3000);
				}
			});
		});
		function reloadPage() {
    			location.reload();
		}
		var myVar;
		function myFunction() {
   			myVar = setTimeout(showPage, 3000);
		}
		function showPage() {
  			document.getElementById("loader").style.display = "none";
  			document.getElementById("fourth").style.display = "none";
 			//document.getElementById("third").style.display = "inline";
  			document.body.style.backgroundImage = "none";
			$("#five").css("display","block");
			//$("#five").animate({top:"-=110%"},800);
			//$("#five").animate({left:"+=50%"},200);
			//$("#five").animate({width:"-=100%"},200);
			$("#five").fadeOut("slow");
			$("#NextButton").fadeOut("slow");
			//$("#third").load("E:\web\ChitChat\ChitChat2.0.html");
			window.open("ChitChat2.0.html", "", "", "true");
			$("#third").css("display","block");
			/*Animation simultaneously*/
			/*$(function () {
    				$("#five").animate({width: '-=100%'}, { duration: 800, queue: false });
    				$("#five").animate({left: '+=50%'}, { duration: 500, queue: false });
   				$("#five").animate({top: '+=50%'}, { duration: 500, queue: false });
    				$("#five").animate({height: '-=100%'}, { duration: 500, queue: false });
			});*/
		}