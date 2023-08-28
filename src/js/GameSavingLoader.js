import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    try {
      return new GameSaving(JSON.parse(await json(await read())));
    } catch (err) {
      return err;
    }
  }
}
