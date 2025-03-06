import React, { useState, useEffect } from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import "./OrderTracking.css";

interface OrderData {
  orderNumber: string;
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
  orderDataList: OrderData[];
  orderHistory: OrderHistory[];
  onSelectOrder?: (orderNumber: string) => void; // Optional callback for parent
}

const OrderTracking: React.FC<OrderProps> = ({
  isLoggedIn,
  selectedOrderNumber,
  orderDataList,
  orderHistory,
  onSelectOrder,
}) => {
  const [currentOrder, setCurrentOrder] = useState<OrderData | null>(null);

  // Update the currently selected order when the `selectedOrderNumber` changes
  useEffect(() => {
    if (selectedOrderNumber) {
      const orderDetails = orderDataList.find(
        (order) => order.orderNumber === selectedOrderNumber
      );
      setCurrentOrder(orderDetails || null);
    } else {
      setCurrentOrder(null); // Reset if no selectedOrderNumber
    }
  }, [selectedOrderNumber, orderDataList]);

  // Handle order selection from the history
  const handleOrderClick = (orderNumber: string) => {
    const orderDetails = orderDataList.find(
      (order) => order.orderNumber === orderNumber
    );
    setCurrentOrder(orderDetails || null);

    // Call the parent callback if provided
    if (onSelectOrder) {
      onSelectOrder(orderNumber);
    }
  };

  if (!isLoggedIn) {
    return (
      <>
      <Navbar/>
      <div className="order-tracking">
        <h1>Track Your Order</h1>
        <p className="popup">
          Please{" "}
          <a className="login-redirect" href="./login">
            login
          </a>{" "}
          to view your orders.
        </p>
      </div>
      <Footer/>
      </>
    );
  }

  return (
    <>
    <Navbar/>
    <div className="order-tracking">
      <h1>Track Your Order</h1>

      {/* Order History Table */}
      <div className="order-history">
        <p>
          <strong>Order History:</strong>
        </p>
        <table>
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Delivery Status</th>
            </tr>
          </thead>
          <tbody>
            {orderHistory.map((order, index) => (
              <tr
                className="select-order"
                key={index}
                onClick={() => handleOrderClick(order.orderNumber)}
              >
                <td>{order.orderNumber}</td>
                <td className="status-column">{order.deliveryStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Details Section */}
      {currentOrder && (
        <div className="order-details">
          <h2>Order Details</h2>
          <table className="details-table">
            <tbody>
              <tr>
                <td className="wide-column">
                  <strong>Order Number:</strong>
                </td>
                <td>{currentOrder.orderNumber}</td>
              </tr>
              <tr>
                <td className="wide-column">
                  <strong>Order Date:</strong>
                </td>
                <td>{currentOrder.orderDate}</td>
              </tr>
              <tr>
                <td className="wide-column">
                  <strong>Name:</strong>
                </td>
                <td>{currentOrder.name}</td>
              </tr>
              <tr>
                <td className="wide-column">
                  <strong>Address:</strong>
                </td>
                <td>{currentOrder.address}</td>
              </tr>
              <tr>
                <td className="wide-column">
                  <strong>Total Amount:</strong>
                </td>
                <td>{currentOrder.totalAmount}</td>
              </tr>
              <tr>
                <td className="wide-column">
                  <strong>Delivery Method:</strong>
                </td>
                <td>{currentOrder.deliveryMethod}</td>
              </tr>
              <tr>
                <td className="wide-column">
                  <strong>Payment Method:</strong>
                </td>
                <td>{currentOrder.paymentMethod}</td>
              </tr>
              <tr>
                <td className="wide-column">
                  <strong>Order Status:</strong>
                </td>
                <td>{currentOrder.orderStatus}</td>
              </tr>
              <tr>
                <td className="wide-column">
                  <strong>Order Status History:</strong>
                </td>
                <td>
                  <table>
                    <thead>
                      <tr>
                        <th>Status</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentOrder.orderStatusHistory.map(
                        (history, index) => (
                          <tr key={index}>
                            <td>{history.status}</td>
                            <td>{history.date}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td className="wide-column">
                  <strong>Delivery Date:</strong>
                </td>
                <td>{currentOrder.deliveryDate}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default OrderTracking;


