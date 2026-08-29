import AnimatedRule from '@/components/foundations/animated-rule';
import Button from '@/components/foundations/button';
import { profile } from '@/content/portfolio';

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="role-register" aria-label="Professional roles">
        <span>Product Lead</span>
        <span>Product Designer</span>
        <span>Frontend Developer</span>
      </div>
      <div className="hero-content">
        <h1 id="hero-title" aria-label={profile.headline}>
          <span aria-hidden="true">I design products,</span>
          <span aria-hidden="true">bring them to market,</span>
          <span aria-hidden="true">and can build them too.</span>
        </h1>
        <AnimatedRule />
        <div className="hero-bottom">
          <div className="hero-summary">
            <p>{profile.summary}</p>
            <p className="hero-location">Concepción, Chile</p>
          </div>
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
};

export default Hero;
