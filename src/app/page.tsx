"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeLargeTitles"
        background="fluid"
        cardStyle="soft-shadow"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="VitalityCore"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated",
      }}
      title="Your Health, Unified."
      description="Unlock precision health insights with the world's most advanced tracking ecosystem. Personalized data, professional outcomes."
      buttons={[
        {
          text: "Start Tracking",
          href: "#contact",
        },
      ]}
      carouselItems={[
        {
          id: "h1",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-woman-home-using-her-mobile-phone-sitting-floor-bright-room-looking_1258-200257.jpg",
          imageAlt: "Dashboard Interface",
        },
        {
          id: "h2",
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-assistant-highlights-collagen-rich-cosmetics-skin-treatment_482257-122741.jpg",
          imageAlt: "Wearable Tracking",
        },
        {
          id: "h3",
          imageSrc: "http://img.b2bpic.net/free-photo/medical-banner-with-doctor-working-laptop_23-2149611211.jpg",
          imageAlt: "Health Data Nodes",
        },
        {
          id: "h4",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-portrait-young-bearded-man-listening-music_273609-15916.jpg",
          imageAlt: "Athletic Monitoring",
        },
        {
          id: "h5",
          imageSrc: "http://img.b2bpic.net/free-photo/healthcare-experts-discuss-recovery-strategies-treatment-center_482257-95008.jpg",
          imageAlt: "Recovery Metrics",
        },
        {
          id: "h6",
          imageSrc: "http://img.b2bpic.net/free-vector/medical-booking-app-concept_23-2148565648.jpg",
          imageAlt: "Nutrition Tracking",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Clinical-Grade Precision"
      description={[
        "VitalityCore combines cutting-edge biometrics with intuitive software design, turning complex health data into actionable everyday intelligence.",
        "We believe that optimal performance starts with a complete understanding of your body's unique signals. Our platform integrates seamlessly with your existing life, offering a holistic view that was once reserved for elite athletes.",
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNineteen
      textboxLayout="split-description"
      useInvertedBackground={true}
      features={[
        {
          tag: "Insight",
          title: "Heart Health",
          subtitle: "Deep analysis",
          description: "Continuous monitoring of HRV and cardiovascular endurance markers.",
          imageSrc: "http://img.b2bpic.net/free-photo/tablet-medical-application-stethoscope_1134-454.jpg",
        },
        {
          tag: "Insight",
          title: "Sleep Cycles",
          subtitle: "Rest optimization",
          description: "Advanced sleep stage tracking with deep recovery optimization tips.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-doing-sport-with-stats_23-2150040494.jpg",
        },
        {
          tag: "Insight",
          title: "Recovery",
          subtitle: "Strain monitoring",
          description: "Real-time strain tracking that automatically adjusts to your daily exertion.",
          imageSrc: "http://img.b2bpic.net/free-photo/physical-activity-stats-around-person_23-2150163336.jpg",
        },
      ]}
      title="Beyond Basic Metrics"
      description="Experience deeper insights into your physiological patterns with professional, automated analytics."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "Core",
          name: "Smart Ring",
          price: "$299",
          rating: 5,
          reviewCount: "1.2k",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-selfcare-routine-products_23-2149291868.jpg",
        },
        {
          id: "p2",
          brand: "Core",
          name: "Composition Scale",
          price: "$199",
          rating: 5,
          reviewCount: "800",
          imageSrc: "http://img.b2bpic.net/free-photo/health-life-medical-exercise-concept_53876-124795.jpg",
        },
        {
          id: "p3",
          brand: "Core",
          name: "Blood Monitor",
          price: "$149",
          rating: 4,
          reviewCount: "450",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-medical-cabinet-featuring-modern-equipment-vitamins_482257-126492.jpg",
        },
        {
          id: "p4",
          brand: "Core",
          name: "Hydration Bottle",
          price: "$89",
          rating: 4,
          reviewCount: "2k",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-exercising-outdoors-nature-with-vr-glasses_23-2150379671.jpg",
        },
        {
          id: "p5",
          brand: "Core",
          name: "Recovery Patch",
          price: "$49",
          rating: 5,
          reviewCount: "300",
          imageSrc: "http://img.b2bpic.net/free-photo/minimalist-computer-desk-setup-with-hard-drive_58702-17219.jpg",
        },
        {
          id: "p6",
          brand: "Core",
          name: "Stress EEG",
          price: "$399",
          rating: 5,
          reviewCount: "150",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-selfcare-products_23-2149313042.jpg",
        },
      ]}
      title="Hardware Ecosystem"
      description="Premium devices designed to seamlessly sync with your personal health dashboard."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="Evidence-Based Impact"
      tag="Performance"
      metrics={[
        {
          id: "m1",
          value: "94%",
          description: "Improved sleep quality reports",
        },
        {
          id: "m2",
          value: "28%",
          description: "Increased recovery efficiency",
        },
        {
          id: "m3",
          value: "12k+",
          description: "Active health subscribers",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "HealthCloud",
        "BioLabs",
        "WellnessNet",
        "CarePlus",
        "AthleticsPro",
        "DataHealth",
        "InnovationCare",
      ]}
      title="Trusted by Health Leaders"
      description="Collaborating with industry pioneers to define the future of proactive health management."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Sarah J.",
          date: "Jan 2024",
          title: "CTO",
          quote: "VitalityCore has fundamentally changed how I view my daily strain. Indispensable.",
          tag: "Expert",
          avatarSrc: "http://img.b2bpic.net/free-photo/close-up-positive-businesswoman_1098-3531.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/confident-middle-aged-businesswoman_1262-20882.jpg",
        },
        {
          id: "t2",
          name: "Dr. Michael C.",
          date: "Dec 2023",
          title: "Cardiologist",
          quote: "The accuracy of these biometrics is truly groundbreaking for at-home tracking.",
          tag: "Medical",
          avatarSrc: "http://img.b2bpic.net/free-photo/rate-contract-shaking-hands-graphic-heart_1134-1180.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/female-doctor-hospital-with-stethoscope_23-2148827774.jpg",
        },
        {
          id: "t3",
          name: "Emily R.",
          date: "Feb 2024",
          title: "Triathlete",
          quote: "I've hit personal bests by following the recovery insights provided by the ecosystem.",
          tag: "Athletic",
          avatarSrc: "http://img.b2bpic.net/free-photo/young-woman-crossing-arms_1187-3512.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/nice-musculature-man-portrait-fitness-athlete-handsome-man-posing-outdoor-with-crossed-arms_343629-35.jpg",
        },
        {
          id: "t4",
          name: "David K.",
          date: "Mar 2024",
          title: "Wellness Coach",
          quote: "My clients have seen incredible improvements in metabolic health through these tools.",
          tag: "Coach",
          avatarSrc: "http://img.b2bpic.net/free-photo/fit-cartoon-character-training_23-2151149006.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/confident-woman-with-crossed-arms-gesture_53876-111201.jpg",
        },
        {
          id: "t5",
          name: "Jessica L.",
          date: "Nov 2023",
          title: "Entrepreneur",
          quote: "Seamless, sophisticated, and incredibly accurate. It's the health standard.",
          tag: "User",
          avatarSrc: "http://img.b2bpic.net/free-photo/smart-looking-teacher_53876-23045.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-queer-person-work_23-2150617717.jpg",
        },
      ]}
      title="Proven Results"
      description="Hear from the professionals who rely on our ecosystem daily."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "rotated-rays-animated-grid",
      }}
      tag="Waitlist"
      title="Start Your Journey"
      description="Sign up today to receive early access to the new VitalityCore hardware suite."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Platform",
          items: [
            {
              label: "Features",
              href: "#features",
            },
            {
              label: "Hardware",
              href: "#products",
            },
            {
              label: "Pricing",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
            {
              label: "Press",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
            {
              label: "Security",
              href: "#",
            },
          ],
        },
      ]}
      logoText="VitalityCore"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
