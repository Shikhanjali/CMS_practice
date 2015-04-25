var DonationsView = Backbone.View.extend({

	/*render: function() {
		this.$el.html(templates["donations"]())
	},

	initialize: function(options) {
		this.options = options;
	}*/

	template: templates["donations"],
	render: function() {
		this.$el.html(this.template({
			donations: this.collection
		}));
	},
	initialize: function(options) {
		this.options = options;
	}

});
