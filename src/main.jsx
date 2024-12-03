import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ItemsProvider } from './context/items.jsx'; // ItemsProvider'dan foydalanamiz
import Root from './root/root.jsx';

createRoot(document.getElementById('root')).render(
  <ItemsProvider> {/* Contextni to'g'ri ishlatish */}
    <div className="w-full h-full bg-[#FAFAFD]">
      <Root/>
    </div>
  </ItemsProvider>
);
