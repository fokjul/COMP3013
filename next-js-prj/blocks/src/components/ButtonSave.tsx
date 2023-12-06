const ButtonSave = ({toggleEdit} : any) => {
    return (
      <button 
      onClick={toggleEdit} 
      type="submit"  
      className="rounded p-2 bg-gray-600 hover:bg-gray-500 text-white w-[100px]" >
          Save
      </button>
    )
  }
  
  export default ButtonSave