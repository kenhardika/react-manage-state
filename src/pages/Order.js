import React, { useState } from 'react';
import Product from '../components/Product';
import Store from '../components/Store';

export default function Order() {
    const mockData = [{
        store: "Nike Store Indonesia",
        logo: "https://storage.googleapis.com/smarketing-prod/products/5Apr_Logo Robotok_icon_no border.png",
        city: "Bandung",
        items: [
          {
            price: 125000,
            strokePrice: 100000,
            total: 1,
            name: "Nike Air Jordan Black & White",
            image:
              "https://storage.googleapis.com/smarketing-prod/products/5Apr_Logo Robotok_icon_no border.png",
            checked: false,
          },
          {
            price: 250000,
            total: 1,
            name: "Nike Air Jordan Hypebeast",
            image:
              "https://storage.googleapis.com/smarketing-prod/products/5Apr_Logo Robotok_icon_no border.png",
            checked: false,
          },
        ],
      },
      {
        store: "IKEA Kota Baru Parahyangan",
        logo: "https://storage.googleapis.com/smarketing-prod/products/5Apr_Logo Robotok_icon_no border.png",
        city: "Bandung",
        items: [
          {
            price: 100000,
            total: 1,
            name: "Winter Jacket",
            image:
              "https://storage.googleapis.com/smarketing-prod/products/5Apr_Logo Robotok_icon_no border.png",
            checked: false,
          },
          {
            price: 25000,
            total: 1,
            name: "White Dress Crystal",
            image:
              "https://storage.googleapis.com/smarketing-prod/products/5Apr_Logo Robotok_icon_no border.png",
            checked: false,
          },
        ],
      },
    ];

    const [data, setData] = useState(mockData);
    console.log(data)
    return (
        <div className='h-full bg-scroll bg-gray-300'>
            <div className='w-full h-screen flex flex-col justify-center items-center'>
                <div className=''>
                    select all section
                </div>
                {
                    data?.map((item, index) => 
                            <Store key={index} storeName={item.store}>
                                {
                                    item.items.map((detailItem, index) => 
                                            <Product key={index} 
                                                productName={detailItem.name}/>
                                    )
                                }
                            </Store>
                    )
                }
            </div>                
        </div>
    );
}
