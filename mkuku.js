function start() {
	document.head.innerHTML += "<title>Made By PINARAX</title>";
	document.head.innerHTML += "<link rel='icon' href='https://pinarax.group/favicon.ico' type='image/gif' sizes='16x16'>";
	document.head.innerHTML += "<link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet'>";
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
		"action": "addMailAddrByAuto",
		"nopost": "1",
		"by_system": "1",
		"UID_enc": "wkbynVoskWQ5jpFYw1W9C0T2l7XPGB%2BmBUBhiwqJukmyyXRrSy2vNwRalCbhfQiH",
		"csrf_token_check": "d68ba26270c1b52bae7b2d911fe8300f",
		"csrf_subtoken_check": "a3d288acf2f8b10f1675a3d877d69b2d"



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