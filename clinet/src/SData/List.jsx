import React from "react";
import { useSelector } from "react-redux";
import "./index.css";
import { UpdateButton } from "./Update/UpdateButton";

function List({}) {
  const data = useSelector((state) => state.data.newData);

  if (data == "") {
    return <></>;
  }
  return (
    <div>
      <table className="content-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>餐廳名稱</th>
            <th>餐廳地址</th>
            <th>餐廳電話</th>
            <th>城市</th>
            <th>類型</th>
            <th>平均花費</th>
            <th>標籤1</th>
            <th>標籤2</th>
            <th>標籤3</th>
            <th>時段1</th>
            <th>時段2</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <UpdateButton
                data={data}
                name={v.name}
                address={v.address}
                phone={v.phone}
                city={v.city}
                foodtype={v.foodtype}
                cost={v.cost}
                f1={v.time1.substr(0, 2) + ":" + v.time1.substr(3, 2)}
                f2={v.time1.substr(6, 2) + ":" + v.time1.substr(9, 2)}
                s1={v.time2.substr(0, 2) + ":" + v.time2.substr(3, 2)}
                s2={v.time2.substr(6, 2) + ":" + v.time2.substr(9, 2)}
                tag1={v.tag1}
                tag2={v.tag2}
                tag3={v.tag3}
                article={v.article}
                img={v.img}
                id={v.id}
                status={v.status}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default List;
