import React from "react";
import "swiper/swiper-bundle.min.css";
import "rc-drawer/assets/index.css";
import "react-modal-video/css/modal-video.min.css";

import { StickyProvider } from "contexts/app/app.provider";
import SEO from "components/seo";
import Layout from "components/layout";

import Services from "sections/services";
import CallToAction from "sections/call-to-action";
import Team2020_21 from "../../sections/team2020-21";

export default function TeamPage() {
  return (
    <StickyProvider>
      <Layout page="team">
        <SEO title="Team 2020-21" />
        <Team2020_21 />
      </Layout>
    </StickyProvider>
  );
}
