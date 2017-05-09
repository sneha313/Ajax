
class User
{
	constructor()
	{
		this.name="Mr abc";
		this.mobile=9093903093;
		this.city="bangalore";
		this.pincode=563007;
		
	}
	get mytest()
	{
		alert(this.name + this.mobile + this.city + this.pincode);
	}
	get userDetails()
	{
		
		var data="<table class='table table-bordered table-hover'>";
		data=data+"<tr><th>Full Name</th><td>" +this.name+"</td></tr>";
		data=data+"<tr><th>Mobile</th><td>" +this.mobile+"</td></tr>";
		data=data+"<tr><th>City</th><td>" +this.city+"</td></tr>";
		data=data+"<tr><th>Pin code</th><td>" +this.pincode+"</td></tr>";
		data=data+"</table>";
		//document.getElementById("msg").innerHTML=data;
		return data;
	}
	
	get savedata(){
		this.name=document.getElementById("fname").value;
		this.mobile=document.getElementById("mobile").value;
		this.city=document.getElementById("city").value;
		this.pincode=document.getElementById("pincode").value;
		document.getElementById("msg").innerHTML="Data Saved";
	}
}
class Customer extends User{
	constructor()
	{
		super();
		this.pname="potato";
		this.qty=4;
		this.price=100;
		this.pdate="10-05-2017";
		this.desc="this is good product";
		
	}
	
	get alldetails()
	{
		var finaldata=this.userDetails;
	
		var pdata="<table class='table table-bordered table-hover'>";
		pdata=pdata+"<tr><th>P Name</th><td>" +this.pname+"</td></tr>";
		pdata=pdata+"<tr><th>Quantity</th><td>" +this.qty+"</td></tr>";
		pdata=pdata+"<tr><th>Price</th><td>" +this.price+"</td></tr>";
		pdata=pdata+"<tr><th>Total Price</th><td>" +this.price * this.qty+"</td></tr>";
		pdata=pdata+"<tr><th>Description</th><td>" +this.desc+"</td></tr>";
		pdata=pdata+"<tr><th>Purchaged</th><td>" +this.pdate+"</td></tr>";
		pdata=pdata+"</table>";
		finaldata=finaldata+pdata;
		document.getElementById("msg").innerHTML=finaldata;
	}
	
	get saveproduct(){
		this.pname=document.getElementById("pname").value;
		this.qty=document.getElementById("qty").value;
		this.price=document.getElementById("price").value;
		this.desc=document.getElementById("desc").value;
		document.getElementById("msg").innerHTML="Data Saved";
	}
	

//ajax start

get about()
{
	 if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
           var xmlhttp = new XMLHttpRequest();
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
}//function end

get contact()
{
	 if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
           var xmlhttp = new XMLHttpRequest();
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
}//function end

get login()
{
	 if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
           var xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("msg").innerHTML = this.responseText;//all the content of welcome.html will store in response.txt
            }
        };
        xmlhttp.open("GET","login.html",true);//call file welcome.html
        xmlhttp.send();
}//function end

get signup()
{
	 if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
           var xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("msg").innerHTML = this.responseText;//all the content of welcome.html will store in response.txt
            }
        };
        xmlhttp.open("GET","signup1.html",true);//call file welcome.html
        xmlhttp.send();
}//function end
}//class end
var obj =new Customer();



//get keyword will help to bind member variable and member functions together.