const _ = require('lodash');
const bn = require('bn-str-256');

module.exports = _.mapValues(bn, v => {
	if (_.isFunction(v)) {
		return (...args) => {
			for (arg of args) {
				if (_.isString(arg) && arg.literal)
					throw new Error(`Attempting math on string literal "${arg}"`);
			}
			return v(...args);
		}
	}
});
