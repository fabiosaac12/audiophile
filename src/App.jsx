import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ProductPresentation } from './components/ProductPresentation';
import { RelatedProducts } from './components/RelatedProducts';
import { StoreResume } from './components/StoreResume';
import { SelectedProductProvider } from './context/SelectedProduct';
import { Menu, MenuProvider } from './components/Menu';
import './styles/common.scss';
import './styles/text.scss';
import './styles/invisible.scss';

export const App = () => (
  <SelectedProductProvider>
    <MenuProvider>
      <Menu />
      <Header />
      <div className="container">
        <ProductPresentation />
        <RelatedProducts />
        <StoreResume />
      </div>
      <Footer />
    </MenuProvider>
  </SelectedProductProvider>
);
