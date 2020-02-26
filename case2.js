function validate()
{
var nme=document.myform.name.value;
var pwd=document.myform.password.value;
var addrs=document.myform.addr.value;
var gend=document.myform.gender.value;

if((nme=="")||(nme=="null"))
	{
	alert("Enter name");
	document.myform.name.focus();
	return false;
	}
if((pwd=="")||(pwd=="null"))
	{
	alert("Enter password");
	document.myform.pwd.focus();
	return false;
	}	
if((pwd.length<7)||(pwd.length>8))
	{
	alert("Password should have 8 letters");
	document.myform.pwd.focus();
	return false;
	}
if((addrs=="")||(addrs=="null"))
	{
	alert("Enter address");
	document.myform.addrs.focus();
	return false;
	}
}