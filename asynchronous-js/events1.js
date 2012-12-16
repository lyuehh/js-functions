/**
 * event 1
 */

function Event () {
  this._events = {};
}

Event.prototype.on = function (name, cb) {
  this._events[name] = cb;
  return this;
};

Event.prototype.off = function (name) {
  this._events[name] = null;
  return this;
};

Event.prototype.trigger = function(name) {
  var args = Array.prototype.slice.call(arguments, 1);
  this._events[name].apply(this, args);
  return this;
};

module.exports = Event;
