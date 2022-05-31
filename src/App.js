
import './App.css';
import img_1 from './img/9.png'
import img_2 from './img/10.png'
import img_3 from './img/11.png'
import img_0 from './img/8.png'
import React, { useState } from 'react';

function App() {
  // let [plu, minu] = useState(0)
const [text, setText] = useState(img_0);
  // const [count, setCount] = useState(0);


  return (  <div className='menu'>


<img onClick={() => setText(img_3)} src={img_3} />
<img onClick={() => setText(img_2)} src={img_2} />
<img onClick={() => setText(img_1)} src={img_1} />
<div className='surot1'><img  src={text} /></div>






    
    {/* <h1>{plu}</h1>
    <button onClick={()=>minu(plu+1)}>+</button>
    <button onClick={()=>minu(plu-1)}>-</button>
  

<p>Вы нажали {count} раз</p>
<button onClick={() => setCount(count + 1)}>
  Нажми меня
</button> */}
    </div>

    



  );
}

export default App;
