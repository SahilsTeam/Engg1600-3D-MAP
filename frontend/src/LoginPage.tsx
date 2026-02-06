import { useMemo, useState } from "react";

type Props = {
  onLogin: (username: string) => void;
};

export default function LoginPage({ onLogin }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // PROTOTYPE ONLY: shared password (change anytime)
  const expectedPassword = useMemo(() => "campus123", []);

  const submit = async () => {
    setError(null);

    const u = username.trim();
    if (!u) return setError("Enter a username to continue.");
    if (!password) return setError("Enter the password.");
    if (password !== expectedPassword) return setError("That password doesn’t match.");

    setIsLoading(true);
    // “Feels real” delay for prototype
    await new Promise((r) => setTimeout(r, 450));
    setIsLoading(false);

    onLogin(u);
  };

  return (
    <div className="login-root">
      <div className="login-bg" aria-hidden="true" />
      <div className="login-card">
        <div className="login-badge">Prototype</div>

        <div className="login-header">
          <div className="login-title">Engg1600 Campus Viewer</div>
          <div className="login-subtitle">
            Sign in to access the interactive 3D viewer.
          </div>
        </div>

        <div className="login-form">
          <div className="login-field">
            <label className="login-label">Username</label>
            <input
              className="login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Sahil"
              autoComplete="username"
              inputMode="text"
              onKeyDown={(e) => {
                if (e.key === "Enter") submit();
              }}
            />
          </div>

          <div className="login-field">
            <label className="login-label">Password</label>
            <div className="login-inputRow">
              <input
                className="login-input"
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
                onKeyDown={(e) => {
                  if (e.key === "Enter") submit();
                }}
              />
              <button
                className="login-ghostBtn"
                type="button"
                onClick={() => setShowPw((v) => !v)}
                aria-label={showPw ? "Hide password" : "Show password"}
              >
                {showPw ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {error ? <div className="login-error">{error}</div> : null}

          <button
            className="login-primaryBtn"
            type="button"
            disabled={isLoading}
            onClick={submit}
          >
            {isLoading ? "Signing in…" : "Sign in"}
          </button>

          <div className="login-footnote">
            Prototype password: <span className="login-mono">campus123</span>
          </div>
        </div>
      </div>
    </div>
  );
}
