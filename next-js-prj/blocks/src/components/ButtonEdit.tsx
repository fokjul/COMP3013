const ButtonEdit = ({toggleEdit}: any) => {
  return (
    <button 
                    onClick={toggleEdit}
                    className="border rounded bg-blue-600 w-[75px] text-white">
                        Edit
                </button>} 
  )
}

export default ButtonEdit