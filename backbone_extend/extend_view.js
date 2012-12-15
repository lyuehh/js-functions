var P = Backbone.View.extend({
    events: {
        'click p': 'p',
        'change #a': 'change',
        'click #s': 'click'
    },
    p: function (e) {
        alert('clicked the p');
    },
    change: function (e) {
    	var $el = $(e.target);
    	console.log($el.val());
    },
    click: function () {
        alert('click in p..');
    }
});

var p1 = new P({el: '#parent'});

var C = P.extend({
    initialize: function () {
        P.prototype.initialize.apply(this);
    },
    p: function (e) {
        alert('clicked the p in child');
    }
});
var c1 = new C({el: '#child'});