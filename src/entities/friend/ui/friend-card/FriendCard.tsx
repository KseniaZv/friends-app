import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../app/store';
import { selectFriendById } from '../../../friend/api/friendSlice';
import { EditFriendButton } from '../../../../features/edit-friend';
import { BackButton } from '../../../../shared/ui/button';
import { Title } from '../../../../shared/ui/title';
import styles from './styles.module.scss';

interface FriendCardProps {
  id?: string;
}

export function FriendCard({ id }: FriendCardProps) {
  const friend = useSelector((state: RootState) => selectFriendById(state, id ?? ''));

  if (!friend) {
    return <Title text="No friend found" />;
  }

  return (
    <Card className={styles.crd}>
      <Card.Body className={styles['crd-body']}>
        <Card.Title className={styles['crd-title']}>
          {friend?.firstName} {friend?.lastName}
        </Card.Title>
        <Card.Text>
          {friend?.email} | {friend?.phone} | {friend?.twitter}
        </Card.Text>
        <Card.Footer className={styles['crd-footer']}>
          <Stack direction="horizontal" gap={1}>
            <BackButton />
            <EditFriendButton id={id ?? ''} />
          </Stack>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
