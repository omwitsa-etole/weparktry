function rateSettings(){
	const body = document.getElementById("page-content");
	body.innerHTML = `
<div class="content container-fluid" style="margin-top:5%;margin-left:5%;">
<div class="row">
<div class="col-md-8 offset-md-2">

<div class="page-header">
<div class="row">
<div class="col-sm-12">
<h3 class="page-title">Rate Settings</h3>
</div>
</div>
</div>

<form>

<div class="settings-widget">
<div class="h3 card-title with-switch">
Hourly Rate 
<div class="onoffswitch">
<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="switch_hra" checked="">
<label class="onoffswitch-label" for="switch_hra">
<span class="onoffswitch-inner"></span>
<span class="onoffswitch-switch"></span>
</label>
</div>
</div>
<div class="row">
<div class="col-sm-6">
<div class="form-group">
<label>Current (KES)</label>
<input type="text" class="form-control">
</div>
</div>
<div class="col-sm-6">
<div class="form-group">
<label>NEW (KES)</label>
<input class="form-control" type="text">
</div>
</div>
</div>
</div>


<div class="settings-widget">
<div class="h3 card-title with-switch">
Flat Rate
<div class="onoffswitch">
<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="switch_pf" checked="">
<label class="onoffswitch-label" for="switch_pf">
<span class="onoffswitch-inner"></span>
<span class="onoffswitch-switch"></span>
</label>
</div>
</div>
<div class="row">
<div class="col-sm-6">
<div class="form-group">
<label>Current (KES)</label>
<input class="form-control" type="text">
</div>
</div>
<div class="col-sm-6">
<div class="form-group">
<label>NEW (KES)</label>
<input class="form-control" type="text">
</div>
</div>
</div>
</div>


<div class="settings-widget">
<div class="h3 card-title with-switch">
Extended Time
<div class="onoffswitch">
<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="switch_esi">
<label class="onoffswitch-label" for="switch_esi">
<span class="onoffswitch-inner"></span>
<span class="onoffswitch-switch"></span>
</label>
</div>
</div>
<div class="row">
<div class="col-sm-6">
<div class="form-group">
<label>Current (KES)</label>
<input class="form-control" type="text">
</div>
</div>
<div class="col-sm-6">
<div class="form-group">
<label>New (KES)</label>
<input class="form-control" type="text">
</div>
</div>
</div>
</div>

<div class="submit-section">
<button class="btn btn-primary submit-btn" type="submit">Save</button>
</div>

</form>
</div>
</div>
</div>
	`;
}

function paymentPage(){
	const body = document.getElementById("page-content")
	body.innerHTML = `
<div class="content container-fluid" style="margin-top:11%;margin-left:5%;">
<div class="row">
<div class="col-md-8 offset-md-2">

<div class="settings-widget">
<div class="h3 card-title with-switch">
Payment Modes&nbsp; <small class="form-text text-muted">Availabe</small>
<div class="onoffswitch">
<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="switch_tds">
<label class="onoffswitch-label" for="switch_tds">
<span class="onoffswitch-inner"></span>
<span class="onoffswitch-switch"></span>
</label>
</div>
</div>

<div class="flexdisplay" id="paymenttab">

<div class="row row-sm">
<div class="col-sm-4">
<div class="form-group">
 <label>Name *</label>
<input class="form-control" type="text">
</div>
</div>
<div class="col-sm-4">
<div class="form-group">
<label>Account *</label>
<input class="form-control" type="text">
</div>
</div>
<div class="col-sm-2">
<div class="form-group">
<label>Paybill</label>
<input class="form-control" type="text">
</div>
</div>
<div class="col-sm-2">

<label class="d-none d-sm-block">&nbsp;</label>
<button class="btn btn-danger w-100 set-btn form-control" type="button" onclick="deletePayment(this.parentElement.parentElement)"><i class="fa fa-trash-o"></i></button>

</div>
</div>

</div>

<div class="row row-sm">
<div class="col-sm-2 ms-auto">
<div class="form-group">
<button class="btn btn-primary w-100 form-control" type="button" id="addpayment"><i class="fa fa-plus"></i></button>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
	`;
	
	$("#addpayment").click(()=>{
		document.getElementById("paymenttab").innerHTML += `
			<div class="row row-sm" >
			<div class="col-sm-4">
			<div class="form-group">
			 <label>Name *</label>
			<input class="form-control" type="text">
			</div>
			</div>
			<div class="col-sm-4">
			<div class="form-group">
			<label>Account *</label>
			<input class="form-control" type="text">
			</div>
			</div>
			<div class="col-sm-2">
			<div class="form-group">
			<label>Paybill </label>
			<input class="form-control" type="text">
			</div>
			</div>
			<div class="col-sm-2">
			
			<label class="d-none d-sm-block">&nbsp;</label>
			<button class="btn btn-danger w-100 set-btn form-control" type="button" onclick="deletePayment(this.parentElement.parentElement)"><i class="fa fa-trash-o"></i></button>
			
			</div>
			</div>
		`;
	})
}
function deletePayment(el){
	el.remove()
}