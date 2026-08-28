"use client";

import { m, useReducedMotion } from "motion/react";
import Button from "@/components/foundations/button";
import { profile } from "@/content/portfolio";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="role-register" aria-label="Professional roles">
        <span>Product Lead</span>
        <span>Product Designer</span>
        <span>Frontend Developer</span>
      </div>
      <div className="hero-content">
        <p className="hero-location">Concepción, Chile</p>
        <h1 id="hero-title">{profile.headline}</h1>
        <m.div
          className="hero-rule"
          aria-hidden="true"
          initial={shouldReduceMotion ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="hero-bottom">
          <p>{profile.summary}</p>
          <div className="hero-actions">
            <Button render={<a href="#work" />}>View selected work</Button>
            <Button variant="secondary" render={<a href="#contact" />}>
              Get in touch
            </Button>
          </div>
        </div>
      </div>
      <dl className="hero-evidence">
        <div>
          <dd>50+</dd>
          <dt>customers</dt>
        </div>
        <div>
          <dd>3</dd>
          <dt>countries</dt>
        </div>
        <div>
          <dd>USD 70K</dd>
          <dt>non-dilutive funding</dt>
        </div>
      </dl>
    </section>
  );
}
