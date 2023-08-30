import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Button variant="secondary" onClick={handleBack}>
      Back
    </Button>
  );
}
