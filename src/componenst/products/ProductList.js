import React, { useState } from 'react';
import Seed from './seed';
import Product from './Product'

const ProductList = () => {

  const [list, setList] = useState(Seed.list);

  console.log(Seed.list[0].productImageUrl)

  const handleProductUpVote = (productId) => {
    const nextList = list.map((prod) => {

      if (prod.id === productId) {
        return Object.assign({}, prod, {
          votes: prod.votes + 1,
        });
      } else {
        return prod;
      }
    });
    setList(nextList)
  }

  const productComponentsJSX = list
    .sort((a, b) => (
      b.votes - a.votes))
    .map(item => (
      <Product
        key={'item-' + item.id}
        id={item.id}
        title={item.title}
        description={item.description}
        url={item.url}
        votes={item.votes}
        submitterAvatarUrl={item.submitterAvatarUrl}
        productImageUrl={item.productImageUrl}
        handleProductUpVote={handleProductUpVote}
      />
    )
    );

  return (
    <div>
      <h2 className="text-center mt-3 mb-3">Popular Products</h2>
      {/* <img src={Seed.list[0].productImageUrl} alt=""/> */}
      <hr />
      {productComponentsJSX}
    </div>
  );
};

export default ProductList;