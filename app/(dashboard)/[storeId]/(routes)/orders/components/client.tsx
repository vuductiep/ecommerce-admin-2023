'use client'

import Heading from "@/components/ui/Heading"
import { DataTable } from "@/components/ui/data-table"
import { Separator } from "@radix-ui/react-separator"
import { OrderColumn, columns } from "./columns"

interface OrderClientProps {
  data: OrderColumn[]
}

export const OrderClient: React.FC<OrderClientProps> = ({
  data
}) => {

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading 
          title={`Orders (${data.length})`}
          description="Manage orders for your store"
        />
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="products"/>
    </>
  )
}