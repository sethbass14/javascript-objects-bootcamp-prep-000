var playlist = {Micheal Jackson: "Beat It",
                Steely Dan: "Peg",
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
