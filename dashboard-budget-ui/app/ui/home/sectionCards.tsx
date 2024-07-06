import CardDashboard from "./totalinvoices";

export default function SectionCards({period}:{period: string}){

  // Llamar a la action que va a realizar las consultas en paralelo
  // Promise All

  // Transformar el period en minusculas para el timeSearched
  // Transformar el period del subtitle para que tenga el formato adecuado

  return (
    <>
      <CardDashboard value="" diference="" timeSearched={`from last ${period}`} title="Total Invoices" subTitle={period.toString()}  />
      <CardDashboard value="" diference="" timeSearched={`from last ${period}`} title="Total Spends" subTitle={period.toString()} />
      <CardDashboard value="" diference="" timeSearched={`from last ${period}`} title="Total Earnings" subTitle={period.toString()} />
      <CardDashboard value="" diference="" timeSearched={`from last ${period}`} title="Total Savings" subTitle={period.toString()} />
     </>
  )
}