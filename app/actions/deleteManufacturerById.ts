import axios from 'axios';
import { toast } from 'react-hot-toast';

type OnDeleteProps = string;

const ManufacturerDelete: React.FC<OnDeleteProps> = (id) => {


  axios.delete(`/api/manufacturers/${id}`)
      .then(() => {
          toast.success('Manufacturer deleted!');
          window.location.reload();
      })
      .catch(() => {
          toast.error('Error');
      })
  return null;
}

export default ManufacturerDelete;