import { Menu } from 'components/Menu';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaPadrao from 'components/PaginaPadrao';
import Sobre from 'pages/Sobre';


export default function AppRouter() {
  return (
    <main>
      <BrowserRouter>
        <Menu/>

        <Routes>
          <Route path='/' element={<PaginaPadrao/>}>
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<Sobre />}></Route>
          </Route>
        </Routes>
        
      </BrowserRouter>
    </main>
  );
}