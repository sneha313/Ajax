

function one()
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
                document.getElementById("msg").innerHTML = this.responseText;//all the content of welcome.html will store in response.txt
            }
        };
        xmlhttp.open("GET","header.html",true);//call file welcome.html
        xmlhttp.send();

}

function two()
{
	if(window.XMLHttpRequest)
	{
var xmlhttp=new XMLHttpRequest();
	}
	else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if(this.readyState==4 && this.status==200)
		{
document.getElementById("msg").innerHTML=this.responseText;
		}
		
};
	xmlhttp.open("GET","about1.html",true);
	xmlhttp.send();
	
}


function three()
{
	if(window.XMLHttpRequest)
	{
		var xmlhttp=new XMLHttpRequest();
	}
	else{
		
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if(this.readyState==4 && this.status==200)
		{
			document.getElementById("msg").innerHTML=this.responseText;
		}
	};
	xmlhttp.open("GET","login1.html",true);
	xmlhttp.send();
}

function four()
{
	if(window.XMLHttpRequest)
	{
		var xmlhttp=new XMLHttpRequest();
	}
	else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if(this.readyState==4 && this.status==200)
		{
			document.getElementById("msg").innerHTML=this.responseText;
		}
	};
	xmlhttp.open("GeT","contact.html",true);
	xmlhttp.send();
}

function five()
{
	if(window.XMLHttpRequest)
	{
		var xmlhttp=new XMLHttpRequest();
	}
	else{
		xmlhttp=new ACtiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if(this.readyState==4 && this.status==200)
		{
			document.getElementById("msg").innerHTML=this.responseText;
		}
	};
	xmlhttp.open("GET","Signup2.html",true);
	xmlhttp.send();
}