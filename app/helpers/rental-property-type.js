import Ember from 'ember';

/**
 * @class RentalPropertyType
 * @namespace Helper
 */

/**
 * List of property types that are considered "Community"
 *
 * @property communityPropertyTypes
 * @final
 * @type String[]
 */
const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

/**
 * Returns rental's property type
 *
 * If `type` is one of
 * {{#crossLink "Helper.RentalPropertyType/communityPropertyTypes:property"}}
 * {{/crossLink}}, it returns "Community". Otherwise, returns "Standalone".
 *
 * @method rentalPropertyType
 * @param {String} [type] Type of rental property
 * @return {String} Type of rental property
 */
export function rentalPropertyType([type]) {
  if (communityPropertyTypes.contains(type)) {
    return 'Community';
  }
  return 'Standalone';
}

export default Ember.Helper.helper(rentalPropertyType);
