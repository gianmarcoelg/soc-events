({
	onDeleteClick : function(cmp, event, helper) {
		var evt = cmp.getEvent('registrationDelete');
		evt.setParams({
			'sessionRegistrationId' : cmp.get('v.session').record.Id
		});
		evt.fire();
	}
})