import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const PriceItem = (props) => {
  return (
    <div className="p-1 rounded-xl group sm:flex space-x-6 bg-blue-100 bg-opacity-50 shadow-xl hover:rounded-2xl">
      <img
        src={props.pric.img}
        alt={props.pric.name}
        className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
      />
      <div>
        <div>
          <h4 className="p-2 text-xl md:text-2xl font-medium">
            {props.pric.name}
          </h4>
        </div>
        <div>
          <Tabs>
            <TabList className="text-lg">
              <Tab>Описание</Tab>
              <Tab>Цены</Tab>
            </TabList>
            <TabPanel>
              <p className="py-4">{props.pric.description}</p>
            </TabPanel>
            <TabPanel>
              <dl>
                {props.pric.price.map((pri) => (
                  <div
                    key={pri.id}
                    className="py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                  >
                    <dt className="text-sm font-medium text-gray-500">
                      {pri.property}
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {pri.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PriceItem;
