import { useState } from "react";
import { Modal } from "../../context/Modal";
import SignupForm from "./SignupForm";

function SignupFormModal() {
  const [showmodal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>sign up</button>
      {showmodal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  )
}

export default SignupFormModal;