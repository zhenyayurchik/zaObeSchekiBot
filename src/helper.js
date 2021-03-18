module.exports = {
  debug(obj = {}) {
    return JSON.stringify(obj, null, 4);
  },

  getChatId(msg) {
    return msg.chat.id;
  },

  getItemUuid(source) {
    return source.substr(2, source.length);
  },
};
