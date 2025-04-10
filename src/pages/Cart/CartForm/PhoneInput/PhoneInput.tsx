import { useState } from "react";
import classes from  "./phoneInput.module.css";

export const PhoneInput = () => {
  const [error, setError] = useState("");

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const phoneRegex = /^\+7\d{10}$/; 
    const value = e.target.value;
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
        onBlur={handleBlur}
        required
        className={classes["phone-input"]}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
