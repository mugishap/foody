import { Checkbox } from "@mui/material";
import { pink } from '@mui/material/colors';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function OrderType({ type, state }) {
  return (
    <div className="order-type flex items-center justify-around  ">
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
        className='absol'
      />
      {/* <input type="checkbox" name="" id="check" className=' rounded-full'/> */}
      <p>{type}</p>
      <button>{state}</button>
    </div>
  );
}

export default OrderType;
