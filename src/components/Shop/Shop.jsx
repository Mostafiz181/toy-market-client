import React, { useEffect, useState } from "react";
import "./Shop.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleShop from "../SingleShop/SingleShop";

const Shop = () => {
  const [shop, setShop] = useState([]);
  const [category, setCategory] = useState("prado");

  useEffect(() => {
    fetch(`https://simple-toy-server.vercel.app/shop?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShop(data);
      });
  }, [category]);

  return (
    <div id="shop-part">
      <div className="container ">
        <h2>Shop Category</h2>

        <Tabs>
          <TabList>
            <Tab onClick={() => setCategory("primo")}>
              {" "}
              <button className="btn-tab">Primo</button>{" "}
            </Tab>
            <Tab onClick={() => setCategory("prado")}>
              {" "}
              <button className="btn-tab">Prado</button>{" "}
            </Tab>
            <Tab onClick={() => setCategory("ferari")}>
              {" "}
              <button className="btn-tab">Ferari</button>{" "}
            </Tab>
          </TabList>

          <TabPanel >
            <div >
              <div className="row">
                {shop.map((s) => (
                  <div className="col-lg-4" key={s._id}>
                    <SingleShop s={s}></SingleShop>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>

          <TabPanel >
            <div >
              <div className="row">
                {shop.map((s) => (
                  <div className="col-lg-4" key={s._id}>
                    <SingleShop s={s}></SingleShop>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>

          <TabPanel >
            <div >
              <div className="row">
                {shop.map((s) => (
                  <div className="col-lg-4" key={s._id}>
                    <SingleShop s={s}></SingleShop>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>



        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
