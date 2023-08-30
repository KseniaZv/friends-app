import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../app/store';
import { EditFriendButton } from '../../../../features/edit-friend';
import { RemoveFriendButton } from '../../../../features/remove-friend';
import { Title } from '../../../../shared/ui/title';
import { PATH_PAGE } from '../../../../shared/lib/react-router';
import styles from './styles.module.scss';

export function FriendTable() {
  const friends = useSelector((state: RootState) => state.friends);

  if (!friends.length) {
    return <Title text="No friends" />;
  }

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Twitter</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {friends.map((friend) => (
          <tr key={friend.id}>
            <td>
              <Link to={PATH_PAGE.aboutFriend.id(friend.id)}>
                {friend.firstName} {friend.lastName}
              </Link>
            </td>
            <td>{friend.email}</td>
            <td>{friend.phone}</td>
            <td>{friend.twitter}</td>
            <td>
              <EditFriendButton id={friend.id} variant="warning" className={styles['btn-edit']} />
              <RemoveFriendButton id={friend.id} className={styles['btn-remove']} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
