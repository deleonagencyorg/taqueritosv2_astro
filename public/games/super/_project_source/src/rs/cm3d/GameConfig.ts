export default interface GameConfig {

  general:{
    defaultCategory:number,
    useHelpPanel:boolean,
    useCreditPanel:boolean,
    useBackgroundMusic:boolean,
    boardTextures:string[]
  };

  strings:{
    APP_TITLE:string,
    APP_INFO:string,
    NEW_GAME:string,
    HELP:string,
    HELP_TEXT:string,
    SETTING:string,
    CREDITS:string,
    CREDIT_TEXT:string
  }

  data:{
    coins:string[],
    levels:Level[]
  }
}

export interface Level {

  id:number;
}
