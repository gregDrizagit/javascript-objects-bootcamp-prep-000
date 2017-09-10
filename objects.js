var playlist = {};

function updatePlaylist(playlist, artistName, songTitle)
{
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName)
{
  if(delete playlist.artistName)
  {
    return playlist;
  }

}
