import { useState } from "react";
import { Modal, Button, Image, Row, Col } from "react-bootstrap";

type FotoSelectProps = {
  onSelect: (fotoId: string) => void; // Função chamada ao selecionar uma foto
  initialFoto?: string; // ID inicial da foto (opcional)
};

const FotoSelect = ({ onSelect, initialFoto }: FotoSelectProps) => {
  const [show, setShow] = useState(false);
  const [selectedFoto, setSelectedFoto] = useState<string>(initialFoto || `${Math.floor(Math.random() * 11) + 1}.jpeg`);

  // Abrir ou fechar o modal
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // Selecionar uma foto
  const handleSelect = (fotoId: string) => {
    setSelectedFoto(fotoId);
    onSelect(fotoId); // Notificar o componente pai
    handleClose();
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <Image src={`/assets/${selectedFoto}`} rounded fluid className="mb-2" style={{ maxWidth: "200px" }} />
        <Button variant="primary" onClick={handleShow}>
          Selecionar Foto
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Escolher Foto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {Array.from({ length: 11 }).map((_, index) => {
              const fotoId = `${index + 1}.jpeg`;
              return (
                <Col xs={4} key={fotoId} className="mb-3">
                  <Image
                    src={`/assets/${fotoId}`}
                    rounded
                    fluid
                    onClick={() => handleSelect(fotoId)}
                    style={{ cursor: "pointer", border: selectedFoto === fotoId ? "2px solid blue" : "none" }}
                  />
                </Col>
              );
            })}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FotoSelect;
