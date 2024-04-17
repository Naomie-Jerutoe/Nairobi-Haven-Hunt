import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const Product = (props) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={props.url} />}
  >
    <Meta title={props.location} description={props.price} />
  </Card>
);
export default Product;