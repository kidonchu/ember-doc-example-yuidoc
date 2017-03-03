import Ember from 'ember';

/**
 * @class Rentals
 * @namespace Controller
 */
export default Ember.Controller.extend({
	actions: {

		/**
		 * Filters listings by city
		 *
		 * @method filterByCity
		 * @param {Object} param List of options to search with
		 * @param {String} param.city City to search for
		 */
		filterByCity(param) {
			let city = param.city;
			if (city !== '') {
				return this.get('store').query('rental', { city: city });
			} else {
				return this.get('store').findAll('rental');
			}
		}
	}
});
