import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ProductPresentation } from './components/ProductPresentation';
import { RelatedProducts } from './components/RelatedProducts';
import { StoreResume } from './components/StoreResume';
import { SelectedProductProvider } from './context/SelectedProduct';
import './styles/common.scss';
import './styles/text.scss';

export const App = () => (
  <SelectedProductProvider>
    <Header />
    <div className="container">
      <ProductPresentation />
      <RelatedProducts />
      <StoreResume />
    </div>
    <Footer />
  </SelectedProductProvider>
);
