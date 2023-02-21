// app/page.tsx
"use client";
import { Link } from "@chakra-ui/next-js";
import React from "react";
import RootLayout from "./layout";

export default function Page() {
  return (
    <RootLayout>
      <Link href="/dashboard" color="blue.400" _hover={{ color: "blue.500" }}>
        Dashboard
      </Link>
    </RootLayout>
  );
}
