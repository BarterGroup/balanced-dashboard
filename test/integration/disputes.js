module('Disputes', {
	setup: function() {
		Testing.setupMarketplace();
		Testing.createDebit();
	},
	teardown: function() {}
});

test('can visit page', function(assert) {
	visit(Testing.DISPUTE_ROUTE).then(function() {
		assert.notEqual($('#content h1').text().indexOf('Debit'), -1, 'Title is not correct');
		assert.equal($(".debit .transaction-description").text().trim(), 'Succeeded: $100.00');
	});
});
