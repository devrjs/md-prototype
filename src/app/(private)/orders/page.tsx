"use client";

import { useGetOrders } from "@/http/orval/api";

export default function Order() {
  const { data } = useGetOrders();

  return (
    <div>
      <h1>{JSON.stringify(data, null, 2)}</h1>
    </div>
  );
}
