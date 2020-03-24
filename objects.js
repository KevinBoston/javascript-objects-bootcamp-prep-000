var playlist = {
  'artistName': 'songTitle'
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