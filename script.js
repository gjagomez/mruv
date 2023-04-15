//import vision from "https://cdn.skypack.dev/@mediapipe/tasks-vision@latest";
import vision from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/vision_bundle.js";
const { ObjectDetector, FilesetResolver, Detection } = vision;
const demosSection = document.getElementById("demos");
let objectDetector;
let runningMode = "IMAGE";
var lseg = document.getElementById("number");
var txtCamera = document.getElementById("idcamara");

async function initializeObjectDetector() {
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
  );
  objectDetector = await ObjectDetector.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-tasks/object_detector/efficientdet_lite0_uint8.tflite`,
    },
    scoreThreshold: 0.5,
    runningMode: runningMode,
  });
  demosSection.classList.remove("invisible");
}
initializeObjectDetector();

const imageContainers = document.getElementsByClassName("detectOnClick");
for (let imageContainer of imageContainers) {
  imageContainer.children[0].addEventListener("click", handleClick);
}

async function handleClick(event) {
  const highlighters =
    event.target.parentNode.getElementsByClassName("highlighter");
  while (highlighters[0]) {
    highlighters[0].parentNode.removeChild(highlighters[0]);
  }
  const infos = event.target.parentNode.getElementsByClassName("info");
  while (infos[0]) {
    infos[0].parentNode.removeChild(infos[0]);
  }
  if (!objectDetector) {
    console.log("No se pueden detectar los objetos");
    return;
  }

  if (runningMode === "VIDEO") {
    runningMode = "IMAGE";
    await objectDetector.setOptions({ runningMode: runningMode });
  }
  const ratio = event.target.height / event.target.naturalHeight;

  const detections = await objectDetector.detect(event.target);
  displayImageDetections(detections, event.target);
}

let video = document.getElementById("webcam");
const liveView = document.getElementById("liveView");
let enableWebcamButton;

function hasGetUserMedia() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

var children = [];

if (hasGetUserMedia()) {
  enableWebcamButton = document.getElementById("webcamButton");
  enableWebcamButton.addEventListener("click", enableCam);
} else {
  console.warn("El explorador no soporta la camara web");
}

let flipBtn = document.querySelector("#flip-btn");

let constraints = { audio: false, video: true };
let shouldFaceUser = false;

let supports = navigator.mediaDevices.getSupportedConstraints();
if (supports["facingMode"] === true) {
  flipBtn.disabled = false;
}

let stream = null;

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
    facingMode: shouldFaceUser ? "user" : "environment",
  };
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (mediaStream) {
      stream = mediaStream;
      video.srcObject = stream;
      video.addEventListener("loadeddata", predictWebcam);
      video.play();
    })
    .catch(function (err) {
      console.log(err);
    });
}

flipBtn.addEventListener("click", function () {
  if (stream == null) return;

  stream.getTracks().forEach((t) => {
    t.stop();
  });

  shouldFaceUser = !shouldFaceUser;
  capture();
});

document
  .getElementById("capture-camera")
  .addEventListener("click", function () {
    const video = document.querySelector("video");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
  });

async function predictWebcam() {
  if (runningMode === "IMAGE") {
    runningMode = "VIDEO";

    await objectDetector.setOptions({ runningMode: runningMode });
  }
  let nowInMs = Date.now();

  const detections = await objectDetector.detectForVideo(video, nowInMs);
  displayVideoDetections(detections);

  window.requestAnimationFrame(predictWebcam);
}
function displayVideoDetections(result) {
  for (let child of children) {
    liveView.removeChild(child);
  }
  children.splice(0);

  for (let detection of result.detections) {
    const p = document.createElement("p");
    let objettip = detection.categories[0].categoryName;
    var _idDocs = txtCamera.value;
    if (objettip === "person" || objettip === "truck") {
      p.innerText = detection.categories[0].categoryName;
      if (
        lseg.innerText === "" ||
        lseg.innerText === "0" ||
        lseg.innerText === 0
      ) {
        if (_idDocs == "1" || _idDocs == 1) {
          Save();
        }
        if (_idDocs == "2" || _idDocs == 2) {
          Save2();
        }
        if (_idDocs == "3" || _idDocs == 3) {
          Save3();
        }
        initTimer();
      }

      // if (_idDocs == "1" || _idDocs == 1) {
      //   saveBase();
      // }
      // if (_idDocs == "2" || _idDocs == 2) {
      //   saveBasedos();
      // }
      // p.innerText =
      //   detection.categories[0].categoryName +
      //   ' - with ' +
      //   Math.round(parseFloat(detection.categories[0].score) * 100) +
      //   '% confidence.'
      p.style =
        "left: " +
        (video.offsetWidth -
          detection.boundingBox.width -
          detection.boundingBox.originX) +
        "px;" +
        "top: " +
        detection.boundingBox.originY +
        "px; " +
        "width: " +
        (detection.boundingBox.width - 10) +
        "px;";
      const highlighter = document.createElement("div");
      highlighter.setAttribute("class", "highlighter");
      highlighter.style =
        "left: " +
        (video.offsetWidth -
          detection.boundingBox.width -
          detection.boundingBox.originX) +
        "px;" +
        "top: " +
        detection.boundingBox.originY +
        "px;" +
        "width: " +
        (detection.boundingBox.width - 10) +
        "px;" +
        "height: " +
        detection.boundingBox.height +
        "px;";
      liveView.appendChild(highlighter);
      liveView.appendChild(p);

      children.push(highlighter);
      children.push(p);
    }
  }
}

function initTimer() {
  var n = 0;
  var l = document.getElementById("number");
  window.setInterval(function () {
    //seg = n
    l.innerHTML = n;
    n++;
    Consultar();
  }, 100);
}

async function Save() {
  var lseg = document.getElementById("number");

  var data = JSON.stringify({
    _id: "inicio",
    estado: 1,
  });

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open("POST", "https://newdev.genesisempresarial.org:6984/dbfi");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader(
    "Authorization",
    "Basic YWRtaW46ZW54IWh2ZV9HWEQ4aGt0N2FrdQ=="
  );

  xhr.send(data);
}

async function Save2() {
  var lseg = document.getElementById("number");
  var data = JSON.stringify({
    _id: "inicio2",
    estado: 2,
  });
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });
  xhr.open("POST", "https://newdev.genesisempresarial.org:6984/dbfi");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader(
    "Authorization",
    "Basic YWRtaW46ZW54IWh2ZV9HWEQ4aGt0N2FrdQ=="
  );

  xhr.send(data);
}

async function Save3() {
  var lseg = document.getElementById("number");
  var data = JSON.stringify({
    _id: "inicio3",
    estado: 3,
  });
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });
  xhr.open("POST", "https://newdev.genesisempresarial.org:6984/dbfi");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader(
    "Authorization",
    "Basic YWRtaW46ZW54IWh2ZV9HWEQ4aGt0N2FrdQ=="
  );

  xhr.send(data);
}

async function Consultar() {
  var _idDocs = txtCamera.value;
  var data = JSON.stringify({
    _id: "a6abb2ea9f45377010a0e48613c908bsc",
    tip: "1",
  });

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      //console.log(this.responseText);
      var data = JSON.parse(this.responseText);

      if (data.total_rows == 1) {
        if (data.rows[0].id === "inicio") {
          if (_idDocs == "1" || _idDocs == 1) {
            saveTime();
            //Saveti("Cam1", "0");
          }
        }
      }

      if (data.total_rows == 2) {
        if (data.rows[1].id === "inicio2") {
          if (_idDocs == "2" || _idDocs == 2) {
            saveTime();
            //location.reload();
          }
        }
      }
      if (data.total_rows == 3) {
        if (data.rows[2].id === "inicio3") {
          if (_idDocs == "3" || _idDocs == 3) {
            saveTime();
            //location.reload();
          }
        }
      }
    }
  });

  xhr.open("GET", "https://newdev.genesisempresarial.org:6984/dbfi/_all_docs");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader(
    "Authorization",
    "Basic YWRtaW46ZW54IWh2ZV9HWEQ4aGt0N2FrdQ=="
  );

  xhr.send(data);
}

async function saveTime() {
  var data = "";

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      var lseg = document.getElementById("number");
      var _idDocs = txtCamera.value;
      var objeto = JSON.parse(this.responseText);

      var contar = objeto.rows.length;

      if (contar == "0" || contar === "0") {
        if (_idDocs == "1" || _idDocs == 1) {
          Saveti("cam1", "0");
          Saveti("cam2", "0");
          Saveti("cam3", "0");
        }
      }

      if (_idDocs == "2" || _idDocs == 2) {
        var icam = objeto.rows[1].doc._id;
        var idrev = objeto.rows[1].doc._rev;
        var ti = lseg.innerText;
        UpdateT(icam, ti, idrev);
      }

      if (_idDocs == "3" || _idDocs == 2) {
        var icam = objeto.rows[2].doc._id;
        var idrev = objeto.rows[2].doc._rev;
        var ti = lseg.innerText;
        UpdateT(icam, ti, idrev);
      }
    }
  });

  xhr.open(
    "GET",
    "https://newdev.genesisempresarial.org:6984/dbti/_all_docs?include_docs=true"
  );
  xhr.setRequestHeader(
    "Authorization",
    "Basic YWRtaW46ZW54IWh2ZV9HWEQ4aGt0N2FrdQ=="
  );

  xhr.send(data);
}
async function UpdateT(camara, tiempo, idrev) {
  var data = JSON.stringify({
    _id: camara,
    _rev: idrev,
    tiempo: tiempo,
  });

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open("POST", "https://newdev.genesisempresarial.org:6984/dbti/");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader(
    "Authorization",
    "Basic YWRtaW46ZW54IWh2ZV9HWEQ4aGt0N2FrdQ=="
  );

  xhr.send(data);
}
async function Saveti(camara, tiempo) {
  var data = JSON.stringify({
    _id: camara,
    tiempo: tiempo,
  });

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open("POST", "https://newdev.genesisempresarial.org:6984/dbti/");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader(
    "Authorization",
    "Basic YWRtaW46ZW54IWh2ZV9HWEQ4aGt0N2FrdQ=="
  );

  xhr.send(data);
}
// var db = new PouchDB("fisica");
// var lseg = document.getElementById("number");
// var txtCamera = document.getElementById("idcamara");

// async function SyncOfline() {
//   const db = new PouchDB("fisica");
//   const remoteDB = new PouchDB(
//     "https://newdev.genesisempresarial.org:6984/dbfi",
//     {
//       skip_setup: false,
//       auth: {
//         username: "admin",
//         password: "enx!hve_GXD8hkt7aku",
//       },
//     }
//   );
//   const options = {
//     live: true,
//     retry: true,
//     continuous: true,
//   };
//   db.sync(remoteDB, options);
// }

// async function saveBase() {
//   var db = new PouchDB("fisica");
//   //
//   var _idDocs = txtCamera.value;
//   var tiempo = lseg.innerText;

//   if (_idDocs == "1" || _idDocs == 1) {
//     db.put({
//       _id: "cam01",
//       tiempo: 0,
//     });

//     db.changes().on("change", function () {
//       console.log("Ch-Ch-Changes");
//     });

//     SyncOfline();
//   }
// }

// async function saveBasedos() {
//   var _idDocs = txtCamera.value;
//   var tiempo = lseg.innerText;

//   if (_idDocs == "2" || _idDocs == 2) {
//     alert("hoa");
//     db.put({
//       _id: "cam02",
//       tiempo: tiempo,
//     });

//     db.changes().on("change", function () {
//       console.log("Ch-Ch-Changes");
//     });

//     SyncOfline();
//     location.reload();
//   }
// }
