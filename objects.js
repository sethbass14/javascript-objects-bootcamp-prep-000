var playlist = {Micheal_Jackson: "Beat It",
                Steely_Dan: "Peg",
                EWF: "September"
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  return Object.assign({}, playlist, delete playlist.artistName)
}
