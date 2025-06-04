import "./Empty.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Empty({ title, url, desc, btnTitle, link, likePhoto, likeTitle }) {
  const navigate = useNavigate();
  return (
    <div className="empty">
      <div className="container">
        <img className="empty-like-photo" src={likePhoto} alt="" />
        <h2 className="empty-like-title">{likeTitle} </h2>
        <img className="empty__img" src={url} width={65} alt="" />
        <h2 className="empty__title">{title}</h2>
        <p className="empty__deck">{desc}</p>
        {btnTitle && (<Link to={"/"}><button className="empty__btn" onClick={() => navigate(link)}>
          {btnTitle}
        </button></Link>)}
      </div>
    </div>
  );
}

export default Empty;
