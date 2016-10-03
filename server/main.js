import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  console.log("Meteor app listening on " + Meteor.absoluteUrl() + ", port " + process.env.PORT)
});
