
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
        xmlhttp.open("GET","welcome.html",true);//call file welcome.html
        xmlhttp.send();

}

function two()
{
  if(window.XMLHttpRequest) {
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
        xmlhttp.open("GET","about.html",true);//call file welcome.html
        xmlhttp.send();


}

function three()
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
				//json parsing start
				var jsondata=this.responseText;
				var ar1=JSON.parse(jsondata);
				var data="<table class='table table-bordered table-hover'>";
				data=data+"<tr class='success'><th>name</th><th>mobile</th><th>city</th></tr>";
				
				for(var i=0;i<ar1.length;i++)
				{
					data=data+"<tr>";
					data=data+"<td>"+ar1[i].name+"</td>";
					data=data+"<td>"+ar1[i].mobile+"</td>";
					data=data+"<td>"+ar1[i].city+"</td>";
					
					data=data+"</tr>";
				}
				data=data+"</table>";
				document.getElementById("msg").innerHTML = data;
				//json parsing end
            }
        };
        xmlhttp.open("GET","userlist.json",true);//call file welcome.html
        xmlhttp.send();

}

function four()
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
        xmlhttp.open("GET","contactus.html",true);//call file welcome.html
        xmlhttp.send();
}
function five()
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
        xmlhttp.open("GET","signup.html",true);//call file welcome.html
        xmlhttp.send();

}