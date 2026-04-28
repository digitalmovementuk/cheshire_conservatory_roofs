import { type CSSProperties, useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  X,
} from 'lucide-react'

const FacebookIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.5 22v-8.4h2.82l.42-3.27H13.5V8.24c0-.95.26-1.59 1.62-1.59h1.73V3.72A23.18 23.18 0 0 0 14.32 3.6c-2.5 0-4.21 1.53-4.21 4.34v2.39H7.28v3.27h2.83V22h3.39Z" />
  </svg>
)

const XIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.815L4.99 21.75H1.68l7.73-8.835L1.254 2.25h6.83l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const InstagramIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
    <path d="M16 11.37a4 4 0 1 1-7.91 1.18 4 4 0 0 1 7.91-1.18z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)
import logo from './assets/images/cheshire-logo.png'
import brandFullLogo from './assets/original/logo-1-1024x625.png'
import banner1 from './assets/original/banner1-4.jpg'
import tiledRoofImage from './assets/original/Tiled-Conservatories-Roof-1.jpg'
import orangeryImage from './assets/original/orangery-Roofs.jpg'
import extensionImage from './assets/original/Building-Extensions-1.jpg'
import framesImage from './assets/original/Replacement-Conservatory-Frames-1.jpg'
import about1 from './assets/original/about1.jpg'
import about2 from './assets/original/about2.jpg'
import about3 from './assets/original/about3-1.jpg'
import about4 from './assets/original/about4.jpg'
import supaliteLogo from './assets/original/Supalite.png'
import lekaLogo from './assets/original/leka-logo.png'
import warmerRoofLogo from './assets/original/Warmer-Roof.png'
import insulatedLogo from './assets/original/Insulated-Clad-Under-Roof-logo.png'
import supaliteImage from './assets/original/SupaLite-Tiled-Roof-System-.jpg'
import lekaImage from './assets/original/Leka-Composite.jpg'
import warmerRoofImage from './assets/original/Warmer-Roof-Timber.jpg'
import insulatedImage from './assets/original/Insulated-Conservatory-Roof.jpg'
import jerryPreview from './assets/original/jerry-video-preview.png'
import ianPreview from './assets/original/ian-video-preview.png'
import lornaPreview from './assets/original/lorna-video-preview.png'

const navItems = [
  { label: 'Why Us', href: '#why-us' },
  { label: 'Services', href: '#services' },
  { label: 'Suppliers', href: '#suppliers' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

const services = [
  {
    title: 'Tiled Roof Systems',
    text: 'A solid roof replacement that transforms tired glass or polycarbonate into a fully insulated, plaster-finished room you can use all year.',
    image: tiledRoofImage,
  },
  {
    title: 'Warm Roof Extensions',
    text: 'Designed and built with modern warm roof systems — energy-efficient, Building Control approved, and finished to extend your home seamlessly.',
    image: extensionImage,
  },
  {
    title: 'Orangery & Insulated Roofs',
    text: 'Refined orangery rooflines and cost-effective insulated upgrades fitted over existing structures for improved comfort and a clean modern look.',
    image: orangeryImage,
  },
  {
    title: 'Replacement Frames',
    text: 'Modern frames and glazing that refresh the look and thermal performance of an older conservatory without rebuilding from scratch.',
    image: framesImage,
  },
]

const whyChooseUs = [
  'Over 40 years’ experience in conservatory and roofing',
  'Certified installers of SupaLite, Leka, WarmerRoof and Insulated systems',
  'Full Building Regulations compliance, handled for you',
  '10-year workmanship warranty on every installation',
  'U-values as low as 0.15 W/m²K for true thermal comfort',
  'Friendly, professional, locally based team',
]

const suppliers = [
  {
    title: 'SupaLite Tiled Roof System',
    intro: 'Lightweight tiled roof creating a comfortable, plaster-finished living space.',
    logo: supaliteLogo,
    image: supaliteImage,
    bullets: [
      'Strong insulation for year-round comfort',
      'Choice of realistic lightweight tile finishes',
      'Smooth plastered ceiling finish inside',
      'Suitable for replacing old conservatory roofs',
    ],
  },
  {
    title: 'Leka Warm Roof System',
    intro: 'Lightweight GRP warm roof with insulated, contemporary finish.',
    logo: lekaLogo,
    image: lekaImage,
    bullets: [
      'Very lightweight GRP construction',
      'Low U-values for improved energy efficiency',
      'Modern, clean internal and external finish',
      'Ideal for extensions and conservatories',
    ],
  },
  {
    title: 'WarmerRoof System',
    intro: 'Durable insulated roof suitable for upgrades and new builds.',
    logo: warmerRoofLogo,
    image: warmerRoofImage,
    bullets: [
      'Robust insulated structure for long-term durability',
      'Range of tile and finish options',
      'Works for both new builds and replacements',
      'Designed for dependable all-weather performance',
    ],
  },
  {
    title: 'Insulated Roof System',
    intro: 'Cost-effective internal insulation improving comfort for existing conservatories.',
    logo: insulatedLogo,
    image: insulatedImage,
    bullets: [
      'Improves warmth without full roof replacement',
      'Decorative internal finish included',
      'Quick installation with minimal disruption',
      'Suitable for older uPVC conservatories',
    ],
  },
]

const supplierMarks = [
  { name: 'SupaLite', image: supaliteLogo },
  { name: 'Leka', image: lekaLogo },
  { name: 'WarmerRoof', image: warmerRoofLogo },
  { name: 'Insulated Roof System', image: insulatedLogo },
]

const testimonials = [
  {
    name: 'Jerry',
    location: 'Wilmslow',
    quote: 'So happy with my conservatory roof upgrade — it finally feels like part of the house.',
    image: jerryPreview,
  },
  {
    name: 'Ian',
    location: 'Chester',
    quote: 'The replacement conservatory feels brand new. Warmer in winter, cooler in summer.',
    image: ianPreview,
  },
  {
    name: 'Lorna',
    location: 'Alderley Edge',
    quote: 'An extension that blended perfectly with our home. Faultless from quote to handover.',
    image: lornaPreview,
  },
]

const areas = [
  { name: 'Alderley Edge', meta: 'SK9' },
  { name: 'Chester', meta: 'CH1–CH4' },
  { name: 'Frodsham', meta: 'WA6' },
  { name: 'Hale & Bowdon', meta: 'WA14–WA15' },
  { name: 'Knutsford', meta: 'WA16' },
  { name: 'Nantwich', meta: 'CW5' },
  { name: 'Prestbury', meta: 'SK10' },
  { name: 'Tarporley', meta: 'CW6' },
  { name: 'Wilmslow', meta: 'SK9' },
  { name: 'Wirral', meta: 'CH41–CH63' },
]

const processSteps = [
  {
    title: 'Call or enquire',
    text: 'Reach out with your ideas or plans. We’ll talk you through the options for your conservatory.',
  },
  {
    title: 'Free home survey',
    text: 'A convenient visit to measure, understand your space, and recommend the right roof system.',
  },
  {
    title: 'Written quote',
    text: 'A detailed, no-obligation quote clearly showing what’s included and any optional extras.',
  },
  {
    title: 'Professional installation',
    text: 'Once you’re happy, we handle everything from start to finish with care and precision.',
  },
]

const faqs = [
  {
    question: 'Will my roof meet building regulations?',
    answer:
      'Yes. We handle the entire process from start to finish, including all required checks and submissions. Once your new roof installation is complete, we issue a Building Control Certificate, ensuring full compliance and complete peace of mind.',
  },
  {
    question: 'How long will the installation take?',
    answer:
      'Installation time depends on the size and structure of your conservatory. In most cases, our team completes the work in 3 to 6 days, ensuring a smooth, efficient process with minimal disruption to your home.',
  },
  {
    question: 'Why choose us?',
    answer:
      'We provide highly energy-efficient conservatory roof solutions with U-Values as low as 0.12, helping retain heat, lower energy bills, and create a comfortable living space all year round.',
  },
  {
    question: 'How much does a conservatory roof conversion cost in Cheshire?',
    answer:
      'The cost of a conservatory roof conversion in Cheshire typically starts from around £4,000 depending on the size of your conservatory, the roof type you choose, and the level of insulation required. Larger conservatories or tiled roof systems may cost more. We provide free quotes for homeowners across Cheshire so you can get an accurate price for your property.',
  },
  {
    question: 'Do I need planning permission for a conservatory roof replacement in Cheshire?',
    answer:
      'In most cases, planning permission is not required for a conservatory roof conversion in Cheshire, as it usually falls under permitted development. However, building regulations approval is often required to ensure insulation and structural compliance. We handle this process and advise you during your quotation.',
  },
  {
    question: 'How long does a conservatory roof conversion take?',
    answer:
      'Most conservatory roof conversions in Cheshire are completed within 2–5 days, depending on the size and complexity of the project. We aim to minimise disruption and ensure your home is left clean and tidy once the installation is complete.',
  },
  {
    question: 'Will replacing my conservatory roof make it warmer in winter?',
    answer:
      'Yes. A properly insulated conservatory roof conversion dramatically improves thermal performance. Many Cheshire homeowners find their conservatory becomes usable all year round, staying warmer in winter and cooler in summer compared to older polycarbonate or glass roofs.',
  },
  {
    question: 'What type of conservatory roof is best for homes in Cheshire?',
    answer:
      'The best conservatory roof for your Cheshire home depends on your goals and budget. Popular options include insulated tiled roofs and lightweight solid roof systems. These provide excellent insulation and give your conservatory more of a traditional extension feel.',
  },
  {
    question: 'Can you convert a conservatory roof without replacing the whole conservatory?',
    answer:
      'Yes. In most cases, we can replace just the roof structure while keeping your existing conservatory frames, provided they are in good condition. This makes conservatory roof replacement in Cheshire a more cost-effective alternative to building a full extension.',
  },
  {
    question: 'Will a new conservatory roof add value to my home in Cheshire?',
    answer:
      'A conservatory roof conversion can add value by turning an unusable conservatory into a comfortable living space. Buyers in Cheshire often prefer homes with year-round usable conservatories rather than outdated glass or polycarbonate roofs.',
  },
  {
    question: 'Is a tiled conservatory roof noisy in heavy rain?',
    answer:
      'No. Modern insulated tiled conservatory roofs are significantly quieter than older polycarbonate roofs. Many homeowners across Cheshire comment on the noticeable reduction in rain noise after installation.',
  },
  {
    question: 'Are conservatory roof conversions energy efficient?',
    answer:
      'Yes. Upgrading to an insulated conservatory roof improves energy efficiency and can help reduce heating bills. This is especially beneficial in Cheshire’s colder months, where heat loss through older conservatory roofs is common.',
  },
  {
    question: 'Do you offer conservatory roof conversions across Cheshire?',
    answer:
      'Yes. We install conservatory roof conversions throughout Cheshire, including Chester, Warrington, Crewe, Macclesfield, Northwich, Wilmslow, and surrounding areas. Contact us today for a free, no-obligation quote.',
  },
]

const revealDelay = (index: number, step = 70) =>
  ({ '--reveal-delay': `${index * step}ms` }) as CSSProperties

function App() {
  const heroRef = useRef<HTMLElement | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showSticky, setShowSticky] = useState(false)
  const [openFaq, setOpenFaq] = useState<number>(0)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const offset = window.scrollY
      const heroBottom = heroRef.current?.getBoundingClientRect().bottom ?? Number.POSITIVE_INFINITY
      const nextScrolled = offset > 36
      const nextShowSticky = heroBottom <= 0

      setScrolled((current) => (current === nextScrolled ? current : nextScrolled))
      setShowSticky((current) => (current === nextShowSticky ? current : nextShowSticky))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealItems.forEach((item) => {
        item.dataset.visible = 'true'
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const target = entry.target as HTMLElement
          target.dataset.visible = 'true'
          observer.unobserve(target)
        })
      },
      {
        rootMargin: window.innerWidth < 720 ? '0px 0px -8% 0px' : '0px 0px -14% 0px',
        threshold: 0.12,
      },
    )

    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="top-bar">
          <div className="top-bar-inner">
            <span className="top-bar-tagline">
              Tiled roofs · Warm roof extensions · Insulated systems · Replacement frames
            </span>
            <div className="top-bar-meta">
              <a className="top-bar-item" href="tel:01244617471">
                <Phone size={13} aria-hidden="true" />
                01244 617471
              </a>
              <a className="top-bar-item" href="mailto:info@cheshireconservatoryroofs.com">
                <Mail size={13} aria-hidden="true" />
                info@cheshireconservatoryroofs.com
              </a>
              <ul className="top-bar-social" aria-label="Social media">
                <li>
                  <a
                    href="https://www.facebook.com/cheshireconservatoryroofs"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cheshire Conservatory Roofs on Facebook"
                  >
                    <FacebookIcon size={14} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/cheshireccr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cheshire Conservatory Roofs on X"
                  >
                    <XIcon size={13} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/cheshireconservatoryroofs"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Cheshire Conservatory Roofs on Instagram"
                  >
                    <InstagramIcon size={14} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="nav-shell">
          <a className="brand" href="#main" aria-label="Cheshire Conservatory Roofs home">
            <img src={logo} alt="Cheshire Conservatory Roofs" />
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="call-link" href="tel:01244617471">
              <Phone size={16} aria-hidden="true" />
              Call
            </a>
            <a className="button button-primary button-sm" href="#quote">
              Get a quote
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <button
              className="menu-toggle"
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={22} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-drawer ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <button className="drawer-backdrop" type="button" aria-label="Close menu" onClick={closeMenu} />
        <div className="drawer-panel" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="drawer-head">
            <img src={logo} alt="" />
            <button type="button" aria-label="Close navigation menu" onClick={closeMenu}>
              <X size={22} aria-hidden="true" />
            </button>
          </div>
          <nav>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="button button-primary drawer-cta" href="#quote" onClick={closeMenu}>
            Request a quote
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title" ref={heroRef}>
          <video
            className="hero-video"
            aria-hidden="true"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={banner1}
          >
            <source src={`${import.meta.env.BASE_URL}hero-roof-video.mp4`} type="video/mp4" />
          </video>
          <div className="hero-overlay" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow eyebrow-light">
                <MapPin size={14} aria-hidden="true" />
                Conservatory roof specialists · Cheshire
              </span>
              <h1 id="hero-title" className="display">
                Transform your conservatory into a year-round living space.
              </h1>
              <p className="hero-lede">
                Tiled roof systems, warm roof extensions, insulated upgrades and replacement frames
                — supplied and installed across Cheshire by a team that has done it for forty years.
              </p>
            </div>

            <aside className="hero-form-card" aria-label="Quick quote request">
              <div className="hero-form-head">
                <span className="eyebrow">Free, no-obligation quote</span>
                <h2 className="display display-xs">Tell us about your conservatory.</h2>
                <p>Same-day reply from a real adviser — not a call centre.</p>
              </div>
              <form
                className="hero-form"
                onSubmit={(event) => {
                  event.preventDefault()
                  setSent(true)
                }}
              >
                <label>
                  <span>Name</span>
                  <input name="name" autoComplete="name" placeholder="Your name" required />
                </label>
                <label>
                  <span>Phone</span>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Best number to call"
                    required
                  />
                </label>
                <label>
                  <span>Postcode</span>
                  <input
                    name="postcode"
                    autoComplete="postal-code"
                    placeholder="e.g. CH1"
                    required
                  />
                </label>
                <label>
                  <span>What can we help with?</span>
                  <select name="service" defaultValue="Tiled roof replacement">
                    <option>Tiled roof replacement</option>
                    <option>Warm roof extension</option>
                    <option>Insulated roof system</option>
                    <option>Replacement frames</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <button className="button button-primary form-submit" type="submit">
                  Get a free quote
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
                <p className="hero-form-foot">
                  Or call <a href="tel:01244617471">01244 617471</a>
                </p>
                {sent && (
                  <p className="form-note" role="status">
                    Thanks — we&rsquo;ll be in touch the same working day.
                  </p>
                )}
              </form>
            </aside>
            <dl className="hero-stats" aria-label="Our credentials at a glance">
              <div>
                <dt>40+</dt>
                <dd>years of installations</dd>
              </div>
              <div>
                <dt>10 yr</dt>
                <dd>workmanship warranty</dd>
              </div>
              <div>
                <dt>0.15</dt>
                <dd>W/m²K U-values</dd>
              </div>
            </dl>
          </div>
          <div className="hero-scroll" aria-hidden="true">
            <span />
            Scroll
          </div>
        </section>

        <section className="trust-strip" aria-label="Approved supplier marks and credentials">
          <div className="container trust-strip-grid">
            <div className="trust-strip-marks" aria-label="Approved supplier marks">
              {supplierMarks.map((mark) => (
                <img key={mark.name} src={mark.image} alt={`${mark.name} logo`} loading="lazy" />
              ))}
            </div>
            <div className="trust-strip-meta">
              <span>
                <ShieldCheck size={16} aria-hidden="true" />
                Building Regulations approved
              </span>
              <span>
                <ShieldCheck size={16} aria-hidden="true" />
                10-year workmanship guarantee
              </span>
            </div>
          </div>
        </section>

        <section className="section about-section">
          <div className="container about-grid">
            <div className="about-copy reveal reveal-left">
              <span className="eyebrow">Cheshire Conservatory Roofs Ltd</span>
              <h2 className="display">
                Outdated conservatories, transformed into rooms you actually use.
              </h2>
              <p>
                We specialise in turning tired, inefficient conservatories into beautiful, comfortable
                spaces that work all year round. Technical expertise paired with a careful approach to
                quality — delivering installations that improve comfort, lift energy efficiency,
                and add lasting value across Chester, Alderley Edge, Wilmslow, Knutsford, Prestbury and
                the wider Cheshire region.
              </p>
              <p>
                We work with a curated range of four leading roof systems — from cost-effective
                upgrades to premium tiled roofs — installed to high standards and backed by
                manufacturer-approved certifications.
              </p>
              <a className="text-link" href="#why-us">
                Why homeowners choose us
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="about-collage reveal reveal-right" aria-label="Project images">
              <img src={about1} alt="Recent conservatory roof installation in Cheshire" loading="lazy" />
              <img src={about2} alt="Insulated roof interior with plastered finish" loading="lazy" />
              <img src={about3} alt="Tiled conservatory roof exterior" loading="lazy" />
              <img src={about4} alt="Completed conservatory extension" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading reveal reveal-rise">
              <span className="eyebrow">What we install</span>
              <h2 className="display">Four roof systems, chosen because they actually perform.</h2>
              <p className="section-lede">
                Each system is selected for a specific kind of conservatory or extension. We will
                recommend the right one after seeing your space — never the most expensive one.
              </p>
            </div>
            <div className="service-rows">
              {services.map((service, index) => (
                <article
                  className="service-row reveal reveal-rise"
                  key={service.title}
                  style={revealDelay(index, 90)}
                >
                  <figure className="service-row-media">
                    <img src={service.image} alt={service.title} loading="lazy" />
                  </figure>
                  <div className="service-row-copy">
                    <span className="service-index">{`0${index + 1}`}</span>
                    <h3 className="display display-sm">{service.title}</h3>
                    <p>{service.text}</p>
                    <a className="text-link" href="#quote">
                      Discuss this for my home
                      <ArrowRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section why-section" id="why-us">
          <div className="container why-grid">
            <div className="why-copy reveal reveal-left">
              <span className="eyebrow">Why choose us</span>
              <h2 className="display">
                Local expertise, certified systems, clear warranties.
              </h2>
              <p>
                Families and professionals want a home that feels warm in winter, cool in summer, and
                always inviting. We are local specialists for WarmerRoof, SupaLite, Leka and insulated
                systems — and we look after the paperwork, the build, and the aftercare.
              </p>
              <a className="text-link text-link-strong" href="#quote">
                Book a consultation
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
            <ul className="why-list reveal reveal-right">
              {whyChooseUs.map((item, index) => (
                <li key={item} className="reveal reveal-card" style={revealDelay(index, 50)}>
                  <Check size={18} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section quote-section" id="quote">
          <div className="container quote-grid">
            <div className="quote-intro reveal reveal-left">
              <span className="eyebrow">Request your free quote</span>
              <h2 className="display">No obligation. No sales pitch. No gimmicks.</h2>
              <p>
                Speak to a friendly adviser to arrange a free survey or get advice on the best roof
                for your conservatory. We are real people, not a call centre — and we will reply
                the same working day.
              </p>
              <ul className="quote-bullets">
                <li>
                  <Check size={16} aria-hidden="true" />
                  Fast local survey, typically within 3–7 days
                </li>
                <li>
                  <Check size={16} aria-hidden="true" />
                  Fixed written quote, no hidden fees
                </li>
                <li>
                  <Check size={16} aria-hidden="true" />
                  Trusted installers, long manufacturer warranties
                </li>
              </ul>
              <div className="quote-callout">
                <Phone size={18} aria-hidden="true" />
                <div>
                  <strong>Prefer to talk?</strong>
                  <a href="tel:01244617471">01244 617471</a>
                </div>
              </div>
            </div>

            <form
              className="quote-form reveal reveal-right"
              onSubmit={(event) => {
                event.preventDefault()
                setSent(true)
              }}
            >
              <div className="form-row">
                <label>
                  <span>Name</span>
                  <input name="name" autoComplete="name" placeholder="Your name" required />
                </label>
                <label>
                  <span>Phone</span>
                  <input name="phone" type="tel" autoComplete="tel" placeholder="Best number" required />
                </label>
              </div>
              <div className="form-row">
                <label>
                  <span>Postcode</span>
                  <input name="postcode" autoComplete="postal-code" placeholder="e.g. CH1" required />
                </label>
                <label>
                  <span>What can we help with?</span>
                  <select name="service" defaultValue="Tiled roof replacement">
                    <option>Tiled roof replacement</option>
                    <option>Warm roof extension</option>
                    <option>Insulated roof system</option>
                    <option>Replacement frames</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
              </div>
              <label>
                <span>Message</span>
                <textarea name="message" rows={4} placeholder="A short note about your conservatory" />
              </label>
              <button className="button button-primary form-submit" type="submit">
                Send request
                <ArrowRight size={18} aria-hidden="true" />
              </button>
              <p className="form-fineprint">
                By submitting you agree to be contacted about your enquiry. We never share details.
              </p>
              {sent && (
                <p className="form-note" role="status">
                  Thanks — your request was received. (Demo only; the live site will route to the
                  enquiry inbox.)
                </p>
              )}
            </form>
          </div>
        </section>

        <section className="section suppliers-section" id="suppliers">
          <div className="container">
            <div className="section-heading reveal reveal-rise">
              <span className="eyebrow">Quality backed by leading suppliers</span>
              <h2 className="display">Trusted roof systems for durability, efficiency, and style.</h2>
              <p className="section-lede">
                We only work with manufacturers whose products meet our standard for performance and
                finish — and whose warranties stand up.
              </p>
            </div>
            <div className="supplier-grid">
              {suppliers.map((supplier, index) => (
                <article
                  className="supplier-card reveal reveal-card"
                  key={supplier.title}
                  style={revealDelay(index, 80)}
                >
                  <div className="supplier-media">
                    <img className="supplier-photo" src={supplier.image} alt={supplier.title} loading="lazy" />
                    <img className="supplier-logo" src={supplier.logo} alt={`${supplier.title} logo`} loading="lazy" />
                  </div>
                  <div className="supplier-copy">
                    <h3 className="display display-xs">{supplier.title}</h3>
                    <p>{supplier.intro}</p>
                    <ul>
                      {supplier.bullets.map((bullet) => (
                        <li key={bullet}>
                          <Check size={16} aria-hidden="true" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonials-section" id="testimonials">
          <div className="container">
            <div className="section-heading reveal reveal-rise">
              <span className="eyebrow">From our customers</span>
              <h2 className="display">Real installations, real Cheshire homeowners.</h2>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((item, index) => (
                <figure
                  className="testimonial-card reveal reveal-card"
                  key={item.name}
                  style={revealDelay(index, 90)}
                >
                  <div className="testimonial-portrait">
                    <img src={item.image} alt={`${item.name} from ${item.location}`} loading="lazy" />
                  </div>
                  <blockquote className="display display-quote">“{item.quote}”</blockquote>
                  <figcaption>
                    <strong>{item.name}</strong>
                    <span>{item.location}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container process-wrap">
            <div className="section-heading reveal reveal-rise">
              <span className="eyebrow">How it works</span>
              <h2 className="display">From first call to handover — honest, methodical, hassle-free.</h2>
              <p className="section-lede">
                Every quote is straightforward and valid for a set period. No fake discounts, no
                inflated &ldquo;was&rdquo; prices, no pressure.
              </p>
            </div>
            <ol className="process-steps">
              {processSteps.map((step, index) => (
                <li
                  className="process-step reveal reveal-rise"
                  key={step.title}
                  style={revealDelay(index, 90)}
                >
                  <span className="process-num display">{`0${index + 1}`}</span>
                  <h3 className="display display-xs">{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section areas-section" id="areas">
          <div className="container areas-wrap">
            <div className="section-heading reveal reveal-rise">
              <span className="eyebrow">Where we work</span>
              <h2 className="display">Across Cheshire — same standard of service, every postcode.</h2>
            </div>
            <ul className="areas-list">
              {areas.map((area, index) => (
                <li
                  key={area.name}
                  className="area-row reveal reveal-card"
                  style={revealDelay(index, 30)}
                >
                  <span className="area-name">{area.name}</span>
                  <span className="area-meta">{area.meta}</span>
                  <span className="area-action">
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                </li>
              ))}
            </ul>
            <p className="areas-foot">
              Not listed? We cover most of Cheshire and parts of north Wales. Call
              {' '}
              <a href="tel:01244617471">01244 617471</a> and we will let you know.
            </p>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-wrap">
            <div className="section-heading reveal reveal-rise">
              <span className="eyebrow">Frequently asked questions</span>
              <h2 className="display">The questions Cheshire homeowners ask before they buy.</h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index
                return (
                  <div
                    className={`faq-item reveal reveal-card ${isOpen ? 'is-open' : ''}`}
                    key={faq.question}
                    style={revealDelay(index, 25)}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown size={20} aria-hidden="true" />
                    </button>
                    <div className="faq-answer" hidden={!isOpen}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-grid reveal reveal-rise">
            <div>
              <span className="eyebrow eyebrow-light">Ready when you are</span>
              <h2 className="display">A warmer, brighter, year-round conservatory starts with a 10-minute call.</h2>
              <p>
                Speak to one of our advisers for honest guidance on the best roof for your home.
                We&rsquo;ll arrange a free local survey and a fixed written quote — no obligation.
              </p>
            </div>
            <div className="final-actions">
              <a className="button button-cream" href="#quote">
                Request your free quote
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button button-ghost-light" href="tel:01244617471">
                <Phone size={18} aria-hidden="true" />
                Call Jerry directly
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src={brandFullLogo} alt="Cheshire Conservatory Roofs" />
            <p>
              Your trusted partner for new conservatories and roof replacements across Cheshire —
              quality craftsmanship and energy-efficient systems that lift the comfort and value of
              your home.
            </p>
            <div className="footer-marks">
              {supplierMarks.map((mark) => (
                <img key={mark.name} src={mark.image} alt={`${mark.name} logo`} loading="lazy" />
              ))}
            </div>
          </div>
          <div>
            <h2 className="footer-heading">Services</h2>
            {services.map((service) => (
              <a key={service.title} href="#services">
                {service.title}
              </a>
            ))}
          </div>
          <div>
            <h2 className="footer-heading">Roof systems</h2>
            {suppliers.map((supplier) => (
              <a key={supplier.title} href="#suppliers">
                {supplier.title}
              </a>
            ))}
          </div>
          <div>
            <h2 className="footer-heading">Get in touch</h2>
            <a href="tel:01244617471">01244 617471</a>
            <a href="tel:01244617472">01244 617472</a>
            <a href="tel:01625380159">01625 380159</a>
            <a href="mailto:info@cheshireconservatoryroofs.com">info@cheshireconservatoryroofs.com</a>
            <a href="mailto:sales@cheshireconservatoryroofs.com">sales@cheshireconservatoryroofs.com</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} Cheshire Conservatory Roofs Ltd. All rights reserved.
          </span>
          <span className="footer-policies">
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">GDPR Policy</a>
          </span>
        </div>
      </footer>

      <a
        className={`floating-contact ${showSticky ? 'is-hidden' : ''}`}
        href="tel:01244617471"
        aria-label="Call Cheshire Conservatory Roofs"
      >
        <Phone size={20} aria-hidden="true" />
      </a>

      <div className={`bottom-cta ${showSticky ? 'is-visible' : ''}`}>
        <div className="bottom-cta-inner">
          <div className="bottom-cta-copy">
            <strong>Ready for a warmer conservatory?</strong>
            <span>Free survey, fixed quote, 10-year warranty.</span>
          </div>
          <div className="bottom-cta-actions">
            <a className="button button-ghost-dark button-sm" href="tel:01244617471">
              <Phone size={15} aria-hidden="true" />
              Call
            </a>
            <a className="button button-primary button-sm" href="#quote">
              Get a quote
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
