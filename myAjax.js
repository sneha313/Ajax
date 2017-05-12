function viewprofile()
{
	 if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("mydata").innerHTML = this.responseText;//all the content of welcome.html will store in response.txt
            }
        };
        xmlhttp.open("GET","Myprofile.html",true);//call file welcome.html
        xmlhttp.send();
}

function editprofile()
{
	if(window.XMLHttpRequest)
	{
		var xmlhttp=new XMLHttpRequest();
	}
	else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		
		if(this.readyState==4 && this.status==200)
		{
			document.getElementById("mydata").innerHTML=this.responseText;
		}
		
	};
	xmlhttp.open("GET","editprofile.html",true);
		xmlhttp.send();
}

function professional()
{
	if(window.XMLHttpRequest)
	{
		var xmlhttp=new XMLHttpRequest();
	}
	else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		
		if(this.readyState==4 && this.status==200)
		{
			document.getElementById("mydata").innerHTML=this.responseText;
		}
		
	};
	xmlhttp.open("GET","professional.html",true);
		xmlhttp.send();
}

function contact()
{
	if(window.XMLHttpRequest)
	{
		var xmlhttp=new XMLHttpRequest();
	}
	else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		
		if(this.readyState==4 && this.status==200)
		{
			document.getElementById("mydata").innerHTML=this.responseText;
		}
		
	};
	xmlhttp.open("GET","mycontact.html",true);
		xmlhttp.send();
}

function logout()
{
	alert("hello4");
}
