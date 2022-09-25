import { useState, useEffect } from "react";
import img from "../assets/images/Untitled-1.png";
import Uploaded from "./Uploaded";
import Uploading from "./Uploading";
import env from "../env/index";
import axios from "axios";

const Main = () => {
  /* --------- States --------- */
  const [drag, setDrag] = useState(false);
  const [dropped, setDropped] = useState(false);
  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const [recievedImg, setRecievedImg] = useState(null);

  /* --------- Effects --------- */
  useEffect(() => {
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      axios
        .post(`${env.apiHost}upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(({ data }) => {
          setRecievedImg(data.url);
          setUploaded(true);
        })
        .catch((err) => {
          console.log(err);
          alert("couldn't upload image");
          setDrag(false);
          setDropped(false);
          setFile(null);
          setUploaded(false);
        });
    }
  }, [dropped]);

  /* --------- handlers --------- */
  function handelDrag(ev) {
    ev.preventDefault();
    setDrag(true);
  }

  function handleDrop(ev) {
    ev.preventDefault();
    const file = ev.dataTransfer.files[0];
    if (file) {
      setDrag(false);
      setDropped(true);
      setFile(file);
    }
  }

  function changeHandler(ev) {
    const file = ev.target.files[0];
    console.log(file.type);
    if (file) {
      console.log(1);
      setDrag(false);
      setDropped(true);
      setFile(file);
    }
  }
  return (
    <main>
      {!dropped && !file ? (
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
      ) : !uploaded ? (
        <Uploading />
      ) : (
        <Uploaded img={recievedImg} />
      )}
    </main>
  );
};

export default Main;
