import type { Schema, Attribute } from '@strapi/strapi';

export interface OrderOrderItem extends Schema.Component {
  collectionName: 'components_order_order_items';
  info: {
    displayName: 'OrderItem';
    icon: 'archive';
  };
  attributes: {
    product: Attribute.Relation<
      'order.order-item',
      'oneToOne',
      'api::product.product'
    >;
    price: Attribute.Integer;
    quantity: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'order.order-item': OrderOrderItem;
    }
  }
}
