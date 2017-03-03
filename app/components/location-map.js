import Ember from 'ember';

/**
 * This component implements location-map
 *
 * @class LocationMap
 * @namespace Component
 */
export default Ember.Component.extend({
	maps: Ember.inject.service(),

	/**
	 * Fetches map from `maps` service and appends it
	 * to the map container
	 *
	 * @method didInsertElement
	 */
	didInsertElement() {
		this._super(...arguments);
		let location = this.get('location');
		let mapElement = this.get('maps').getMapElement(location);
		this.$('.map-container').append(mapElement);
	}
});
