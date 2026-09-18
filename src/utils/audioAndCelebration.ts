import confetti from 'canvas-confetti';

// Audio Context singleton
let audioCtx: AudioContext | null = null;
let isSoundMuted = false;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function setSoundMuted(muted: boolean) {
  isSoundMuted = muted;
}

export function getIsSoundMuted(): boolean {
  return isSoundMuted;
}

/**
 * Phát âm thanh tiếng vỗ tay chúc mừng & hợp âm chiến thắng rực rỡ
 */
export function playApplauseAndCheer() {
  if (isSoundMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  // 1. ÂM THANH TIẾNG VỖ TAY (Layered Hand Claps)
  // Tạo buffer nhiễu trắng được lọc dải tần (Bandpass filter) với hàng chục nhịp vỗ tay ngẫu nhiên
  const clapDuration = 2.4;
  const bufferSize = ctx.sampleRate * clapDuration;
  const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const output = noiseBuffer.getChannelData(0);

  // Tạo pattern các tiếng vỗ tay liên tiếp
  for (let i = 0; i < bufferSize; i++) {
    output[i] = (Math.random() * 2 - 1);
  }

  const noise = ctx.createBufferSource();
  noise.buffer = noiseBuffer;

  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(1400, now);
  filter.Q.setValueAtTime(2.5, now);

  const gain = ctx.createGain();
  // Envelope âm lượng tiếng vỗ tay rộ lên rồi giảm dần
  gain.gain.setValueAtTime(0.01, now);
  gain.gain.linearRampToValueAtTime(0.28, now + 0.15);
  gain.gain.exponentialRampToValueAtTime(0.35, now + 0.5);
  gain.gain.exponentialRampToValueAtTime(0.18, now + 1.2);
  gain.gain.exponentialRampToValueAtTime(0.001, now + clapDuration);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  noise.start(now);
  noise.stop(now + clapDuration);

  // 2. HỢP ÂM CHIẾN THẮNG RỰC RỠ (Fanfare Chimes: C5 - E5 - G5 - C6)
  const fanfareNotes = [
    { freq: 523.25, time: 0.0, dur: 0.25 },  // C5
    { freq: 659.25, time: 0.14, dur: 0.25 }, // E5
    { freq: 783.99, time: 0.28, dur: 0.35 }, // G5
    { freq: 1046.50, time: 0.45, dur: 0.9 }, // C6
    { freq: 1318.51, time: 0.5, dur: 0.8 },  // E6 hòa âm sáng
  ];

  fanfareNotes.forEach((n) => {
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(n.freq, now + n.time);

    oscGain.gain.setValueAtTime(0.001, now + n.time);
    oscGain.gain.linearRampToValueAtTime(0.18, now + n.time + 0.04);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + n.time + n.dur);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);

    osc.start(now + n.time);
    osc.stop(now + n.time + n.dur);
  });
}

/**
 * Đệm một đoạn nhạc du dương, ấm áp để khích lệ học sinh cố gắng hơn
 */
export function playEncouragementMusic() {
  if (isSoundMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  // Giai điệu khích lệ ấm áp: F4 -> A4 -> C5 -> E5 -> D5 (ấm áp, vươn lên, tràn đầy hy vọng)
  const melody = [
    { freq: 349.23, time: 0.0, dur: 0.4 },  // F4
    { freq: 440.00, time: 0.25, dur: 0.4 }, // A4
    { freq: 523.25, time: 0.5, dur: 0.5 },  // C5
    { freq: 659.25, time: 0.8, dur: 0.6 },  // E5
    { freq: 587.33, time: 1.25, dur: 1.1 }, // D5 (ngân dài êm dịu)
  ];

  melody.forEach((note) => {
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();

    // Dùng sóng sine ấm áp kết hợp chút overtone dịu ngọt
    osc.type = 'sine';
    osc.frequency.setValueAtTime(note.freq, now + note.time);

    oscGain.gain.setValueAtTime(0.001, now + note.time);
    oscGain.gain.linearRampToValueAtTime(0.2, now + note.time + 0.08);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + note.time + note.dur);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);

    osc.start(now + note.time);
    osc.stop(now + note.time + note.dur);
  });
}

/**
 * Tung hoa hoành tráng (Canvas Confetti & Floating Flowers Explosion)
 */
export function triggerGrandCelebration() {
  // 1. Confetti Cannons - Pháo hoa giấy đa màu xanh lá, vàng cam, hồng rực rỡ
  const vibrantColors = ['#10B981', '#059669', '#34D399', '#F59E0B', '#F97316', '#FBBF24', '#EC4899', '#8B5CF6'];

  // Bắn đại bác từ góc trái
  confetti({
    particleCount: 65,
    angle: 60,
    spread: 70,
    origin: { x: 0.05, y: 0.75 },
    colors: vibrantColors,
    scalar: 1.2,
    ticks: 240,
    zIndex: 9999
  });

  // Bắn đại bác từ góc phải
  confetti({
    particleCount: 65,
    angle: 120,
    spread: 70,
    origin: { x: 0.95, y: 0.75 },
    colors: vibrantColors,
    scalar: 1.2,
    ticks: 240,
    zIndex: 9999
  });

  // Đợt 2 sau 250ms từ giữa lên tung hoa rực rỡ
  setTimeout(() => {
    confetti({
      particleCount: 90,
      spread: 110,
      origin: { x: 0.5, y: 0.45 },
      colors: vibrantColors,
      scalar: 1.3,
      ticks: 280,
      zIndex: 9999
    });
  }, 250);

  // 2. Tạo các bông hoa và biểu tượng bay lơ lửng khắp màn hình
  createFloatingFlowers();
}

/**
 * Hiệu ứng tung hoa bay lượn trên màn hình (Floating celebratory flower icons)
 */
function createFloatingFlowers() {
  if (typeof document === 'undefined') return;

  const flowerIcons = ['🌸', '🌺', '🌻', '🌼', '💐', '🎉', '✨', '🌟', '🏵️'];
  const container = document.createElement('div');
  container.className = 'fixed inset-0 pointer-events-none z-[9998] overflow-hidden';
  document.body.appendChild(container);

  const count = 30;
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    const icon = flowerIcons[Math.floor(Math.random() * flowerIcons.length)];
    el.textContent = icon;
    
    const startX = Math.random() * 100; // %
    const duration = 2.5 + Math.random() * 2; // seconds
    const delay = Math.random() * 0.6; // seconds
    const size = 26 + Math.random() * 24; // px
    const rotation = (Math.random() - 0.5) * 720; // deg

    el.style.position = 'absolute';
    el.style.left = `${startX}%`;
    el.style.bottom = '-40px';
    el.style.fontSize = `${size}px`;
    el.style.opacity = '1';
    el.style.transform = `translateY(0) rotate(0deg)`;
    el.style.transition = `all ${duration}s cubic-bezier(0.25, 1, 0.5, 1) ${delay}s`;

    container.appendChild(el);

    // Kích hoạt bay lên
    requestAnimationFrame(() => {
      const endY = -(window.innerHeight + 100);
      const swayX = (Math.random() - 0.5) * 160;
      el.style.transform = `translate(${swayX}px, ${endY}px) rotate(${rotation}deg)`;
      el.style.opacity = '0';
    });
  }

  // Tự động dọn dẹp sau 5 giây
  setTimeout(() => {
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
  }, 5000);
}
