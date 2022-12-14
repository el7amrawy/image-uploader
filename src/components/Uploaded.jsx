import env from "../env";

const Uploaded = (props) => {
  const url = env.apiHost + props.img;

  function clickHandler(ev) {
    ev.preventDefault();

    navigator.clipboard.writeText(url);
    alert("Copied the text: \n" + url);
  }

  return (
    <div className="uploaded">
      <span className="material-symbols-outlined">check_circle</span>
      <h3>Uploaded Successfully!</h3>
      <div className="img-cont">
        <img src={url} id="recieved-img" />
      </div>
      <div className="img-link">
        <p>{url.length > 52 ? url.slice(0, 52) + "..." : url}</p>
        <button className="btn" onClick={clickHandler}>
          Copy Link
        </button>
      </div>
    </div>
  );
};
export default Uploaded;
