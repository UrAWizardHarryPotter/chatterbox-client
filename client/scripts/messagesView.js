var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.render();
  },

  render: function() {
    for(var i = 0; i < Messages.messages.length; i++) {
      var message = Messages.getMessage(i)
      if(message.username === undefined || message.text === undefined) continue;
      $('#chats').prepend(MessageView.render(Messages.getMessage(i)));
    }
  }

};
