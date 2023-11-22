import axios from 'axios';
import { toast } from 'react-hot-toast';

type OnDeleteProps = string;

const ListingDelete: React.FC<OnDeleteProps> = (id) => {


  axios.delete(`/api/listings/${id}`)
      .then(() => {
          toast.success('Car deleted!');
          window.location.reload();
      })
      .catch(() => {
          toast.error('Error');
      })
  return null;
}

export default ListingDelete;