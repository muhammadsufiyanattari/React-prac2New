import { BsThreeDots } from "react-icons/bs";
import { IoChatboxOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";

export function Mypost(props) {
  return (
    <>
      <div className="main">
        <div className="header">
          <div className="profileImg">
            <img
              src={props.profileImg}
              alt="profile picture"
            />
            <div className="profileName">
              {props.name} <br />
              <span>{props.dayTime}</span>
            </div>
          </div>

          <div className="profileIcon">
            <BsThreeDots />
          </div>
        </div>
        <div className="caption">
          <p>
           
            {props.postText ? props.postText : null}
          </p>
        </div>
        <div className="postImg">
          {props.postImage ? (
            <img width={"auto"} src={props.postImage} alt=" post image" />
          ) : props.myVideo?  <video muted width={'300px'} height={'auto'} src={props.myVideo} autoPlay controls></video>:null}
        </div>
       
        <div className="comment">
          <div className="commentIcon">
            <span className="iconc heart">
              <FaRegHeart />
            </span>
            <span className="iconc likeC">
              <BiSolidLike />
            </span>
            <span className="iconc smile">
              <FaRegFaceSmileBeam />
            </span>

            <span className="hello">Hello hye 20 otheras</span>
          </div>
          <div className="commentCont">23 Comments</div>
        </div>
        <div className="iconFooter">
          <div className="likeIcon">
            <AiOutlineLike />
          </div>
          <div className="chatIcon">
            <IoChatboxOutline />
          </div>
          <div className="shareIcon">
            <IoShareSocialOutline />
          </div>
        </div>
      </div>
    </>
  );
}
// export const Mypost = () => {
//     // Tumhara component code yahan
// }
