'use strict';
module.exports = function(app) {
  var transactions = require('../controllers/transactionController');

  // trasactionsList Routes
  app.route('/trasactions')
    .get(transactions.list_all_trasactions)
    .post(transactions.create_a_trasactions);


  app.route('/trasactions/:trasactionId')
    .get(trasactions.read_a_task)
};
