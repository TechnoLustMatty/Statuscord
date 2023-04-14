easier to read
const
  rpcGenerator = require("discordrpcgenerator"),

  // Add your client id in the index.js file
  IMAGE = "The name of the image",
  SONG = "The name of the song",
  ARTIST = "The artist of the song"
  URL = "The URL of song ig"; // Credits to BCM for this single line of code

module.exports = (client, CLIENT_ID) => rpcGenerator.getRpcImage(CLIENT_ID, IMAGE)
  .then(image => client.user.setPresence(
    rpcGenerator.createSpotifyRpc(client)
      .setApplicationId(CLIENT_ID)
      .setAssetsLargeImage(image.id)
      .setDetails(SONG)
      .setState(ARTIST)
      .setUrl(URL) // And this too ;)
      .toDiscord()
  )); 
