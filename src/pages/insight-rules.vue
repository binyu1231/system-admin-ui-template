<script setup lang="ts">
import { 
  PerspectiveCamera, 
  Scene, 
  Mesh, 
  WebGLRenderer,
  AxesHelper,
  AmbientLight,
CylinderGeometry,
MeshBasicMaterial,
} from 'three'

// import { TrackballControls } from 'three/examples/jsm/Addons.js'

defineOptions({
  name: 'InsightRules',
})

const container = ref<HTMLCanvasElement | null>(null)
const cylinderRadius = 15
const cylinderInitialHeight = 0
let cylinders: Mesh[] | null = null

function setCylinder(i: number, height: number) {
  if (!cylinders || !cylinders[i]) return

  const h = cylinderInitialHeight + height
  const geo = new CylinderGeometry(cylinderRadius, cylinderRadius, h, 320)
  geo.translate(0, h/2, 0)
  cylinders[i].geometry = geo
}

function randomSetCylinders() {
  if (!cylinders) return
  cylinders.forEach((_cy, i) => {
    setCylinder(i, Math.random() * 20)
  })
}

onMounted(() => {
  const dom = container.value
  if (!dom) return

  const w = dom.offsetWidth
  const h = dom.offsetHeight 

  const scene = new Scene()
  const camera = new PerspectiveCamera(30, w/h, 0.1, 1000)
  camera.position.set(-260, 100, 80)
  camera.lookAt(scene.position)

  scene.add(camera)
  scene.add(new AxesHelper(20))

  const ambimentLight = new AmbientLight(0xffffff)
  scene.add(ambimentLight)

  const renderer = new WebGLRenderer({ antialias: true })

  renderer.setClearColor(0x000000)
  renderer.setClearAlpha(0)
  renderer.setSize(w, h)
  renderer.shadowMap.enabled = true

  // const cameraControls = new TrackballControls(camera, renderer.domElement)
  // scene.add(mesh)
  /// initialized

  // const cylinderGeometry = new CylinderGeometry(15, 15, 20, 320)
  // cylinderGeometry.translate(0, 10, 0)
  // const cylinderMaterial = new MeshBasicMaterial({ color: 0xffff00 })
  // const cylinder = new Mesh(cylinderGeometry, cylinderMaterial)
  // scene.add(cylinder)

  
  cylinders = Array.from({ length: 10 }).map(() => {
    
    const cylinderGeometry = new CylinderGeometry(
      cylinderRadius, 
      cylinderRadius, 
      cylinderInitialHeight, 32
    )
    cylinderGeometry.translate(0, cylinderInitialHeight/2, 0)
    const cylinderMaterial = new MeshBasicMaterial({ color: 0xFFFFFF*Math.random() })
    cylinderMaterial.transparent = true
    cylinderMaterial.opacity = 0.5
    return new Mesh(cylinderGeometry, cylinderMaterial)
  })

  cylinders.forEach((cylinder, i) => {
    cylinder.position.set(Math.floor(i / 5) * 50, 0, i % 5 * 50 - 100)
    scene.add(cylinder)
  })

  
  

  function animation (time: number) {
    // mesh.rotation.x = time / 2000
    // mesh.rotation.y = time / 1000

    if (cylinders && time > 0 && time < 3000) {
      cylinders.forEach((cylinder, i) => {
        setCylinder(i, time/100)
      })

    }
    // cameraControls.update()
    renderer.render(scene, camera)

    
  }
  

  
  renderer.setAnimationLoop(animation)

  dom.appendChild(renderer.domElement)

})
</script>

<template>
<PageContainer hidden-deco>
  
</PageContainer>
<BrandList />

<div class="relative flex-1 w-full relative">
  <div ref="container" class="fixed inset-0 z-2"></div>
  <div class="absolute inset-0 z-20 px-4 py-3">
    <GlassButton @click="randomSetCylinders">
      Random
    </GlassButton>
  </div>
</div>
</template>
