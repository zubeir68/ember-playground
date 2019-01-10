import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.get('store').createRecord('address');
    },

    actions: {
        save(record) {
            record.save().then(() => this.transitionTo('addresses'));
        }
    }
});
