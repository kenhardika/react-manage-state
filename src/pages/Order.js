import React, { useState } from 'react';
import Checkbox from '../components/Checkbox';
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

    const isChecked = ()=> {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        for (let j = 0; j < item.items.length; j++) {
          const product = item.items[j];
          if (!product.checked) return false;
        }
      }
      return true;
    }

    const onChangeAll = (checked) => {
      setData((c) => {
        const newData = [...c];
        for (let i = 0; i < newData.length; i++) {
          const item = newData[i];
          for (let j = 0; j < item.items.length; j++) {
            item.items[j] = {
              ...item.items[j],
              checked,
            };
          }
          newData[i] = {
            ...item,
          };
        }
        return newData;
      })
    }

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
                  <div className='flex-row flex w-[700px] items-center justify-start'>
                    <Checkbox 
                    onChange={(e)=>onChangeAll(e.target.checked)}
                    checked={isChecked()}
                    />
                      select all section
                  </div>
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
