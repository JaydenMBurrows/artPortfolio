import Header from './Header.jsx'
import Card from './Card.jsx'

function App() {

  return(
    <div>
      <Header/>
      <div className="art">
        <h2 id="Traditional"> Traditional Art </h2>
        <Card url="ballerinaGuy" desc="Sketch of a man done in pencil"/>
        <Card url="blueWaterColorGuy" desc="Painting of man done in watercolor"/>
        <Card url="bellaSunlight" desc="Painting of dog done in watercolor"/>
        <Card url="davidMazousTux" desc="A sketch of David Mazous smiling"/>
        <Card url="davidMazousSerious" desc="A sketch of David Mazous as Bruce Wayne"/>
        <Card url="funnyDavidMazous" desc="A sketch of David Mazous making a weird expression"/>
        <Card url="itClown" desc="An inked sketch of Pennywise the Clown"/>
        <Card url="pedroPascal" desc="A pencil drawing of Pedro Pascal"/>
        <Card url="trashRaccoon" desc="A pencil sketch of a Raccoon in a garbage can"/>
        
        <h2 id="Digital"> Digital Art </h2>
        <Card url="astronaut" desc="Astronaut done in pixel art"/>
        <Card url="gooseWallpaper" desc="A series of geese in pixel art"/>
        
        <h2 id="Photography"> Photography </h2>
        <Card url="flowerPhoto" desc="Photo of a flowering tree"/>
        <Card url="sky" desc="A photo of the sky and some clouds"/>
        <Card url="moon" desc="A photo of the moon behind some clouds"/>
        <Card url="lightHouse" desc="A photo of a lighthouse"/>
      </div>
    </div>
  );
}

export default App
