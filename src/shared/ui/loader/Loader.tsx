import Spinner from 'react-bootstrap/Spinner';

export function Loader() {
  return (
    <Spinner animation="border" variant="secondary" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
