var playlist = [];

function updatePlaylist(playlist, artistName, songTitle)
{
  var songObj = {artistName, songTitle};
  return playlist.unshift(songObj);
}

function removeFromPlaylist(playlist, artistName)
{


}
