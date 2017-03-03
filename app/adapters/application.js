import DS from 'ember-data';

/**
 * Application Adapter
 *
 * @class Application
 * @extends DS.JSONAPIAdapter
 * @namespace Adapter
 */
export default DS.JSONAPIAdapter.extend({
  namespace: 'api'
});
