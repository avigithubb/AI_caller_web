import { useEffect, useState } from "react";

const APK_URL = `${import.meta.env.BASE_URL}ringer.zip`;
const VERSION = "1.0.0";

const FEATURES = [
  { title: "Pick a template", body: "Birthday, prank, pep talk, or write your own prompt." },
  { title: "AI writes the options", body: "Get several creative messages and choose your favorite." },
  { title: "We place the call", body: "Enter a number and an automated voice delivers it live." },
];

const STEPS = [
  "Tap Download and open the file when it finishes.",
  "If Android asks, allow installs from this source.",
  "Open Ringer, create an account, and make your first call.",
];

export default function App() {
  const [platform, setPlatform] = useState("other");

  useEffect(() => {
    const ua = navigator.userAgent;
    if (/android/i.test(ua)) setPlatform("android");
    else if (/iphone|ipad|ipod/i.test(ua)) setPlatform("ios");
  }, []);

  return (
    <div className="page">
      <style>{css}</style>

      <header className="nav">
        <span className="brand">Ringer</span>
      </header>

      <main>
        <section className="hero">
          <h1>Say it with a phone call, not a text.</h1>
          <p className="lead">
            Pick a moment, let the AI draft a few takes, choose your favorite,
            and Ringer calls them for real, out loud, right now.
          </p>

          {platform === "ios" ? (
            <>
              <button className="btn btn-disabled" disabled>
                iOS version coming soon
              </button>
              <p className="note">Open this page on an Android phone to download.</p>
            </>
          ) : (
            <>
              <a className="btn" href={APK_URL} download>
                Download for Android
              </a>
              <p className="note">
                Version {VERSION} · Android 8.0 or later
                {platform === "other" && " · Open this page on your phone to install"}
              </p>
            </>
          )}
        </section>

        <section className="section">
          <h2>What it does</h2>
          <div className="grid">
            {FEATURES.map((f) => (
              <div className="card" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>How to install</h2>
          <ol className="steps">
            {STEPS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="footer">
        Ringer · Calls are logged and recipients can opt out anytime.
      </footer>
    </div>
  );
}

const css = `
  :root { --bg:#16132B; --panel:#1F1B38; --border:#3A3560; --ivory:#F5F1E8; --muted:#A79FC4; --amber:#FFB238; }
  * { box-sizing: border-box; }
  body { margin:0; background:var(--bg); color:var(--ivory); font-family: Inter, system-ui, sans-serif; }
  .page { min-height:100vh; }
  .nav { max-width:1000px; margin:0 auto; padding:24px; }
  .brand { font-weight:700; font-size:20px; color:var(--amber); }
  .hero { max-width:1000px; margin:0 auto; padding:56px 24px 72px; }
  h1 { font-size:clamp(34px,6vw,60px); line-height:1.08; margin:0; max-width:700px; letter-spacing:-0.02em; }
  .lead { color:var(--muted); font-size:18px; max-width:520px; margin:20px 0 32px; line-height:1.55; }
  .btn { display:inline-block; background:var(--amber); color:var(--bg); font-weight:600; font-size:16px;
         padding:15px 28px; border-radius:999px; text-decoration:none; border:0; cursor:pointer; }
  .btn:hover { filter:brightness(1.08); }
  .btn-disabled { opacity:.5; cursor:not-allowed; }
  .note { color:#6F6890; font-size:13px; margin-top:12px; }
  .section { max-width:1000px; margin:0 auto; padding:40px 24px; }
  h2 { font-size:28px; margin:0 0 24px; }
  .grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:16px; }
  .card { background:var(--panel); border:1px solid var(--border); border-radius:16px; padding:22px; }
  .card h3 { margin:0 0 8px; font-size:18px; }
  .card p { margin:0; color:var(--muted); line-height:1.5; }
  .steps { color:var(--muted); line-height:1.9; padding-left:20px; max-width:520px; }
  .footer { text-align:center; color:#5A537A; font-size:12px; padding:40px 24px; }
`;