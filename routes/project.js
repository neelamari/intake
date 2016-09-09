var _ = require('lodash');
var Project = require('../models/project.js');

module.exports = function(app) {

    /* Create */
    app.post('/project', function (req, res) {
        var newProject = new Project(req.body);
        newProject.save(function(err) {
            if (err) {
                res.json({info: 'error during project create', error: err});
            };
            res.json({info: 'project created successfully'});
        });
    });

    /* Read */
    app.get('/project', function (req, res) {
        Project.find(function(err, projects) {
            if (err) {
                res.json({info: 'error during find projects', error: err});
            };
            res.json({info: 'projects found successfully', data: projects});
        });
    });

    app.get('/project/:id', function (req, res) {
        Project.findById(req.params.id, function(err, project) {
            if (err) {
                res.json({info: 'error during find project', error: err});
            };
            if (project) {
                res.json({info: 'project found successfully', data: project});
            } else {
                res.json({info: 'project not found'});
            }
        });
    });

    /* Update */
    app.put('/project/:id', function (req, res) {
        Project.findById(req.params.id, function(err, project) {
            if (err) {
                res.json({info: 'error during find project', error: err});
            };
            if (project) {
                _.merge(project, req.body);
                project.save(function(err) {
                    if (err) {
                        res.json({info: 'error during project update', error: err});
                    };
                    res.json({info: 'project updated successfully'});
                });
            } else {
                res.json({info: 'project not found'});
            }

        });
    });

    /* Delete */
    app.delete('/project/:id', function (req, res) {
        Project.findByIdAndRemove(req.params.id, function(err) {
            if (err) {
                res.json({info: 'error during remove project', error: err});
            };
            res.json({info: 'project removed successfully'});
        });
    });


};
