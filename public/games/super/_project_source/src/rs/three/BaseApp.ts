
import {
  Scene, 
  Vector3, 
  PerspectiveCamera, 
  WebGLRenderer, 
  Raycaster, 
  sRGBEncoding,
  REVISION
} from 'three';

/**
 * Base class for 3d game and application 
*/
export default class BaseApp {

  width:number;
  height:number;
  fov:number;
  scene:Scene;
  camera:PerspectiveCamera;
  renderer:WebGLRenderer;
  raycaster:Raycaster;
  el:HTMLElement;
  rId:number;
  thfov:number;

  constructor(width:number = 1000, height:number = 600, fov:number = 60) {

    this.width = width;
    this.height = height;
    this.fov = fov;
    this.init();
  }

  /**
   * Initialize base app
   */
  protected init() {

    console.log('THREE revision', REVISION);

    // Default scene
    this.scene = new Scene();

    // Camera
    this.camera = new PerspectiveCamera(this.fov, this.width / this.height, 0.01, 5000);

    // Renderer
    const r = this.renderer = new WebGLRenderer({alpha:true, antialias:true});
    r.setSize(this.width, this.height);
    r.setPixelRatio(window.devicePixelRatio);
    r.outputEncoding = sRGBEncoding;

    this.camera.lookAt(new Vector3(0, 0, 0));

    // Render element
    this.el = r.domElement;

    // Raycasting setup
    this.raycaster = new Raycaster();
  }

  /**
   * Render request
   */
  protected renderRequest() {

    this.renderer.render(this.scene, this.camera);
    this.rId  = requestAnimationFrame(this.renderRequest.bind(this));
  }

  /**
   * Start rendering
   */
  startRendering() {

    this.stopRendering();
    this.rId = requestAnimationFrame(this.renderRequest.bind(this));
  }

  /**
   * Stop rendering
   */
  stopRendering() {
    cancelAnimationFrame(this.rId);
  }

  /**
   * Resize handler method
   */
  resizeHandler() {

    // Recalculate tan of half vfov
    this.thfov = Math.tan(this.camera.fov * Math.PI / 360);
  }

  /**
   * Set camera position to match projection dimension
   * @param scaleFactor
   */
  setCameraMatchProjection(scaleFactor:number = 1) {

    const cam = this.camera;
    const z = 0.5 * this.height / Math.tan(cam.fov * Math.PI / 360);
    cam.position.x = cam.position.y = 0;
    cam.position.z = z / scaleFactor;
    cam.lookAt(new Vector3(0, 0, 0));
  }

  /**
   * Get scaleFitRatio
   */
  getScaleFitRatio(w:number, h:number, k:number):number {

    // Scale w and h to match app dimension
    k = k || 0.75;
    
    let r = w / h;
    let rt;
    if (this.width / r > this.height) {
      rt = this.height * k / h;
    }
    else {
      rt = this.width  * k/ w;
    }
    return rt;
  }

  /**
   * Get position z to fit the scaleToFit ratio
   */
  getScaleFitPositionZ(w:number, h:number, k:number):number {

    this.setCameraMatchProjection();

    const rt = this.getScaleFitRatio(w, h, k);
    const camZ = this.camera.position.z;
    const zt = camZ - camZ / rt;
    return zt;
  };
}
