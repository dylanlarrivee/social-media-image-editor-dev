import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import dogImage from "../images/dog-image.jpeg";
import dogImage2 from "../images/dog-image-2.jpeg";
import dogImage3 from "../images/dog-image-3.jpeg";

const imgObject = {
    "dogImage" : dogImage,
    "dogImage2" : dogImage2,
    "dogImage3" : dogImage3
}

const ImageEditorPage = (props) => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [canvasLoaded, setCanvasLoaded] = useState(false);
  const [overlayText1, setOverlayText1] = useState("");
  const [overlayText1Indicator, setOverlayText1Indicator] = useState(false);
  const [finalImageDownloadLink, setFinalImageDownloadLink] = useState("");

  const updateBackgroundImage = (event) => {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function (event) {
      setBackgroundImage(event.target.result);
    };
    reader.readAsDataURL(selectedFile);

  };

  const updateBackgroundImagePreSelected = (event) => {
    setBackgroundImage(imgObject[event.target.value])

  };


  const addOverlayText1 = (canvas) => {
    setOverlayText1Indicator(true)
  };

  const downloadImage = () => {
    let downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', 'CanvasAsImage.png');

    let canvasImg = document.getElementById('canvas');
    canvasImg.toBlob(function(blob) {
      let url = URL.createObjectURL(blob);
      setFinalImageDownloadLink(url);
      console.log(url)
      downloadLink.setAttribute('href', url);
      downloadLink.click();
    });

  };

  useEffect(() => {
    console.log("original canvas:", document.getElementById('canvas'))
    const canvas = new fabric.Canvas("canvas");
    console.log(canvas.width)
    console.log(canvas.height)
    setCanvasLoaded(true);
    canvas.setBackgroundImage(
        backgroundImage,
      canvas.renderAll.bind(canvas),
      {
        width: canvas.width,
        height: canvas.height,
        // Needed to position backgroundImage at 0/0
        originX: "left",
        originY: "top",
      }
    );
    var itext = new fabric.Textbox(overlayText1, {
      id: "textBox1",
      left: 100,
      top: 150,
    //   fill: "#D81B60",
    //   strokeWidth: 2,
    //   stroke: "#880E4F",
      // hasBorders: true,
      // hasControls: true,
      // hasRotatingPoint: true,
    });
    canvas.add(itext);
    return function cleanupCanvas() {
        canvas.dispose();
        console.log("canvas dispose")
        let canvasElement = document.getElementById('canvas');
        // Reset the canvas back to its original size
        canvasElement.setAttribute('width', 400);
        canvasElement.setAttribute('height', 300);
    }
  }, [overlayText1Indicator, backgroundImage]);

  

  return (
    <div>
        <select name="cars" id="cars" onChange={updateBackgroundImagePreSelected}>
        <option >Select an Image</option>
        <option value="dogImage">Dog image 1</option>
        <option value="dogImage2">Dog Image 2</option>
        <option value="dogImage3">Dog Image 3</option>
        </select>
        <label htmlFor="cars" style={{ marginLeft: "25px" }}>Choose a pre loaded background image:</label>
        <br /> <br />
      <input type="file" onChange={updateBackgroundImage} />
      <label className="controls__label" htmlFor="name">
        Or load a background image.
      </label>
      <br /> <br />
      <input
        id="overlayText1"
        name="overlayText1"
        type="text"
        onChange={(evt) => setOverlayText1(evt.target.value)}
      />
      <button
        type="button"
        style={{ marginLeft: "25px" }}
        onClick={addOverlayText1}
      >
        Add Text
      </button>
      <label
        className="controls__label"
        htmlFor="name"
        style={{ marginLeft: "25px" }}
      >
        Second, choose some overlay text (if needed).
      </label>
      
      <br /> <br />
      <canvas
        id="canvas"
        width="400"
        height="300"
        style={{ border: "1px solid #d3d3d3" }}
      >
        {" "}
      </canvas>
      <br /> <br />
      <button
        id="downloadImage"
        type="button"
        style={{ marginLeft: "25px" }}
        onClick={downloadImage}
        download="myImage.png"
      >
        Download Image
      </button>
      <label
        className="controls__label"
        htmlFor="name"
        style={{ marginLeft: "25px" }}
      >
        Download your new image.
      </label>
    </div>
  );
};

export default ImageEditorPage;
