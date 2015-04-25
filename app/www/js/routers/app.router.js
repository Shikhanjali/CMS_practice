var AppRouter = Backbone.Router.extend({

	routes: {
		"": "home",
		"donations": "showDonations",
		"contacts": "showContacts",
		"donationform": "showDonationForm"
	},

	home: function() {

		// only do this if a new is being created
		//console.dir(this);
		if (this.currentView) {
			this.currentView.undelegateEvents();
		}

		// create a new view
		this.currentView = new HomeView({
			// passing the element passed into the router
			el: this.options.el,
			// give view access to the router to navigate in response to events
			router: this
		});

		// render the new view
		this.currentView.render();
	},

	showDonations: function() {
		console.dir(this);
		var ds = new Donations();
		ds.fetch({
			success: function() {
				var dsView = new DonationsView({
					el: $("#render-content"),
					collection: ds.toJSON()
				});

				dsView.render();
		}});

	},

	showContacts: function() {
		console.dir(this);

		var dc = new Contacts();
		dc.fetch({
			success: function() {
				var dcView = new ContactsView({
					el: $("#render-content"),
					collection: dc.toJSON()
				});

				dcView.render();
		}});
	},

	showDonationForm: function() {
		console.log("in show donation form");
		var df = new DonationForm();
		console.dir(df);

		df.fetch({
			success: function() {
				var dfView = new DonationFormView({
					el: $("#render-content"),
					collection: df.toJSON()
				});

				console.dir(dfView);

				dfView.render();
		}});
	},

	initialize: function(options) {
		this.options = options;
	}

});
