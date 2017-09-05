var playlist = {Micheal_Jackson: "Beat It",
                Steely_Dan: "Peg",
                EWF: "September"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = songTitle;
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist
}
