'use strict'
const _ = require('lodash');
const {
	getNodeText,
	getNodeLocation,
	createLocationString,
	NodeError
} = require('./antlr-utils');
const {createExpression} = require('./expression');

function substitute(original, dict) {
	return original.replace(/\b[a-z_][a-z0-9_]*\b/ig,
		id => (id in dict ? dict[id] : id));
}

class Macro {
	constructor(node, unit) {
		this.node = node;
		this.unit = unit;
		const spec = node.spec;
		this.body = getNodeText(node.body);
		this.name = getNodeText(spec.name);
		let args = spec.args;
		this.args = [];
		while (args) {
			this.args.push(getNodeText(args.arg));
			args = args.rest;
		}
	}

	_validateArgs(args) {
		if (args.length != this.args.length) {
			throw new NodeError(
				this.node,
				`Macro "${this.name}" expects ${this.args.length} arguments`
			);
		}
	}

	expand(args) {
		args = args || [];
		return substitute(this.body, _.zipObject(this.args, args));
	}

	evaluate(args, ctx) {
		args = args || [];
		try {
			this.expr = this.expr || createExpression(this.body);
		} catch (err) {
			throw new NodeError(this.node, err.message, err);
		}
		ctx.stack.push(_.zipObject(this.args, args));
		const r = this.expr.evaluate(ctx);
		ctx.stack.pop();
		return r;
	}

	toString() {
		return this.body;
	}
}

module.exports = Macro;
