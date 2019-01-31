<<<<<<< HEAD
var playlist = {
  acdc: "Back in Black",
  thedoors: "Riders on the Storm",
  thomasrhett: "Die a Happy Man",
  lukebryan: "Huntin' and Fishin' and Lovin'"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
=======
var meals = {};

var meals = new Object();

var meals = {breakfast:"oatmeal"};

var meals = new Object ({breakfast:'oatmeal'})

const firstMeal = 'breakfast'

var meals = { [firstMeal]: 'oatmeal' }

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

const recipe = { eggs: 3 }

destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups')
>>>>>>> 437caa07c22bc659aad323d41abd983293955f3e
