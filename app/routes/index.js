import Ember from 'ember';

/**
 * @class Index
 * @namespace Route
 */
export default Ember.Route.extend({
	/**
	 * @method beforeModel
	 */
	beforeModel() {
		this.replaceWith('rentals');
	}
});
