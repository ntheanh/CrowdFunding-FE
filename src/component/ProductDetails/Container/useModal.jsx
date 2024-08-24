import { useState } from "react"

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false)

  const [isShowingDelete, setIsShowingDelete] = useState(false)

  function toggle() {
    setIsShowing(!isShowing)
  }

  const toggleDelete = () => {
    setIsShowingDelete(!isShowingDelete)
  }

  return {
    isShowing,
    isShowingDelete,
    toggle,
    toggleDelete
  }
}

export default useModal
