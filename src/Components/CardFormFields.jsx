import { Lock, Shield } from "lucide-react";
import React from "react";

const FieldLabel = ({ label, error }) => (
  <div className="flex items-baseline justify-between">
    <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
      {label}
    </label>
    {error ? <div className="text-xs text-red-600 ml-2">{error}</div> : null}
  </div>
);

const CardFormFields = ({
  cardData,
  errors,
  onChangeFiedls,
  onBlurCvc,
  onSubmit,
  onFocusCvc,
}) => {
  return (
    <form
      className="bg-white rounded-2xl p-10 shadow-2xl"
      noValidate
      onSubmit={onSubmit}
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Payments Details
        </h2>
        <p className="text-gray-600">Complete your purchase securely</p>
      </div>
      <div className="space-y-6">
        {/* CardHolder name  */}
        <FieldLabel label="Cardholder name" error={errors.name} />
        <div>
          <input
            type="text"
            value={cardData.name}
            onChange={(e) => onChangeFiedls("name", e.target.value)}
            placeholder="e.g Jhon Doe"
            className={`w-full px-4 py-3.5 bg-gray-50 border-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none transition-all ${errors.name ? "border-red-300 bg-red-50" : "border-gray-200 focus:border-purple-500 bg-white"}`}
          />
        </div>
        {/* Card Number  */}
        <FieldLabel label="Card Number" error={errors.number} />
        <div>
          <input
            type="text"
            inputMode="numeric"
            value={cardData.number}
            onChange={(e) => onChangeFiedls("number", e.target.value)}
            placeholder="e.g 1234 5678 9123 0000"
            className={`w-full px-4 py-3.5 bg-gray-50 border-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none transition-all ${errors.number ? "border-red-300 bg-red-50" : "border-gray-200 focus:border-purple-500 bg-white"}`}
          />
        </div>
        {/* Expiry & CVC  */}
        <div className="flex gap-4">
          <div className="flex-1">
            <FieldLabel
              label="Exp. Date (MM/YY)"
              error={errors.expMonth || errors.expYear}
            />
            <div className="flex gap-2">
              <input
                type="text"
                value={cardData.expMonth}
                onChange={(e) => onChangeFiedls("expMonth", e.target.value)}
                inputMode="numeric"
                placeholder="MM"
                className={`w-full px-4 py-3.5 bg-gray-50 border-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none transition-all ${errors.expMonth ? "border-red-300 bg-red-50" : "border-gray-200 focus:border-purple-500 bg-white"}`}
              />
              <input
                type="text"
                value={cardData.expYear}
                onChange={(e) => onChangeFiedls("expYear", e.target.value)}
                inputMode="numeric"
                placeholder="YY"
                className={`w-full px-4 py-3.5 bg-gray-50 border-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none transition-all ${errors.expYear ? "border-red-300 bg-red-50" : "border-gray-200 focus:border-purple-500 bg-white"}`}
              />
            </div>
          </div>
          <div className="flex-1">
            <FieldLabel label="CVC" error={errors.cvc} />
            <div className="flex gap-2">
              <input
                type="text"
                value={cardData.cvc}
                onFocus={onFocusCvc}
                onBlur={onBlurCvc}
                onChange={(e) => onChangeFiedls("cvc", e.target.value)}
                inputMode="numeric"
                placeholder="e.g 123"
                className={`w-full px-4 py-3.5 bg-gray-50 border-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none transition-all ${errors.cvc ? "border-red-300 bg-red-50" : "border-gray-200 focus:border-purple-500 bg-white"}`}
              />
            </div>
          </div>
        </div>
        {/* Submit  */}
        <button
          type="submit"
          className="w-full bg-purple-900 text-white py-4 rounded-lg font-semibold text-lg hover:bg-purple-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] mt-4"
        >
          Confirm
        </button>
        {/* Trust bades  */}
        <div className="flex items-center justify-center gap-6 pt-2 text-gray-500 text-xs">
          <div className="flex items-center gap-1.5">
            <Shield size={14} />
            <span>SSL Secure</span>
          </div>

          {/* Dot separator */}
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>

          <div className="flex items-center gap-1.5">
            <Lock size={14} />
            <span>PCI Compliant</span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CardFormFields;
