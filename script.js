import vision from 'https://cdn.skypack.dev/@mediapipe/tasks-vision@latest'
const { ObjectDetector, FilesetResolver, Detection } = vision
const demosSection = document.getElementById('demos')
let objectDetector
let runningMode = 'IMAGE'

async function initializeObjectDetector() {
  const vision = await FilesetResolver.forVisionTasks(
    'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm',
  )
  objectDetector = await ObjectDetector.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-tasks/object_detector/efficientdet_lite0_uint8.tflite`,
    },
    scoreThreshold: 0.5,
    runningMode: runningMode,
  })
  demosSection.classList.remove('invisible')
}
initializeObjectDetector()

const imageContainers = document.getElementsByClassName('detectOnClick')
for (let imageContainer of imageContainers) {
  imageContainer.children[0].addEventListener('click', handleClick)
}

async function handleClick(event) {
  const highlighters = event.target.parentNode.getElementsByClassName(
    'highlighter',
  )
  while (highlighters[0]) {
    highlighters[0].parentNode.removeChild(highlighters[0])
  }
  const infos = event.target.parentNode.getElementsByClassName('info')
  while (infos[0]) {
    infos[0].parentNode.removeChild(infos[0])
  }
  if (!objectDetector) {
    console.log('Wait for objectDetector to load before clicking')
    return
  }

  if (runningMode === 'VIDEO') {
    runningMode = 'IMAGE'
    await objectDetector.setOptions({ runningMode: runningMode })
  }
  const ratio = event.target.height / event.target.naturalHeight

  const detections = await objectDetector.detect(event.target)
  displayImageDetections(detections, event.target)
}

let video = document.getElementById('webcam')
const liveView = document.getElementById('liveView')
let enableWebcamButton

function hasGetUserMedia() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
}

var children = []

if (hasGetUserMedia()) {
  enableWebcamButton = document.getElementById('webcamButton')
  enableWebcamButton.addEventListener('click', enableCam)
} else {
  console.warn('getUserMedia() is not supported by your browser')
}

// flip button element
let flipBtn = document.querySelector('#flip-btn')

// default user media options
let constraints = { audio: false, video: true }
let shouldFaceUser = false

// check whether we can use facingMode
let supports = navigator.mediaDevices.getSupportedConstraints()
if (supports['facingMode'] === true) {
  flipBtn.disabled = false
}

let stream = null

async function enableCam(event) {
  constraints.video = {
    width: {
      min: 575,
      ideal: 192,
      max: 600,
    },
    height: {
      min: 400,
      ideal: 192,
      max: 600,
    },
    facingMode: shouldFaceUser ? 'user' : 'environment',
  }
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (mediaStream) {
      stream = mediaStream
      video.srcObject = stream
      video.addEventListener('loadeddata', predictWebcam)
      video.play()
    })
    .catch(function (err) {
      console.log(err)
    })

  //initTimer()
  // if (!objectDetector) {
  //   console.log('Wait! objectDetector not loaded yet.')
  //   return
  // }

  // enableWebcamButton.classList.add('removed')

  // const constraints = {
  //   video: true,
  // }

  // navigator.mediaDevices
  //   .getUserMedia(constraints)
  //   .then(function (stream) {
  //     video.srcObject = stream
  //     video.addEventListener('loadeddata', predictWebcam)
  //   })
  //   .catch((err) => {
  //     console.error(err)
  //   })
}

flipBtn.addEventListener('click', function () {
  if (stream == null) return
  // we need to flip, stop everything
  stream.getTracks().forEach((t) => {
    t.stop()
  })
  // toggle / flip
  shouldFaceUser = !shouldFaceUser
  capture()
})

capture()

document
  .getElementById('capture-camera')
  .addEventListener('click', function () {
    // Elements for taking the snapshot
    const video = document.querySelector('video')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    canvas.getContext('2d').drawImage(video, 0, 0)
  })

async function predictWebcam() {
  if (runningMode === 'IMAGE') {
    runningMode = 'VIDEO'

    await objectDetector.setOptions({ runningMode: runningMode })
  }
  let nowInMs = Date.now()

  const detections = await objectDetector.detectForVideo(video, nowInMs)
  displayVideoDetections(detections)

  window.requestAnimationFrame(predictWebcam)
}
function displayVideoDetections(result) {
  for (let child of children) {
    liveView.removeChild(child)
  }
  children.splice(0)

  for (let detection of result.detections) {
    const p = document.createElement('p')
    let objettip = detection.categories[0].categoryName
    // if (objettip === 'mouse' || objettip === 'truck') {
    p.innerText = detection.categories[0].categoryName
    // p.innerText =
    //   detection.categories[0].categoryName +
    //   ' - with ' +
    //   Math.round(parseFloat(detection.categories[0].score) * 100) +
    //   '% confidence.'
    p.style =
      'left: ' +
      (video.offsetWidth -
        detection.boundingBox.width -
        detection.boundingBox.originX) +
      'px;' +
      'top: ' +
      detection.boundingBox.originY +
      'px; ' +
      'width: ' +
      (detection.boundingBox.width - 10) +
      'px;'
    const highlighter = document.createElement('div')
    highlighter.setAttribute('class', 'highlighter')
    highlighter.style =
      'left: ' +
      (video.offsetWidth -
        detection.boundingBox.width -
        detection.boundingBox.originX) +
      'px;' +
      'top: ' +
      detection.boundingBox.originY +
      'px;' +
      'width: ' +
      (detection.boundingBox.width - 10) +
      'px;' +
      'height: ' +
      detection.boundingBox.height +
      'px;'
    liveView.appendChild(highlighter)
    liveView.appendChild(p)

    children.push(highlighter)
    children.push(p)
    // }
  }
}

function initTimer() {
  var n = 0
  var l = document.getElementById('number')
  window.setInterval(function () {
    l.innerHTML = n
    n++
  }, 100)
}
