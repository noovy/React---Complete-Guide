import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>Proucts page</h1>
      <ul>
        <li><Link to='/products/p1'>Product</Link></li>
        <li><Link to='/products/p2'>Product</Link></li>
        <li><Link to='/products/p3'>Product</Link></li>
        <li><Link to='/products/p4'>Product</Link></li>
      </ul>
    </section>
  );
};

export default Products;
