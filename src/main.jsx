
import ReactDOM from 'react-dom';
import TodoApp from "./TodoApp";

function App() {
  return <TodoApp />;
}

// Utilisation de createRoot au lieu de render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
