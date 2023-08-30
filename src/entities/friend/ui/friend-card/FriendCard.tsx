import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../app/store';
import { selectFriendById } from '../../../friend/api/friendSlice';
import { EditFriendButton } from '../../../../features/edit-friend';
import { BackButton } from '../../../../shared/ui/button';
import './styles.scss';

interface FriendCardProps {
  id?: string;
}

export function FriendCard({ id }: FriendCardProps) {
  const friend = useSelector((state: RootState) => selectFriendById(state, id || ''));

  return (
    <Card className="crd">
      <Card.Body className="crd-body">
        <Card.Title className="crd-title">
          {friend?.firstName} {friend?.lastName}
        </Card.Title>
        <Card.Text>
          {friend?.email} | {friend?.phone} | {friend?.twitter}
        </Card.Text>
        <Card.Footer className="crd-footer">
          <Stack direction="horizontal" gap={1}>
            <BackButton />
            <EditFriendButton id={id || ''} />
          </Stack>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
