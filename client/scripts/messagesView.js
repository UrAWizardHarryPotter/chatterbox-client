var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.render();
  },

  render: function() {
    debugger;
    for(var i = 0; i < Messages.messages.length; i++) {
      $('#chats').prepend(MessageView.render(Messages.getMessage(i)));
    }
  }

};