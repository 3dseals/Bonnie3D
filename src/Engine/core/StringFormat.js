(function ($) {

    class StringFormat {

        constructor(string, ...args) {

            let _args = args;
            let _explicit = false;
            let _idx = 0;
            let _implicit = false;
            let _template = string;
            if(!_template || typeof _template != "string") {
                this._string = JSON.stringify(_template);
            }else {
                this._string = (_template.replace(/([{}])\1|[{](.*?)(?:!(.+?))?[}]/g, function(match, literal, key, transformer) {
                    let value, _ref, _ref1;
                    if (literal) {
                        return literal;
                    }
                    if (key.length) {
                        if (_implicit) {
                            let __hasProp = {}.hasOwnProperty;
                            let __extends = function(child, parent) { for (let key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

                            let ValueError = (function(_super) {
                                __extends(ValueError, _super);

                                this.message = 'cannot switch from {} to {} numbering';
                                function ValueError(message) {
                                    this.message = message;
                                }

                                ValueError.prototype.name = 'ValueError';

                                return ValueError;

                            })(Error);
                            throw new ValueError('cannot switch from implicit to explicit numbering');
                        }
                        _explicit = true;

                        let _resolve = function(object, key) {
                            let value;
                            if(object){
                                value = object[key];
                            }
                            if (typeof value === 'function') {
                                return value.call(object);
                            } else {
                                return value;
                            }
                        };

                        let _lookup = function(object, key) {
                            let match;
                            if (!/^(\d+)([.]|$)/.test(key)) {
                                key = '0.' + key;
                            }
                            while (match = /(.+?)[.](.+)/.exec(key)) {
                                object = _resolve(object, match[1]);
                                key = match[2];
                            }
                            return _resolve(object, key);
                        };

                        value = (_ref = _lookup(_args, key)) != null ? _ref : '';
                    } else {
                        if (_explicit) {
                            let __hasProp = {}.hasOwnProperty;
                            let __extends = function(child, parent) { for (let key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

                            let ValueError = (function(_super) {
                                __extends(ValueError, _super);

                                this.message = 'cannot switch from {} to {} numbering';
                                function ValueError(message) {
                                    this.message = message;
                                }

                                ValueError.prototype.name = 'ValueError';

                                return ValueError;

                            })(Error);
                            throw new ValueError('cannot switch from explicit to implicit numbering');
                        }
                        _implicit = true;
                        value = (_ref1 = _args[_idx++]) != null ? _ref1 : '';
                    }
                    return value;
                }));
            }

        }

        toString() {

            return this._string;

        }
    }

    Bonnie3D.StringFormat = StringFormat;

}(this));