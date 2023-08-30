import { useParams } from 'react-router-dom';
import { FriendCard } from '../../entities/friend';

function AboutFriend() {
  const { id } = useParams();

  return <FriendCard id={id} />;
}

export default AboutFriend;
