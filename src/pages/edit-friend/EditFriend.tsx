import Stack from 'react-bootstrap/Stack';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../app/store';
import type { FriendFormInitialValues } from '../../entities/friend/ui/friend-form/FriendForm';
import { selectFriendById, editFriend } from '../../entities/friend/api/friendSlice';
import { FriendForm } from '../../entities/friend';
import { RemoveFriendButton } from '../../features/remove-friend';
import { ShowFriendButton } from '../../features/show-friend';
import { PATH_PAGE } from '../../shared/lib/react-router';
import { BackButton } from '../../shared/ui/button';
import { Title } from '../../shared/ui/title';

function EditFriend() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const friend = useSelector((state: RootState) => selectFriendById(state, id || ''));

  const initialValues = {
    firstName: friend?.firstName ?? '',
    lastName: friend?.lastName ?? '',
    email: friend?.email ?? '',
    phone: friend?.phone ?? '',
    twitter: friend?.twitter ?? '',
  };

  const handleSubmit = (values: FriendFormInitialValues) => {
    dispatch(editFriend({ id: id, ...values }));
    navigate(PATH_PAGE.friends);
  };

  const handleRemove = () => {
    navigate(PATH_PAGE.friends);
  };

  return (
    <>
      <Title text="Editing Friend" />
      <FriendForm buttonLabel="Update friend" friendFormInitialValues={initialValues} onSubmit={handleSubmit} />
      <Stack direction="horizontal" gap={1}>
        <BackButton />
        <ShowFriendButton id={id || ''} />
        <RemoveFriendButton id={id || ''} onRemove={handleRemove} />
      </Stack>
    </>
  );
}

export default EditFriend;
