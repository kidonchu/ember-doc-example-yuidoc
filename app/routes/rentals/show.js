import Ember from 'ember';

/**
 * @class Show
 * @namespace Route.Rentals
 */
export default Ember.Route.extend({
	/**
	 * Returns the {{#crossLink "Model.Rental"}}{{/crossLink}} to show
	 *
	 * @method model
	 * @param {mixed} params
	 * @return {Model.Rental}
	 */
	model(params) {
		return this.get('store').findRecord('rental', params.rental_id);
	}
});
