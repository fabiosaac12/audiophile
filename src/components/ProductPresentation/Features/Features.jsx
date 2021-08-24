import { useSelectedProduct } from '../../../context/SelectedProduct';

export const Features = () => {
  const { selectedProduct } = useSelectedProduct();

  return (
    <>
      <div className="h2">Features</div>
      <div className="p">
        {selectedProduct.features.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </>
  );
};
