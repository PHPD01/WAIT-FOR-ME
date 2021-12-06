import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterTag, tagClean, costF, timeF } from "../../../redux/storesSlice";
import "../Page2.css";

function Tag({}) {
  //取得資料
  const data = useSelector((state) => state.stores.newData);
  const data2 = useSelector((state) => state.stores.data2);
  const tagArray = useSelector((state) => state.stores.tagArray);
  const cost = useSelector((state) => state.stores.cost);
  const time = useSelector((state) => state.stores.time);

  const dispatch = useDispatch();

  //定義一層篩選後的最大消費金額
  let temp = data2.map((v) => v.cost);
  const topCost = Math.max(...temp); //為何要...

  //組合所有標籤統一map
  const tag1 = [...new Set(data.map((v) => v.tag1))];
  const tag2 = [...new Set(data.map((v) => v.tag2))];
  const tag3 = [...new Set(data.map((v) => v.tag3))];
  const tag = [...new Set(tag1.concat(tag2, tag3))];

  const alltag1 = data.map((v) => v.tag1);
  const alltag2 = data.map((v) => v.tag2);
  const alltag3 = data.map((v) => v.tag3);
  const alltag = alltag1.concat(alltag2, alltag3);
  // console.log(alltag);

  //取得陣列元素出現次數
  const counts = [];
  alltag.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
    //一開始counts["無低消"]沒有值就為0
    //第2個開始有值了就+1
    console.log(counts);
  });
  // console.log(counts["無低消"]);

  return (
    <>
      <div className="tagdiv2">
        <div className="tagdiv">
          <h6 style={{ fontWeight: "bold" }}>營業時間</h6>

          <input type="checkbox" id="營業中" checked={tagArray.includes("營業中")} onClick={() => dispatch(filterTag("營業中"))} />
          <label for="營業中" className="taglable">
            營業中
          </label>
        </div>
      </div>
      <div className="tagdiv2">
        <div className="tagdiv">
          <h6 style={{ fontWeight: "bold" }}>前往時段</h6>

          <input
            type="time"
            style={{ width: "70%", fontSize: "13px" }}
            onChange={(e) => {
              dispatch(timeF(e.target.value));
              dispatch(filterTag("前往時段"));
            }}
            value={time}
          />
        </div>
      </div>
      <div className="tagdiv2">
        <div className="tagdiv">
          <h6 style={{ fontWeight: "bold" }}>消費金額</h6>
          <div></div>
          <input
            style={{
              width: "65%",
              marginLeft: "3px",
            }}
            type="range"
            min="100"
            max={topCost}
            step="100"
            onChange={(e) => {
              dispatch(costF(e.target.value));
            }}
            onClick={() => {
              dispatch(filterTag("消費金額"));
            }}
            value={cost}></input>
          <span style={{ fontSize: "12px", float: "right" }}>{cost && cost + "元"}</span>
          <br />
          <input type="checkbox" id="平價美食" name="cost" checked={tagArray.includes("平價美食")} onClick={() => dispatch(filterTag("平價美食"))} />
          <label for="平價美食" className="taglable">
            平價美食
          </label>
        </div>
        <div className="tagdiv">
          <input type="checkbox" id="中等消費" name="cost" onClick={() => dispatch(filterTag("中等消費"))} checked={tagArray.includes("中等消費")} />
          <label for="中等消費" className="taglable">
            中等消費
          </label>
        </div>
        <div className="tagdiv">
          <input type="checkbox" id="高級餐廳" name="cost" onClick={() => dispatch(filterTag("高級餐廳"))} checked={tagArray.includes("高級餐廳")} />
          <label for="高級餐廳" className="taglable">
            高級餐廳
          </label>
        </div>
      </div>
      <div className="tagdiv2">
        <h6
          style={{
            fontWeight: "bold",
            padding: "5px  0 0 5px",
            marginBottom: "3px",
          }}>
          店家標籤
        </h6>
        {tag.map((v, i) => {
          return (
            <>
              <div className="tagdiv">
                <input
                  type="checkbox"
                  id={"btn" + i}
                  name={"btn" + i}
                  key={i}
                  checked={tagArray.includes(v)}
                  onClick={() => dispatch(filterTag(v))}
                />

                <label for={"btn" + i} className="taglable">
                  {v}
                </label>
                <span style={{ fontSize: "12px", padding: "5px", float: "right" }}>({counts[v]})</span>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Tag;
