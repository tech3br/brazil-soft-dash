"use client";

import React from "react";
import DashboardLayout from "./DashboardLayout";
import { Link } from "@chakra-ui/next-js";

export const metadata = {
  title: "My Page Title",
};

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Link href="/" color="blue.400" _hover={{ color: "blue.500" }}>
        Home
      </Link>
    </DashboardLayout>
  );
}
