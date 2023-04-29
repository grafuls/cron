import useSWR from 'swr'

interface DataProps {
  id: number
  timestamp: string
  price: number
}

export default function Post() {
  const { data } = useSWR<DataProps>(`/api/data/`, (url) =>
    fetch(url).then((res) => res.json())
  )

  if (!data)
    return (
      <div className="flex justify-between items-center border border-gray-100 shadow-md rounded-lg p-5">
        <div className="grid gap-3">
          <div className="bg-gray-200 animate-pulse rounded-md w-96 h-6" />
          <div className="bg-gray-200 animate-pulse rounded-md w-60 h-4" />
        </div>
        <div className="bg-gray-200 animate-pulse rounded-md w-28 h-4" />
      </div>
    )

  const { id, timestamp, price } = data || {}
  return (
    <div className="flex justify-between items-center border border-gray-100 shadow-md rounded-lg p-5">
      <div className="grid gap-3">
        <p className="text-gray-500 text-sm">Precio: { price }</p>
        <p className="text-gray-500 text-sm">Fecha: { timestamp }</p>
      </div>  
    </div>
  )
}
