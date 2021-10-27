var feature = (function() {
  var privateThing = "secret"
  var publicThing = "not secret"
  var changePrivateThing = function() {
    privateThing = "super secret"
  }

  var sayPrivateThing = function() {
    console.log(privateThing)
    changePrivateThing()
  }

  return {
    publicThing: publicThing,
    sayPrivateThing: sayPrivateThing,
  }
}) ()

feature.publicThing

feature.sayPrivateThing()
