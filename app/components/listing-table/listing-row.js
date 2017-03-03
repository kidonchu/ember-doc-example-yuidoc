import Ember from 'ember';

/**
 * This component implements list-filter
 *
 * @class ListingRow
 * @namespace Component.ListingTable
 */
export default Ember.Component.extend({
	classNames: ['list-filter'],
	value: '',

	/**
	 * Initializes the listings
	 *
	 * @method init
	 * @return {undefined}
	 */
	init() {
		this._super(...arguments);
		this.get('filter')('').then((allResults) => this.set('results', allResults));
	},

	actions: {
		/**
		 * Runs filter on listings
		 *
		 * @method handleFilterEntry
		 * @return {undefined}
		 */
		handleFilterEntry() {
			let filterInputValue = this.get('value');
			let filterAction = this.get('filter');
			filterAction(filterInputValue).then((filteredResults) => this.set('results', filteredResults));
		}
	}

});
