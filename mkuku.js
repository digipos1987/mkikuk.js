function start() {
	document.head.innerHTML += "<title>Made By PINARAX</title>";
	document.head.innerHTML += "<link rel='icon' href='https://pinarax.group/favicon.ico' type='image/gif' sizes='16x16'>";
	document.head.innerHTML += "<link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet'>";
	document.head.innerHTML += "<script src='https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js' type='text/javascript'></script>";
	document.head.innerHTML += "<script src='https://code.jquery.com/jquery-latest.min.js' type='text/javascript'></script>";
	document.head.innerHTML += "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>";
	document.body.innerHTML += "<div class='container-fluid' style='width: 665px; padding-top: 50px;'><div class='panel panel-default'><div class='panel-heading' style='text-align: left;'><span class='btn btn-default btn-xs' id='pcreate' onclick='create()' style='width: 150px;'><b>Create Email</b></span><span class='btn btn-danger btn-xs' onclick='reset()' style='width: 150px; float: right;'><b>Reset</b></span></div><div class='panel-body' id='wadaeemail' style='display: none;'>";
}

function reset() {
	document.getElementById("wadaeemail").innerHTML = "";
	document.getElementById("wadaeemail").setAttribute("style", "display: none;");
	for (var intervalcek = 1; intervalcek < 99999; intervalcek++) {
		window['clearInterval'](intervalcek);
	}
}

function create() {
	document.getElementById("wadaeemail").setAttribute("style", "");
	document.getElementById("pcreate").setAttribute("disabled", "");
	var cmail = "https://m.kuku.lu/index.php?";
	$.get(cmail, {
		"action": "addMailAddrByOnetime",
		"nopost": "1",
		"by_system": "1",
		"UID_enc": "MAmZjUzbW%2F5%2FmTtuAIIFHuKI1VXFBNN53JgzH%2BVuqqTAdH96TI%2FMTo4GWko3pNyN",
		"csrf_token_check": "4748e4189dad43b7d22e320a19ed9437&csrf_subtoken_check=22e98cfb013fc1b87afd4c93c79d77ca",
		"csrf_subtoken_check": "03AGdBq25pzHghIwRsC5EeN86agCNFlPuqcZKq1od2CroRIhIRgeafKZ7uyoiySRUklgQYIeKja5zJQ55AAsBI30l6w-b9-lsDnKiUxrKKCrtmMVL2VzGmcB6SNXSkxDAtOgnJaYS3aqa7kutDE1JBM-6kGJlFZIoDJ5QuxuJkey6OAMDZWni9PWvJnnyyH3n9f65qa_FNAWMaOUh01fdZ0coLmkb95SqIuCoj0682kIVM6W-kV0FvxGLzTTgVSvQKzM005_poiHdwFHUzdrq0o6aSbh0xZMCA7CBt20E0jcXuxIoINOEuqCwX5DcnFcfuhCdRH5rNHn3dZt1yjGWAt9_i0JSgRyIIo4dDpmiepBWT0FwJKs9R7ofHHVtBaI2XMezcHHIAk0wk-1qp0lO1V1gASAZxUYCLWmBglqdyCs3mtIOTqmQwnQPEIhTu1-cNE35L232zOTXd"



	}, function(response) {
		$('#pcreate').removeAttr('disabled');
		var email = response.split("OK:")[1];
		$("<div class='input-group'><input type='text' class='form-control input-sm' onclick='this.select()' value='"+email+"' readonly style='width: 300px;'><input type='text' class='form-control input-sm' id='kode-"+email+"' value='Waiting...' onclick='this.select()' style='width: 300px;' readonly></div>").prependTo($('#wadaeemail')).slideDown(1000);
		checkcode(''+email+'');
	});
}

function checkcode(imel) {
	var intervalcek = setInterval(function() {
		var boxmail = "https://m.kuku.lu/recv._ajax.php?";
		$.get(boxmail, {
			"q": imel,
			"nopost": "1"
		}, function(response) {
			var aa = response.split('mailnumlist = "')[1];
			var bb = aa.split('";')[0];
			if(bb === "" || bb === null) {} else {
				var cc = response.split('<span style="overflow-wrap: break-word;word-break: break-all;">')[1];
				var dd = cc.split(' ')[0];
				document.getElementById('kode-'+imel).value = dd;
				clearInterval(intervalcek);
				var audio = new Audio('https://www.facebook.com/rsrc.php/yO/r/kTasEyE42gs.ogg');
				audio.play();
			}
		});
	}, 2000);
}
