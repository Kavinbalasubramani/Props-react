import img1 from './boy.png';
import img2 from './boy1.png';
import img3 from './boy2.png';
import chat from './chat.png';
import './App.css';

function Coreconcepts(props)
{
  return(
    <div className="container">
      <div className="color" style={{backgroundColor : props.bclr}}></div>
      <img src={props.image} alt="..."/>
      <div className="font">
      <h3>{props.name}</h3>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <p>{props.footer}</p>
      <div className="flex">
          <div className="add">{props.follow}</div>
          <div className="chatbox">
            <img src={props.chatbox}/>
          </div>
      
      </div>
      
      </div>
      
    </div>
  )
}
function App() {
  return (
    <>
    <main>
      <section>
          <ol>
              <Coreconcepts 
              image={img1}
              name="John Doe"
              title="Full Stack Developer"
              description="Buy Area ,franciaon" 
              footer="CA" 
              follow="AddFollow" 
              chatbox={chat} 
              bclr='tomato'
              />
              <Coreconcepts 
              image={img2}
              name="John Doe"
              title="Full Stack Developer"
              description="Buy Area ,franciaon" 
              footer="CA" 
              follow="AddFollow" 
              chatbox={chat} 
              bclr='black'        
              />
              <Coreconcepts 
              image={img3}
              name="John Doe"
              title="Full Stack Developer"
              description="Buy Area ,franciaon" 
              footer="CA" 
              follow="AddFollow" 
              chatbox={chat}  
              bclr='orange'       
              /> 
          </ol>
          <ol>
              <Coreconcepts 
              image={img1}
              name="John Doe"
              title="Full Stack Developer"
              description="Buy Area ,franciaon" 
              footer="CA" 
              follow="AddFollow" 
              chatbox={chat}
              bclr='gray'         
              />
              <Coreconcepts 
              image={img3}
              name="John Doe"
              title="Full Stack Developer"
              description="Buy Area ,franciaon" 
              footer="CA" 
              follow="AddFollow" 
              chatbox={chat}
              bclr='purple'         
              />
              <Coreconcepts 
              image={img2}
              name="John Doe"
              title="Full Stack Developer"
              description="Buy Area ,franciaon" 
              footer="CA" 
              follow="AddFollow" 
              chatbox={chat}
              bclr='yellow'         
              /> 
          </ol>
          <ol>
              <Coreconcepts 
              image={img2}
              name="John Doe"
              title="Full Stack Developer"
              description="Buy Area ,franciaon" 
              footer="CA" 
              follow="AddFollow" 
              chatbox={chat} 
              bclr='green'        
              />
              <Coreconcepts 
              image={img1}
              name="John Doe"
              title="Full Stack Developer"
              description="Buy Area ,franciaon" 
              footer="CA" 
              follow="AddFollow" 
              chatbox={chat} 
              bclr='blue'        
              />
              <Coreconcepts 
              image={img3}
              name="John Doe"
              title="Full Stack Developer"
              description="Buy Area ,franciaon" 
              footer="CA" 
              follow="AddFollow" 
              chatbox={chat}
              bclr='red'         
              /> 
          </ol>
          
        </section>
    </main>
      
    </>
        
  );
}

export default App;
