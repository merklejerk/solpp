'use strict'
const _ = require('lodash');
const sv = require('semver');

module.exports = function(semvers) {
	// Only work with unique semvers.
	const uniqueSemvers = _.uniq(semvers)
	if (uniqueSemvers.length == 1)
		return uniqueSemvers[0];
	// Convert semvers to unique ranges.
	const ranges = _.uniq(_.map(uniqueSemvers, v => sv.validRange(v)));
	// Extract version numbers.
	let versions = [];
	for (let range of ranges) {
		const parts = range.split(' ');
		for (let part of parts)
			versions.push(/^[>=<^]*(.+)$/.exec(part)[1].trim());
	}
	// Prune versions that don't satisfy all the ranges.
	for (let range of ranges)
		versions = _.filter(versions, v => sv.satisfies(v, range));
	if (versions.length == 0)
		throw new Error(`Cannot reconcile semvers: ${semvers.join(', ')}`);
	// Return the maximum version left.
	return versions.sort((a,b) => -sv.cmp(a, b))[0];
};
