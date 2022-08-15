import { useState } from "react";

const useModal = () => {
  const [modals, setModals] = useState({});

  const openClose = ( name ) => {
    setModals({
      ...modals,
      [name]: !modals[name]
      })
  }
  return [modals, openClose]
}

export default useModal;

