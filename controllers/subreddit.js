const Subreddit = require("../models/subreddit");
const Post = require("../models/post");
const Profile = require("../models/profile");


// Create Form

exports.create = function (req, res) {
    let karma = 0
    let info = []
    let state = false
    let isAuth = req.session.user

    res.render('./subreddit/subreddit_post', {
        info,
        karma,
        state,
        isAuth
    })
}

// Create Store

exports.store = function (req, res) {

    Subreddit.create({
        subject: req.body.subject,
        description: req.body.description,
        account_id: req.session.passport.user
    }, function (err, subreddit) {
        if (err) return handleError(err);
        // saved!
    });


}

// Read - Show

exports.show = function (req, res) {

    console.log('show')

    let posts = undefined

    Subreddit.findOne({
        subject: req.params.subreddit
    }, function (err, subreddit) {
        if (err) return handleError(err);
        console.log(subreddit)

        // Posts.find({

        // })


        res.render('./subreddit/subreddit_post', {
            subreddit,
            posts,
        })
    });

}

// Edit Form

exports.edit = function (req, res) {

}

// Update

exports.update = function (req, res) {

}

// Delete

exports.destroy = function (req, res) {

}