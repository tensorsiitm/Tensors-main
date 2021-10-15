import React from "react";
import "swiper/swiper-bundle.min.css";
import "rc-drawer/assets/index.css";
import "react-modal-video/css/modal-video.min.css";

import { StickyProvider } from "contexts/app/app.provider";
import SEO from "components/seo";
import Layout from "components/layout";

import Services from "sections/services";
import CallToAction from "sections/call-to-action";

export default function TeamPage() {
  return (
    <StickyProvider>
      <Layout>
        <SEO title="Team 2021-22" />
        <Services />
      </Layout>
    </StickyProvider>
  );
}
