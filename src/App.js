import Falling from './components/Falling';
import Navbar from './components/Navbar';
import Page from './components/Page';
import icons_color from './components/icons_color.json';

function App() {
  return (
    <div>
      <div className="icons-container">
        {icons_color.map((icon)=>{
          return (
            <Falling emote={icon.emote} size={icon.size} speed={icon.speed} delay={icon.delay} color={icon.color} reverse={icon.reverse} dist={icon.dist}/>
          )
        })}
      </div>
      
      <Navbar/>
      <Page/>
    </div>
  );
}

export default App;
