import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { PATH_PAGE } from '../../../shared/lib/react-router';

interface EditFriendButtonProps {
  id: string;
  variant?: 'warning' | 'dark';
  className?: string;
}

export function EditFriendButton({ id, variant = 'dark', className = '' }: EditFriendButtonProps) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(PATH_PAGE.editFriend.id(id));
  };

  return (
    <Button variant={variant} className={className} onClick={handleEdit}>
      Edit
    </Button>
  );
}
