import { useState, useEffect } from "react";
import img from "../assets/images/Untitled-1.png";
import Uploaded from "./Uploaded";
import Uploading from "./Uploading";

const Main = () => {
  const [dropped, setDropped] = useState(false);
  const [drag, setDrag] = useState(false);

  function handelDrag(ev) {
    ev.preventDefault();
    setDrag(true);
  }

  function handleDrop(ev) {
    ev.preventDefault();
    const file = ev.dataTransfer.files[0];
    if (
      file &&
      file.type == ("image/png" || "image/jpg" || "image/gif" || "image/jpeg")
    ) {
      setDrag(false);
      setDropped(true);
    }
  }

  function changeHandler(ev) {
    // console.log(ev);
    const file = ev.target.files[0];
    if (
      file &&
      file.type == ("image/png" || "image/jpg" || "image/gif" || "image/jpeg")
    ) {
      setDrag(false);
      setDropped(true);
    }
  }

  return (
    <main>
      {!dropped && (
        <div className="upload" onDrop={handleDrop}>
          <h3>Upload your image</h3>
          <h5>File should be Jpeg, Png,...</h5>
          <fieldset
            onDragOver={handelDrag}
            onDragLeave={() => setDrag(false)}
            style={drag ? { backgroundColor: "#d5e7ff" } : {}}
          >
            <div className="img-cont">
              <img src={img} alt="" />
            </div>
            <p>Drag & Drop your image here</p>
          </fieldset>
          <span>Or</span>
          <label className="btn" htmlFor="file">
            Choose a file
            <input
              type="file"
              accept="image/png, image/jpg, image/gif, image/jpeg"
              onChange={changeHandler}
              id="file"
            />
          </label>
        </div>
      )}
      {/* {dropped && <Uploading />} */}
      {dropped && <Uploaded img={img} />}
    </main>
  );
};

export default Main;
