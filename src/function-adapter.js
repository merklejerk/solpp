'use strict'
const _ = require('lodash');

class FunctionAdapter {
	constructor(fnOrMacro) {
		if (_.isFunction(fnOrMacro)) {
			const fn = this.fn = fnOrMacro;
			if (_.isNumber(fn.minArgs))
				this.minArgs = fn.minArgs;
			else
				this.minArgs = fn.length || 0;
			if (_.isNumber(fn.maxArgs))
				this.maxArgs = fn.maxArgs;
			else
				this.maxArgs = fn.length || 0;
		} else if (fnOrMacro.args && (fnOrMacro.evaluate || fnOrMacro.expand)) {
			const macro = this.macro = fnOrMacro;
			this.minArgs = this.maxArgs = macro.args.length;
		} else {
			throw new Error(`"${this.id}" is not a callable macro or function`);
		}
	}

	_validateArgs(args) {
		if (args.length > this.maxArgs || args.length < this.minArgs)
			throw new Error(`Function/Macro requires ` +
				`${this.minArgs}-${this.maxArgs} arguments`);
	}

	expand(args, ctx={}) {
		this._validateArgs(args);
		if (this.fn) {
			if (!_.isFunction(this.fn.expand))
				throw new Error(`Function does not support expansion`);
			return this.fn.expand.apply(ctx, args);
		} else {
			if (!_.isFunction(this.macro.expand))
				throw new Error(`Macro does not support expansion`);
			return this.macro.expand(args);
		}
	}

	evaluate(args, ctx={}) {
		this._validateArgs(args);
		if (this.fn) {
			return this.fn.apply(ctx, args);
		} else {
			if (!_.isFunction(this.macro.evaluate))
				throw new Error(`Macro does not support evaluation`);
			return this.macro.evaluate(args, ctx);
		}
	}
}

module.exports = FunctionAdapter;
