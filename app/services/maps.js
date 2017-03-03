import Ember from 'ember';
import MapUtil from '../utils/google-maps';

/**
 * @class Maps
 * @namespace Service
 * @uses Util.GoogleMaps
 */
export default Ember.Service.extend({

	/**
	 * @method init
	 */
	init() {
		if (!this.get('cachedMaps')) {
			this.set('cachedMaps', Ember.Object.create());
		}
		if (!this.get('mapUtil')) {
			this.set('mapUtil', MapUtil.create());
		}
	},

	/**
	 * Fetches a map element
	 *
	 * @method getMapElement
	 * @param {String} location
	 * @return {Element}
	 */
	getMapElement(location) {
		let camelizedLocation = location.camelize();
		let element = this.get(`cachedMaps.${camelizedLocation}`);
		if (!element) {
			element = this.createMapElement();
			this.get('mapUtil').createMap(element, location);
			this.set(`cachedMaps.${camelizedLocation}`, element);
		}
		return element;
	},

	/**
	 * Creates a div element with *map* as class name
	 *
	 * @method createMapElement
	 * @return {Element}
	 */
	createMapElement() {
		let element = document.createElement('div');
		element.className = 'map';
		return element;
	}
});
