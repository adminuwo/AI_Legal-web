import { atom } from "recoil"

const getAvatarUrl = (user) => {
  if (!user || !user.email) return "";
  const name = user.fullName || user.name || user.email.split('@')[0];
  const initials = name.trim().split(/\s+/).map(n => n[0]).join('').toUpperCase().slice(0, 2) || "A";
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=111111&color=B88B2A&size=256&bold=true`;
};

const processUser = (user) => {
  if (user) {
    // If role is missing or 'user', attempt to recover it from JWT token
    if (!user.role || user.role === 'user') {
      try {
        const token = user.token || (typeof localStorage !== 'undefined' && localStorage.getItem('token'));
        if (token && typeof token === 'string' && token.includes('.')) {
          const parts = token.split('.');
          if (parts.length === 3) {
            const payload = JSON.parse(atob(parts[1]));
            if (payload?.role && payload.role !== 'user') {
              user.role = payload.role;
            }
          }
        }
      } catch (e) {}
    }

    // Recover name from fullName if name is placeholder 'Nia' or missing
    if ((!user.name || user.name === 'Nia') && user.fullName && user.fullName !== 'Nia') {
      user.name = user.fullName;
    }
    if (!user.fullName && user.name && user.name !== 'Nia') {
      user.fullName = user.name;
    }

    // Fallback if no avatar exists, default placeholder, or broken unsplash link
    if (!user.avatar || user.avatar === '/User.jpeg' || user.avatar === '' || user.avatar.includes('images.unsplash.com')) {
      return { ...user, avatar: getAvatarUrl(user) };
    }
  }
  return user;
};

export const setUserData = (data) => {
  const existing = JSON.parse(localStorage.getItem('user') || '{}');
  const token = data.token || existing.token;

  // Preserve local name if backend returns default "Demo User" (Offline/Fallback mode)
  if (data.name === "Demo User" && existing.name && existing.name !== "Demo User") {
    data.name = existing.name;
  }

  const mergedData = { ...existing, ...data };
  const processedData = processUser(mergedData);
  const finalData = { ...processedData, token };


  // Update primary user
  localStorage.setItem("user", JSON.stringify(finalData));

  // Sync country and legal jurisdiction flags into dedicated localStorage keys
  const country = finalData.country || finalData.legalJurisdiction?.country;
  const countryCode = finalData.countryCode || finalData.legalJurisdiction?.countryCode;
  const state = finalData.state || finalData.legalJurisdiction?.state;
  const lang = finalData.personalizations?.general?.language;

  if (country) {
    localStorage.setItem('ai_legal_selected_country', country);
    localStorage.setItem('legal_country', country);
  }
  if (countryCode) {
    localStorage.setItem('legal_country_code', countryCode);
  }
  if (state) {
    localStorage.setItem('legal_state', state);
  }
  if (lang) {
    localStorage.setItem('ai_legal_lang', lang);
  }

  // Update account list
  const accounts = JSON.parse(localStorage.getItem('accounts') || '[]');
  const existingIndex = accounts.findIndex(a => a.email === finalData.email);
  if (existingIndex > -1) {
    accounts[existingIndex] = finalData;
  } else {
    accounts.push(finalData);
  }
  localStorage.setItem('accounts', JSON.stringify(accounts));
  return finalData;
}
export const getUserData = () => {
  try {
    const item = localStorage.getItem('user');
    if (!item || item === "undefined" || item === "null") return null;
    const data = JSON.parse(item);
    return processUser(data);
  } catch (e) {
    return null;
  }
}
export const getAccounts = () => {
  try {
    const item = localStorage.getItem('accounts');
    if (!item || item === "undefined" || item === "null") return [];
    const data = JSON.parse(item);
    return data.map(processUser);
  } catch (e) {
    return [];
  }
}
export const removeAccount = (email) => {
  const accounts = JSON.parse(localStorage.getItem('accounts') || '[]');
  const filtered = accounts.filter(a => a.email !== email);
  localStorage.setItem('accounts', JSON.stringify(filtered));

  const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
  if (currentUser.email === email) {
    localStorage.removeItem('user');
    if (filtered.length > 0) {
      localStorage.setItem('user', JSON.stringify(filtered[0]));
    }
  }
}
export const clearUser = () => {
  const cookieConsent = localStorage.getItem('aisa_cookie_consent');
  const appTheme = localStorage.getItem('app_theme');
  const appAccent = localStorage.getItem('app_accent');
  const onboardingDone = localStorage.getItem('ai_legal_onboarding_completed');
  
  localStorage.clear();
  
  if (cookieConsent) localStorage.setItem('aisa_cookie_consent', cookieConsent);
  if (appTheme) localStorage.setItem('app_theme', appTheme);
  if (appAccent) localStorage.setItem('app_accent', appAccent);
  if (onboardingDone) localStorage.setItem('ai_legal_onboarding_completed', onboardingDone);
}
export const updateUser = (updates) => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const updatedUser = { ...user, ...updates };
  localStorage.setItem('user', JSON.stringify(updatedUser));

  // Also update in accounts list
  const accounts = JSON.parse(localStorage.getItem('accounts') || '[]');
  const index = accounts.findIndex(a => a.email === user.email);
  if (index > -1) {
    accounts[index] = { ...accounts[index], ...updates };
    localStorage.setItem('accounts', JSON.stringify(accounts));
  }
  return updatedUser;
}
const getUser = () => {
  try {
    const item = localStorage.getItem('user');
    if (!item || item === "undefined" || item === "null") return null;
    const user = JSON.parse(item);
    if (user) {
      const processed = processUser(user);
      if (processed?.role && processed.role !== user.role) {
        localStorage.setItem('user', JSON.stringify(processed));
      }
      return processed;
    }
  } catch (e) {
    console.error("Error parsing user from localStorage", e);
    localStorage.removeItem('user'); // Clear corrupted data
  }
  return null;
};
export const toggleState = atom({
  key: "toggle",
  default: { subscripPgTgl: false, notify: false, sidebarOpen: false, platformSubTgl: false, focusMode: false }
})

export const userData = atom({
  key: 'userData',
  default: { user: getUser() }
})

export const sessionsData = atom({
  key: 'sessionsData',
  default: []
})

export const memoryData = atom({
  key: 'memoryData',
  default: null
})

export const activeProjectIdData = atom({
  key: 'activeProjectIdData',
  default: localStorage.getItem('aisa_active_project_id') || null
})

export const activeModeData = atom({
  key: 'activeModeData',
  default: localStorage.getItem('aisa_active_mode') || 'NORMAL_CHAT'
})

export const activeLegalToolData = atom({
  key: 'activeLegalToolData',
  default: (() => {
    try {
      const saved = localStorage.getItem('aisa_active_legal_tool_data');
      return saved ? JSON.parse(saved) : null;
    } catch (e) { return null; }
  })()
})

export const activeProjectsData = atom({
  key: 'activeProjectsData',
  default: []
})

export const legalViewData = atom({
  key: 'legalViewData',
  default: localStorage.getItem('aisa_legal_view') || 'CHAT'
})

export const selectedRoleState = atom({
  key: 'selectedRoleState',
  default: localStorage.getItem('user_selected_role') || 'advocate',
})

