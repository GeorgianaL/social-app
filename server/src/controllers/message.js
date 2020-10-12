const notify = require("../notify");

const addMessage = async (req, res) => {
  const { name, message } = req.body;
  const columns = "name, message";
  const values = `'${name}', '${message}'`;
  try {
    const data = await messagesModel.insertWithReturn(columns, values);
    const tokens = [];
    const notificationData = {
      title: "New message",
      body: message,
    };

    //Once a message is successfully created, a notification is sent out by
    // the sendNotificationToClient function followed by the response to the client
    notify.sendNotificationToClient(tokens, notificationData);
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

module.exports = {
  addMessage,
};
