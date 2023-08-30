import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { removeFriend } from '../../../entities/friend/api/friendSlice';

interface RemoveFriendButtonProps {
  id: string;
  className?: string;
  onRemove?: () => void;
}

export function RemoveFriendButton({ id, className = '', onRemove }: RemoveFriendButtonProps) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFriend(id));
    onRemove?.();
  };

  return (
    <Button variant="danger" className={className} onClick={handleRemove}>
      Remove
    </Button>
  );
}
