const ordersRepository = require('../repositories/orders');
const shoppingCartRepository = require('../repositories/shopping-cart');
const db = require('../models');
const nodemailer = require('nodemailer');
const ServerError = require('../errors/server-error');

module.exports.create = async (orderData, userData) => {
    const newOrder = await ordersRepository.create(orderData, userData);
    const orderItems = orderData.items.map(item => ({
        smartphoneId: item.smartphoneId,
        amount: item.amount,
        orderId: newOrder.id
    }))
    await db.OrdersSmartphones.bulkCreate(orderItems);
    await shoppingCartRepository.delete({
        userId: userData.id
    });
    return newOrder;
};

module.exports.update = async (orderId, data, userData) => {
    const [updatedRows, updatedOrder] = await ordersRepository.update(orderId, data);
    const order = await ordersRepository.get(orderId);

    const message = () => {
        if (data.status === 'completed') {
            return '<h3>Thank for your purchase</h3>'
        } else if (data.status === 'confirmed') {
            return '<h3>Your order is on the way</h3>'
        };
    };

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'examtest733@gmail.com',
            pass: 'qwerty123qwerty',
        },
    });
    
    await transporter.sendMail({
        from: 'PSHOP <bladeb071@gmail.com>',
        to: `${order.email}`,
        subject: 'ORDER',
        text: ``,
        html:
        `<div>
            <h1>ORDER №${orderId.id}</h1>
            <h3>Your order was ${data.status}</h3>
            ${message()}
            <img src = 'https://imgur.com/ndG7Ko2'/>
        </div>`,
    });

    return order;
};