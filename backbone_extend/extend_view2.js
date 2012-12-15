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
    events: {
        'click p': 'p1',
        'change #a': 'change',
        'click #s': 'click'
    },
    initialize: function () {
        P.prototype.initialize.apply(this);
    },
    p: function (e) {
        alert('clicked the p in child');
    },
    p1: function () {
        alert('in child and in p1..')
    }
});
var c1 = new C({el: '#child'});