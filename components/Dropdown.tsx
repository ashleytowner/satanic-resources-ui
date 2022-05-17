import { useState } from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface PropTypes {
  title?: string;
  items: { label: string, id: string }[];
}

function Dropdown(props: PropTypes) {
  const [isOpen, setOpen] = useState(false);

  

  return (
    <div>
      <button 
        className="card flex"
        onClick={() => setOpen(!isOpen)}
      >
        <span
        >
          {props.title || 'Select'}
        </span>
        <span>{ isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span>
      </button>
      { isOpen && 
        <div className="card">
          {props.items.map(item => {
            return (
              <button key={item.id}>{item.label}</button>
            )
          })}
        </div>
      }
    </div>
  )
}

export default Dropdown;
