// Aduio. //
import frogRibbit from "./assests/frog-ribbit-made-with-Voicemod.mp3";

const FrogLogo = ({ frogLogo }) => {
  return (
    <div className="frog-logo">
      <div className="frog-logo-wrap">
        <img src={frogLogo.sourceUrl} alt="Orange Frog Productions." />
        <button
          onClick={() => {
            const audio = document.getElementById("audio");
            audio.play();
          }}
          type="button"
        ></button>
        <audio id="audio" src={frogRibbit}></audio>
      </div>
    </div>
  );
};

export default FrogLogo;
