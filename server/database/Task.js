var mysql = require('./databaseConnector');

var Task = {
  getDevices: function(callback) {
    return mysql.query('Select * from devices',callback);
  },

  getCountries: function(callback) {
    return mysql.query('Select distinct country from testers',callback);
  },

  getTesters: function(params, callback) {
    // var query = "select t.*, c.count from testers t, (select pt.testerId, count(b.bugId) as count from (select * from bugs where deviceId in (1,3,4,5)) b " +
    //   "right join (select distinct testerId from tester_device where deviceId in (1, 3,4,5) and testerId in (select testerId from testers where country in ('US', 'GB'))) pt " +
    //   "on pt.testerId = b.testerId group by pt.testerId) c " +
    //   "where c.testerId = t.testerId order by c.count desc;";

    var query = "select t.*, c.count from testers t, (select pt.testerId, count(b.bugId) as count from (select * from bugs where deviceId in (?)) b " +
      "right join (select distinct testerId from tester_device where deviceId in (?) and testerId in (select testerId from testers where country in (?))) pt " +
      "on pt.testerId = b.testerId group by pt.testerId) c " +
      "where c.testerId = t.testerId order by c.count desc;";
    return mysql.query(query, params, callback);

  }
}

module.exports = Task;
