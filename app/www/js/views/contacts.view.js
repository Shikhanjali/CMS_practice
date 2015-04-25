var ContactsView = Backbone.View.extend({

	template: templates["contacts"],
	render: function() {
		this.$el.html(this.template({
			contacts: this.collection
		}));
	},
	initialize: function(options) {
		this.options = options;
	}

});
