import Ember from 'ember';

/**
 * @class Index
 * @namespace Route.Rentals
 */
export default Ember.Route.extend({
	/**
	 * Returns the {{#crossLink "Model.Rental"}}{{/crossLink}}s to show
	 *
	 * @method model
	 * @param {mixed} params
	 * @return {Array} All {{#crossLink "Model.Rental"}}{{/crossLink}}s
	 */
	model() {
		return this.get('store').findAll('rental');
	}
});
