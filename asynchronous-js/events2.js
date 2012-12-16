function Event () {
  this._events = {};
}

Event.prototype.on = function (name, cb) {
  var list = this._events[name] || (this._events[name] = []);
  list.push(cb);
  return this;
};

Event.prototype.off = function (name) {
  this._events[name] = [];
  return this;
};

Event.prototype.trigger = function(name) {
  var args = Array.prototype.slice.call(arguments, 1);
  var list, i;
  if(name === 'all') {
    for(var key in this._events) {
      if(this._events.hasOwnProperty(key)) {
        list = this._events[key];
        console.log(list);
        for (i = 0, l = list.length;i<l; i += 1) {
          list[i].apply(this, args);
        }
      }
    }
  } else {
    list = this._events[name] || (this._events[name] = []);
    for (i = 0, l = list.length;i<l; i += 1) {
      list[i].apply(this, args);
    }
  }
  return this;
};

module.exports = Event;
