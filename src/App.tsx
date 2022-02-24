import React, {useState,useMemo,useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import ThemeContext from './context';
import Main from './main';
import Header from './header';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};


function App() {
  const [theme, setTheme] = useState("");
  const value = useMemo(() => ({ theme:theme, setTheme:setTheme }), [theme]);
  const toggle = useMemo(()=>(console.log('render')),[theme])
  const toggle2 = useMemo(()=>console.log('hi'),[theme]);

  class Tc {
    a:number
    b:number
    static c = 3;
    constructor(){
      this.a=1;
      this.b=2;
    }

    add():number{
      this.a = this.a + 1;

      console.log('a',this.a);
      return this.a = this.a + 1;
    }
    
    public get getA() : number {
      return this.a;
    }
    
  }
  const d = new Tc();
  const cls:Tc = useMemo(()=>new Tc(),[])
  console.log(cls.getA)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          <button onClick={()=>cls.add()}>{cls.getA}</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ThemeContext.Provider value={value}>
        <Header />
        <Main />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
