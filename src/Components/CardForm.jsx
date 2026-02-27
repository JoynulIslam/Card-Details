import React, { useState } from "react";
import CardPreview from "./CardPreview";
import CardFormFields from "./CardFormFields";
import formatCardNumber from "../utlis/FormatCardNumber";

const CardForm = () => {
  const [cardData, setCardData] = useState({
    name: "",
    number: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });

  const [flipped, setFlipped] = useState(false);

  const [errors, setErrors] = useState({});

  const onChangeFiedls = (field, value) => {
    setErrors((prev) => ({ ...prev, [field]: "" }));

    if (field === "number") {
      const formatted = formatCardNumber(value);

      if (formatted.replace(/\s/g, "").length <= 16) {
        setCardData((prev) => ({ ...prev, number: formatted }));
      }
      return;
    }

    if (field === "expMonth") {
      const v = value.replace(/[^0-9]/g, "");

      if (v.length <= 2) {
        setCardData((prev) => ({ ...prev, expMonth: v }));
      }
      return;
    }

    if (field === "expYear") {
      const v = value.replace(/[^0-9]/g, "");

      if (v.length <= 2) {
        setCardData((prev) => ({ ...prev, expYear: v }));
      }
      return;
    }

    if (field === "cvc") {
      const v = value.replace(/[^0-9]/g, "");

      if (v.length <= 3) {
        setCardData((prev) => ({ ...prev, cvc: v }));
      }
      return;
    }

    setCardData((prev) => ({ ...prev, [field]: value }));
  };

  const onFocusCvc = () => setFlipped(true);
  const onBlurCvc = () => setFlipped(false);

  const validateAll = () => {
    const errors = {};
    const name = (cardData.name || "").trim();
    const number = (cardData.number || "").replace(/\s/g, "");
    const expMonth = cardData.expMonth || "";
    const expYear = cardData.expYear || "";
    const cvc = cardData.cvc || "";

    if (!name) errors.name = "Cardholder name is required.";

    if (!/^\d{16}$/.test(number)) {
      errors.number = "Card number must be 16 digits.";
    }

    const mm = parseInt(expMonth, 10);
    if (!/^\d{1,2}$/.test(expMonth) || mm < 1 || mm > 12) {
      errors.expMonth = "Invalid month";
    }

    if (!/^\d{2}$/.test(expYear)) {
      errors.expYear = "Enter 2-digit year";
    }

    if (!errors.expYear && !errors.expMonth) {
      const now = new Date();

      const currentYY = parseInt(String(now.getFullYear()).slice(-2), 10);
      const currentMonth = now.getMonth() + 1;

      const y = parseInt(expYear, 10);

      if (y < currentYY || (y === currentYY && mm < currentMonth)) {
        errors.expMonth = "Card has expired";
        errors.expYear = "Card has expired";
      }

      if (y > currentYY + 25) {
        errors.expYear = "Enter a valid year";
      }
    }
    if (!/^\d{3}$/.test(cvc)) {
      errors.cvc = "CVC must be 3 digit";
    }
    return errors;
  };

  const onSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();

    const validate = validateAll();
    setErrors(validate);

    if (Object.keys(validate).length === 0) {
      // setFlipped(false);
      alert("Success! Card details are valid.");
    } else {
      if (validate.cvc) setFlipped(true);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Preview Card  */}
          <CardPreview cardData={cardData} flipped={flipped} />

          {/* Right Form  */}
          <CardFormFields
            cardData={cardData}
            errors={errors}
            onChangeFiedls={onChangeFiedls}
            onBlurCvc={onBlurCvc}
            onSubmit={onSubmit}
            onFocusCvc={onFocusCvc}
          />
        </div>
      </div>
    </div>
  );
};

export default CardForm;
