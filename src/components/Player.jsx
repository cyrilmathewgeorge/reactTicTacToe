import React, {useState} from 'react'

function Player({initialName, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)
    
   function handleEditClick(){
        setIsEditing((editing) => !editing )
        if (isEditing){
            onChangeName(symbol, playerName)
        }
   }

   function handleSave() {
    onChangeName(symbol, playerName);
    setIsEditing(false); // After saving, set editing to false
    }

   function handleChange(event){
    setPlayerName(event.target.value)
   }

   let editablePlayerName = <span className="player-name">{playerName}</span>
   let btnCaption = 'Edit'

   if(isEditing) {
    editablePlayerName = (
    <input type="text" required value={playerName} onChange={handleChange} />
    );
    btnCaption = 'Save';
   }
  return (
         <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-name">{symbol}</span>
            </span>
            <button onClick={isEditing ? handleSave : handleEditClick}>{btnCaption}</button>
          </li>
  )
}

export default Player
