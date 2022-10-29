function ValidateForm()
{
	var x =document.forms ["myForm"]["username"].value;

	if( x==null || x=="")
	{
		Alert("name must be filled out");
		return false;
	}
	}
	/
	else if(y==null || y=="")

	{
		Alert("email must be filled out");
	}
	else if (z==null|| z=="") {
		 Alert("password must be filled");
	}
	else if(p==null || p==""){

		Alert("password must be confirmed");
	}
	else
	{
		Alert("ERROR")
		return false;
	}

}