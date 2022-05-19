import React,{useState} from 'react';
function TypeDesrciber({ titles,title, amount }) {
    const [selected, setSelected] = useState(titles[0].title);
    return (
      <div
        className={
          (selected == title) ?
          ` bg-rose-400 text-[10px] xl:text-lg font-semibold   rounded-md w-36 xl:w-48 h-16 xl:h-24 pt-3 hover:cursor-pointer`
        :"border-2 text-[10px] xl:text-lg font-semibold border-blue-400 hover:bg-rose-300 rounded-md w-36 xl:w-48 h-16 xl:h-24 pt-3 hover:cursor-pointer"}
        onClick={() => {
          setSelected(title);
        }}
      >
        <h5
          className={
            (selected == title) ? "text-white w-fit m-auto " : "text-gray-500 w-fit m-auto "
            
          }
        >
          {title}
        </h5>
        <h5
          className={
            (selected == title) ? "text-white w-fit m-auto" : "text-black w-fit m-auto"
          }
        >
          {amount}
        </h5>
      </div>
    );
  }
export default TypeDesrciber