export type AuthSession = {
  username: string;
  loginAt: string; // ISO date string
};

const KEY = "engg1600_session_v1";

export function getSession(): AuthSession | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as AuthSession;
    if (!parsed?.username) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function setSession(session: AuthSession) {
  localStorage.setItem(KEY, JSON.stringify(session));
}

export function clearSession() {
  localStorage.removeItem(KEY);
}
