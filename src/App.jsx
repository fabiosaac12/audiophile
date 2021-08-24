import { Footer } from './components/Footer';
import { Header } from './components/Header/Header';
import { ProductPresentation } from './components/ProductPresentation/ProductPresentation';
import { SelectedProductProvider } from './context/SelectedProduct/SelectedProductProvider';
import './styles/common.scss';
import './styles/text.scss';

export const App = () => (
  <SelectedProductProvider>
    <Header />
    <div className="container">
      <ProductPresentation />
    </div>
    <Footer />
  </SelectedProductProvider>
);
