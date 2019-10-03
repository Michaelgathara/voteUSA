<<<<<<< HEAD
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
=======
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
>>>>>>> 70a97049986ca99b6538f4e3caa4ce2369d69b44
};
