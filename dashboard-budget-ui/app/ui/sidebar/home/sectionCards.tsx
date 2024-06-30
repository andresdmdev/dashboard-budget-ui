import CardDashboard from "./totalinvoices";

export default function SectionCards({period}:{period: string}){

  // Llamar a la action que va a realizar las consultas en paralelo
  // Promise All

  // Transformar el period en minusculas para el timeSearched
  // Transformar el period del subtitle para que tenga el formato adecuado

  return (
    <>
      <CardDashboard value="" diference="" timeSearched="from last week" title="Total Invoices" subTitle="(Weekly)"  />
      <CardDashboard value="" diference="" timeSearched="from last week" title="Total Spends" subTitle="(Weekly)" />
      <CardDashboard value="" diference="" timeSearched="from last week" title="Total Earnings" subTitle="(Weekly)" />
      <CardDashboard value="" diference="" timeSearched="from last week" title="Total Savings" subTitle="(Weekly)" />
    </>
  )
}