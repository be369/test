$("#btnRegister").click(function(e) {
	var valid = true;

	var phone = $("#mobileNumber").val();
	if (phone.length == 0) {
		$("#error-msg-mobile").html("Mobile number is required");
		$("#error-msg-mobile").removeClass("fade");
		valid = false;
	} else {
		$("#error-msg-mobile").addClass("fade");
	}
	var firstName = $("#firstName").val();
	if (firstName.length == 0) {
		$("#error-msg-first-name").html("First name is required");
		$("#error-msg-first-name").removeClass("fade");
		valid = false;
	} else {
		$("#error-msg-first-name").addClass("fade");
	}
	var lastName = $("#lastName").val();
	if (lastName.length == 0) {
		$("#error-msg-last-name").html("Last name is required");
		$("#error-msg-last-name").removeClass("fade");
		valid = false;
	} else {
		$("#error-msg-last-name").addClass("fade");
	}
	var email = $("#email").val();
	if (email.length == 0) {
		$("#error-msg-email").html("Email is required");
		$("#error-msg-email").removeClass("fade");
		valid = false;
	} else {
		$("#error-msg-email").addClass("fade");
	}

	if (valid) {
		/*$("#section-div").addClass("grayscale");
		$("#overlay").addClass("not-clickable");*/
		var url = "http://localhost:8989/register";

		var register = {
			mobileNumber : $("#mobileNumber").val(),
			firstName : $("#firstName").val(),
			lastName : $("#lastName").val(),
			dateOfBirth : $("#birthday").val(),
			gender : $("#gender").val(),
			email : $("#email").val()
		};

		$.ajaxSetup({
			headers : {
				'Content-Type' : 'application/json'
			}
		});

		$.ajax({
			url : url,
			type : 'post',
			data : JSON.stringify(register),
			dataType : 'json',
			success : function(result) {
				$("#mobileNumber").attr("disabled", true);
				$("#firstName").attr("disabled", true);
				$("#lastName").attr("disabled", true);
				$("#birthday").attr("disabled", true);
				$("#birthdayMonth").attr("disabled", true);
				$("#birthdayDay").attr("disabled", true);
				$("#birthdayYear").attr("disabled", true);
				$("#rbGroup").attr("disabled", true);
				$("#rbMale").attr("disabled", true);
				$("#rbFemale").attr("disabled", true);
				$("#email").attr("disabled", true);
				$("#btnRegister").attr("disabled", true);
				$("#divFooter1").hide();
				$("#divFooter2").show();
				$("#error-msg-mobile").addClass("fade");
			}, error : function(XMLHttpRequest, textStatus, errorThrown) {
				$("#error-msg-general").html("Something is wrong please try again later");
				$("#error-msg-general").removeClass("fade");
			}
		});
	}
});
