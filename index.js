"use strict";
const express = require("express");
const config = require("./config.json");
const line = require("@line/bot-sdk");
const {
  handleText,
  handleImage,
  handleVideo,
  handlfile,
  handleAudio,
  handleLocation,
  handleSticker,
} = require('./sendmessage')
// create LINE SDK client

const app = express();

// webhook callback
app.post("/webhook", line.middleware(config), (req, res) => {
  // req.body.events should be an array of events
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end();
  }
  // handle events separately
  Promise.all(
    req.body.events.map((event) => {
      // check verify webhook event
      if (event.replyToken === "0" || event.replyToken === "f") {
        return;
      }
      return handleEvent(event);
    })
  )
    .then(() => res.end())
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

// simple reply function


// callback function to handle a single event
function handleEvent(event) {
  switch (event.type) {
    case "message":
      const message = event.message;
      console.log({text:message.type});
      switch (message.type) {
        case "text":
          return handleText(message, event.replyToken);
        case "image":
          return handleImage(message, event.replyToken);
        case "video":
          return handleVideo(message, event.replyToken);
        case "audio":
          return handleAudio(message, event.replyToken);
        case "location":
          return handleLocation(message, event.replyToken);
        case "sticker":
          return handleSticker(message, event.replyToken);
        case "file":
          return handlfile(message, event.replyToken);
        default:
          throw new Error(`Unknown message: ${JSON.stringify(message)}`);
      }

    case "follow":
      return replyText(event.replyToken, "Got followed event");

    case "unfollow":
      return console.log(`Unfollowed this bot: ${JSON.stringify(event)}`);

    case "join":
      return replyText(event.replyToken, `Joined ${event.source.type}`);

    case "leave":
      return console.log(`Left: ${JSON.stringify(event)}`);

    case "postback":
      let data = event.postback.data;
      return replyText(event.replyToken, `Got postback: ${data}`);

    case "beacon":
      const dm = `${Buffer.from(event.beacon.dm || "", "hex").toString(
        "utf8"
      )}`;
      return replyText(
        event.replyToken,
        `${event.beacon.type} beacon hwid : ${event.beacon.hwid} with device message = ${dm}`
      );

    default:
      throw new Error(`Unknown event: ${JSON.stringify(event)}`);
  }
}

const port = config.port;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}...`);
});

