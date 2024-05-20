import {
  AbstractMesh,
  ActionManager,
  Animation,
  ArcRotateCamera,
  BackgroundMaterial,
  Color3,
  Color4,
  CubeTexture,
  CubicEase,
  EasingFunction,
  Engine,
  ExecuteCodeAction,
  HemisphericLight,
  Material,
  MeshBuilder,
  PBRMaterial,
  PBRMetallicRoughnessMaterial,
  PhotoDome,
  Scene,
  SceneLoader,
  Texture,
  Vector3
} from '@babylonjs/core'
import '@babylonjs/loaders/glTF'

// https://campusalbano.se/view/all
(async function () {

  const canvas = document.getElementById('canvas-window') as HTMLCanvasElement
  const engine = new Engine(canvas, true)


  const scene = new Scene(engine)




  // 初始化场景
  function initScene() {
    // 背景色
    scene.clearColor = new Color4(.792, .926, .923, 1)
    // 指示该场景是否启用碰撞
    scene.collisionsEnabled = true
    // 指示场景在渲染帧之前是否必须清除渲染缓冲区
    scene.autoClear = false
    // 指示场景在渲染帧之前是否必须清除深度和模板缓冲区
    scene.autoClearDepthAndStencil = false
  }

  // 初始化摄像机


  function initCamera() {
    const camera = new ArcRotateCamera(
      'camera', // name
      0, // alpha horizontal angle
      Math.PI / 4, // beta vertical angle
      350, // radius
      new Vector3(-330, 0, -200), // look at
      scene
    )

    camera.minZ = 2
    camera.maxZ = 3e3
    camera.panningAxis = new Vector3(1, 0, 1)
    camera.panningSensibility = 40
    camera.panningOriginTarget = new Vector3(-270, 0, -430)
    camera.panningDistanceLimit = 500
    camera.wheelPrecision = 10
    camera.allowUpsideDown = false
    camera.lowerRadiusLimit = 5
    camera.upperRadiusLimit = 400
    camera.lowerBetaLimit = .5
    camera.upperBetaLimit = Math.PI - .5
    camera.checkCollisions = true
    camera.collisionRadius = new Vector3(3, 3, 3)

    const cameraEasing = new CubicEase()
    cameraEasing.setEasingMode(EasingFunction.EASINGMODE_EASEINOUT)
    const cameraDuration = 60

    camera.attachControl(canvas, true)

    function normalizeAlpha(alpha: number) {
      const t = 2 * Math.PI
        , n = Math.floor(alpha / t)
      return alpha - (n > 1 ? n * t : 0)
    }

    function getAlphaBetaRadius() {
      return new Vector3(
        Math.round(100 * normalizeAlpha(camera.alpha)) / 100,
        Math.round(100 * camera.beta) / 100,
        Math.round(100 * camera.radius) / 100

      )
    }

    function animateAlphaBetaRadius(target?: Vector3) {
      if (!target) return
      Animation.CreateAndStartAnimation(
        "camera-alpha",
        camera,
        "alpha",
        60,
        cameraDuration,
        normalizeAlpha(camera.alpha),
        normalizeAlpha(target.x),
        0,
        cameraEasing
      )

      Animation.CreateAndStartAnimation(
        "camera-beta",
        camera,
        "beta",
        60,
        cameraDuration,
        camera.beta,
        target.y,
        0,
        cameraEasing
      )

      Animation.CreateAndStartAnimation(
        "camera-radius",
        camera,
        "radius",
        60,
        cameraDuration,
        camera.radius,
        target.z,
        0,
        cameraEasing
      )
    }
    function animateTarget(target?: Vector3) {
      if (!target) return

      Animation.CreateAndStartAnimation(
        "camera-target",
        camera,
        "_target",
        60,
        cameraDuration,
        camera.target,
        target,
        Animation.ANIMATIONLOOPMODE_CONSTANT,
        cameraEasing
      )
    }

    return {
      camera,
      cameraEasing,
      cameraDuration,
      getAlphaBetaRadius,
      animateAlphaBetaRadius,
      animateTarget
    }
  }

  // 初始化环境材质
  function initEnvironment() {
    // 没有光照的情况下，提供颜色
    const env = CubeTexture.CreateFromPrefilteredData('/environment.env', scene)
    scene.environmentTexture = env
    return env
  }

  // 设置天空盒
  function initPhotoDome() {
    const skybox = new PhotoDome('skybox', '/skybox.jpg', { size: 2e3 }, scene)
    skybox.position.set(-300, 0, 400)
    return skybox
  }

  // 地面
  function initGround() {
    const ground = MeshBuilder.CreateGround('infiniground', {
      // 比天空盒要大
      width: 3e3,
      height: 3e3,
    }, scene)

    // 检测碰撞
    ground.checkCollisions = true

    // 地面材质
    const texture = new BackgroundMaterial('infininground', scene)
    ground.material = texture
    ground.position.y = -1

    return ground
  }

  // 初始化环境光
  function initLighting() {
    const envLight = new HemisphericLight('ambient-light', Vector3.Up(), scene)
    // 环境光强度
    envLight.intensity = .3
    return envLight
  }



  initScene()
  const {
    camera,
    animateAlphaBetaRadius,
    animateTarget
  } = initCamera()
  initEnvironment()
  initPhotoDome()
  initGround()
  initLighting()


  // load

  async function loadEnvironment() {
    const TEXTURE_PATH = '/MedSkuggningOchText.jpg'
    const model = await SceneLoader.ImportMeshAsync(null, '/', 'environment.glb', scene)
    const envMesh = model.meshes[0]
    envMesh.id = envMesh.name = 'environment-gltf'
    const groundMesh = envMesh.getChildMeshes(true, (n) => n.id === 'ground')[0]
    groundMesh.checkCollisions = true
    groundMesh.freezeWorldMatrix()

    const texture = new Texture(
      TEXTURE_PATH,
      scene,
      false,
      false,
      undefined,
      () => {
        const groundMat = groundMesh.material as PBRMaterial
        // const groundMat = scene.getMaterialByName('ground-mat', false) as PBRMaterial

        groundMat.albedoTexture = texture
        groundMat.unlit = true
      }
    )
    // const container = await SceneLoader.LoadAssetContainerAsync(
    //   './',       // rootUrl{string}
    //   'environment.glb',  // sceneFilename?{string | File}
    //   scene,      // scene?{Scene}
    //   // onProgress?{Function}
    //   // pluginExtension?{?}
    // )

    // container.addAllToScene()
  }

  async function loadBuilding() {
    const buildingIds = [
      "A1_40V_12000",
      "A1_40_V_160000",
      "A1_40_V_170002",
      "A2_400_V_0300000",
      "A2_400_V_1000000",
      "A2_40_V_010000",
      "A2_40_V_090000",
      "A3_40_V_130000",
      "A3_40_V_140000",
      "A3_40_V_150000",
      "A2_400_V_0100000",
      "L1_300_V_020000",
      "L1_300_V_040000"
    ]

    const buildingCameraAnchor: { [key: string]: { position: Vector3, camera: Vector3 } } = {
      A1_40V_12000: {
        position: new Vector3(-462, 52, -154),
        camera: new Vector3(2.8, 1.17, 98.02),
      },
      A1_40_V_160000: {
        position: new Vector3(-438, 51, -183),
        camera: new Vector3(1.01, 0.93, 103.25),
      },
      A1_40_V_170002: {
        position: new Vector3(-462, 52, -227),
        camera: new Vector3(2.12, 0.91, 108.38),
      },
      A2_400_V_0300000: {
        position: new Vector3(-306, 50, -153),
        camera: new Vector3(4.89, 0.9, 109.93),
      },
      A2_400_V_1000000: {
        position: new Vector3(-502, 72, -154),
        camera: new Vector3(4.1, .87, 98.02),
      },
      A2_40_V_010000: {
        position: new Vector3(-479, 38, -438),
        camera: new Vector3(3.42, 1.06, 91.45),
      },
      A2_40_V_090000: {
        position: new Vector3(-454, 37, -295),
        camera: new Vector3(4.28, 1, 106.9),
      },
      A3_40_V_130000: {
        position: new Vector3(-516, 65, -58),
        camera: new Vector3(2.33, 1.12, 98.02),
      },
      A3_40_V_140000: { // A3_40_V_140000
        position: new Vector3(-360, 51, -175),
        camera: new Vector3(1.02, 0.83, 98.02),
      },
      A3_40_V_150000: {
        position: new Vector3(-397, 51, -194),
        camera: new Vector3(1.02, 0.83, 98.02),
      },
      A2_400_V_0100000: {
        position: new Vector3(-240, 34, -193),
        camera: new Vector3(5.75, 1.16, 100),
      },
      L1_300_V_020000: {
        position: new Vector3(-293, 34, -265),
        camera: new Vector3(5.32, 1.02, 89.04),
      },
      L1_300_V_040000: {
        position: new Vector3(-378, 40, -300),
        camera: new Vector3(4.79, 1, 89.02),
      },
    }

    const buildings: AbstractMesh[] = []

    const model = await SceneLoader.ImportMeshAsync(
      null,
      '/',
      'buildings.glb',
      scene
    )
    const buildingMesh = model.meshes[0]
    buildingMesh.id = buildingMesh.name = 'building-gltf'

    function activeBuilding(names: string[] = []) {
      buildings.forEach(building => {
        building.material = names.includes(building.name)
          ? building.metadata.originalMaterial :
          fadedMaterial
      })
    }

    // init buildings list
    model.meshes.forEach(mesh => {
      mesh.freezeWorldMatrix()
      if (buildingIds.includes(mesh.name)) {
        mesh.metadata.originalMaterial = mesh.material
        buildings.push(mesh)
      }
      if (mesh.name.endsWith('_collision')) {
        mesh.isVisible = false
        mesh.checkCollisions = true
      }
      else {
        // mesh.isPickable = false // 用按钮驱动

        mesh.actionManager = new ActionManager(scene)
        mesh.actionManager.registerAction(
          new ExecuteCodeAction({
            trigger: ActionManager.OnPickTrigger
          }, () => {
            console.log(mesh.name)
            activeBuilding([mesh.name])
            const anchor = buildingCameraAnchor[mesh.name]
            animateTarget(anchor.position),
              animateAlphaBetaRadius(anchor.camera)
          })
        )

      }
    })


    const fadedMaterial = new PBRMetallicRoughnessMaterial('faded-build', scene)
    fadedMaterial.baseColor = new Color3(.63, .63, .63)
    fadedMaterial.metallic = 0
    fadedMaterial.roughness = .8
    fadedMaterial.sideOrientation = Material.ClockWiseSideOrientation



    return {
      buildings,
      activeBuilding
    }
  }

  loadEnvironment()
  const { activeBuilding } = await loadBuilding()

  activeBuilding(['A1_40V_12000', 'A2_400_V_0100000'])



  engine.runRenderLoop(() => {
    scene.render()
  })

})()