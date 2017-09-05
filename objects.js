var playlist = {Micheal Jackson: "Beat It",
                Steely Dan: "Peg",
                EWF: "September"
}

function updatePlaylist(list, artist, song) {
  list.artist = 'song';
  return list
}

function removeFromPlaylist(list, artist){
  delete list.artist
  return list
}
