import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CardDashboard({value, diference, timeSearched, title, subTitle}: {value: string, diference: string,timeSearched: string, title: string, subTitle: string}){

  // Buscar en db el total invoices del cliente
  // Formatear el valor para que tenga simbolos y signos.
  // Calcular en base a la semana en curso
  // Y comparar con la semana pasada.
  value = "$45,231.89"; // delete

  // Valor con respecto a la semana pasada
  // El calculo debe ir en una accion
  // Formatear el valor en base a lo que se requiera
  diference = "+20.1%" // delete

  return (
    <Card className="w-auto h-[140px] align-middle">
      <CardHeader className="flex flex-row justify-between">
        <div className="">
          <CardTitle className="text-lg font-semibold">{title} <span className="text-sm font-normal">{subTitle}</span></CardTitle>
          <CardTitle className="text-4xl font-bold">{value}</CardTitle>
          <CardDescription>{diference} {timeSearched}</CardDescription>
        </div>
        <div>logo</div>
      </CardHeader>
    </Card>
  )
}