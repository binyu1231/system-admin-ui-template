// 备份的代码 没有使用

//svg animations
var preloader = lottie.loadAnimation({
  container: document.getElementById('load-animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'json/preloader.json'
})
var animSvgOne = lottie.loadAnimation({
  container: document.getElementById('anim-svg-1'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'json/academic_papers.json'
})
var animSvgSeconde = lottie.loadAnimation({
  container: document.getElementById('anim-svg-2'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'json/phd_scientist.json'
})

var exit_anim = lottie.loadAnimation({
  container: document.querySelector('.button-exit'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'json/close_icon.json'
})
var exit_anim_info = lottie.loadAnimation({
  container: document.querySelector('.exit-team'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'json/close_icon.json'
})
var exit_anim_white = lottie.loadAnimation({
  container: document.querySelector('.exit-sheme'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'json/close_white.json'
})
//!svg animations
window.isMobileOrTablet = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}
window.search = function(name){
  let searchIndex = null;
  let arr;
  if (name.search('C_') > -1){
    arr = scene.cameras
  }else{
    arr = scene.meshes
  }
    arr.forEach(
      function(item,i,arr){
        if(item.name == name){
          searchIndex = i
        }
      }
    )
    return searchIndex;
}
window.uploadTextureURLS = function(){
  scene.meshes.forEach(function(item,i,arr){
      let url = ''
      let url1 = ''
    if(scene.meshes[i].material){
      if(scene.meshes[i].material.getActiveTextures().length){

          url = scene.meshes[i].material.getActiveTextures()[0].url;

        if(scene.meshes[i].material.getActiveTextures().length>1){
          url1 = scene.meshes[i].material.getActiveTextures()[1].url
        }
      }  
    }
   //console.log(scene.meshes[i].name + 'zzz' + url+'zzz1z'+ url1);
  })
}


  var canvas = document.getElementById("renderCanvas");
  var engine = null;
  var scene = null;
  var anim_num = 1;
  var sceneToRender = null;
  var in_scene = 0;
  var path;
  var path_num = 0;
  var tex_num = 0;
  var preventTex='';
  var preventTex2='';
  window.sceneIsLoad = 0;
  window.blockAlpha = [];
  window.blocktexBeauty = [];
  window.blocktexWire = [];
  window.blockMaskSize = [];
  window.blockMaskFade = [];
  window.blockMaskPos = [];
  var loadedPercent = 0;
  window.canScroll = 1;
  var curWidth = document.querySelector('body').clientWidth;
  var createDefaultEngine = function() { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true},true); };
  var createScene = function (engine) {
            var scene = new BABYLON.Scene(engine);
            var box = BABYLON.Mesh.CreateBox("Box", 0.000001, scene);
            box.position= new BABYLON.Vector3(9,10,-12);
            window.camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, new BABYLON.Vector3(0,0,0), scene);
          //window.light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(1, 1, 0), scene);
            window.camera.setPosition(new BABYLON.Vector3(89.64, 31.53, 95.96));
            window.camera.inputs.attached.pointers.panningSensibility=0;

            //window.camera.inputs.remove(camera.inputs.attached.mouse); 
               standartLimits();
            var path = '';
            if(curWidth < 767){
                camera.fov = 1.2;
                path = "scene/mobile/";
            }else{
              camera.fov = 0.6;
              path = "scene/";
            }

            BABYLON.SceneLoader.Append(path, "Shading_cameras_V27.babylon", scene, function () {
                scene.activeCamera =  window.camera;
               scene.activeCamera.attachControl(canvas, true);
               scene.lights[0].intensity = 0;
               window.camera.parent = scene.meshes[0];
               //scene.animationsEnabled=false
               if(curWidth < 576){
                    addCustomAnimShaders()
              		rotateHeaders();
              		addEvents();
               }else{
                 addMaterials()
               }
               scene.clearColor = new BABYLON.Color3(1, 1, 1);
               engine.hideLoadingUI();
            },function (evt) {
                // onProgress
                if (evt.lengthComputable) {
                    loadedPercent = (evt.loaded * 100 / evt.total).toFixed();
                } else {
                    var dlCount = evt.loaded / (1024 * 1024);
                    loadedPercent = Math.floor(dlCount * 100.0) / 100.0;
                }
                // assuming "loadingScreenPercent" is an existing html element
                if(curWidth < 767){
                  document.getElementById("load-text").innerHTML =  Math.floor(loadedPercent)+ "%";
                }else{
                  document.getElementById("load-text").innerHTML =  Math.floor(loadedPercent/2)+ "%";
                }
                if(loadedPercent == 100){
                  loadedPercent = loadedPercent/2 
                  parseInt(loadedPercent)
                }
            });
            //camera current pos
            var camZ = 0,camX = 0 ,camY = 0 
            //camera next pos
            var nextCamZ = 0, nextCamX = 0, nextCamY = 0
            //target current pos
            var targetZ = 0, targetX = 0, targetY = 0 
            //target current pos
            var nextTargetZ = 0, nextTargetX = 0, nextTargetY = 0

            function startCameraEvent(targetIndex,cameraIndex){
              //current camera position
                camX =  window.camera.position._x
                camZ =  window.camera.position._z
                camY =  window.camera.position._y
                //camera position for back
              if(!in_scene){
                  window.camX =  window.camera.position._x
                  window.camZ =  window.camera.position._z
                  window.camY =  window.camera.position._y
              }
                //current null position
                targetX = scene.meshes[0].position._x
                targetY = scene.meshes[0].position._y
                targetZ = scene.meshes[0].position._z

                  
                nextCamX = scene.cameras[cameraIndex].position._x - scene.meshes[targetIndex].position._x  
                nextCamY = scene.cameras[cameraIndex].position._y - scene.meshes[targetIndex].position._y
                nextCamZ = scene.cameras[cameraIndex].position._z - scene.meshes[targetIndex].position._z
 
                nextTargetX = scene.meshes[targetIndex].position._x
                nextTargetY = scene.meshes[targetIndex].position._y
                nextTargetZ = scene.meshes[targetIndex].position._z

                window.camera.detachControl(canvas);
                removeLimits();
                moveCamera(1,scene.meshes[targetIndex].name)
                window.lastMesh = scene.meshes[targetIndex].name
        in_scene = 1;
            }

document.querySelector('.button-exit').addEventListener("click",()=>{
  buttonExit();
})

function buttonExit() {
  //////console.log(11)
          camX =  window.camera.position._x
          camZ =  window.camera.position._z
          camY =  window.camera.position._y

          targetX = scene.meshes[0].position._x
          targetZ = scene.meshes[0].position._z
          targetY = scene.meshes[0].position._y

          nextCamZ = window.camZ
          nextCamX = window.camX
          nextCamY = window.camY

          nextTargetX = 9
          nextTargetY = 17 
          nextTargetZ = -12
          in_scene=0;
          ExitButtonDisplay(false,window.lastMesh)
          window.camera.detachControl(canvas);
          removeLimits()
          moveCamera(0,window.lastMesh)
        }

            var totalTicks = 150;

           // advancedTexture.addControl(window.button2);

function  moveCamera(ButtonDisplay,mesh_name){
  let Ticks=0;
  //document.getElementById("js-body").classList.remove('active');
   scene.registerBeforeRender(
      function () {
        let startCamPos = new BABYLON.Vector3(camX,camY,camZ);
        let endCamPos = new BABYLON.Vector3(nextCamX,nextCamY,nextCamZ);
        window.camRadius = startCamPos.subtract(endCamPos).length();
        let midCamPos =  new BABYLON.Vector3(nextCamX,nextCamY,nextCamZ).normalize();

        midCamPos = midCamPos.add( new BABYLON.Vector3(camX,camY,camZ).normalize());
        midCamPos = midCamPos.normalize(); 
        midCamPos = midCamPos.multiplyByFloats(window.camRadius, window.camRadius, window.camRadius);

        midCamPos._y=50;

        let startTargetPos = new BABYLON.Vector3(targetX,targetY,targetZ);
        let endTargetPos = new BABYLON.Vector3(nextTargetX,nextTargetY,nextTargetZ);

        if(Ticks < totalTicks){
           let alpha = -Math.cos((Ticks / totalTicks)*Math.PI)/2 + .5;
           let startCamPos_mid =startCamPos.multiplyByFloats( ((1-alpha) * (1 - alpha)), ((1 - alpha) * (1 - alpha)), ((1 - alpha) * (1 - alpha)) ); 
           let midCamPos_mid = midCamPos.multiplyByFloats( (2 * (1 - alpha) * alpha), (2 * (1 - alpha) * alpha), (2 * (1 - alpha) * alpha) );
           let endCamPos_mid = endCamPos.multiplyByFloats( Math.pow(alpha,2), Math.pow(alpha,2), Math.pow(alpha,2) );
           let vector = startCamPos_mid.add(midCamPos_mid);
           let vector2 = vector.add(endCamPos_mid); 
           window.camera.setPosition(vector2);
           let vector1 = BABYLON.Vector3.Lerp(startTargetPos,endTargetPos,alpha)
           scene.meshes[0].position=vector1;
         } 
        if(Ticks < 100 &&  ButtonDisplay){
          if(curWidth > 576){
              wireFrameAnimation(mesh_name,1);
          }
            document.querySelectorAll('.icon').forEach((item,i,arr)=>{item.classList.remove('icon-active')})
        }
        if(Ticks < 25 && !ButtonDisplay){
          if(curWidth > 576){
              wireFrameAnimation(mesh_name,-4);
            } 
        }
        if(Ticks > 70 && Ticks <= 150 && ButtonDisplay){
            endPointAnimation(mesh_name,-1);
        }
        if(Ticks < 80 && !ButtonDisplay){
          endPointAnimation(mesh_name,1);
          document.querySelectorAll('.icon').forEach((item,i,arr)=>{item.classList.add('icon-active')})
        }
        if(Ticks == 150){
            window.camera.attachControl(canvas, true);
            if(ButtonDisplay){ 
              ExitButtonDisplay(true,mesh_name) 
              window.camera.upperRadiusLimit = Math.pow(( Math.pow((nextCamX) ,2) + Math.pow((nextCamZ) ,2) + Math.pow((nextCamY) ,2) ),.5);
              window.camera.lowerRadiusLimit = window.camera.upperRadiusLimit;
              let endLookDirY = endCamPos;
              let endLookDirX = new BABYLON.Vector3(nextCamX,nextCamY,nextCamZ).normalize();
              let Elength = endLookDirX.subtract(new BABYLON.Vector3(0,1,0)).length()/2;
              let angleX = Math.cos(Elength);
              endLookDirY._y=0; 
              endLookDirY = endLookDirY.normalize();
              let VectorY = new BABYLON.Vector2(endLookDirY._x,endLookDirY._z);
              let VectorX = new BABYLON.Vector2(endLookDirX._z,endLookDirX._y);
              camYAngle = BABYLON.Angle.BetweenTwoPoints(new BABYLON.Vector2(0,0) ,VectorY); 
              camXAngle = BABYLON.Angle.BetweenTwoPoints(new BABYLON.Vector2(0,0) ,VectorX); 
              window.camera.upperAlphaLimit = camYAngle._radians + 0.34;
              window.camera.lowerAlphaLimit = camYAngle._radians - 0.34;
              window.camera.upperBetaLimit = angleX + 0.34;
              window.camera.lowerBetaLimit = angleX - 0.34;
              easyCameraMove(1);
            }else{
              //document.getElementById("js-body").classList.add('active');
              easyCameraMove(0);
              standartLimits();
            }
        }
      Ticks++
       if(Ticks == totalTicks){
        return;
       }
    });
}

function rotateHeaders(){
    scene.registerBeforeRender(function(){
      scene.meshes.forEach(function(item,i,arr){
        if(item.name.search('L_') != -1){
            var cPos3D = window.camera.position;              
            var tPos3D = item.position;
            cPos3D = cPos3D.subtract(tPos3D);
            var tPos2D = new BABYLON.Vector2(cPos3D._x, cPos3D._z);
            var tRotY =  BABYLON.Angle.BetweenTwoPoints(new BABYLON.Vector2(0,0) ,tPos2D);
            item.rotation = new BABYLON.Vector3(-1.57,tRotY._radians*(-1)-1.57,0); 
        }
      })
    }
    )
}

function easyCameraMove(e){
   if(e){ 
    window.camera.angularSensibilityX = 6000 //+ 4000*Math.abs((window.camera.upperAlphaLimit + window.camera.lowerAlphaLimit)/2 - camYAngle._radians)/ (Math.abs(window.camera.upperAlphaLimit - window.camera.lowerAlphaLimit)/2 )
    window.camera.angularSensibilityY = 6000 //+ 8000*Math.abs((window.camera.upperBetaLimit + window.camera.lowerBetaLimit)/2 - angleX)/ (Math.abs(window.camera.upperBetaLimit - window.camera.lowerBetaLimit)/2 )
   }else{
    window.camera.angularSensibilityX = 1000
    window.camera.angularSensibilityY = 1000
   }
}


function addEvents (){
  scene.meshes.forEach(function(item,i,arr){
      if(item.name.search('L_') != -1){
        ////////console.log('внутри'+item)
        item.isPickable = true
        item.actionManager = new BABYLON.ActionManager(scene);
        let Lnum = item.name;
        Lnum = parseInt(parseInt(Lnum.match(/\d+/)))
        ////////console.log('LNUM'+Lnum)
        let Mindex = search('A_' + Lnum);

        ////console.log(Mindex)
        ////console.log(scene.meshes[Mindex].name)
        let Cindex = search('C_' + Lnum);
        item.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,(function() {
        startCameraEvent(Mindex,Cindex);
          }) 
        ));
      }    
  })
}

function ExitButtonDisplay(display,mesh_name){
 // let button_exit = document.querySelector('.button-exit')
  if(display){
    if(curWidth > 1200){
      document.querySelector('[data-target =' + mesh_name + ']').appendChild(document.querySelector('.button-exit'))
      document.querySelector('[data-target =' + mesh_name + ']').classList.add('active')
    }
    document.querySelectorAll('.js-factory-in').forEach((item,i,arr)=>{
      item.classList.remove('active')
    })
    document.querySelector('.js-info').setAttribute("data-btn", mesh_name);
    document.querySelector('.button-exit').classList.add('active')
    //playAnimTo(mesh_name, 0, 49)
    playExitAnim(exit_anim,0, 29)
    window.canScroll = 0;
     document.querySelector('.js-info-read').classList.add('active')
  }else{
     document.querySelector('.js-info-read').classList.remove('active')
      document.querySelectorAll('.js-factory-in').forEach((item,i,arr)=>{
      item.classList.add('active')
      })
      document.querySelectorAll('.object-desc').forEach((item,i,arr)=>{item.classList.remove('active') })
      document.querySelector('.js-info').setAttribute("data-btn", 1);
      document.querySelector('.button-exit').classList.remove('active') 
      //////console.log(mesh_name)
      //playAnimTo(mesh_name,49, 99)
      playExitAnim(exit_anim,29,59)
      window.camera.upperAlphaLimit = null;
      window.camera.lowerAlphaLimit = null;
      window.camera.upperRadiusLimit = null;
      window.camera.lowerRadiusLimit = null;
      window.canScroll = 1;
  }
}
function endPointAnimation(mesh_name,hide){ 
  if(curWidth < 576){
    scene.meshes[search(mesh_name)].visibility += 0.0125*hide;
  }else{
    search_material_num(mesh_name).forEach(function(item,i,arr){
        window.blockAlpha[item].value += 0.0125*hide;
    })
  }
}   
function wireFrameAnimation(mesh_name,hide){

  let curMeshPos = scene.meshes[search(mesh_name)].position
  window.blockMaskSize.forEach(function(item,i,arr){
  if( (materialPathes[i][0] != mesh_name) && (materialPathes[i][0].search('I_') == -1 ) ){
    item.value += .01*hide;
    window.blockMaskPos[i].value = curMeshPos;
    window.blockMaskFade[i].value = .01*hide*(-1);
  }
 })
 // scene.clearColor = new BABYLON.Color3(scene.clearColor.r+((182/255)/101)*hide*(-1),scene.clearColor.g+((132/255)/101)*hide*(-1), scene.clearColor.b+((2/255)/101)*hide*(-1));
}
function search_material_num (mesh_name){
  mesh_name = parseInt(parseInt(mesh_name.match(/\d+/)))
  mesh_name = 'A_'+mesh_name;
  let mesh_num = []; 
  materialPathes.forEach(function(item,i,arr){
    if(item[0].search(mesh_name) > -1){
      mesh_num.push(i)
    }
  })
  return mesh_num;
}
var shader_step = 0;
function addCustomAnimShaders(){
  let item = scene.meshes[shader_step]
  //item.backFaceCulling = false;
    if(item.name == 'chushki'){
        item.material = MTL_chushka();
        item.material.needDepthPrePass = true;
        shader_step++;
        setTimeout(()=>{addCustomAnimShaders();},400)
      return;
    } 
    if(item.name == 'I_2_1'){
        item.material = gasShader();
        item.material.needDepthPrePass = true;
        shader_step++;
        setTimeout(()=>{addCustomAnimShaders();},400)
      return;
    }
    if(item.name.search('waste_') > -1){
        //item.material._diffuseTexture.hasAlpha = true;
        //item.material.needDepthPrePass = true;
        shader_step++;
        addCustomAnimShaders();
      return;
    }
    if(item.name == 'normal3'){
      item.material = reactorShader();
      item.material.needDepthPrePass = true;
      shader_step++;      
      setTimeout(()=>{addCustomAnimShaders();},400)
      return;      
    } 
    if(item.name == 'transform8'){
      item.material = MTL_degree();
      item.needDepthPrePass = true;
      shader_step++;      
      setTimeout(()=>{addCustomAnimShaders();},400)
      return;      
    }
    if(item.name == 'I_5_3'){
      item.material = MTL_gasholder();
      item.material.needDepthPrePass = true;
        shader_step++;      
      setTimeout(()=>{addCustomAnimShaders();},400)
      return;     
    }
    if(item.name == 'I_6_1'){
      item.material = MTL_powerlines();
      item.material.needDepthPrePass = true;
        shader_step++;      
      setTimeout(()=>{addCustomAnimShaders();},400)
      return;     
    }
    if(item.name == 'I_3_3'){
      item.material = MTL_lava();
        shader_step++;      
        setTimeout(()=>{addCustomAnimShaders();},400)
      return;     
    }
    if(shader_step < scene.meshes.length-1){
      item.freezeWorldMatrix()
      shader_step++;
        addCustomAnimShaders();
      return;
    }else{
        document.getElementById("js-body").classList.add("loaded");
        noscroll(0);
        window.scroll(0, 0);
        //console.log('shaders_exit');
        conductorLoad();
      return;
    }
}
function addMaterials(){ 
  if(tex_num==path_num){
      if(tex_num > 0){
          if(materialPathes[tex_num-1][1].url == materialPathes[tex_num][1] && materialPathes[tex_num-1][2].url == materialPathes[tex_num][2]){
          materialPathes[tex_num][1]= materialPathes[tex_num-1][1]
          materialPathes[tex_num][2]= materialPathes[tex_num-1][2] 
          tex_num++;
        addMaterials();
        return;
        }else{
           materialPathes[tex_num][1] = new BABYLON.Texture(materialPathes[tex_num][1], scene);
         //console.log('load_texture'+materialPathes[tex_num][1])
          //console.log('load_texture'+materialPathes[tex_num][2])
          materialPathes[tex_num][1].onLoadObservable.add(() => { 
            materialPathes[tex_num][2] = new BABYLON.Texture(materialPathes[tex_num][2], scene);
            materialPathes[tex_num][2].onLoadObservable.add(() => {
              tex_num++;
              //////console.log(tex_num+'__'+path_num)
              addMaterials();
              return;
              })
          })
        }
      }else{
        materialPathes[tex_num][1] = new BABYLON.Texture(materialPathes[tex_num][1], null);
        //console.log('load_texture'+materialPathes[tex_num][1])
        //console.log('load_texture'+materialPathes[tex_num][2])
        materialPathes[tex_num][1].onLoadObservable.add(() => { 
        materialPathes[tex_num][2] = new BABYLON.Texture(materialPathes[tex_num][2], null);
        materialPathes[tex_num][2].onLoadObservable.add(() => {
         tex_num++;
          //console.log(tex_num+'__'+path_num)
            addMaterials();
            return;
          })
        })

      }

  }else{
    //console.log(tex_num+'__'+path_num)
    //console.log('add_texture'+materialPathes[path_num][0])
    scene.meshes[search(materialPathes[path_num][0])].material = MTLBoxBlend(materialPathes[path_num][2],materialPathes[path_num][1]);
    window.blocktexBeauty.push(scene.meshes[search(materialPathes[path_num][0])].material.getBlockByName("texBeauty"));
    window.blocktexWire.push(scene.meshes[search(materialPathes[path_num][0])].material.getBlockByName("texWire"));
    window.blockMaskSize.push(scene.meshes[search(materialPathes[path_num][0])].material.getBlockByName("MaskSize"));
    window.blockMaskFade.push(scene.meshes[search(materialPathes[path_num][0])].material.getBlockByName("MaskFade"));
    window.blockMaskPos.push(scene.meshes[search(materialPathes[path_num][0])].material.getBlockByName("MaskPos"));
    window.blockAlpha.push(scene.meshes[search(materialPathes[path_num][0])].material.getBlockByName("Alpha"));
    window.blockAlpha[path_num].value = 1; 
    scene.meshes[search(materialPathes[path_num][0])].material.needDepthPrePass = true;
    scene.meshes[search(materialPathes[path_num][0])].backFaceCulling = false;
    path_num++;
    //////console.log(path_num)
     if(path_num < materialPathes.length){
      loadedPercent = loadedPercent + (50/materialPathes.length);
      document.getElementById("load-text").innerHTML =  Math.floor(loadedPercent)+ "%";
      //////console.log(loadedPercent)
      addMaterials();
      return;
    }else{
        addCustomAnimShaders()
        rotateHeaders();
        addEvents();
      return;
    } 
  }

}

 return scene;
        };
var engine;
try {
    engine = createDefaultEngine();
} catch(e) {
    engine = createDefaultEngine();
}
if (!engine) throw 'engine should not be null.';
scene = createScene();
sceneToRender = scene


  engine.runRenderLoop(function() {
   scene.render(); 
   document.querySelector('.fps').innerHTML = Math.floor(engine.getFps().toFixed()) + " fps";
 });


//resize ();
// Resize
window.addEventListener("resize", function(){
  resize ()
});

function resize () {
  curWidth = document.querySelector('body').clientWidth
   if(curWidth < 567){
      camera.fov = 1.2;
    }else{
      camera.fov = 0.6;  
    }
    engine.resize();
}
function standartLimits(){
    window.camera.upperBetaLimit = 1.4
    window.camera.lowerBetaLimit = 1.4
    window.camera.upperAlphaLimit = null;
    window.camera.lowerAlphaLimit = null;
    window.camera.upperRadiusLimit = 175;
    window.camera.lowerRadiusLimit = 175;
} 
function removeLimits(){
    window.camera.upperBetaLimit = null;
    window.camera.lowerBetaLimit = null;
    window.camera.upperAlphaLimit = null;
    window.camera.lowerAlphaLimit = null;
    window.camera.upperRadiusLimit = null;
    window.camera.lowerRadiusLimit = null;
  }
function playExitAnim(anim,first,end){
    anim.goToAndPlay(first, end)
    let stop = setInterval(()=>{
    if (anim.currentFrame > end-1){
        if (anim.currentFrame > 57){  
          document.querySelectorAll('.object-desc').forEach((item,i,arr)=>{item.classList.remove('active') })
          document.querySelector('.button-exit').classList.remove('active')
        }
      anim.pause(); 
     clearInterval(stop)
    }
  },20)

}
document.querySelector('.header_block-1').addEventListener('click',function(){
    document.querySelector('.sientific').classList.add('active');
     playExitAnim(exit_anim_white,0,29)
 })
 document.querySelector('.exit-sheme').addEventListener('click',function(){
     document.querySelector('.sientific').classList.remove('active');
     playExitAnim(exit_anim_white,29,59)
 })

 gsap.registerPlugin(ScrollTrigger);


gsap.to(".anim-5", {
  scrollTrigger: {
    trigger: ".anim-5",
    start: "top 70%",
    end: "top 70%",
    scrub: true
  }
  ,onComplete: completeAnim5,
 // y: '-25%'
});
var Anim5 = lottie.loadAnimation({
  container: document.querySelector('.anim-5'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'json/2_doctorates_of_science.json'
})

function completeAnim5(){
  if(document.querySelector('.anim-5').classList.contains('play')){
    document.querySelector('.anim-5').classList.remove('play')
    Anim5.goToAndPlay(0,30);
  }
} 
gsap.to(".anim-6", {
  scrollTrigger: {
    trigger: ".anim-6",
    start: "top 70%",
    end: "top 70%",
    scrub: true
  }
  ,onComplete: completeAnim6,
 // y: '-25%'
});
var Anim6 = lottie.loadAnimation({
  container: document.querySelector('.anim-6'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'json/circle_2.json'
})

function completeAnim6(){
  if(document.querySelector('.anim-6').classList.contains('play')){
    document.querySelector('.anim-6').classList.remove('play')
    Anim6.goToAndPlay(0,30);
  }
} 

gsap.to(".anim-7", {
  scrollTrigger: {
    trigger: ".anim-7",
    start: "top 50%",
    end: "top 50%",
    scrub: true
  }
  ,onComplete: completeAnim7,
 // y: '-25%'
});
var Anim7 = lottie.loadAnimation({
  container: document.querySelector('.anim-7'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'json/circle_3.json'
})

function completeAnim7(){
  if(document.querySelector('.anim-7').classList.contains('play')){
    document.querySelector('.anim-7').classList.remove('play')
    Anim7.goToAndPlay(0,30);
  }
} 

gsap.to(".anim-8", {
  scrollTrigger: {
    trigger: ".anim-8",
    start: "top 70%",
    end: "top 70%",
    scrub: true
  }
  ,onComplete: completeAnim8,
 // y: '-25%'
});
var Anim8 = lottie.loadAnimation({
  container: document.querySelector('.anim-8'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'json/A_ton_of_advisors.json'
})

function completeAnim8(){
  if(document.querySelector('.anim-8').classList.contains('play')){
    document.querySelector('.anim-8').classList.remove('play')
    Anim8.goToAndPlay(0,30);
  }
} 

gsap.to(".anim-9", {
  scrollTrigger: {
    trigger: ".anim-9",
    start: "top 80%",
    end: "top 80%",
    scrub: true
  }
  ,onComplete: completeAnim9,
 // y: '-25%'
});
var Anim9 = lottie.loadAnimation({
  container: document.querySelector('.anim-9'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'json/circle_5.json'
})

function completeAnim9(){
  if(document.querySelector('.anim-9').classList.contains('play')){
    document.querySelector('.anim-9').classList.remove('play')
    Anim9.goToAndPlay(0,30);
  }
} 
//gsap.to(".anim-5", {
//  scrollTrigger: {
//    trigger: ".anim-5",
//    start: "top 80%",
//    end: "top 80%",
//    scrub: true
//  }
//  ,onComplete: completeAnim5
//});
//
//var Anim5 = lottie.loadAnimation({
//  container: document.querySelector('.anim-5'),
//  renderer: 'svg',
//  loop: false,
//  autoplay: false,
//  path: 'json/LOGOLINE.json'
//})
//
//function completeAnim5(){
//  if(document.querySelector('.anim-5').classList.contains('play')){
//    document.querySelector('.anim-5').classList.remove('play')
//    Anim5.goToAndPlay(0,30);
//  }
//} 

gsap.to(".animation-container", {
  scrollTrigger: {
    trigger: ".animation-container",
    start: "top 98%",
    end: "top 98%",
    scrub: true
  },
  onComplete: removeAnims,
}); 

function removeAnims(){
  ////console.log('зашел')
  document.querySelectorAll('.anim').forEach((item,i,arr)=>{
    item.classList.add('play');
  })
  document.querySelectorAll('.js-remove').forEach((item,i,arr)=>{
    item.classList.remove('active');
  })
  document.querySelectorAll('.steps-list li').forEach((item,i,arr)=>{
    item.style.visibility = 'hidden';
  })
    Anim5.goToAndStop(0,0);
    Anim6.goToAndStop(0,0);
    Anim7.goToAndStop(0,0);
    Anim8.goToAndStop(0,0);
    Anim9.goToAndStop(0,0);
}
//window.addEventListener('resize',()=>{
//  var headerAnim = gsap.to(".header-container", {
//      scrollTrigger: {
//        trigger: ".left-abs-text",
//        start: "top 70px",
//        end: "top 0px",
//        scrub: true,
//        id: "scrub"
//      },
//      y: "-200%"
//    });
//  if(curWidth < 1200){
//    headerAnim.kill();
//    //console.log('headerAnim')
//    document.querySelector('.header-container').style.transform="none";
//  }
//})

let animationLinfo = lottie.loadAnimation({
    container: document.querySelector('.littleInfo'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'json/FACTS.json'
  })

//add and clear animations
function playAnimTo(anim,first,end){
      anim.goToAndPlay(first, end)  
      let stop = setInterval(()=>{
        if (anim.currentFrame > end-1){
         anim.pause(); 
          clearInterval(stop);
        }
      },10)
}

playAnimTo(animationLinfo,0,5);
playAnimTo(animationLinfo,0,5);
var numFact = 15;

document.querySelector('#renderCanvas').addEventListener('click',factCounter);
document.querySelector('#renderCanvas').addEventListener('touchend',factCounter);

function factCounter(){
  if(numFact == 55){
    numFact = 15;
    playAnimTo(animationLinfo,55,60);
    playAnimTo(animationLinfo,0,5);
  }else{
  playAnimTo(animationLinfo,numFact - 10,numFact);
    numFact+=10;
  }
}

document.querySelectorAll('.js-info-desc .text').forEach((item,i,arr)=>{
  let target = item.getAttribute('data-desc')
  item.addEventListener('click',()=>{
    if(item.classList.contains('active')){
      item.classList.remove('active');
      document.querySelector('[data-target-desc="'+target+'"]').style.height='0px'
    }else{
      item.classList.add('active');
      document.querySelector('[data-target-desc="'+target+'"]').style.height = document.querySelector('[data-target-desc="'+target+'"] div').offsetHeight+20 +'px'
    }
  })
})
 //burger menu
var burger = document.querySelector('.js-burger'); 
var headerMenu = document.querySelector('.header-container');
var burgerAnim = lottie.loadAnimation({
  container: burger,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'json/BURGER_BUTTON_BACK.json'
})

burger.addEventListener('click',()=>{
  if(headerMenu.classList.contains('open')){
    headerMenu.classList.remove('open');
    playAnimTo(burgerAnim,1,1);
    noscroll(0);
  }else{
    headerMenu.classList.add('open');
    noscroll(1);
    playAnimTo(burgerAnim,1,15);
  }
})

//info btn
var infoCondBtnAnim = lottie.loadAnimation({
  container: document.querySelector('.js-conductor-info'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'json/BUTTON_INFO.json'
})
var infoBtnAnim = lottie.loadAnimation({
  container: document.querySelector('.js-info'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'json/BUTTON_INFO.json'
})
var scrollToanim = lottie.loadAnimation({
  container: document.querySelector('.scroll-to'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'json/drag_to_rotate.json'
})
scrollToanim.setSpeed(0.3) 

var clickTo = lottie.loadAnimation({
  container: document.querySelector('.click-to'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'json/Callouts.json'
})

var infoBTN = document.querySelector('.js-info'); 
infoBTN.addEventListener('click',()=>{
  let target = infoBTN.getAttribute('data-btn');
  if(document.querySelector('[ data-target="'+target+'"]').classList.contains('open')){
    document.querySelector('[ data-target="'+target+'"]').classList.remove('open');
    playAnimTo(infoBtnAnim,1,1);
    noscroll(0)
  }else{
    document.querySelector('[ data-target="'+target+'"]').classList.add('open');
    playAnimTo(infoBtnAnim,1,15);
    noscroll(1)
  }
})

//info-conductor-btn
var condInfoBTN = document.querySelector('.js-conductor-info');
var condInfo = document.querySelector('.conductor-info--right')
condInfoBTN.addEventListener('click',()=>{
  if(condInfo.classList.contains('open')){
    condInfo.classList.remove('open');
    playAnimTo(infoCondBtnAnim,1,1)
    condInfoBTN.classList.remove('open')
  }else{
    condInfo.classList.add('open');
    playAnimTo(infoCondBtnAnim,1,15)
    condInfoBTN.classList.add('open')
  }
})
function noscroll(remove){
  if(remove){
    document.querySelector('.js-body').classList.remove('active')
  }else{
    document.querySelector('.js-body').classList.add('active')
  }
  
}

gsap.to(".js-anim-line", {
  scrollTrigger: {
    trigger: ".big-text-head",
    start: "top 90%",
    end: "top 90%",
    scrub: true,
    id: "scrub"
  },
   onComplete: completeLineAnim
});

function completeLineAnim(){
  document.querySelector('.js-anim-line').classList.add('active')
}

gsap.to(".js-anim-line1", {
  scrollTrigger: {
    trigger: ".js-anim-line1",
    start: "top 90%",
    end: "top 90%",
    scrub: true,
    id: "scrub"
  },
   onComplete: completeLineAnim1
});

function completeLineAnim1(){
  document.querySelector('.js-anim-line1').classList.add('active')
}


gsap.to(".js-anim-line--right", {
  scrollTrigger: {
    trigger: ".js-anim-line--right",
    start: "top 90%",
    end: "top 90%",
    scrub: true,
    id: "scrub"
  },
   onComplete: completeLine1Anim
});

function completeLine1Anim(){
  document.querySelector('.js-anim-line--right').classList.add('active')
}
gsap.to(".js-anim-line--right-1", {
  scrollTrigger: {
    trigger: ".js-anim-line--right-1",
    start: "top 90%",
    end: "top 90%",
    scrub: true,
    id: "scrub"
  },
   onComplete: completeLine2Anim
});

function completeLine2Anim(){
  document.querySelector('.js-anim-line--right-1').classList.add('active')
}


gsap.to(".steps-list", {
  scrollTrigger: {
    trigger: ".steps-list",
    start: "top 80%",
    end: "top 80%",
    scrub: true,
    id: "scrub"
  },
  onComplete: completeListAnim
});

gsap.to(".js-line-logo", {
  scrollTrigger: {
    trigger: ".animation-container .left",
    start: "top 100%",
    end: "top -300%",
    scrub: true,
    id: "scrub",
  },
  y: "-40%"
});

//gsap.to(".js-line-logo",{y: "-200%",repeat: -1, duration: 30,ease: "none"})


function completeListAnim(){
  let tl = new TimelineMax({});
  tl.staggerTo(".steps-list li", 0.1, {autoAlpha:1, yoyo:true}, 0.1);
}

document.querySelectorAll('.team-more').forEach((item,i,arr)=>{
  
  item.addEventListener('click',(event)=>{
      item.classList.add('active');
      item.appendChild(document.querySelector('.exit-team'))
      document.getElementById("js-body").classList.remove('active');
      playAnimTo(exit_anim_info,0,29);
  })
})

document.querySelector('.exit-team').addEventListener('click', function(event){
  document.querySelectorAll('.team-more').forEach((item,i,arr)=>{
      item.classList.remove('active');
  })
  document.getElementById("js-body").classList.add('active');
  playAnimTo(exit_anim_info,29,59)
  event.stopPropagation()
})



document.querySelector('.send-but').addEventListener('click',function(){
  let name =document.querySelector('[name="name"]').value
  let mail =document.querySelector('[name="mail"]').value
  let subject = document.querySelector('[name="subject"]').value
  let question = document.querySelector('[name="question"]').value
  if( name &&
      mail &&
      subject &&
      question
    ){
    ajaxSendAssoc(name,mail,subject,question);
    document.querySelector('.feedback-container').innerHTML="<p class='thx'>thanks for contacting!</p>";
  }else{
    alert('Fill in all the fields');
  }
})

function ajaxSendAssoc(name,mail,subject,question){
  const request = new XMLHttpRequest();
  const url = "/functions/feedbackMail.php";
  const params = "name=" + name + "&mail=" + mail + "&subject=" + subject + "&question=" +question ; 
  request.open("POST", url, true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");  
  request.addEventListener("readystatechange", () => {
      if(request.readyState === 4 && request.status === 200) {       
     ////console.log(request.responseText);
      }
  });
  request.send(params);
}

