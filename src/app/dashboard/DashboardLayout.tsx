"use client";
import React from "react";
import Aside from "../../components/Aside/index";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <CacheProvider>
          <ChakraProvider>
            <Grid
              templateAreas={`
                  "nav header"
                  "nav main"
                  "nav main"
                  `}
              gridTemplateRows={"72px 1fr"}
              gridTemplateColumns={"72px 1fr"}
              h="100vh"
              color="blackAlpha.700"
              fontWeight="bold"
            >
              <GridItem as="aside" area={"nav"}>
                <Aside />
              </GridItem>
              <GridItem p="4" bg="#242424" area={"header"}>
                Header
              </GridItem>
              <GridItem pl="2" bg="#242424" area={"main"}>
                <main>{children}</main>
              </GridItem>
            </Grid>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
