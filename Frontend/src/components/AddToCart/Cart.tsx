import React, { useState } from 'react';
import CartItem from './CartItem';
import './Cart.css';

import s24ultrablack from '../../assets/Samsung/samsung galaxy s24 ultra phantom black.jpg';
import s24ultrasilver from '../../assets/Samsung/samsung galaxy s24 ultra Phantom Silver.jpg';
import s24ultragreen from '../../assets/Samsung/samsung galaxy s24 ultra Phantom Green.jpg';
import sblack from '../../assets/Samsung/samsung galaxy s24 phantom black.jpg';
import ssilver from '../../assets/Samsung/Samsung Galaxy S24 Phantom Silver.jpg';
import syellow from '../../assets/Samsung/Samsung Galaxy S24 titanium yellow .jpg';
import Zfold6black from '../../assets/Samsung/Samsung Galaxy Z Fold6 Phantom Black.jpg';
import zfold6beige from '../../assets/Samsung/Samsung Galaxy Z Fold6 Beige.jpg';
import zfold6Burgundy from '../../assets/Samsung/Samsung Galaxy Z Fold6 Burgundy.jpg';
import zflip6mint from '../../assets/Samsung/Samsung Galaxy Z Flip6 mint.jpg';
import zflip6borapurple from '../../assets/Samsung/Samsung Galaxy Z Flip6 Bora Purple.jpg';
import zflip6cream from '../../assets/Samsung/Samsung Galaxy Z Flip6 Cream.jpg';
import s23ultrablack from '../../assets/Samsung/Samsung Galaxy S23 Ultra Phantom Black.jpg';
import s23ultrasilver from '../../assets/Samsung/Samsung Galaxy S23 Ultra Phantom Silver.jpg';
import s23ultralavender from '../../assets/Samsung/Samsung Galaxy S23 Ultra Phantom lavender.webp';
import s23FEgraphite from '../../assets/Samsung/Samsung Galaxy S23 FE Graphite.jpg';
import s23FElavender from '../../assets/Samsung/Samsung Galaxy S23 FE Lavender.jpg';
import s23FEolive from '../../assets/Samsung/Samsung Galaxy S23 FE Olive.jpg';
import A555Gblack from '../../assets/Samsung/Samsung Galaxy A55 5G Awesome Black.jpg';
import A555Gviolet from '../../assets/Samsung/Samsung Galaxy A55 5G Awesome violet.jpg';
import A555Gwhite from '../../assets/Samsung/Samsung Galaxy A55 5G Awesome white.jpg';
import M555GIcyblue from '../../assets/Samsung/Samsung Galaxy M55 5G Icy Blue.jpg';
import M555GBlazing from '../../assets/Samsung/Samsung Galaxy M55 5G Blazing Black.jpg';

import pro9XLobsidian from '../../assets/Pixel/Google Pixel 9 Pro XL Obsidian.jpg';
import pro9XLporcelain from '../../assets/Pixel/Google Pixel 9 Pro XL Porcelain.jpg';
import pro9XLhazel from '../../assets/Pixel/Google Pixel 9 Pro XL Hazel.jpg';
import pro9FoldObsidian from '../../assets/Pixel/Google Pixel 9 Pro Fold Obsidian.jpg';
import pro9Foldporcelain from '../../assets/Pixel/Google Pixel 9 Pro Fold Porcelain.jpg';
import pro8obsidian from '../../assets/Pixel/Google Pixel 8 Pro Obsidian.jpg';
import pro8bay from '../../assets/Pixel/Google Pixel 8 Pro bay.jpg';
import Lemongrass8 from '../../assets/Pixel/Google Pixel 8 Lemongrass.jpg';
import Obsidian8 from '../../assets/Pixel/Google Pixel 8 Obsidian.jpg';
import porcelain8 from '../../assets/Pixel/Google Pixel 8 porcelain.jpg';
import A8Obsidian from '../../assets/Pixel/Google Pixel 8A Obsidian.jpg';
import A8porcelain from '../../assets/Pixel/Google Pixel 8A porcelain.avif';
import pro7obsidian from '../../assets/Pixel/google pixel 7 pro obsidian.jpg';
import pro7hazel from '../../assets/Pixel/Google Pixel 7 Pro hazel.jpg';
import pro7snow from '../../assets/Pixel/Google Pixel 7 Pro snow.jpg';

import spromaxblack from '../../assets/Apple/iPhone 16 Pro Max Black Titanium.jpg';
import spromaxwhite from '../../assets/Apple/iPhone 16 Pro Max White Titanium.jpg';
import spromaxdesert from '../../assets/Apple/iPhone 16 Pro Max Desert Titanium.jpg';
import spromaxnatural from '../../assets/Apple/iPhone 16 Pro Max Natural Titanium.jpg';
import splusblack from '../../assets/Apple/iPhone 16 Plus black.jpg';
import spluspink from '../../assets/Apple/iPhone 16 Plus Pink.jpg';
import splusteal from '../../assets/Apple/iPhone 16 Plus teal.jpg';
import splusultramarine from '../../assets/Apple/iPhone 16 Plus Ultramarine.jpg';
import spluswhite from '../../assets/Apple/iPhone 16 Plus white.jpeg';
import fipromaxblack from '../../assets/Apple/iPhone 15 pro max black Titanium.jpg';
import fipromaxwhite from '../../assets/Apple/iPhone 15 pro max White Titanium.jpg';
import fipromaxblue from '../../assets/Apple/iPhone 15 Pro Max blue.jpg';
import fipromaxnatural from '../../assets/Apple/iPhone 15 pro max Natural Titanium.jpg';
import fifplusblue from '../../assets/Apple/iPhone 15 Plus blue.webp';
import fifpluspink from '../../assets/Apple/iPhone 15 Plus pink.jpg';
import fifplusyellow from '../../assets/Apple/iPhone 15 Plus yellow.jpg';
import foplusmidnight from '../../assets/Apple/iPhone 14 Plus midnight.webp';
import fopluspurple from '../../assets/Apple/iPhone 14 Plus purple.jpg';
import foplusred from '../../assets/Apple/iPhone 14 Plus red.jpg';
import foplusstarlight from '../../assets/Apple/iPhone 14 Plus starlight.webp';
import foplusyellow from '../../assets/Apple/iPhone 14 Plus yellow.jpg';

interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const Cart: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    // Samsung 
      { id:'SA551',name: 'Samsung Galaxy A55 5G', price: 120000, quantity: 0 , imageUrl: A555Gblack},
      { id:'SA552',name: 'Samsung Galaxy A55 5G', price: 120000, quantity: 0 , imageUrl: A555Gviolet},
      { id:'SA553',name: 'Samsung Galaxy A55 5G', price: 120000, quantity: 0 , imageUrl: A555Gwhite},
      { id:'SM551',name: 'Samsung Galaxy M55 5G', price: 170000, quantity: 0 , imageUrl: M555GIcyblue},
      { id:'SM552',name: 'Samsung Galaxy M55 5G', price: 170000, quantity: 0 , imageUrl: M555GBlazing},
      { id:'SS231', name: 'Samsung Galaxy S23 FE', price: 200000, quantity: 0 , imageUrl: s23FEgraphite},
      { id:'SS232', name: 'Samsung Galaxy S23 FE', price: 200000, quantity: 0 , imageUrl: s23FElavender},
      { id:'SS233', name: 'Samsung Galaxy S23 FE', price: 200000, quantity: 0 , imageUrl: s23FEolive},
      { id:'SS23U1',name: 'Samsung Galaxy S23 Ultra', price: 400000, quantity: 0 , imageUrl: s23ultrablack},
      { id:'SS23U2',name: 'Samsung Galaxy S23 Ultra', price: 400000, quantity: 0 , imageUrl: s23ultralavender },
      { id:'SS23U3',name: 'Samsung Galaxy S23 Ultra', price: 400000, quantity: 0 , imageUrl: s23ultrasilver},
      { id:'SG241',name: 'Samsung Galaxy S24', price: 300000, quantity: 0, imageUrl: sblack}, 
      { id:'SG242',name: 'Samsung Galaxy S24', price: 300000, quantity: 0, imageUrl: ssilver }, 
      { id:'SG243',name: 'Samsung Galaxy S24', price: 300000, quantity: 0, imageUrl: syellow }, 
      { id:'SS24U1', name: 'Samsung Galaxy S24 Ultra', price: 450000, quantity: 0, imageUrl: s24ultrablack },
      {id:'SS24U2', name: 'Samsung Galaxy S24 Ultra', price: 450000, quantity: 0, imageUrl: s24ultragreen },
      {id:'SS24U3', name: 'Samsung Galaxy S24 Ultra', price: 450000, quantity: 0, imageUrl: s24ultrasilver}, // Add imageUrl
      { id:'SZFO1' ,name: 'Samsung Galaxy Z Fold6', price: 70000, quantity: 0 , imageUrl: zfold6beige},
      { id:'SZFO2' ,name: 'Samsung Galaxy Z Fold6', price: 70000, quantity: 0 , imageUrl: zfold6Burgundy},
      { id:'SZFO3',name: 'Samsung Galaxy Z Fold6', price: 70000, quantity: 0 , imageUrl: Zfold6black},
      { id:'SFL1' ,name: 'Samsung Galaxy Z Flip6', price: 420000, quantity: 0 , imageUrl: zflip6borapurple},
      { id:'SFL2' ,name: 'Samsung Galaxy Z Flip6', price: 420000, quantity: 0 , imageUrl: zflip6cream},
      { id:'SFL3', name: 'Samsung Galaxy Z Flip6', price: 420000, quantity: 0 , imageUrl: zflip6mint},
      //{ name: 'Samsung Galaxy A35 5G', price: 100000, quantity: 0 , imageUrl: '/assets/phone.png'},

      //pixel
      { id:'P7P1' ,name: 'Google Pixel 7 Pro', price: 220000, quantity: 0 , imageUrl: pro7hazel}, 
      { id:'P7P2' ,name: 'Google Pixel 7 Pro', price: 220000, quantity: 0 , imageUrl: pro7obsidian}, 
      { id:'P7P3' ,name: 'Google Pixel 7 Pro', price: 220000, quantity: 0 , imageUrl: pro7snow}, 
      { id:'P81' ,name: 'Google Pixel 8 ', price: 279900, quantity: 0 , imageUrl: Lemongrass8 },
      { id:'P82' ,name: 'Google Pixel 8 ', price: 279900, quantity: 0 , imageUrl: Obsidian8},
      { id:'P83' ,name: 'Google Pixel 8 ', price: 279900, quantity: 0 , imageUrl: porcelain8},
      { id:'P8P1' ,name: 'Google Pixel 8 Pro', price: 212950, quantity: 0 , imageUrl: pro8bay},
      { id:'P8P2' ,name: 'Google Pixel 8 Pro', price: 212950, quantity: 0 , imageUrl: pro8obsidian},
      { id:'P8A1' , name: 'Google Pixel 8A', price: 150000, quantity: 0 , imageUrl: A8Obsidian},
      { id:'P8A2' , name: 'Google Pixel 8A', price: 150000, quantity: 0 , imageUrl: A8porcelain },
      { id:'P9PF1' ,name: 'Google Pixel 9 Pro Fold', price: 560000, quantity: 0 , imageUrl: pro9FoldObsidian},
      { id:'P9PF2' ,name: 'Google Pixel 9 Pro Fold', price: 560000, quantity: 0 , imageUrl: pro9Foldporcelain},
      { id:'P9PX1' ,name: 'Google Pixel 9 Pro XL', price: 455000, quantity: 0 , imageUrl: pro9XLhazel}, 
      { id:'P9PX2' ,name: 'Google Pixel 9 Pro XL', price: 455000, quantity: 0 , imageUrl: pro9XLobsidian}, 
      { id:'P9PX3' ,name: 'Google Pixel 9 Pro XL', price: 455000, quantity: 0 , imageUrl: pro9XLporcelain}, 
      //{ name: 'Google Pixel 9 Pro', price: 287900, quantity: 0 , imageUrl: '/assets/phone.png'},
      //{ name: 'Google Pixel 9', price: 264999, quantity: 0 , imageUrl: '/assets/phone.png'},

      //iphone
      { id:'I16PM1' ,name: 'iPhone 16 Pro Max', price: 684900, quantity: 0 , imageUrl: spromaxwhite},
      { id:'I16P2' ,name: 'iPhone 16 Pro Max', price: 684900, quantity: 0 , imageUrl: spromaxnatural}, 
      { id:'I16P3' ,name: 'iPhone 16 Pro Max', price: 684900, quantity: 0 , imageUrl: spromaxdesert}, 
      { id:'I16P4' ,name: 'iPhone 16 Pro Max', price: 684900, quantity: 0 , imageUrl: spromaxblack}, 
      //{ name: 'iPhone 16 Pro', price: 649000, quantity: 0 , imageUrl: '/assets/phone.png'},
      { id:'I16P1' ,name: 'iPhone 16 Plus', price: 504900, quantity: 0 , imageUrl: spluswhite},
      {id:'I16P2' , name: 'iPhone 16 Plus', price: 504900, quantity: 0 , imageUrl: splusultramarine},
      { id:'I16P3' ,name: 'iPhone 16 Plus', price: 504900, quantity: 0 , imageUrl: splusteal},
      { id:'I16P4' ,name: 'iPhone 16 Plus', price: 504900, quantity: 0 , imageUrl: spluspink},
      { id:'I16P5' ,name: 'iPhone 16 Plus', price: 504900, quantity: 0 , imageUrl: splusblack},
      { id:'I15PM1',name: 'iPhone 15 Pro Max', price: 664900, quantity: 0 , imageUrl: fipromaxblack},
      { id:'I15PM2',name: 'iPhone 15 Pro Max', price: 664900, quantity: 0 , imageUrl: fipromaxblue},
      { id:'I15PM3',name: 'iPhone 15 Pro Max', price: 664900, quantity: 0 , imageUrl: fipromaxnatural},
      { id:'I15PM4',name: 'iPhone 15 Pro Max', price: 664900, quantity: 0 , imageUrl: fipromaxwhite},
      //{ id:'I15PMBL',name: 'iPhone 15 Pro', price: 619900, quantity: 0 , imageUrl: 'src/assets/Apple/Apple/iPhone 15 Pro Max blue.jpg'},
      { id:'I15P1',name: 'iPhone 15 Plus ', price: 489900, quantity: 0 , imageUrl: fifplusblue},
      { id:'I15P2',name: 'iPhone 15 Plus ', price: 489900, quantity: 0 , imageUrl: fifpluspink},
      { id:'I15P3',name: 'iPhone 15 Plus ', price: 489900, quantity: 0 , imageUrl: fifplusyellow},
      //{ id:'I15PMWH',name: 'iPhone 15', price: 449900, quantity: 0 , imageUrl: 'src/assets/Apple/Apple/iPhone 15 pro max White Titanium.jpg'},
      { id:'I14P1', name: 'iPhone 14 Plus', price: 459900, quantity: 0 , imageUrl: foplusmidnight}, 
      { id:'I14P2',name: 'iPhone 14 Plus', price: 459900, quantity: 0 , imageUrl: fopluspurple},   
      { id:'I14P3',name: 'iPhone 14 Plus', price: 459900, quantity: 0 , imageUrl: foplusred},   
      { id:'I14P4',name: 'iPhone 14 Plus', price: 459900, quantity: 0 , imageUrl: foplusstarlight},  
      { id:'I14P5',name: 'iPhone 14 Plus', price: 459900, quantity: 0 , imageUrl: foplusyellow},   
      //{ name: 'iPhone 14 ', price: 409900, quantity: 0, imageUrl: '/assets/phone.png' },   

     //vivo
     { id:'VV201',name: 'Vivo V20 ', price: 80000, quantity: 0, imageUrl: 'src/assets/vivo/vivo/Vivo V20  Sunset Melody.webp' },   
     { id:'VV202',name: 'Vivo V20 ', price: 80000, quantity: 0, imageUrl: 'src/assets/vivo/vivo/Vivo V20 Midnight Jazz.jpg' },   
     { id:'VV20SE1',name: 'Vivo V20 SE', price: 85000, quantity: 0, imageUrl: 'src/assets/vivo/vivo/Vivo V20 SE Gravity Black.jpg' },   
     { id:'VV20SE2',name: 'Vivo V20 SE', price: 85000, quantity: 0, imageUrl: 'src/assets/vivo/vivo/Vivo V20 SE Oxygen Blue.jpg' },   
     { id:'VV211',name: 'Vivo V21 5G', price: 95000, quantity: 0, imageUrl: 'src/assets/vivo/vivo/Vivo V21 5G Dusk Blue.jpg' },   
     { id:'VV212',name: 'Vivo V21 5G', price: 95000, quantity: 0, imageUrl: 'src/assets/vivo/vivo/Vivo V21 5G Sunset Dazzle.jpg' },   
     { id:'VV291',name: 'Vivo V29 5G', price: 130000, quantity: 0 , imageUrl: 'src/assets/vivo/vivo/Vivo V29 5G Forest Black.jpg'},
     { id:'VV292',name: 'Vivo V29 5G', price: 130000, quantity: 0 , imageUrl: 'src/assets/vivo/vivo/Vivo V29 5G ice Creek Blue.jpg'},
     { id:'VV293',name: 'Vivo V29 5G', price: 130000, quantity: 0 , imageUrl: 'src/assets/vivo/vivo/Vivo V29 5G Magic Maroon.jpeg'},
     { id:'VV294',name: 'Vivo V29 5G', price: 130000, quantity: 0 , imageUrl: 'src/assets/vivo/vivo/Vivo V29 5G Rose Pink.jpg'},
     { id:'VY11',name: 'Vivo Y1s 3GB', price: 38000, quantity: 0 , imageUrl: 'src/assets/vivo/vivo/Vivo Y1s 3GB Aurora Blue.jpg'},   
     { id:'VY12',name: 'Vivo Y1s 3GB', price: 38000, quantity: 0 , imageUrl: 'src/assets/vivo/vivo/Vivo Y1s 3GB Olive Black.jpg'},   
     { id:'VY171',name: 'Vivo Y17S', price: 60000, quantity: 0, imageUrl: 'src/assets/vivo/vivo/Vivo Y17S Forest Green.png' },
     { id:'VY172',name: 'Vivo Y17S', price: 60000, quantity: 0, imageUrl: 'src/assets/vivo/vivo/Vivo Y17S Glitter Purple.png' },
     { id:'VY191',name: 'Vivo Y19s', price: 52000, quantity: 0 , imageUrl: 'src/assets/vivo/vivo/Vivo Y19s Glossy Black.jpg'},   
     { id:'VY192',name: 'Vivo Y19s', price: 52000, quantity: 0 , imageUrl: 'src/assets/vivo/vivo/Vivo Y19s Pearl Silver.jpg'},   
     { id:'VY221',name: 'Vivo Y22s', price: 65000, quantity: 0 , imageUrl: 'src/assets/vivo/vivo/Vivo Y22s  Starlit Blue.jpg'},   
     { id:'VY222',name: 'Vivo Y22s', price: 65000, quantity: 0 , imageUrl: 'src/assets/vivo/vivo/Vivo Y22s  Summer Cyan.jpg'},   
     { id:'VY271',name: 'Vivo Y27S', price: 95000, quantity: 0 , imageUrl: 'src/assets/vivo/vivo/Vivo Y27S Burgundy Black.jpg'},   
     { id:'VY272',name: 'Vivo Y27S', price: 95000, quantity: 0 , imageUrl: 'src/assets/vivo/vivo/Vivo Y27S Garden Green.png'},  
     
  
     //xiaomi
     { id:'X14U1',name: 'Xiaomi 14 Ultra', price: 399900, quantity: 0, imageUrl: 'src/assets/Xiaomi/Xiaomi/Xiaomi 14 Ultra black.jpg' }, 
     { id:'X14U2',name: 'Xiaomi 14 Ultra', price: 399900, quantity: 0, imageUrl: 'src/assets/Xiaomi/Xiaomi/Xiaomi 14 Ultra white.jpg' }, 
     { id:'X12P1',name: 'Xiaomi  Redmi Note 12 Pro', price: 89900, quantity: 0 , imageUrl: 'src/assets/Xiaomi/Xiaomi/Xiaomi Redmi Note 12 Pro Frosted Blue.jpg'},  
     { id:'X12P2',name: 'Xiaomi  Redmi Note 12 Pro', price: 89900, quantity: 0 , imageUrl: 'src/assets/Xiaomi/Xiaomi/Xiaomi Redmi Note 12 Pro Onyx Black.png'},  
     { id:'X12P3',name: 'Xiaomi  Redmi Note 12 Pro', price: 89900, quantity: 0 , imageUrl: 'src/assets/Xiaomi/Xiaomi/Xiaomi Redmi Note 12 Pro Stardust Purple.jpg'},  
     { id:'X12PP1',name: 'Xiaomi  Redmi Note 12 Pro+', price: 120000, quantity: 0, imageUrl: 'src/assets/Xiaomi/Xiaomi/Xiaomi Redmi Note 12 pro+  Midnight Black.jpg' },
     {  id:'X12PP2',name: 'Xiaomi  Redmi Note 12 Pro+', price: 120000, quantity: 0, imageUrl: 'src/assets/Xiaomi/Xiaomi/Xiaomi Redmi Note 12 Pro+ Polar White.jpg' },
     {  id:'X12PP3',name: 'Xiaomi  Redmi Note 12 Pro+', price: 120000, quantity: 0, imageUrl: 'src/assets/Xiaomi/Xiaomi/Xiaomi Redmi Note 12 Pro+ Sky Blue.jpg' },
     { id:'X121',name: 'Xiaomi Redmi Note 12S', price: 69500, quantity: 0 , imageUrl: 'src/assets/Xiaomi/Xiaomi/Xiaomi Redmi Note 12S ice blue.png'},   
     { id:'X122',name: 'Xiaomi Redmi Note 12S', price: 69500, quantity: 0 , imageUrl: 'src/assets/Xiaomi/Xiaomi/Xiaomi Redmi Note 12S Onyx Black.jpg'},   
     { id:'X123',name: 'Xiaomi Redmi Note 12S', price: 69500, quantity: 0 , imageUrl: '/assets/phone.png'},   

    
  ]);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setItems(updatedItems);
  };

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-container">
      <div className="cart-summary">
        <div className="total-items">
          Items Selected: <span id="total-items">{totalItems}</span>
        </div>
        <div className="cart-total">
          Total: <span id="total-price">{totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'LKR' })}</span>
        </div>
        <button id="order-now">Order Now</button>
      </div>
      <div className="product-list">
        {items.map(item => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            imageUrl={item.imageUrl}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
