'use strict'
const _ = require('lodash');
const {getNodeText} = require('./antlr-utils');

function substitute(original, dict) {
	return original.replace(/\b[a-z_][a-z0-9_]*\b/ig,
		id => (id in dict ? dict[id] : id));
}

class Lambda {
	constructor(args, expr) {
		this.args = args;
		this.expr = expr;
	}

	_validateArgs(args) {
		if (args.length != this.args.length) {
			throw new Error(
				`Anonymous function expects ${this.args.length} arguments`);
		}
	}

	expand(args, ctx) {
		args = args || [];
		return substitute(this.expr.toString(), _.zipObject(this.args, args));
	}

	evaluate(args, ctx) {
		args = args || [];
		ctx.stack.push(_.zipObject(this.args, args));
		const r = this.expr.evaluate(ctx);
		ctx.stack.pop();
		return r;
	}

	toString() {
		return this.expr.toString();
	}
}

module.exports = Lambda;
