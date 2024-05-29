<script lang="ts" setup>
import { 
ArcRotateCamera,
  Engine, 
  Mesh, 
  Scene, 
SceneLoader, 
Vector3
} from '@babylonjs/core'
import { defineOptions, onMounted, ref } from 'vue'

defineOptions({ name: 'factory' })
function createDefaultEngine(canvas: HTMLCanvasElement) { 
  return new Engine(
    canvas, 
    true, 
    { preserveDrawingBuffer: true, stencil: true },
    true
  )
}

var createScene = function (engine: Engine) {
      var scene = new Scene(engine)
      var box = Mesh.CreateBox("Box", 0.000001, scene)
      if(screen.width < 1200){
        box.position = new Vector3(-160,  60,  -37.57677752823042);
      }else{
        box.position = new Vector3(30.490265729592924,  60,  -37.57677752823042);
      }
      const camera = new ArcRotateCamera(
        'Camera', 
        0, 
        0, 
        0, 
        new Vector3(0,0,0), 
        scene
      )
      camera.setPosition(
        new Vector3(-175.4109439602053, 119.21594215775023, -163.04551229159813))
      //camera.inputs.remove(camera.inputs.attached.mouse);
      camera.parent = box;
      if(screen.width<567){
         camera.fov = 1.2; 
      }
      SceneLoader.Append('/', 'Super_conductor_scene_V3.babylon?v=16', scene, function () {
        scene.meshes[1].scaling.x = 1
        scene.meshes[1].scaling.y = 1
        scene.meshes[1].scaling.z = 1
        scene.activeCamera = camera;
        scene.lights[0]['_isEnabled'] = false
        scene.lights[0].intensity = 0
      });

   return {
    scene, camera
   }
}



const canvasRef = ref<HTMLCanvasElement>()


onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const engine = createDefaultEngine(canvas)
  const { scene, camera } = createScene(engine)

  engine.runRenderLoop(() => {
    scene.render()
  })

})
</script>

<template>
  <div class="factory">
    <!-- -->
    factory
  </div>
  <canvas ref="canvasRef" id="factory-canvas-window"></canvas>
</template>

<style lang="postcss">
.factory {
  @apply;
}

#factory-canvas-window {
  @apply fixed inset-0 w-100vw h-100vh z-2;
  /* position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2; */
}
</style>
