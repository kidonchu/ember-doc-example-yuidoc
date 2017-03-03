import Ember from 'ember';

const google = window.google;

/**
 * @class GoogleMaps
 * @namespace Util
 */
export default Ember.Object.extend({

	/**
	 * @method init
	 */
	init() {
		this.set('geocoder', new google.maps.Geocoder());
	},

	/**
	 * Creates a map with pinned location
	 *
	 * @method createMap
	 * @param {Element} element Map element
	 * @param {String} location Name of location to pinpoint
	 */
	createMap(element, location) {
		let map = new google.maps.Map(element, { scrollwheel: false, zoom: 10 });
		this.pinLocation(location, map);
		return map;
	},

	/**
	 * Pins the location in the map element
	 *
	 * @method pinLocation
	 * @param {String} location
	 * @param {Object} map
	 */
	pinLocation(location, map) {
		this.get('geocoder').geocode({address: location}, (result, status) => {
			if (status === google.maps.GeocoderStatus.OK) {
				let coordinates = result[0].geometry.location;
				let position = { lat: coordinates.lat(), lng: coordinates.lng() };
				map.setCenter(position);
				new google.maps.Marker({ position, map, title: location });
			}
		});
	}

});

