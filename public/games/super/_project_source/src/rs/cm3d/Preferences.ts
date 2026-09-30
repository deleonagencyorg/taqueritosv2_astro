
import GameConfig from "./GameConfig";

/**
 * @author raizensoft
 * The Preferences class save app settings and retrieve them later in the game
 */
export default class Preferences {

  dataString:string | null;
  config:GameConfig;
  data:{name:string, unlocked:number[], bestScore:number};

  constructor(config:GameConfig, dataString:string|null) {

    this.dataString = dataString;
    this.config = config;
    this.init(dataString);
  }

  private init(dataString:string | null) {

    if (dataString == null) {
      this.data = {
        name:'CryptoMan',
        bestScore:0,
        unlocked:[]
      };
      const lvl = this.config.data.levels;
      for (let k = 0; k < lvl.length; k++) {
        this.data.unlocked[k] = 0;
      }
      this.save();
    }
    else {
      this.data = JSON.parse(dataString);
    }
  }

  /**
   * Save new data to local storage
   */
  save() {
    if (this.data != null)
      localStorage.setItem("CryptoMan", JSON.stringify(this.data));
  }

  /**
   * Save best score
   */
  saveBestScore(score:number) {

    if (score > this.data.bestScore) {
      this.data.bestScore = score;
      this.save();
    }
  }

  /**
   * Return unlocked status
   */
  isUnlocked(index:number) {

    if (index == 0) return true;
    if (this.data.unlocked[index] !== 1) return false;
    return true;
  }

  /**
   * Save unlock id to local storage
   */
  saveUnlock(index:number) {

    const ul = this.data.unlocked;
    ul[index] = 1;
    this.save();
  }
}

