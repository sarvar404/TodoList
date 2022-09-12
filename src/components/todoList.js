import React, { useState } from "react";

const TodoList = () => {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);

  // Using this type of function its adding value asynchrounsly which is means adding value late here....
  // const addActivity = () =>{
  //   setlistData([...listData, activity])
  //   console.log(listData,"inside");
  // }

  // solution to avoid such problems "it will work as synchronously (immediately response )"

  const addActivity = () => {
    setlistData((listData) => {
      console.log(listData,"listData1");
      console.log(...listData,"listData2");
      const updatedList = [...listData, activity];
      console.log(updatedList,"listData3");
      console.log(updatedList, "i am updating");

      // Here we are empty the current adding input text by using
      setActivity("");
      //done
      return updatedList;
    });
  };

  const removeActivity = (item) => {
    console.log(item, "removing item");

    const updateList = listData.filter((elements, id) => {
      return item !== id;
    });

    //it will work if we set new data here so.

    setlistData(updateList);
  };

  const removeAll = () =>{
    setlistData([]);
  }

  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>

        <input
          type="text"
          placeholder="Add Activities"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        <p className="List-heading">Here is your list ;{")"}</p>
        {listData !== [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i} style={{ display: "flex" }}>
                  <div className="listData"  key={i}>{data}</div>
                  <div>
                    <button onClick={() => removeActivity(i)}>Remove(-)</button>
                  </div>
                </p>
              </>
            );
          })}
          {listData.length >= 1 && <button onClick={removeAll}>Remove All</button>}
      </div>
    </>
  );
};

export default TodoList;
