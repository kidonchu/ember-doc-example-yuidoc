import Ember from 'ember';

/**
 * This component implements rental listing
 *
 * @class RentalListing
 * @namespace Component
 */
export default Ember.Component.extend({
	/**
	 * Flag to indicate wide mode. If set to true, the component
	 * will expand the image to its full size
	 *
	 * @property isWide
	 * @type Boolean
	 * @default false
	 */
	isWide: false,

	actions: {
		/**
		 * Toggles image size
		 *
		 * @method toggleImageSize
		 */
		toggleImageSize() {
			this.toggleProperty('isWide');
		}
	}
});
