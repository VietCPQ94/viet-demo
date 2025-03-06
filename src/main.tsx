import 'primeflex/primeflex.css';
import 'primeflex/themes/primeone-light.css';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.scss';


createRoot(document.getElementById('root')!).render(
  <App />
)
