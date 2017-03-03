import DS from 'ember-data';

/**
 * @class Rental
 * @namespace Model
 */
export default DS.Model.extend({
	/**
	 * @attribute title
	 * @type String
	 */
	title: DS.attr(),
	/**
	* @attribute owner
	* @type String
	*/
	owner: DS.attr(),
	/**
	* @attribute city
	* @type String
	*/
	city: DS.attr(),
	/**
	* @attribute type
	* @type String
	*/
	type: DS.attr(),
	/**
	* @attribute image
	* @type String
	*/
	image: DS.attr(),
	/**
	* @attribute bedrooms
	* @type Integer
	*/
	bedrooms: DS.attr(),
	/**
	* @attribute description
	* @type String
	*/
	description: DS.attr()
});
