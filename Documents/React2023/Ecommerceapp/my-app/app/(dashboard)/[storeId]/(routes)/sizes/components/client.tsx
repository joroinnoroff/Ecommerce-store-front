"use client";


import { ApiList } from "@/components/ui/api-list";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/Heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { SizeColumn, columns } from "./columns";


interface SizeClientProps{
  data:  SizeColumn[]
}


export const SizeClient: React.FC<SizeClientProps> = ({
  data
}) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
    <div className="flex items-center justify-between">
    <Heading
    title={`Sizes (${data.length})`} 
    description="Manage Sizes for your store"/>
      <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
        <Plus  className="mr-2 h-4 w-4"/>
        Add New
      </Button>
    </div>

    <Separator />

    <DataTable columns={columns} data={data} searchKey="name"/>

    <Heading title="API" description="Api Calls for Sizes"/>
    <Separator />
    <ApiList entityName="sizes" entityIdName="sizeId"/>

    </>
  )
}