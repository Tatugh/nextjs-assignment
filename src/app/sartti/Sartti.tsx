import moment, { Moment } from "moment";

async function getTieto() {
    const res = await fetch("https://api.porssisahko.net/v1/latest-prices.json");
    return res.json();
  }

interface Tieto {
  price: number;
  startDate: string;
  endDate: string;
}
  
export default async function Sartti() {
  
  const hinnat: {prices: Array<Tieto>} = await getTieto();
  const { prices } = hinnat;

  return (
    <>
      {prices.map((price) => (
        <p>
          {price.price} <b>{new Date(price.startDate).toLocaleString()}</b>
        </p>
      ))}
    </>
  );
} 