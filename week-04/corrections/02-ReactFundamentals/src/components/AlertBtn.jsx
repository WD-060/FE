import React from "react";

function AlertBtn() {
  const handleClick = (text) => {
    alert(text);
  };
  const handleClick2 = () => {
    alert("Hello Class");
  };
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleClick("Hello World!")}
      >
        AlertBtn
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick2}
      >
        AlertBtn2
      </button>
    </div>
  );
}

export default AlertBtn;
