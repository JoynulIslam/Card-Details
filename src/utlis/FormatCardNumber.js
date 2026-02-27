export default function formatCardNumber(cardNumber) {
  const v = cardNumber
    .replace(/\s/g, "") // remove spaces
    .replace(/[^0-9]/gi, "");

  const matches = v.match(/\d{4,16}/g);

  const match = (matches && matches[0]) || "";

  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  return parts.length > 0 ? parts.join(" ") : cardNumber;
}
