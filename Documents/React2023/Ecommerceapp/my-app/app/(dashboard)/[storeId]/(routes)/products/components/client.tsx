"use client";


import { ApiList } from "@/components/ui/api-list";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/Heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import {  columns, ProductColumn } from "./columns";


interface ProductClientProps{
  data:  ProductColumn[]
}


export const ProductClient: React.FC<ProductClientProps> = ({
  data
}) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
    <div className="flex items-center justify-between">
    <Heading
    title={`Products (${data.length})`} 
    description="Manage Products for your store"/>
      <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
        <Plus  className="mr-2 h-4 w-4"/>
        Add New
      </Button>
    </div>

    <Separator />

    <DataTable columns={columns} data={data} searchKey="label"/>

    <Heading title="API" description="Api Calls for Products"/>
    <Separator />
    <ApiList entityName="Products" entityIdName="productId"/>

    </>
  )
}