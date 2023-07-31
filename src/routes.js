import { Menu } from 'components/Menu';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Cardapio/Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaPadrao from 'components/Menu/PaginaPadrao';


export default function AppRouter() {
  return (
    <main>
      <BrowserRouter>
        <Menu/>

        <Routes>
          <Route path='/' element={<PaginaPadrao/>}>
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
          </Route>
        </Routes>
        
      </BrowserRouter>
    </main>
  );
}