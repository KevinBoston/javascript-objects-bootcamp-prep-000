var playlist = {
  'songTitle': 'My Bloody Valentine',
  'artistName': 'Phil Ochs'
}
function updatePlaylist (pList, newArtist, newSong){
  pList['artistName'] = newArtist;
  pList['songTitle'] = newSong;
  return pList;
}
function removeFromPlaylist (pList, artistName){
  delete pList['artistName'];
  return pList;
}