/* ===================================================
   NovaPay Password Policy Checker — checker.js
   =================================================== */

'use strict';

// ── Common breached passwords list ─────────────────
const COMMON_PASSWORDS = new Set([
  'password','password1','password123','123456','12345678','1234567890',
  'qwerty','qwerty123','letmein','welcome','monkey','dragon','master',
  'login','admin','admin123','root','pass','abc123','iloveyou','sunshine',
  'princess','shadow','superman','michael','football','baseball','passw0rd',
  'trustno1','hello','charlie','donald','batman','access','secret','ninja',
  'starwars','hello123','test','test123','changeme','novapay','novapay123',
  'company','company123','finance','fintech','banking','secure','security',
  'summer','winter','spring','autumn','january','february','march','april',
  'may123','june123','july123','august','september','october','november',
  'december','password!','P@ssw0rd','P@ssword','Passw0rd!','Admin1234',
]);

// ── Keyboard sequences to block ─────────────────────
const SEQUENCES = [
  'qwerty','qwertyuiop','asdfghjkl','zxcvbnm',
  '12345','123456','1234567','12345678','123456789',
  '987654','9876543','98765432','987654321',
  'abcde','abcdef','abcdefg','abcdefgh',
  'zyxwv','fedcba','asdf','zxcv','qwer',
  'password','iloveyou',
];

// ── Strength config ─────────────────────────────────
const STRENGTH_LEVELS = [
  { label: 'Very Weak',  color: '#f43f5e', min: 0  },
  { label: 'Weak',       color: '#f97316', min: 20 },
  { label: 'Fair',       color: '#f59e0b', min: 40 },
  { label: 'Strong',     color: '#22d3ee', min: 60 },
  { label: 'Very Strong',color: '#10d68e', min: 80 },
];

// ── Charset for generator ───────────────────────────
const CHARSET = {
  upper:   'ABCDEFGHJKLMNPQRSTUVWXYZ',
  lower:   'abcdefghjkmnpqrstuvwxyz',
  digits:  '23456789',
  special: '!@#$%^&*()-_=+[]{}|;:,.<>?',
};

// ── DOM refs ────────────────────────────────────────
const input          = document.getElementById('password-input');
const toggleBtn      = document.getElementById('toggle-visibility');
const eyeOpen        = document.getElementById('eye-open');
const eyeClosed      = document.getElementById('eye-closed');
const strengthBar    = document.getElementById('strength-bar-fill');
const strengthLabel  = document.getElementById('strength-label');
const strengthTrack  = document.getElementById('strength-bar-track');
const entropyDisplay = document.getElementById('entropy-display');
const charsetDisplay = document.getElementById('charset-display');
const lengthDisplay  = document.getElementById('length-display');
const verdictBanner  = document.getElementById('verdict-banner');
const verdictIcon    = document.getElementById('verdict-icon');
const verdictText    = document.getElementById('verdict-text');
const generateBtn    = document.getElementById('generate-btn');
const generatedRow   = document.getElementById('generated-row');
const generatedPass  = document.getElementById('generated-password');
const copyBtn        = document.getElementById('copy-btn');
const copyLabel      = document.getElementById('copy-label');
const complianceScore= document.getElementById('compliance-score');
const complianceBar  = document.getElementById('compliance-bar-fill');

// Requirement elements
const REQS = {
  length:     document.getElementById('req-length'),
  upper:      document.getElementById('req-upper'),
  lower:      document.getElementById('req-lower'),
  number:     document.getElementById('req-number'),
  special:    document.getElementById('req-special'),
  norepeat:   document.getElementById('req-norepeat'),
  nosequence: document.getElementById('req-nosequence'),
  nocommon:   document.getElementById('req-nocommon'),
  entropy:    document.getElementById('req-entropy'),
};

// ── Utility: entropy calculation ────────────────────
function calcEntropy(password) {
  let pool = 0;
  if (/[a-z]/.test(password)) pool += 26;
  if (/[A-Z]/.test(password)) pool += 26;
  if (/[0-9]/.test(password)) pool += 10;
  if (/[^a-zA-Z0-9]/.test(password)) pool += 32;
  if (pool === 0) return 0;
  return Math.round(password.length * Math.log2(pool));
}

// ── Utility: get charset description ───────────────
function getCharsetDesc(password) {
  const parts = [];
  if (/[a-z]/.test(password)) parts.push('a–z');
  if (/[A-Z]/.test(password)) parts.push('A–Z');
  if (/[0-9]/.test(password)) parts.push('0–9');
  if (/[^a-zA-Z0-9]/.test(password)) parts.push('Symbols');
  return parts.length ? parts.join(', ') : '—';
}

// ── Utility: check for sequences ───────────────────
function hasSequence(password) {
  const lower = password.toLowerCase();
  return SEQUENCES.some(seq => lower.includes(seq));
}

// ── Utility: check consecutive repeats ─────────────
function hasRepeat(password) {
  return /(.)\1{3,}/.test(password);
}

// ── Validation engine ───────────────────────────────
function validate(password) {
  const entropy = calcEntropy(password);
  const specialCount = (password.match(/[^a-zA-Z0-9]/g) || []).length;
  const digitCount   = (password.match(/[0-9]/g) || []).length;

  return {
    length:     password.length >= 14,
    upper:      /[A-Z]/.test(password),
    lower:      /[a-z]/.test(password),
    number:     digitCount >= 2,
    special:    specialCount >= 2,
    norepeat:   !hasRepeat(password),
    nosequence: !hasSequence(password),
    nocommon:   !COMMON_PASSWORDS.has(password.toLowerCase()),
    entropy:    entropy >= 60,
  };
}

// ── Strength score (0–100) ──────────────────────────
function calcStrength(password, results) {
  if (!password.length) return 0;

  const passedCount = Object.values(results).filter(Boolean).length;
  const total = Object.keys(results).length;
  const policyScore = (passedCount / total) * 60;   // up to 60 pts from policy

  // Bonus for length
  let lengthBonus = 0;
  if (password.length >= 20) lengthBonus = 20;
  else if (password.length >= 16) lengthBonus = 12;
  else if (password.length >= 14) lengthBonus = 6;

  // Bonus for character variety
  let varietyBonus = 0;
  if (/[a-z]/.test(password)) varietyBonus += 3;
  if (/[A-Z]/.test(password)) varietyBonus += 3;
  if (/[0-9]/.test(password)) varietyBonus += 3;
  if (/[^a-zA-Z0-9]/.test(password)) varietyBonus += 4;
  if (/[^a-zA-Z0-9].*[^a-zA-Z0-9]/.test(password)) varietyBonus += 3;

  // Entropy bonus
  const entropy = calcEntropy(password);
  const entropyBonus = Math.min(10, Math.round((entropy - 40) / 6));

  return Math.min(100, Math.round(policyScore + lengthBonus + varietyBonus + Math.max(0, entropyBonus)));
}

// ── Update requirement item UI ──────────────────────
function setReqState(el, passed, empty) {
  el.classList.remove('pass', 'fail', 'checking');
  const icon = el.querySelector('.req-icon');
  if (empty) {
    el.classList.add('checking');
    icon.textContent = '○';
  } else if (passed) {
    el.classList.add('pass');
    icon.textContent = '✓';
  } else {
    el.classList.add('fail');
    icon.textContent = '✗';
  }
}

// ── Update strength bar ─────────────────────────────
function updateStrengthBar(score) {
  strengthBar.style.width = score + '%';

  // Gradient position: 0% = all red, 100% = all green
  const pos = 100 - score;
  strengthBar.style.backgroundPosition = pos + '% 0';

  // Label
  let level = STRENGTH_LEVELS[0];
  for (const l of STRENGTH_LEVELS) {
    if (score >= l.min) level = l;
  }
  strengthLabel.textContent = score === 0 ? '—' : level.label;
  strengthLabel.style.color = score === 0 ? 'var(--text-dim)' : level.color;
}

// ── Update verdict banner ───────────────────────────
function updateVerdict(password, results) {
  verdictBanner.classList.remove('pass', 'fail', 'warn');

  if (!password.length) {
    verdictIcon.textContent = '🔍';
    verdictText.textContent = 'Enter a password to begin checking';
    return;
  }

  const passedCount = Object.values(results).filter(Boolean).length;
  const total = Object.keys(results).length;

  if (passedCount === total) {
    verdictBanner.classList.add('pass');
    verdictIcon.textContent = '✅';
    verdictText.textContent = 'Compliant — this password meets all NovaPay AUP v2.1 requirements.';
  } else if (passedCount >= Math.ceil(total * 0.7)) {
    verdictBanner.classList.add('warn');
    verdictIcon.textContent = '⚠️';
    const failCount = total - passedCount;
    verdictText.textContent = `Almost there — ${failCount} requirement${failCount > 1 ? 's' : ''} not yet met.`;
  } else {
    verdictBanner.classList.add('fail');
    verdictIcon.textContent = '❌';
    verdictText.textContent = `Non-compliant — ${total - passedCount} of ${total} requirements are not satisfied.`;
  }
}

// ── Update compliance bar ───────────────────────────
function updateComplianceBar(passedCount, total) {
  const pct = (passedCount / total) * 100;
  complianceScore.textContent = `${passedCount} / ${total}`;
  complianceBar.style.width = pct + '%';

  // Color gradient position
  const pos = 100 - pct;
  complianceBar.style.backgroundPosition = pos + '% 0';
}

// ── Main checker ────────────────────────────────────
function checkPassword() {
  const password = input.value;
  const empty = password.length === 0;

  // Run validations
  const results = empty ? {} : validate(password);

  // Update each requirement item
  for (const [key, el] of Object.entries(REQS)) {
    setReqState(el, results[key], empty);
  }

  // Strength
  const strength = empty ? 0 : calcStrength(password, results);
  updateStrengthBar(strength);

  // Entropy & stats
  const entropy = empty ? 0 : calcEntropy(password);
  entropyDisplay.textContent = empty ? '— bits' : `${entropy} bits`;
  charsetDisplay.textContent = empty ? '—' : getCharsetDesc(password);
  lengthDisplay.textContent  = password.length;

  // Verdict
  updateVerdict(password, results);

  // Compliance score
  const passedCount = empty ? 0 : Object.values(results).filter(Boolean).length;
  const total = Object.keys(REQS).length;
  updateComplianceBar(passedCount, total);
}

// ── Password generator ──────────────────────────────
function generatePassword(length = 18) {
  const allChars = CHARSET.upper + CHARSET.lower + CHARSET.digits + CHARSET.special;

  // Guarantee at least 1 of each required type
  const mandatory = [
    pickRandom(CHARSET.upper),
    pickRandom(CHARSET.upper),
    pickRandom(CHARSET.lower),
    pickRandom(CHARSET.lower),
    pickRandom(CHARSET.digits),
    pickRandom(CHARSET.digits),
    pickRandom(CHARSET.special),
    pickRandom(CHARSET.special),
  ];

  const remaining = Array.from({ length: length - mandatory.length }, () => pickRandom(allChars));
  const combined  = [...mandatory, ...remaining];

  // Shuffle using crypto
  cryptoShuffle(combined);
  return combined.join('');
}

function pickRandom(str) {
  const arr = new Uint32Array(1);
  crypto.getRandomValues(arr);
  return str[arr[0] % str.length];
}

function cryptoShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const buf = new Uint32Array(1);
    crypto.getRandomValues(buf);
    const j = buf[0] % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// ── Toggle password visibility ──────────────────────
toggleBtn.addEventListener('click', () => {
  const isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';
  eyeOpen.style.display   = isPassword ? 'none'  : 'block';
  eyeClosed.style.display = isPassword ? 'block' : 'none';
  input.focus();
});

// ── Generate button ─────────────────────────────────
generateBtn.addEventListener('click', () => {
  const newPass = generatePassword(18);
  generatedPass.textContent = newPass;
  generatedRow.style.display = 'flex';

  // Also fill the input and check it
  input.value = newPass;
  input.type  = 'text';
  eyeOpen.style.display  = 'none';
  eyeClosed.style.display = 'block';
  checkPassword();
});

// ── Copy button ─────────────────────────────────────
copyBtn.addEventListener('click', async () => {
  const text = generatedPass.textContent;
  try {
    await navigator.clipboard.writeText(text);
    copyBtn.classList.add('copied');
    copyLabel.textContent = 'Copied!';
    setTimeout(() => {
      copyBtn.classList.remove('copied');
      copyLabel.textContent = 'Copy';
    }, 2000);
  } catch {
    // Fallback for restricted environments
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity  = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    copyLabel.textContent = 'Copied!';
    setTimeout(() => { copyLabel.textContent = 'Copy'; }, 2000);
  }
});

// ── Live input listener ─────────────────────────────
input.addEventListener('input', checkPassword);

// ── Initialize ──────────────────────────────────────
checkPassword();
