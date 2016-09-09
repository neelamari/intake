var mongoose  = require('mongoose');

var projectSchema = mongoose.Schema({
    name: String,
    funding: String,
    desc: String,
    remedy: String
});

module.exports = mongoose.model('Project',projectSchema);
