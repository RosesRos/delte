// import logo from './logo.svg';

//components
import Card from './components/Card';
import { JssProvider } from 'react-jss';
import { AnimatePresence } from 'framer-motion';

//styles
import './App.scss';

const generateId = (rule) => `${rule.key}`;

function App() {
  return (
    <JssProvider generateId={generateId}>
      <AnimatePresence exitBeforeEnter>
        <div className="App">
          <Card />
        </div>
      </AnimatePresence>
    </JssProvider>
  );
}

export default App;
