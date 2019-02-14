'use strict'
const _ = require('lodash');

class FunctionAdapter {
	constructor(fn) {
		if (!_.isFunction(fn))
			throw new Error(`Not a function: ${fn}`);
		this.fn = fn;
		if (_.isNumber(fn.minArgs))
			this.minArgs = fn.minArgs;
		else
			this.minArgs = fn.length || 0;
		if (_.isNumber(fn.maxArgs))
			this.maxArgs = fn.maxArgs;
		else
			this.maxArgs = fn.length || 0;
	}

	_validateArgs(args) {
		if (args.length > this.maxArgs || args.length < this.minArgs)
			throw new Error(`Function "${this.toString()}" requires ` +
				`${this.minArgs}-${this.maxArgs} arguments`);
	}

	expand(args, ctx) {
		this._validateArgs(args);
		if (!_.isFunction(this.fn.expand))
			throw new Error(`Function does not support expansion`);
		return this.fn.expand.apply(ctx, args);
	}

	evaluate(args, ctx) {
		this._validateArgs(args);
		return this.fn.apply(ctx, args);
	}

	toString() {
		return this.fn.builtinName || this.fn.name || '<Function>';
	}
}

module.exports = FunctionAdapter;
