import React, { useState } from "react";
import SendMessage from "../../UI/tabs/SendMessage";
import SendMaster from "../../UI/tabs/SendMaster";
import MyButton from "../../UI/button/MyButton";

const HomeForm = () => {
  const [tab, setTab] = useState("sendMessage");

  return (
    <div className="bg-violet-700">
      <div className="max-w-[1240px] mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <MyButton
            onClick={() => setTab("sendMessage")}
            className="bg-blue-500 px-8 py-2 rounded-md text-white border-2 uppercase"
          >
            Заявка на звонок
          </MyButton>
          <MyButton
            onClick={() => setTab("sendMaster")}
            className="bg-white px-8 py-2 rounded-md text-black border-2 border-blue-500 uppercase"
          >
            Заявка на звонок
          </MyButton>
        </div>
        {tab === "sendMessage" && <SendMessage />}
        {tab === "sendMaster" && <SendMaster />}
      </div>
    </div>
  );
};

export default HomeForm;
