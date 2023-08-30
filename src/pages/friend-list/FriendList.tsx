import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { PATH_PAGE } from '../../shared/lib/react-router';
import { Title } from '../../shared/ui/title';
import { FriendTable } from '../../entities/friend';

function FriendList() {
  const navigate = useNavigate();

  const handleAddNewFriend = () => {
    navigate(PATH_PAGE.addFriend);
  };

  return (
    <>
      <Title text="Friend List" />
      <FriendTable />
      <Button variant="dark" onClick={handleAddNewFriend}>
        New friend
      </Button>
    </>
  );
}

export default FriendList;
