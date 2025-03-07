import React, { useState } from "react";

interface EditAccountProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
}

const EditAccount: React.FC<EditAccountProps> = ({ label, value, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleSave = () => {
    setIsEditing(false);
    onChange(inputValue);
  };

  return (
    <div className="edit-account">
      <label className="label">{label}</label>
      {isEditing ? (
        <input
          className="input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handleSave}
          autoFocus
        />
      ) : (
        <div className="text" onClick={() => setIsEditing(true)}>
          {value}
          <span className="edit-icon">✏️</span>
        </div>
      )}
    </div>
  );
};

export default EditAccount;
