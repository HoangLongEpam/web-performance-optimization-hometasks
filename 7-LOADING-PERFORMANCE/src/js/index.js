import "../styles/index.scss";

import { getSpentTime } from "./common";

const buttonWithoutWW = document.getElementById("bWithoutWW");
const buttonWithWW = document.getElementById("bWithWW");
const spinner = document.getElementById("spinner");
const result = document.getElementById("result");
const timeSpent = document.getElementById("timeSpent");
const withoutWW = document.getElementById("withoutWW");
const withWW = document.getElementById("withWW");
let worker;

buttonWithoutWW.addEventListener("click", () => {
  preStart();
  nonWebWorker();
});

buttonWithWW.addEventListener("click", () => {
  preStart();
  withWebWorker();
});

function nonWebWorker() {
  const time = getSpentTime();

  afterStop(time, false);
}

function withWebWorker() {
  if ("serviceWorker" in navigator) {
    // register the service worker which locates in ./worker.js
    const worker = new Worker(new URL("./worker.js", import.meta.url));

    worker.onerror = (error) => {
      console.error(error);
    };

    worker.onmessage = (error) => {
      console.error(error);
    };
    // add onmessage event handler and call 'afterStop(e.data, true);' method inside
    // this method will handle end of service worker work
    worker.onmessage = (event) => {
      console.log(event);
      afterStop(event.data, true);
    };

    // call service worker's method postMessage with message 'start' here
    // it will trigger service worker
    worker.postMessage("start");
  } else {
    console.error("Service workers are not supported.");
  }
}

function preStart() {
  result.classList.add("hidden");
  withWW.classList.add("hidden");
  withoutWW.classList.add("hidden");
  spinner.classList.remove("hidden");
}

function afterStop(time, mode) {
  timeSpent.innerText = `${time}ms`;
  spinner.classList.add("hidden");

  if (mode) {
    withWW.classList.remove("hidden");
    withoutWW.classList.add("hidden");
  } else {
    withoutWW.classList.remove("hidden");
    withWW.classList.add("hidden");
  }

  result.classList.remove("hidden");
}
