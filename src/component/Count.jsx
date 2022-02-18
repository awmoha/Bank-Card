import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incromentByValue, decromentByValue } from "../redux/slice/count";
function Count(users) {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.count);
  let handleIncroment = () => {
    let count = +document.querySelector("#countId").value;
    dispatch(incromentByValue(count));
  };
  let handeldecroment = () => {
    let count = +document.querySelector("#countId").value;
    dispatch(decromentByValue(count));
  };
  return (
    <div className="count-header">
      <h4>{users.username} Bankomat</h4>
    

      <h4>Account: {count}</h4>
      <label htmlFor="countId">
        <input type="number" id="countId" placeholder="Enter money" />
        <button onClick={handleIncroment}>lägg in</button>
        <button onClick={handeldecroment}>Ta ut</button>
      </label>
    </div>
  );
}

export default Count;
