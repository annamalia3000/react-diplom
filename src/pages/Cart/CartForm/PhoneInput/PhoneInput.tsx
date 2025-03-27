import { useState } from "react";
import classes from  "./phoneInput.module.css";

type PhoneInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export const PhoneInput = ({ value, onChange }: PhoneInputProps) => {
  const [error, setError] = useState("");
  const handleBlur = () => {
    const phoneRegex = /^\+7\d{10}$/; // Формат +7XXXXXXXXXX
    if (!phoneRegex.test(value)) {
      setError("Введите корректный номер (например, +79123456789)");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <input
        id="phone"
        type="tel"
        placeholder="Ваш телефон"
        name="phone"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={handleBlur}
        required
        className={classes["phone-input"]}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
