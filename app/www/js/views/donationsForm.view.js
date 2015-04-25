var DonationFormView = Backbone.View.extend({
	events: {
		"click #save-donation": "rowDonation"
	},
	template: templates["donation-form"],
	render: function() {
		this.$el.html(this.template({
			donations: this.collection
		}));
	},
	initialize: function(options) {
		this.options = options;
	},
	rowDonation: function(e) {
		if (e.target instanceof HTMLButtonElement) {
			console.log("handle donation fired!");
		}
	}
});
