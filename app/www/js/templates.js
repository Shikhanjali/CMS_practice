this["templates"] = this["templates"] || {};

this["templates"]["contacts"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<tr><td>"
    + alias3(((helper = (helper = helpers.fname || (depth0 != null ? depth0.fname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fname","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias3(((helper = (helper = helpers.phoneNo || (depth0 != null ? depth0.phoneNo : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"phoneNo","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias3(((helper = (helper = helpers.comments || (depth0 != null ? depth0.comments : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"comments","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias3(((helper = (helper = helpers.reason || (depth0 != null ? depth0.reason : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"reason","hash":{},"data":data}) : helper)))
    + "</td></tr>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"table table-bordered\"><tr><th>Name</th><th>Email</th><th>Phone No#</th><th>Comments</th><th>Reason</th></tr>"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.contacts : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</table>";
},"useData":true});

this["templates"]["donation-form"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<form><div><div><label for=\"name\">Name:</label><input type=\"text\" id=\"name\" name=\"name\" value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"></div><div><label for=\"payee\">Address:</label><input type=\"text\" id=\"address\" name=\"address\" value=\""
    + alias3(((helper = (helper = helpers.address || (depth0 != null ? depth0.address : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"address","hash":{},"data":data}) : helper)))
    + "\"></div><div><label for=\"payee\">Amount:</label><input type=\"text\" id=\"amount\" name=\"amount\" value=\""
    + alias3(((helper = (helper = helpers.amount || (depth0 != null ? depth0.amount : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"amount","hash":{},"data":data}) : helper)))
    + "\"></div><div><label for=\"description\">Credit Card #:</label><input type=\"text\" id=\"creditCardNum\" name=\"creditCardNum\" value=\""
    + alias3(((helper = (helper = helpers.creditCardNum || (depth0 != null ? depth0.creditCardNum : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"creditCardNum","hash":{},"data":data}) : helper)))
    + "\"></div><div><label for=\"tax-item\">Card Type:</label><input type=\"text\" id=\"cardType\" name=\"cardType\" value=\""
    + alias3(((helper = (helper = helpers.cardType || (depth0 != null ? depth0.cardType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cardType","hash":{},"data":data}) : helper)))
    + "\"></div><div><label for=\"amount\">Comments:</label><input type=\"text\" id=\"comments\" name=\"amount\" value=\""
    + alias3(((helper = (helper = helpers.comments || (depth0 != null ? depth0.comments : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"comments","hash":{},"data":data}) : helper)))
    + "\"></div><div><button type=\"button\" id=\"save-donation\">Save Donation</button></div></div></form>";
},"useData":true});

this["templates"]["donations"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<tr><td>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td><td>$"
    + alias3(((helper = (helper = helpers.amount || (depth0 != null ? depth0.amount : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"amount","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias3(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"year","hash":{},"data":data}) : helper)))
    + "</td><td>***-"
    + alias3(((helper = (helper = helpers.creditCardNum || (depth0 != null ? depth0.creditCardNum : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"creditCardNum","hash":{},"data":data}) : helper)))
    + "</td></tr>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"table table-bordered\"><tr><th>Names</th><th>Amount</th><th>Date</th><th>Credit card</th></tr>"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.donations : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</table>";
},"useData":true});

this["templates"]["home"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"welcome\">Welcome!!!!! Please Login!</div>";
},"useData":true});

this["templates"]["login-form"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form id=\"form-login\" class=\"form-inline\"><div class=\"form-group\"><label class=\"sr-only\" for=\"login-email-address\">Email address</label><input type=\"email\" class=\"form-control\" id=\"login-email-address\" placeholder=\"Enter email\" value=\"test@gmail.com\"></div><div class=\"form-group\"><label class=\"sr-only\" for=\"login-password\">Password</label><input type=\"password\" class=\"form-control\" id=\"login-password\" placeholder=\"test123\" value=\"test123\"></div><div class=\"checkbox\"><label><input type=\"checkbox\"> Remember me</label></div><button id=\"sign-in\" type=\"button\" class=\"btn btn-default\">Sign in</button></form>";
},"useData":true});

this["templates"]["login-status"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<form id=\"form-status\" class=\"form-inline\"><div class=\"form-group\">Welcome "
    + this.escapeExpression(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"firstName","hash":{},"data":data}) : helper)))
    + "!</div><button id=\"sign-out\" type=\"button\" class=\"btn btn-default\">Sign Out</button></form>";
},"useData":true});

this["templates"]["transaction-form"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<form><div><div><label for=\"account-number\">Account Number:</label><input type=\"text\" id=\"account-number\" name=\"account-number\" value=\""
    + alias3(((helper = (helper = helpers.accountNumber || (depth0 != null ? depth0.accountNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"accountNumber","hash":{},"data":data}) : helper)))
    + "\"></div><div><label for=\"payee\">Payee:</label><input type=\"text\" id=\"payee\" name=\"payee\" value=\""
    + alias3(((helper = (helper = helpers.payee || (depth0 != null ? depth0.payee : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"payee","hash":{},"data":data}) : helper)))
    + "\"></div><div><label for=\"description\">Description:</label><input type=\"text\" id=\"description\" name=\"description\" value=\""
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "\"></div><div><label for=\"tax-item\">Tax Item:</label><input type=\"text\" id=\"tax-item\" name=\"tax-item\" value=\""
    + alias3(((helper = (helper = helpers.taxItem || (depth0 != null ? depth0.taxItem : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"taxItem","hash":{},"data":data}) : helper)))
    + "\"></div><div><label for=\"amount\">Amount:</label><input type=\"text\" id=\"amount\" name=\"amount\" value=\""
    + alias3(((helper = (helper = helpers.amount || (depth0 != null ? depth0.amount : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"amount","hash":{},"data":data}) : helper)))
    + "\"></div><div><button type=\"button\" id=\"save-transaction\">Save Transaction</button> <button type=\"button\" id=\"cancel-transaction\">Cancel Transaction</button></div></div></form>";
},"useData":true});

this["templates"]["transaction"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div><div><label>Account Number:</label>"
    + alias3(((helper = (helper = helpers.accountNumber || (depth0 != null ? depth0.accountNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"accountNumber","hash":{},"data":data}) : helper)))
    + "</div><div><label>Payee:</label>"
    + alias3(((helper = (helper = helpers.payee || (depth0 != null ? depth0.payee : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"payee","hash":{},"data":data}) : helper)))
    + "</div><div><label>Description:</label>"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div><div><label>Tax Item:</label>"
    + alias3(((helper = (helper = helpers.taxItem || (depth0 != null ? depth0.taxItem : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"taxItem","hash":{},"data":data}) : helper)))
    + "</div><div><label>Amount:</label>"
    + alias3(((helper = (helper = helpers.amount || (depth0 != null ? depth0.amount : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"amount","hash":{},"data":data}) : helper)))
    + "</div></div>";
},"useData":true});

this["templates"]["transactions"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<tr><td>"
    + alias3(((helper = (helper = helpers.accountNumber || (depth0 != null ? depth0.accountNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"accountNumber","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias3(((helper = (helper = helpers.payee || (depth0 != null ? depth0.payee : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"payee","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias3(((helper = (helper = helpers.taxItem || (depth0 != null ? depth0.taxItem : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"taxItem","hash":{},"data":data}) : helper)))
    + "</td><td>"
    + alias3(((helper = (helper = helpers.amount || (depth0 != null ? depth0.amount : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"amount","hash":{},"data":data}) : helper)))
    + "</td><td><button data-model-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">View</button></td></tr>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"table table-bordered\"><tr><td>Account #</td><td>Payee</td><td>Description</td><td>Tax Item</td><td>Amount</td><td>Action</td></tr><tbody>"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.transactions : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</tbody></table>";
},"useData":true});