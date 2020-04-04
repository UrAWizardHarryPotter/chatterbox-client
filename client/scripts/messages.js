var Messages = {
  messages: [],

  addMessage: function(value) {
    Messages.messages.push(value);
  },

  getMessage: function(index) {
    return Messages.messages[index];
  },

  size: function() {
    return Messages.messages.length;
  }
};
