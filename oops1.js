
class Student
{
	constructor()
	{
		this.name="sneha";
		this.mobile=734878793;
		this.city="hyderbada";
		this.pincode=5673767;
		
	}
	get test()
	{
		alert(this.name + this.mobile + this.city + this.pincode);
	}
	get studentDetails()
	{
		var data="<table class='table table-bordered table-hover'>";
		data=data+"<tr class='success'><th>Student Name</th><td>" + this.name+"</td></tr>";
		data=data+"<tr><th>Mobile</th><td>" + this.mobile +"</td></tr>";
		data=data+"<tr><th>City</th><td>" + this.city + "</td></tr>";
		data=data+"<tr><th>Pincode</th><td>" + this.pincode +"</td></tr>";
		document.getElementById("msg").innerHTML=data;
	}
	
	get save()
	{
		
var name=document.getElementById("name").value;
name=name.trim();
if(name=="")
{
document.getElementById("name").style.borderColor="red";
}
else
{
document.getElementById("name").style.borderColor="";
} 
var mobile=document.getElementById("mobile").value;
mobile=mobile.trim();
if(mobile=="")
{
document.getElementById("mobile").style.borderColor="red";
}
else{

document.getElementById("mobile").style.borderColor="";
}
var agree=document.getElementById("terms").checked;
if(agree==true)
{
document.getElementById("termserror").style.display="none";
}
else{
document.getElementById("termserror").style.display="block";
}
		this.name=document.getElementById("fname").value;
		this.mobile=document.getElementById("mobile").value;
		this.city=document.getElementById("city").value;
		this.pincode=document.getElementById("pincode").value;
		document.getElementById("msg").innerHTML="Data Saved";
	}

}
 var obj=new Student();