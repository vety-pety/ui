import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').find('subscription-plan', params.subscriptionId);
  },

  willTrasition() {
    this.get('controller.user').destroyRecord();
    this.set('_currentStep', 0);
    this.set('controller.selectedSubscriptionPlan', null);
  },
});
