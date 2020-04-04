var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);


    // Fetch initial batch of messages
    App.startSpinner();
    Parse.readAll((data) => {
      // examine the response from the server request:
      for (var i = data.results.length - 1; i >= 0; i--) {
        Messages.addMessage(data.results[i]);
      }

      App.stopSpinner();
      MessagesView.initialize();
      return Messages.messages;
    });


    FormView.initialize();
    RoomsView.initialize();

  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
