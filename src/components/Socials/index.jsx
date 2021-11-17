import React from "react";

const SocialItem = ({src, alt}) => {
  return (
    <div className="socials__item">
      <img className="socials__image" src={src} alt={alt} />
    </div>
  );
};

const Socials = () => {
  const MockSocials = [
    { src: "../../images/facebook.svg", alt: "facebook" },
    { src: "../../images/instagram.svg", alt: "instagram" },
    { src: "../../images/twitter.svg", alt: "twitter" },
    { src: "../../images/linkedin.svg", alt: "linkedin" },
    { src: "../../images/youtube.svg", alt: "youtube" },
    { src: "../../images/dribble.svg", alt: "dribble" },
  ];
  return (
    <div className="socials">
      {MockSocials.map((social, index) => (
        <SocialItem {...social} key={index}/>
      ))}
    </div>
  );
};
export default Socials;
