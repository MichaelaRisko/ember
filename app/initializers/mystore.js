export function initialize( application) {
   application.inject('route', 'mystore', 'service:mystore');
}

export default {
  name: 'mystore',
  initialize
 };
