import axios from 'axios';
import { toast } from 'react-hot-toast';

type OnDeleteProps = string;

const UserDelete: React.FC<OnDeleteProps> = (id) => {


  axios.delete(`/api/register/${id}`)
      .then(() => {
          toast.success('User deleted!');
          window.location.reload();
      })
      .catch(() => {
          toast.error('Error');
      })
  return null;
}

export default UserDelete;