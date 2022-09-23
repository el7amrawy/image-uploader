const Uploaded = (props) => {
  document.documentElement.style.backgroundImage;
  return (
    <div className="uploaded">
      <span className="material-symbols-outlined">check_circle</span>
      <h3>Uploaded Successfully!</h3>
      <div
        className="img-cont"
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>
      <div className="img-link">
        <p>https://images.yourdomain.com/photo-149695086644</p>
        <button className="btn">Copy Link</button>
      </div>
    </div>
  );
};
export default Uploaded;
