
import './App.css';
import Board from './components/Board';
import Toolbar from './components/Toolbar';
import Toolbox from './components/Toolbox';
import BoardProvider from './store/BoardProvider';
// import ToolboxProvider from './store/toolboxProvider';
import ToolboxProvider from './store/ToolboxProvider';
import Author from './Author/Author';




function App() { 

  return (
    <>
    <BoardProvider>
      <ToolboxProvider>
      <Toolbar />
      <Board />
      <Toolbox />
       </ToolboxProvider>
      </BoardProvider>
      <Author/>
      </>
  );
}

export default App;
