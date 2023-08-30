import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { FriendFormInitialValues } from '../../entities/friend/ui/friend-form/FriendForm';
import { addFriend } from '../../entities/friend/api/friendSlice';
import { FriendForm } from '../../entities/friend';
import { PATH_PAGE } from '../../shared/lib/react-router';
import { BackButton } from '../../shared/ui/button';
import { Title } from '../../shared/ui/title';

function AddFriend() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values: FriendFormInitialValues) => {
    const uniqueId = uuidv4();
    dispatch(addFriend({ id: uniqueId, ...values }));
    navigate(PATH_PAGE.friends);
  };

  return (
    <>
      <Title text="Add New Friend" />
      <FriendForm buttonLabel="Create friend" onSubmit={handleSubmit} />
      <BackButton />
    </>
  );
}

export default AddFriend;
