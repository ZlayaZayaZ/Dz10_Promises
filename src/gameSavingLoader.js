import read from './reader.js';
import json from './parser.js';
import GameSaving from './gameSaving.js';

export default class GameSavingLoader {
  static async load() {
    const result_1 = await read();
    const result_2 = await json(result_1);
    const result_3 = JSON.parse(result_2);
    return new GameSaving(result_3);
  }
}