export default interface GameOption {

  lightMovingSpeed?:number;
  ambientLight?:number;
  pieceDistance?:number;
  pieceBottom?:number;
  pieceDepth?:number;
  pieceSpecular?:number; 
  pieceEmissive?: number;
  pieceColor?: number;
  boardDimension?:number;
  boardThickness?:number;
  boardDepth?:number;
  boardMaxWidth?:number;
  boardMaxHeight?:number;
  fitFactor?:number;
  runningDuration?:number;
  numCoins?:number;
  coinSpeed?:number;
  numCrystals?:number;
  crystalSpeed?:number;
  gravity?:number;
  maxHealth?:number;
  shatterDuration?:number;
  scoreUnit?:number;
}
