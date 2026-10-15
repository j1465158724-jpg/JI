import { profile } from './data/profile.js';
import RoseWindow from './components/RoseWindow.jsx';
import Cogitator from './components/Cogitator.jsx';
import PuritySeal from './components/PuritySeal.jsx';
import SkullRule from './components/SkullRule.jsx';

const NAV = [
  { id: 'dossier', label: '档案' },
  { id: 'rites', label: '技艺' },
  { id: 'crusade', label: '远征' },
  { id: 'vox', label: '联络' },
];

function Nav() {
  return (
    <header className="nav">
      <a className="nav-mark" href="#top" aria-label="回到顶部">
        {profile.name}
      </a>
      <nav aria-label="页面导航">
        <ul className="nav-list">
          {NAV.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`}>{n.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-arch">
        <svg className="hero-arch-frame" viewBox="0 0 600 900" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M24 900 V380 Q24 96 300 18 Q576 96 576 380 V900"
            fill="none"
            stroke="#4a3f33"
            strokeWidth="10"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M44 900 V386 Q44 116 300 42 Q556 116 556 386 V900"
            fill="none"
            stroke="#8a6a3a"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <div className="hero-inner">
          <RoseWindow className="hero-rose" />
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <Cogitator lines={profile.bootLines} />
        </div>
      </div>
    </section>
  );
}

function SectionHead({ children }) {
  return (
    <>
      <SkullRule />
      <h2 className="section-title">{children}</h2>
    </>
  );
}

function Dossier() {
  return (
    <section className="section" id="dossier" aria-labelledby="dossier-h">
      <SectionHead>
        <span id="dossier-h">档案</span>
      </SectionHead>
      <div className="dossier">
        <article className="scroll">
          <PuritySeal className="scroll-seal" mark={profile.name.charAt(0)} />
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>
        <dl className="facts">
          {profile.facts.map((f) => (
            <div className="fact" key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Rites() {
  return (
    <section className="section" id="rites" aria-labelledby="rites-h">
      <SectionHead>
        <span id="rites-h">技艺</span>
      </SectionHead>
      <div className="rites">
        {profile.skills.map((g) => (
          <div className="tablet" key={g.rite}>
            <h3>{g.rite}</h3>
            <p className="tablet-note">{g.note}</p>
            <ul>
              {g.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Crusade() {
  return (
    <section className="section" id="crusade" aria-labelledby="crusade-h">
      <SectionHead>
        <span id="crusade-h">远征</span>
      </SectionHead>
      <ol className="log">
        {profile.projects.map((p) => (
          <li className="log-entry" key={p.name}>
            <span className="log-year">{p.year}</span>
            <div className="log-body">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              {p.link && (
                <a className="log-link" href={p.link} target="_blank" rel="noreferrer">
                  {p.linkText || '查看'}
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Vox() {
  return (
    <section className="section" id="vox" aria-labelledby="vox-h">
      <SectionHead>
        <span id="vox-h">联络</span>
      </SectionHead>
      <p className="vox-intro">星语频道已开启。有合作、问题，或者只是想聊聊涂装，都可以从这里找到我。</p>
      <ul className="vox">
        {profile.contacts.map((c) => (
          <li key={c.channel}>
            <span className="vox-channel">{c.channel}</span>
            <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {c.value}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#dossier">
        跳到正文
      </a>
      <Nav />
      <main>
        <Hero />
        <Dossier />
        <Rites />
        <Crusade />
        <Vox />
      </main>
      <footer className="footer">
        <SkullRule />
        <p>{profile.closing}</p>
        <p className="footer-small">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </>
  );
}
