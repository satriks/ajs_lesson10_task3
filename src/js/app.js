import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    await console.log(GameSavingLoader.load());
  } catch (err) {
    console.log(err);
  }
})();
