let order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

function customerInfo(order) {
  // Adicione abaixo as informações necessárias.
  return 'Olá ' + order.order.delivery.deliveryPerson + ' entrega para: ' + order.name + ', Telefone: ' + order.phoneNumber + ', R: ' + order.address.street + ' N: ' + order.address.number + ' AP: ' + order.address.apartment
}

console.log(customerInfo(order));

function orderModifier(order) {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  return 'Olá, ' + order.name + ' o valor total de seu pedido de ' + Object.keys(order.order.pizza) + ' e ' + Object.keys(order.order.drinks) + ' é R$ ' + order.payment.total
}

console.log(orderModifier(order));