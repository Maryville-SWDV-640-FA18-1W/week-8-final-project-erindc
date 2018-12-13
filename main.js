
var alert = `<div class="alert alert-success halfWidth mt-2" role="alert" id="alert">{{message}}</div>`;

function saveBill() { 
	document.getElementById('annualIncome').innerHTML = null;
	document.getElementById('billsForm').reset();
    var html = Mustache.render(alert, {message: "Bill saved"})
    $('#saveBillAlert').html(html);
	setTimeout(function() {
		$('#saveBillAlert').html(null);;
	}, 2000);
}

function goBack() {
    window.history.back();
}

function submitContactForm() {
	var html = Mustache.render(alert, {message: "Thank you for your feedback, we will be in touch"})
	$('#contactPage').html(html);
}

function submitAccountForm() {
	var html = Mustache.render(alert, {message: "Changes saved"})
	$('#accountAlert').html(html);
	setTimeout(function() {
		$('#accountAlert').html(null);;
	}, 2000);
}