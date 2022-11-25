import React, { useCallback, useState } from 'react';
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

    const onChangeStoreCb = (checked, index) => {
      setData((cur) => {
        const newData = [...cur];
        const items = newData[index].items.map((item) => {
          item.checked = checked;
          return { ...item };
        });
        newData[index] = { ...newData[index],
          items: [...items],
        };
        return newData;
      });
    }

    const onChangeProductCb = (indexStore, indexProduct, data) => {
      setData((cur) => {
        const newData = [...cur];
        const newItems = { ...newData[indexStore] };
        newItems.items[indexProduct] = {
          ...newData[indexStore].items[indexProduct], ...data,
        };
  
        newData[indexStore] = newItems;
        return newData;
      });
    }
    console.log(data);
    return (
        <div className='h-full bg-scroll bg-gray-300'>
            <div className='w-full h-screen flex flex-col justify-center items-center'>
                <div className='w-full flex flex-col justify-center items-center'>
                    select all section
                {
                    data?.map((item, index) => 
                            <Store 
                              data={item} 
                              key={index} 
                              onChangeStore={(checked) => 
                                onChangeStoreCb(checked, index)}
                              onChangeProduct={(indexProduct, data) => {
                                onChangeProductCb(index, indexProduct, data);
                              }}
                              >
                            </Store>
                    )
                }
                </div>
            </div>                
        </div>
    );
}
