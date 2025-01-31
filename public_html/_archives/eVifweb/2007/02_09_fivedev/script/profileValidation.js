/*
	Function: validate
		Validates all form elements passed in via formElements object.
	Parameters:
		None.

	Returns:
		An array of error messages.  Error messages will be in the form of
		- One or more fields are required.
		- Please enter a valid zipcode.
		- Please enter a valid email address.
		- Please enter a valid phone number.
		- Please enter a valid date (requires a day, month and 4 digit year).
		- Please enter the same email address.

	Useage:
		See documentation for implementation.
		
*/
function validateForm() {
	var errMsgs = new Array();
	var MSG_REQUIRED_FIELD = "One or more fields are required.";
	var MSG_INVALID_ZIP = "Please enter a valid zipcode.";
	var MSG_INVALID_EMAIL = "Please enter a valid email address.";
	var MSG_INVALID_PHONE = "Please enter a valid phone number.";
	var MSG_INVALID_MONTH = "Please enter a valid month.";
	var MSG_INVALID_DAY = "Please enter a valid day.";
	var MSG_INVALID_YEAR = "Please enter a valid year.";
	var MSG_INVALID_DATE = "Please enter a valid date.";
	var MSG_NON_MATCHING_EMAIL = "Please confirm your email address.";
	
	
	var dateStatus = 0;
	for (var eachItem in formElements) {
		switch(formElements[eachItem]){
			
			case "chkbx00":
				if(document.getElementById('_ctl0_CheckBox1').checked){
					document.getElementById('chkbx00').value="Y";
				}else{
					document.getElementById('chkbx00').value="N";
				}
			break;
			case "chkbx01":
				if(document.getElementById('_ctl0_CheckBox2').checked){
					document.getElementById('chkbx01').value="Y";
				}else{
					document.getElementById('chkbx01').value="N";
				}
			break;
			case "chkbx02":
				if(document.getElementById('_ctl0_CheckBox3').checked){
					document.getElementById('chkbx02').value="Y";
				}else{
					document.getElementById('chkbx02').value="N";
				}
			break;
			case "chkbx03":
				if(document.getElementById('_ctl0_CheckBox4').checked){
					document.getElementById('chkbx03').value="Y";
				}else{
					document.getElementById('chkbx03').value="N";
				}
			break;
			
			case "chkbx04":
				if(document.getElementById('_ctl0_CheckBox5').checked){
					document.getElementById('chkbx04').value="Y";
				}else{
					document.getElementById('chkbx04').value="N";
				}
			break;
			case "chkbx05":
				if(document.getElementById('_ctl0_CheckBox6').checked){
					document.getElementById('chkbx05').value="Y";
				}else{
					document.getElementById('chkbx05').value="N";
				}
			break;
			case "chkbx06":
				if(document.getElementById('_ctl0_CheckBox7').checked){
					document.getElementById('chkbx06').value="Y";
				}else{
					document.getElementById('chkbx06').value="N";
				}
			break;
			case "chkbx07":
				if(document.getElementById('_ctl0_CheckBox8').checked){
					document.getElementById('chkbx07').value="Y";
				}else{
					document.getElementById('chkbx07').value="N";
				}
			break;
			 
			case "chkbx08":
				if(document.getElementById('_ctl0_CheckBox9').checked){
					document.getElementById('chkbx08').value="Y";
				}else{
					document.getElementById('chkbx08').value="N";
				}
			break;
			case "chkbx09":
				if(document.getElementById('_ctl0_CheckBox10').checked){
					document.getElementById('chkbx09').value="Y";
				}else{
					document.getElementById('chkbx09').value="N";
				}
			break;
			case "chkbx10":
				if(document.getElementById('_ctl0_CheckBox11').checked){
					document.getElementById('chkbx10').value="Y";
				}else{
					document.getElementById('chkbx10').value="N";
				}
			break;
			case "chkbx11":
				if(document.getElementById('_ctl0_CheckBox12').checked){
					document.getElementById('chkbx11').value="Y";
				}else{
					document.getElementById('chkbx11').value="N";
				}
			break;
			case "chkbx12":
				if(document.getElementById('_ctl0_CheckBox13').checked){
					document.getElementById('chkbx12').value="Y";
				}else{
					document.getElementById('chkbx12').value="N";
				}
			break;
			
		}		
		
		
		if (formElements[eachItem] == "fname") {
			if (!validReqField(document.getElementById(eachItem).value)) {
				errMsgs.push(MSG_REQUIRED_FIELD);
				document.getElementById('_ctl0_Regularexpressionvalidator5').style.display='inline';
			}else{
				document.getElementById('_ctl0_Regularexpressionvalidator5').style.display='none';
			}
		} else if (formElements[eachItem] == "lname") {
			if (!validReqField(document.getElementById(eachItem).value)) {
				errMsgs.push(MSG_REQUIRED_FIELD);
				document.getElementById('_ctl0_Regularexpressionvalidator7').style.display='inline';
			}else{
				document.getElementById('_ctl0_Regularexpressionvalidator7').style.display='none';
			}
		} else if (formElements[eachItem] == "zip") {
			if (!validZip(document.getElementById(eachItem).value)) {
				errMsgs.push(MSG_INVALID_ZIP);
				document.getElementById('_ctl0_Regularexpressionvalidator9').style.display='inline';
			}else{
				document.getElementById('_ctl0_Regularexpressionvalidator9').style.display='none';
			}
		} else if (formElements[eachItem] == "email") {
			if (!validEmail(document.getElementById(eachItem).value)) {
				errMsgs.push(MSG_INVALID_EMAIL);
				document.getElementById('_ctl0_RegularExpressionValidator1').style.display='inline';
			}else{
			document.getElementById('_ctl0_RegularExpressionValidator1').style.display='none';	
			}
		} else if (formElements[eachItem] == "phone") {
			if (!validPhone(document.getElementById(eachItem).value)) {
				if(document.getElementById('_ctl0_customer').checked){
				errMsgs.push(MSG_INVALID_PHONE);
				document.getElementById('_ctl0_Regularexpressionvalidator11').style.display='inline';
				}else{
					document.getElementById('_ctl0_Regularexpressionvalidator11').style.display='none';	
				}
			}else{
			document.getElementById('_ctl0_Regularexpressionvalidator11').style.display='none';	
			}
		} else if (formElements[eachItem] == "confirmEmail" && document.getElementById('_ctl0_emailoriginal').value!=document.getElementById('_ctl0_email').value) {
			var tempConfirm = document.getElementById(eachItem).value;
			for (var eachTempItem in formElements) {
				if (formElements[eachTempItem] == "email") {
					var tempEmail = document.getElementById(eachTempItem).value;
					if (validEmail(tempEmail)) {
						if (tempConfirm != tempEmail) {
							errMsgs.push(MSG_NON_MATCHING_EMAIL);
							
							document.getElementById('_ctl0_CompareValidator1').style.visibility='visible';
						}else{
							document.getElementById('_ctl0_CompareValidator1').style.visibility='hidden';
						}
					}
				}
			}
		}	
	}
	if (errMsgs.length > 0) {
		var errString = "";
		for (var i=0; i<errMsgs.length; i++) {
			errString += errMsgs[i] + "\n";	
		}
		return false;
	} else {
		return true;
	}
}
/*

	Function: validReqField
		Tests field as valid required field.
		
	Parameters:
		str - string to validate.
		
	Returns:
		Boolean.
		
*/
function validReqField(str) {
	if (!str.length) {
		return false;
	}
	return true;
}
/*

	Function: validEmail
		Tests field as valid email address.
		
	Parameters:
		str - string to validate.
		
	Returns:
		Boolean.
		
*/
function validEmail(str) {
	var emailFilter=/^.+@.+\..{2,3}$/;
	var illegalChars= /[\(\)\<\>\,\;\:\\\/\"\[\]]/
	if ((!(emailFilter.test(str))) || (str.match(illegalChars))) {
		return false;
	}
	return true;
}
/*

	Function: validZip
		Tests field as valid 5 digit zipcode.
		
	Parameters:
		str - string to validate.
		
	Returns:
		Boolean.
		
*/
function validZip(str) {
	var temp = parseInt(str);
	if (temp.toString().length != 5) {
		return false;
	}
	return true;
}
/*
	Function: validPhone
		Tests field as valid 10 digit phone number.
		
	Parameters:
		str - string to validate.
		
	Returns:
		Boolean.
*/
function validPhone(str) {
	var temp = str.replace(/[\(\)\.\-\ ]/g, '');
	if (isNaN(parseInt(temp)) || (temp.length != 10)) {
		return false;
	}
	return true;
}
/*
	Function: validDate
		Gather values and then validate a date.
		
	Parameters:
		None.
		
	Returns:
		Boolean.
		
*/
function validDate() {
	var month = new String;
	var day = new String;
	var year = new String;
	for (var eachItem in formElements) {
		if (formElements[eachItem] == "month") {
			month = document.getElementById(eachItem).value
		} else if (formElements[eachItem] == "day") {
			day = document.getElementById(eachItem).value
		} else if (formElements[eachItem] == "year") {
			year = document.getElementById(eachItem).value
		}
	}
	return (testDate(month,day,year));
}
/*

	Function: testDate
		Tests params as a valid date.
		
	Parameters:
		month - string month (1-12).
		day - string month (1-31).
		year - string year (4 digit).
		
	Returns:
		Boolean.
		
*/
function testDate(month,day,year){
	month--;
	var testDate = new Date (year,month,day);
	return ((day==testDate.getDate()) && (month==testDate.getMonth()) && (year==testDate.getFullYear()));
}
