import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { PATH_PAGE } from '../../../shared/lib/react-router';

interface ShowFriendButtonProps {
  id: string;
}

export function ShowFriendButton({ id }: ShowFriendButtonProps) {
  const navigate = useNavigate();

  const handleShow = () => {
    navigate(PATH_PAGE.aboutFriend.id(id));
  };

  return (
    <Button variant="secondary" onClick={handleShow}>
      Show
    </Button>
  );
}
