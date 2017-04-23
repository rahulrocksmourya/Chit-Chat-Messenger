$(document).ready(function(){
	var mouseX;
	var mouseY;
	$(document).mousemove( function(e) {
		mouseX = e.pageX; 
		mouseY = e.pageY;
	});
	$("#hin").hover(function(){
		$('#hint').css({'top':mouseY+10,'left':mouseX}).fadeIn('slow');
		},
		function(){
			$("#hint").slideUp("fast");}
	);
	$("#hin2").hover(function(){
		$('#hint').css({'top':mouseY+10,'left':mouseX-270}).fadeIn('slow');
		},
		function(){
			$("#hint").slideUp("fast");}
	);
	var flag = 0;
	var ms="";
	var msg="";
	var c = "";
	var l = 0;
	//var input = function(msg1){
	//l=msg1.length;
	var input = function(msg){
		l=msg.length;
		/*msg="";
		for(var i=0;i<l;i++){
			c = msg1.substring(i,i+1);
			switch(c){
			case " ":
				msg = msg.concat("&nbsp;");break;	//" "
			case "<":
				msg = msg.concat("&lt;");break;		//"<"
			case ">":
				msg = msg.concat("&gt;");break;		//">"
			default:
				msg = msg.concat(c);
			}
		}
		l=msg.length;*/
		ms="";
		for(var i=0;i<l;i++){
			c = msg.substring(i,i+1);
			switch(c){
			case " ":
				ms = ms.concat("&nbsp;");break;	//" "
			case "<":
				ms = ms.concat("&lt;");break;	//"<"
			case ">":
				ms = ms.concat("&gt;");break;	//">"
			case "*":
				if(msg.substring(i-1,i) === "_" || msg.substring(i-1,i) === "~" || msg.substring(i-1,i) === " " || i === 0){
					savei = i;
					savej = i+1;
					for(var j =i+1;j<l;j++){
						if(msg.substring(j,j+1) === "*"){
							if(msg.substring(j+1,j+2) === "_" || msg.substring(j+1,j+2) === "~" || msg.substring(j+1,j+2) === " " || j+1 === l){
								savej = j;
								break;
							}
						}
					}
				}
				else{
					ms = ms.concat(c);
					break;
				}
				if(savei+1 !== savej){
					var spaceCount = 0;
					for(var k =savei+1; k<savej; k++){
						if(msg.substring(k,k+1) === " ")
							spaceCount++;
						}
						if(spaceCount != savej-savei-1){
							ms = ms.concat("<b>");
							for(var k =savei+1; k<savej; k++){
								c = msg.substring(k,k+1);
								if(c === " ")
									ms = ms.concat("&nbsp;");
								else if(c === ">")
									ms = ms.concat("&gt;");
								else if(c === "<")
									ms = ms.concat("&lt;");
								else 
									ms = ms.concat(c);
							}
							ms = ms.concat("</b>");
							i = savej;
							console.log("more than space",spaceCount,savej-savei);
						}
						else{
							ms = ms.concat("*");
							for(var k =0; k<spaceCount; k++){
								ms = ms.concat("&nbsp;");
						}
						ms = ms.concat("*");
						i = savej;
					}
				}
				else{
					ms = ms.concat(c);
				}
				break;
			case "_":
				if(msg.substring(i-1,i) === "*" || msg.substring(i-1,i) === "~" || msg.substring(i-1,i) === " " || i === 0){
					savei = i;
					savej = i+1;
					for(var j =i+1;j<l;j++){
						if(msg.substring(j,j+1) === "_"){
							if(msg.substring(j+1,j+2) === "*" || msg.substring(j+1,j+2) === "~" || msg.substring(j+1,j+2) === " " || j+1 === l){
								savej = j;
								break;
							}
						}
					}
				}
				else{
					ms = ms.concat(c);
					break;
				}
				if(savei+1 !== savej){
					var spaceCount = 0;
					for(var k =savei+1; k<savej; k++){
						if(msg.substring(k,k+1) === " ")
							spaceCount++;
						}
						if(spaceCount != savej-savei-1){
							ms = ms.concat("<i>");
							for(var k =savei+1; k<savej; k++){
								c = msg.substring(k,k+1);
								if(c === " ")
									ms = ms.concat("&nbsp;");
								else if(c === ">")
									ms = ms.concat("&gt;");
								else if(c === "<")
									ms = ms.concat("&lt;");
								else
									ms = ms.concat(c);
							}
							ms = ms.concat("</i>");
							i = savej;
						}
						else{
							ms = ms.concat("_");
							for(var k =0; k<spaceCount; k++){
								ms = ms.concat("&nbsp;");
						}
						ms = ms.concat("_");
						i = savej;
					}
				}
				else{
					ms = ms.concat(c);
				}
				break;
			case "~":
				if(msg.substring(i-1,i) === "_" || msg.substring(i-1,i) === "*" || msg.substring(i-1,i) === " " || i === 0){
					savei = i;
					savej = i+1;
					for(var j =i+1;j<l;j++){
						if(msg.substring(j,j+1) === "~"){
							if(msg.substring(j+1,j+2) === "_" || msg.substring(j+1,j+2) === "*" || msg.substring(j+1,j+2) === " " || j+1 === l){
								savej = j;
								break;
							}
						}
					}
				}
				else{
					ms = ms.concat(c);
					break;
				}
				if(savei+1 !== savej){
					var spaceCount = 0;
					for(var k =savei+1; k<savej; k++){
						if(msg.substring(k,k+1) === " ")
							spaceCount++;
					}
					if(spaceCount != savej-savei-1){
						ms = ms.concat("<del>");
						for(var k =savei+1; k<savej; k++){
							c = msg.substring(k,k+1);
							if(c === " ")
								ms = ms.concat("&nbsp;");
							else if(c === ">")
								ms = ms.concat("&gt;");
							else if(c === "<")
								ms = ms.concat("&lt;");
							else
								ms = ms.concat(c);
						}
						ms = ms.concat("</del>");
						i = savej;
					}
					else{
						ms = ms.concat("~");
						for(var k =0; k<spaceCount; k++){
							ms = ms.concat("&nbsp;");
						}
						ms = ms.concat("~");
						i = savej;
					}
				}
				else{
					ms = ms.concat(c);
				}
				break;
			case "^":
				flag = 0;
				if(msg.substring(i-1,i) !== "\\" && msg.substring(i-1,i) !== " " && i !== 0 && msg.substring(i+1,i+2) !== " "){
					savei = i;
					savej = i+1;
					if(msg.substring(i+1,i+2) === "[" ){
						for(var j =i+2;j<l;j++){
							if(msg.substring(j,j+1) === "]" || j+1 === l){
								savej = j+1;
								flag = 1;
								break;
							}
						}	
					}
					else{
						for(var j =i+1;j<l;j++){
							if(msg.substring(j,j+6) === "&nbsp;" || j+1 === l){
								savej = j+5;
								break;
							}
						}
					}
				}
				else{
					if(msg.substring(i-1,i) !== "\\"){
						ms = ms.concat(c);
					}
					else{
						ms = ms.substring(0,ms.length-1)
						ms = ms.concat(c);
					}
					break;
				}
				if(savei+1 !== savej){
					var spaceCount = 0;
					for(var k =savei+1; k<savej; k++){
						if(msg.substring(k,k+1) === " ")
							spaceCount++;
					}
					if(flag === 1 && spaceCount === savej-savei-3){
						ms = ms.concat("^[");
						for(var k =0; k<spaceCount; k++){
							ms = ms.concat("&nbsp;");
						}
						ms = ms.concat("]");
						i = savej;
					}
					ms = ms.concat("<sup>");
					for(var k =savei+1; k<savej; k++){
						c = msg.substring(k,k+1);
								//Delete [ and ] from first and last
						if((k === savei+1 && c === "[") || (k === savej-1 && c === "]"))
							continue;
								//Superscript till it found space
						if(c === " " && flag != 1){
							var temp = k;
							k = savej;
							savej = temp;
						}
						else if(c === " ")
							ms = ms.concat("&nbsp;");
						else if(c === ">")
							ms = ms.concat("&gt;");
						else if(c === "<")
							ms = ms.concat("&lt;");
						else
							ms = ms.concat(c);
					}
					ms = ms.concat("</sup>");
							//Add thing after "]"
					if(flag === 1){	
						c = msg.substring(k,k+1);
						ms = ms.concat(c);
					}
					i = savej;
				}
				else{
					ms = ms.concat(c);
				}
				break;
			case "`":
				if(msg.substring(i+1,i+3) === "``" && msg[i+3] != "`" && msg[i-1] != "`"){
					savei = i;
					savej = i+1;
					for(var j =i+4;j<l;j++){
						if(msg.substring(j,j+1) === "`"){
							if(msg.substring(j+1,j+3) === "``"){
								savej = j;
								break;
							}
						}
					}
				}
				else{
					ms = ms.concat(c);
					break;
				}
				if(savei+1 !== savej){
					var spaceCount = 0;
					for(var k =savei+3; k<savej; k++){
						if(msg.substring(k,k+1) === " ")
							spaceCount++;
					}
					if(spaceCount != savej-savei-3){
						ms = ms.concat("<span id='codes'>");
								//ms = ms.concat("<blockquote id='codes1'><pre><code>");
						for(var k =savei+3; k<savej; k++){
							c = msg.substring(k,k+1);
							if(c === " ")
								ms = ms.concat("&nbsp;");
							else if(c === ">")
								ms = ms.concat("&gt;");
							else if(c === "<")
								ms = ms.concat("&lt;");
							else
								ms = ms.concat(c);
						}
						ms = ms.concat("</span>");
								//ms = ms.concat("</blockquote></pre></code>");
						i = savej+2;
					}
					else{
						ms = ms.concat("```");
						for(var k =0; k<spaceCount; k++){
							ms = ms.concat("&nbsp;");
						}
						ms = ms.concat("`");
						i = savej;
					}
				}
				else{
					ms = ms.concat(c);
				}
				break;
			case "#":
				if(msg.substring(i+1,i+3) === "##" && msg[i+3] != "#" && msg[i-1] != "#"){
					savei = i;
					savej = i+1;
					for(var j =i+4;j<l;j++){
						if(msg.substring(j,j+1) === "#"){
							if(msg.substring(j+1,j+3) === "##"){
								savej = j;
								break;
							}
						}
					}
				}
				else{
					ms = ms.concat(c);
					break;
				}
				if(savei+1 !== savej){
					var spaceCount = 0;
					for(var k =savei+3; k<savej; k++){
						if(msg.substring(k,k+1) === " ")
							spaceCount++;
					}
					if(spaceCount != savej-savei-3){
						ms = ms.concat("<mark>");
						for(var k =savei+3; k<savej; k++){
							c = msg.substring(k,k+1);
							if(c === " ")
								ms = ms.concat("&nbsp;");
							else if(c === ">")
								ms = ms.concat("&gt;");
							else if(c === "<")
								ms = ms.concat("&lt;");
							else
								ms = ms.concat(c);
						}
						ms = ms.concat("</mark>");
						i = savej+2;
					}else{
						ms = ms.concat("###");
						for(var k =0; k<spaceCount; k++){
							ms = ms.concat("&nbsp;");
						}
						ms = ms.concat("#");
						i = savej;
					}
				}
				else{
					ms = ms.concat(c);
				}
				break;
				default:
					ms = ms.concat(c);
			}
		}
		return(ms);
	}
	var scroll = function(id,t,scrollTimes = 1){
				//$('html, body').animate({scrollTop: $(id).offset().top}, t);
		while(scrollTimes>0){
			$('body').animate({scrollTop: $(id).offset().top}, t);
			scrollTimes--;
		}
	}
	var textAnimate = function(){
		$("#chat:nth-last-child(2) p").animate({fontSize: "30px"}, { duration: 50, queue: false });
		$("#chat:nth-last-child(2) p").animate({maxWidth: "60%"}, { duration: 50, queue: false });
	}
	var imgAnimate = function(){
		$("#chat:nth-last-child(2) div p").animate({fontSize: "30px"}, { duration: 50, queue: false });
		$("#chat:nth-last-child(2) div p").animate({maxWidth: "98%"}, { duration: 50, queue: false });
	}
	$("#lb").click(function(){
        var m=$("input[name=lmessenger]").val();
		m=input(m);
		if(m.length>0){
			$("#liLast").before('<li id="chat"><p class="pLeft">'+m+'</p></li>');
			textAnimate();
			scroll("#liLast",2,20);
			$("input, textarea").val("");
		}
		else{alert("This field cannot be empty");}
	});
	$("#rb").click(function(){
        var m=$("input[name=rmessenger]").val();
		m=input(m);
		if(m.length>0){
			$("#liLast").before('<li id="chat"><p class="pRight">'+m+'</p></li>');
			textAnimate();
			scroll("#liLast",2,20);
			$("input, textarea").val("");
		}
		else{alert("This field cannot be empty");}
	});
	$("#ltext").keydown(function(A){
		if(parseInt(A.which,10)===13){
        	var m=$("input[name=lmessenger]").val();
			m=input(m);
			if(m.length>0){
				$("#liLast").before('<li id="chat"><p class="pLeft">'+m+'</p></li>');
				textAnimate();
				scroll("#liLast",2,20);
				$("input, textarea").val("");
			}
			else{alert("This field cannot be empty");}
		}
	});
	$("#rtext").keydown(function(A){
		if(parseInt(A.which,10)===13){
        	var m=$("input[name=rmessenger]").val();
			m=input(m);
			if(m.length>0){
				$("#liLast").before('<li id="chat"><p class="pRight">'+m+'</p></li>');
				textAnimate();
				scroll("#liLast",2,20);
				$("input, textarea").val("");
			}
			else{alert("This field cannot be empty");}
		}
	});
	var scrollTimes=100;
	$("#lib").click(function(){
		alert("Image file must be in\nC:/fakepath/ folder\n otherwise it shows blank image.");
		var im = $("input[name=lurl]").val();
		if(im.length === 0){
			im = $("input[name=lpic]").val();
		}
		var cap = " ";
		if(im.length>0 &&(im[1] === ":" || im.substring(0,8) === "https://" || im.substring(0,7) === "http://" || im.substring(0,8) === "file:///")){
			if(confirm("Do you like to add Caption?")){
				cap = prompt("Enter you caption","Caption.....");
					if(cap === ""){ cap = "No caption ..."}
			}
			$("#liLast").before('<li id="chat"><div class="messagediv"><p class="pLeft"><img src="'+im+'" class="uimg"/><br/><b>'+cap+'</b></p></div></li>');
			imgAnimate();
			scroll("#liLast",2,20);
			$("input, textarea").val("");
		}
		else{
			alert("Invalid !!!");
		}
	});
	$("#rib").click(function(){
		var im = $("input[name=rurl]").val();
		if(im.length === 0){
			im = $("input[name=rpic]").val();
		}
		var cap = " ";
		if(im.length>0 &&(im[1] === ":" || im.substring(0,8) === "https://" || im.substring(0,7) === "http://" || im.substring(0,8) === "file:///")){
			if(confirm("Do you like to add Caption?")){
				cap = prompt("Enter you caption","Caption.....");
				if(cap === null){ cap = "No caption ..."}
			}
			$("#liLast").before('<li id="chat"><div class="messagediv"><p class="pRight"><img src="'+im+'" class="uimg"/><br/><b>'+cap+'</b></p></div></li>');
			$("#chat:nth-last-child(2) div p").css("margin-right","-150%");
			imgAnimate();
			scroll("#liLast",2,20);
			$("input, textarea").val("");
		}
		else{
			alert("Invalid !!!");
		}
	});
	$("#lib").hover(function(){
		var im = $("input[id=lURL]").val();
		if(im.length>0 &&(im[1] === ":" || im.substring(0,8) === "https://" || im.substring(0,7) === "http://" || im.substring(0,8) === "file:///")){
			$("#lURL").css("background-color","#075e54");
			$("#lURL").css("color","white");
		}else{
			$("#lURL").css("border-color","#dc4159");}},
		function(){
			$("#lURL").css("border-color","white");
			$("#lURL").css("background-color","#ffffff");
			$("#lURL").css("color","black");}
	);
	$("#rib").hover(function(){
		var im = $("input[id=rURL]").val();
		if(im.length>0 &&(im[1] === ":" || im.substring(0,8) === "https://" || im.substring(0,7) === "http://" || im.substring(0,8) === "file:///")){
			$("#rURL").css("background-color","#075e54");
			$("#rURL").css("color","white");
		}else{
			$("#rURL").css("border-color","#dc4159");}},
		function(){
			$("#rURL").css("border-color","white");
			$("#rURL").css("background-color","#ffffff");
			$("#rURL").css("color","black");}
	);
	$("#lb").hover(function(){
		var im = $("input[id=ltext]").val();
		if(im.length>0){
			$("#ltext").css("background-color","#075e54");
			$("#ltext").css("color","white");
		}else{
			$("#ltext").css("border-color","#dc4159");}},
		function(){
			$("#ltext").css("border-color","white");
			$("#ltext").css("background-color","#ffffff");
			$("#ltext").css("color","black");}
	);
	$("#rb").hover(function(){
		var im = $("input[id=rtext]").val();
		if(im.length>0){
			$("#rtext").css("background-color","#075e54");
			$("#rtext").css("color","white");
		}else{
			$("#rtext").css("border-color","#dc4159");}},
		function(){
			$("#rtext").css("border-color","white");
			$("#rtext").css("background-color","#ffffff");
			$("#rtext").css("color","black");}
	);
	$("#top").click(function(){
		scroll("#div3",800);
		$(this).addClass("spinFast");
	});
	$("#bottom").click(function(){
		$(this).addClass("spinFast");
		scroll("#lastdiv",800);
	})
	$("#top").hover(function(){
		$(this).attr("src", function(index, attr){
			return attr.replace("image/top.png", "image/top-back1.png");
		});
		$(this).addClass("spin");
		},
		function(){
    		$(this).attr("src", function(index, attr){
        		return attr.replace("image/top-back1.png", "image/top.png");
    		});
			$(this).removeClass("spinFast");
			$(this).removeClass("spin");
	});
	$("#bottom").hover(function(){
		$(this).attr("src", function(index, attr){
			return attr.replace("image/bottom.png", "image/bottom-back1.png");
		});
		$(this).addClass("spin");
		},
		function(){
    		$(this).attr("src", function(index, attr){
        		return attr.replace("image/bottom-back1.png", "image/bottom.png");
    		});
			$(this).removeClass("spin");
			$(this).removeClass("spinFast");
	});
	$("#facebook").hover(function(){
		$("#facebook").css("box-shadow","0px 60px 0px 70px #3b5998");
		$("#facebook").css("background-color","rgba(0, 0, 0, 0.5)");
				//$("#Contact").css("background-color","#FFFFFF")
		},
		function(){
			$("#facebook").css("box-shadow","0px 0px 0px 0px #3b5998");
			$("#facebook").css("background-color","#3b5998");
				//$("#Contact").css("background-color","#d4eaf4")
	});
	$("#gmail").hover(function(){
		$("#gmail").css("box-shadow","0px 10px 0px 70px #db3236");
		$("#gmail").css("background-color","rgba(0, 0, 0, 0.5)");
		$("#Contact").css("background-color","#075e54")
		},
		function(){
			$("#gmail").css("box-shadow","0px 0px 0px 0px rgba(0, 0, 0, 0)");
			$("#gmail").css("background-color","#db3236");
			$("#Contact").css("background-color","#d4eaf4")
	});
	$("#gmail").click(function(){
		$("#gmailAddress").animate({marginLeft: '205px'},500);
	});
	$("#gmailClose").click(function(){
		$("#gmailAddress").animate({marginLeft: '-262px'},500);
	});
	$("#twitter").hover(function(){
		$("#twitter").css("box-shadow","0px -40px 0px 70px #4099ff");
		$("#twitter").css("background-color","rgba(0, 0, 0, 0.5)");
		$("#Contact").css("background-color","purple")
		},
		function(){
			$("#twitter").css("box-shadow","0px 0px 0px 0px rgba(0, 0, 0, 0)");
			$("#twitter").css("background-color","#4099ff");
			$("#Contact").css("background-color","#d4eaf4")
	});
	$("#myImage").hover(function(){
		$("#myName").animate({height: '220px'},{duration:500, queue:false});
		$("#myName").animate({marginTop: '-195px'},{duration:500, queue:false});
		$("#myName").animate({paddingTop: '185px'},{duration:500, queue:false});

					// OR

					/*$("#myName").animate({
						height: '220px',
						marginTop: '-195px',
						paddingTop: '185px'
						},500
					);*/
		document.getElementById("myName").innerHTML = "Hello everyone<br>My self</br><br>Rahul Kumar Mourya</br>and i am a<br>student of Computer Science & Engg. from B.I.E.T. college Jhansi(U.P.)</br>";
		},
		function(){
			$("#myName").animate({height: '20px'},{duration:500, queue:false});
			$("#myName").animate({marginTop: '5px'},{duration:500, queue:false});
			$("#myName").animate({paddingTop: '10px'},{duration:500, queue:false});
			document.getElementById("myName").innerHTML = "About me...";
	});
	$("#myName").hover(function(){
		$("#myName").animate({height: '220px'},{duration:500, queue:false});
		$("#myName").animate({marginTop: '-195px'},{duration:500, queue:false});
		$("#myName").animate({paddingTop: '185px'},{duration:500, queue:false});

					// OR

					/*$("#myName").animate({
						height: '220px',
						marginTop: '-195px',
						paddingTop: '185px'
						},500
					);*/
		document.getElementById("myName").innerHTML = "Hello everyone<br>My self</br><br>Rahul Kumar Mourya</br>and i am a<br>student of Computer Science & Engg. from B.I.E.T. college Jhansi(U.P.)</br>";
		},
		function(){
			$("#myName").animate({height: '20px'},{duration:500, queue:false});
			$("#myName").animate({marginTop: '5px'},{duration:500, queue:false});
			$("#myName").animate({paddingTop: '10px'},{duration:500, queue:false});

					// OR

					/*$("#myName").animate({
						height: '20px',
						marginTop: '5px',
						paddingTop: '10px'
						},500
					);*/
			document.getElementById("myName").innerHTML = "About me...";
	});
	$("#reset").hover(function(){
		document.getElementById("reset").innerHTML = "Do you want to RESET";
		},
		function(){
    		document.getElementById("reset").innerHTML = "Reset";
	});
	$("#reset").click(function(){
		//reloadPage();
		window.open("ChitChatLogin.html", "", "", "true");
	});
	$("#ContactB").click(function(){
		$("#Contact").animate({left:"+=220px"},100);
		$("#transp").animate({width: '+=100%'}, { duration: 300, queue: false });
				//$("#Contact").css("box-shadow","0px 0px 1000px 1000px");
	});
	$("#close").click(function(){
		$("#Contact").animate({left:"-=220px"},100);
		$("#gmailAddress").animate({marginLeft:"-262px"},500);
		$("#transp").animate({width: '-=100%'}, { duration: 400, queue: false });
	});
	$("#transp").click(function(){
		$("#Contact").animate({left:"-=220px"},100);
		$("#gmailAddress").animate({marginLeft:"-262px"},500);
		$("#transp").animate({width: '-=100%'}, { duration: 400, queue: false });
	});
});