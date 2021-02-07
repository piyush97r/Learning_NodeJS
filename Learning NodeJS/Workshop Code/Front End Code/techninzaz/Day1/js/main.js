function login(){
	var loginData = new Object();
	loginData.uname = document.getElementById('userName').value;
	loginData.pwd = document.getElementById('userPwd').value;
	console.log(loginData);
}

function getdata(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
			console.log('-------------------------');
			var data = JSON.parse(this.responseText);
			var tableData = '';
			for(var i=0;i<data.length;i++){
				tableData += '<tr class="odd"><td>08CQSB3006</td><td>Ankan M</td><td>04-11-1990</td><td>MCA</td><td>6th SEM</td><td>9916096639</td><td>ankan@techninzaz.com</td></tr>';
			}
		}
    };
	xhttp.open('GET','https://api.myjson.com/bins/s6sop',true);
	xhttp.send();
}

function signUp(){
	var signUpData = new Object();

	signUpData.name = document.getElementById('fullName').value;
	signUpData.mail = document.getElementById('Email').value;
	signUpData.mob = document.getElementById('mobile').value;
	signUpData.passwd = document.getElementById('userPassword').value;
	signUpData.repasswd = document.getElementById('repeatPassword').value;
	
	console.log(signUpData);
}

function insertNewRecord(){
	var newRecord = new Object();

	var e = document.getElementById('department');
	newRecord.dept = e.options[e.selectedIndex].value;

	var f = document.getElementById('year');
	newRecord.year = f.options[f.selectedIndex].value;

	newRecord.usn = document.getElementById('usn').value;
	newRecord.studentname = document.getElementById('uname').value;
	newRecord.studentdob = document.getElementById('dob').value;
	newRecord.studentmobile = document.getElementById('mobile').value;
	newRecord.studentemail = document.getElementById('email').value;

	console.log(newRecord);

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {

		}
    };
	xhttp.open('POST','http://localhost:3000/addstudentdetails',true);
	xhttp.setRequestHeader("Content-Type", "application/json");
	xhttp.send(JSON.stringify(newRecord));
}

function resetForm(){
	document.getElementById('formBlock').reset();
}