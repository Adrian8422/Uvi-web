import { SectionPlan } from "components/section-plans";
import { Layout } from "../../components/layout";
import { AboutOurs } from "../../components/section-about-ours";
import React from "react";
import { ServicesSection } from "components/section-services";

export function HomePage() {
  return (
    <Layout>
      <AboutOurs />
      <ServicesSection />
      <SectionPlan />
    </Layout>
  );
}
