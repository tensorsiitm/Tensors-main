import React from "react";
import "swiper/swiper-bundle.min.css";
import "rc-drawer/assets/index.css";
import "react-modal-video/css/modal-video.min.css";

import { StickyProvider } from "contexts/app/app.provider";
import SEO from "components/seo";
import Layout from "components/layout";

import Banner from "sections/banner";
import Services from "sections/services";
import Testimonials from "sections/testimonials";
import DecovApp from "sections/decov-app";
import Feature from "sections/feature";
import VideoOne from "sections/video-one";
import CallToAction from "sections/call-to-action";
import TensorsEdu from "sections/tensors-edu";
import Team from "../sections/team";
import AboutUs from "../sections/about-us";
import DirectorsMessage from "../sections/directors-message";

export default function IndexPage() {
  return (
    <StickyProvider>
      <Layout page="home">
        <SEO title="Home" />
        <Banner />
        <AboutUs />
        <Services />
        <TensorsEdu />
        <DecovApp />
        <Team />
        <DirectorsMessage />
        <Feature />
        <CallToAction />
      </Layout>
    </StickyProvider>
  );
}
