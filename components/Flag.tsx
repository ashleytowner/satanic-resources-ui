import { Enum_Componentuncategorisedflag_Type } from "../src/generated/graphql";
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';

function Flag(props: { type: Enum_Componentuncategorisedflag_Type, details: string }) {
  let Icon: typeof WarningIcon | typeof ErrorIcon | typeof InfoIcon;
  switch(props.type) {
    case 'warning':
      Icon = WarningIcon;
      break;
    case 'danger':
      Icon = ErrorIcon;
      break;
    case 'info':
    default:
      Icon = InfoIcon;
  }
  return (
    <div className="card bg-orange-400 p-1 inline-flex gap-2"><Icon /> {props.details}</div>
  )
}

export default Flag;
