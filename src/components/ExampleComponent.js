import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

function ExampleComponent() {
  const [show, setShow] = useState(false);
  const box = useRef();
  const button = useRef();
  useLayoutEffect(() => {
    console.log("uselayouteffect: compoment charged");
    // let box = document.querySelector("#box");
    // box.innerHTML = "hello";
    // console.log(box.getBoundingClientRect());
  });

  useEffect(() => {
    console.log("useeffect: componnent charged");
    // let box = document.querySelector("#");
    // let box = document.querySelector("#box");
    // box.innerHTML = "hello2";
    // console.log(box.getBoundingClientRect());
    if (box.current == null) return; //surt del hook al fer return i no executarà res més

    const { bottom } = button.current.getBoundingClientRect();
    console.log(bottom);
    //li suma al bottom 45px. amb template string s'insterpolen les dades.
    box.current.style.marginTop = `${bottom + 45}px`;
  }, [show]);

  return (
    <div>
      <h1>example useeffect and useLayouteffect</h1>
      {/* prev --> valor previ guardat.  */}
      {/* <button onClick={() => setShow((prev) => prev + "paquito")}> */}
      {/* <button onClick={() => setShow((prev) => !prev)}>Show message</button> */}
      <button
        ref={button}
        onClick={() =>
          setShow((prev) => {
            console.log(prev, !prev);
            return !prev;
          })
        }
      >
        Show message
      </button>
      {show && (
        <div id="box" ref={box}>
          hi, i'm a message, {show}
        </div>
      )}
    </div>
  );
}

export default ExampleComponent;
