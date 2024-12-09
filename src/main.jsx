import { StrictMode} from 'react-dom/client'
import { createRoot} from 'react-dom/client'
import App from './App'
import "./global.css";
createRoot(document.getElementById('root')).render(<App/>)