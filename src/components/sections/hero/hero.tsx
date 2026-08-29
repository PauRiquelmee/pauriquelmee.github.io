import AnimatedRule from '@/components/foundations/animated-rule';
import { profile, projects } from '@/content/portfolio';

const Hero = () => {
  return (
    <section
      className="hero mx-auto grid w-full max-w-[var(--max-width)] grid-cols-1 px-[var(--page-gutter)] pt-6 min-[1088px]:grid-cols-[6.25rem_minmax(0,1fr)] min-[1088px]:pt-[clamp(1.35rem,2vw,2rem)]"
      aria-labelledby="hero-title"
    >
      <div
        className="role-register flex flex-wrap gap-x-4 gap-y-1.5 border-b border-line pb-4 text-xs font-semibold tracking-[0.1em] text-muted uppercase min-[1088px]:grid min-[1088px]:grid-cols-3 min-[1088px]:gap-0 min-[1088px]:border-r min-[1088px]:border-b-0 min-[1088px]:py-1 min-[1088px]:pr-3.5 min-[1088px]:pb-8"
        aria-label="Professional roles"
      >
        {profile.roles.map((role) => (
          <span
            className="min-[1088px]:flex min-[1088px]:min-h-32 min-[1088px]:items-center min-[1088px]:justify-end min-[1088px]:border-l min-[1088px]:border-line min-[1088px]:[writing-mode:vertical-rl] min-[1088px]:rotate-180"
            key={role}
          >
            {role}
          </span>
        ))}
      </div>
      <div className="hero-content flex min-w-0 flex-col pt-8 min-[1088px]:pt-0 min-[1088px]:pl-[clamp(1.5rem,2.4vw,2.4rem)]">
        <h1
          className="mt-10 font-display text-[clamp(3.85rem,18vw,6.5rem)] font-bold leading-[0.8] tracking-[-0.04em] uppercase md:mt-[clamp(0.75rem,1.4vw,1.4rem)] md:text-[clamp(4.25rem,9.5vw,8rem)] min-[1088px]:text-[clamp(4.35rem,9.4vw,9.3rem)] min-[1088px]:leading-[0.78] [&_span]:block"
          id="hero-title"
          aria-label={profile.headline}
        >
          <span aria-hidden="true">I design products,</span>
          <span aria-hidden="true">bring them to market,</span>
          <span aria-hidden="true">and can build them too.</span>
        </h1>
        <AnimatedRule />
        <div className="hero-bottom grid items-end gap-8 md:grid-cols-[minmax(0,1.25fr)_auto]">
          <div className="hero-summary max-w-[39rem]">
            <p className="text-[clamp(1.05rem,1.7vw,1.35rem)] leading-[1.35]">
              {profile.summary}
            </p>
            <p className="hero-location mt-3 text-xs font-bold tracking-[0.13em] text-accent uppercase">
              {profile.location}
            </p>
          </div>
          <div className="hero-actions flex flex-wrap items-stretch gap-3 md:items-center">
            <a
              className="button flex-1 !border-accent !bg-accent !text-white hover:!border-ink hover:!bg-ink md:flex-none"
              href="#work"
            >
              View selected work
            </a>
            <a className="button button-secondary" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
      </div>
      <dl className="hero-evidence col-span-full mt-16 grid border-y border-ink md:mt-[clamp(2.75rem,5vw,5rem)] md:grid-cols-3">
        <div className="border-b border-line py-5 md:border-r md:border-b-0 md:py-4 md:pr-6">
          <dd className="font-display text-[clamp(2.7rem,4vw,4.5rem)] font-bold leading-[0.85] tracking-[-0.04em] uppercase">
            {projects[0].metrics[0].value}
          </dd>
          <dt className="mt-2 text-xs tracking-[0.09em] text-muted uppercase">
            {projects[0].metrics[0].label}
          </dt>
        </div>
        <div className="border-b border-line py-5 md:border-r md:border-b-0 md:px-6 md:py-4">
          <dd className="font-display text-[clamp(2.7rem,4vw,4.5rem)] font-bold leading-[0.85] tracking-[-0.04em] uppercase">
            {projects[0].metrics[1].value}
          </dd>
          <dt className="mt-2 text-xs tracking-[0.09em] text-muted uppercase">
            {projects[0].metrics[1].label}
          </dt>
        </div>
        <div className="py-5 md:py-4 md:pl-6">
          <dd className="font-display text-[clamp(2.7rem,4vw,4.5rem)] font-bold leading-[0.85] tracking-[-0.04em] uppercase">
            {projects[0].metrics[2].value}
          </dd>
          <dt className="mt-2 text-xs tracking-[0.09em] text-muted uppercase">
            {projects[0].metrics[2].label}
          </dt>
        </div>
      </dl>
    </section>
  );
};

export default Hero;
