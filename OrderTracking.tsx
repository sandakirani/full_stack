import React from "react";
import "./OrderTracking.css";

interface OrderData {
  orderDate: string;
  name: string;
  address: string;
  totalAmount: string;
  deliveryMethod: string;
  paymentMethod: string;
  orderStatus: string;
  orderStatusHistory: { status: string; date: string }[];
  deliveryDate: string;
}

interface OrderHistory {
  orderNumber: string;
  deliveryStatus: string;
}

interface OrderProps {
  isLoggedIn: boolean;
  selectedOrderNumber?: string;
  orderData?: OrderData;
  orderHistory: OrderHistory[];
}

const OrderTracking: React.FC<OrderProps> = ({
  isLoggedIn,
  selectedOrderNumber,
  orderData,
  orderHistory,
}) => {
  if (!isLoggedIn) {
    return (
      <div className="order-tracking">
        <h1>Track Your Order</h1>
        <button className="popup" onClick={() => window.location.href = '/login'}>Please login to view your orders.</button>
      </div>
    );
  }

  return (
    <div className="order-tracking">
      <h1>Track Your Order</h1>
      {selectedOrderNumber && orderData ? (
        <div>

        <div className="order-history">
          <p><strong>Order History:</strong></p>
          <table>
            {orderHistory.map((order, index) => (
              <tr className="select-order" key={index}>
                <td>Order Number: {order.orderNumber}</td> 
                <td className="status-column">{order.deliveryStatus}</td>
              </tr>
            ))}
          </table>
        </div>

          <div className="order-details">
          <table className="details-table">
            <tbody>
              <tr>
                <td className="wide-column"><strong>Order Number:</strong></td>
                <td>{selectedOrderNumber}</td>
              </tr>
              <tr>
                <td className="wide-column"><strong>Order Date:</strong></td>
                <td>{orderData.orderDate}</td>
              </tr>
              <tr>
                <td className="wide-column"><strong>Name:</strong></td>
                <td>{orderData.name}</td>
              </tr>
              <tr>
                <td className="wide-column"><strong>Address:</strong></td>
                <td>{orderData.address}</td>
              </tr>
              <tr>
                <td className="wide-column"><strong>Total Amount:</strong></td>
                <td>{orderData.totalAmount}</td>
              </tr>
              <tr>
                <td className="wide-column"><strong>Delivery Method:</strong></td>
                <td>{orderData.deliveryMethod}</td>
              </tr>
              <tr>
                <td className="wide-column"><strong>Payment Method:</strong></td>
                <td>{orderData.paymentMethod}</td>
              </tr>
              <tr>
                <td className="wide-column"><strong>Order Status:</strong></td>
                <td>{orderData.orderStatus}</td>
              </tr>
              <tr>
                <td className="wide-column"><strong>Order Status History:</strong></td>
                <td>
                  <table className="order-status-history">
                  {orderData.orderStatusHistory.map((history, index) => (
                  <tr key={index}>
                    <td className="wide-column">{history.status}:</td> 
                    <td>{history.date}</td>
                  </tr>
                ))}
                  </table>
                </td>
              </tr>
              <tr>
                <td className="wide-column"><strong>Delivery Date:</strong></td>
                <td>{orderData.deliveryDate}</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      ) : (
        <div className="order-history">
          <p><strong>Order History:</strong></p>
          <table>
            {orderHistory.map((order, index) => (
              <tr className="select-order" key={index}>
                <td>Order Number: {order.orderNumber}</td> 
                <td className="status-column">{order.deliveryStatus}</td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;
