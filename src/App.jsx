import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// App.jsx
import { Mypost } from '/src/assets/post.jsx';
import image1 from '/src/assets/Image (1).png';
import image2 from '/src/assets/Image (2).png';
import image3 from '/src/assets/Image (7).jpg';
import image4 from '/src/assets/Image (9).png';
import image5 from '/src/assets/Image (8).webp';
import image6 from '/src/assets/Image(3).png';

import image12 from '/src/assets/pr5.png';
import image13 from '/src/assets/pr2.png';
import image14 from '/src/assets/pr4.png';
import image15 from '/src/assets/pr4.png';
import image16 from '/src/assets/pr3.png';
import image17 from '/src/assets/pr2.png';
import image18 from '/src/assets/pr1.webp';
import image19 from '/src/assets/pr10.png';
import image20 from '/src/assets/Image(6).jpg';

// import postVideo from 'https://youtu.be/668nUCeBHyY'

function App() {
  const [count, setCount] = useState(0);

  return (<>
 <div className="container">
  <div className="row"><div className="col">
  <div className="postCompA"><Mypost profileImg={image13} postImage={image1} name='Ali Raza' dayTime='Tuseday 11:00 PM'/></div>
  <div className="postCompB"><Mypost profileImg={image12} postText=' Iam good Get always start sit amet, consectetur adipisicing elit. Nihilodio minima.'  name=' Ahemad' dayTime='Wednesday 2:15 PM'/></div>
  <div className="postCompC"><Mypost profileImg={image14} postImage={image4}  postText=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihilodio minima.'  name='Hyder' dayTime='Monday 3:10 AM'/></div>
  
</div>
  </div>
  <div className="row"><div className="col">
  <div className="postCompA"><Mypost profileImg={image15} postImage={image2} name='Ghous Ahemad' dayTime='Firday 1:30 PM'/></div>
  <div className="postCompB"><Mypost profileImg={image16} postText=' The knowlege is light sit amet, consectetur adipisicing elit. Nihilodio minima.' name='Maaz' dayTime='Saturday 9:00 AM'/></div>
  <div className="postCompC"><Mypost profileImg={image17} postImage={image20} postText=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihilodio minima.'  name='Yaqoob' dayTime='Tuseday 11:00 AM'/></div>
</div>
  </div>
  <div className="row"><div className="col">
  <div className="postCompA"><Mypost profileImg={image18} postImage={image3} name='Muhammad Waris' dayTime='Wednesday 5:42 AM'/></div>
  <div className="postCompB"><Mypost profileImg={image19} postText='  the consectetur brown the  jump over the  sit amet,  adipisicing elit. Nihilodio minima.' name='Muhammad Sufiyan' dayTime='Monday 6:40 PM'/></div>
  <div className="postCompC"><Mypost profileImg="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" postImage={image6}  postText=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihilodio minima.'  name='Muneeb' dayTime='Firday 5:00 AM'/></div>
</div>
  </div>
  </div>
    
    </>)
}

export default App;
