// Tab 切换：每个小节保持独立的“讲解 / 关键代码 / 演示”状态
const lessons = document.querySelectorAll('.lesson');
lessons.forEach(section => {
  const tabs = section.querySelectorAll('.tab');
  const panels = section.querySelectorAll('.panel');
  tabs.forEach(tab => tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    section.querySelector(`#${tab.dataset.target}`).classList.add('active');
  }));
});

// 左侧目录随着滚动自动高亮
const tocLinks = [...document.querySelectorAll('.toc')];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    tocLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
  });
}, { rootMargin: '-25% 0px -60% 0px', threshold: 0 });
document.querySelectorAll('.lesson').forEach(section => sectionObserver.observe(section));

// 6.1 盒模型
function toggleBoxModel() {
  const el = document.getElementById('box-demo');
  const isContent = !el.classList.contains('content-box');
  el.classList.toggle('content-box', isContent);
  const state = document.getElementById('box-state');
  const size = document.getElementById('box-size');
  if (isContent) {
    state.textContent = 'content-box';
    size.textContent = '实际占位宽度：376px';
  } else {
    state.textContent = 'border-box';
    size.textContent = '实际占位宽度：320px';
  }
}

// 6.2 Flexbox
function updateFlex() {
  const box = document.getElementById('flex-demo');
  const justify = document.getElementById('flex-justify').value;
  const direction = document.getElementById('flex-direction').value;
  const align = document.getElementById('flex-align').value;
  box.style.justifyContent = justify;
  box.style.flexDirection = direction;
  box.style.alignItems = align;
  document.getElementById('flex-status').textContent = `display: flex · ${direction} · justify-content: ${justify} · align-items: ${align}`;
}

// 6.3 Grid
let featureSpan = true;
function updateGrid() {
  const n = Number(document.getElementById('grid-cols').value);
  const el = document.getElementById('grid-demo');
  el.style.gridTemplateColumns = `repeat(${n}, minmax(0, 1fr))`;
  const cards = Array.from({ length: 8 }, (_, i) => `<div class="${featureSpan && i === 0 && n > 1 ? 'feature-card' : ''}">Card ${i + 1}</div>`).join('');
  el.innerHTML = cards;
  const feature = el.querySelector('.feature-card');
  if (featureSpan && feature) feature.style.gridColumn = `span ${Math.min(2, n)}`;
  document.getElementById('grid-value').textContent = n;
  document.getElementById('grid-status').textContent = `grid-template-columns: repeat(${n}, 1fr)` + (featureSpan && n > 1 ? ' · Card 1 跨 2 列' : '');
}
function toggleFeature() {
  featureSpan = !featureSpan;
  const btn = document.querySelector('#s63-demo .control-btn');
  btn.textContent = featureSpan ? '关闭跨列' : '开启跨列';
  updateGrid();
}

// 6.4 响应式：通过“设备预设”直观看到布局变化
function setDevice(type) {
  const frame = document.getElementById('responsive-frame');
  frame.className = `responsive-frame ${type}`;
  const message = {
    wide: '当前：桌面布局 · 侧栏与主内容并排',
    tablet: '当前：平板宽度 · 保持两栏，同时压缩内容空间',
    mobile: '当前：手机布局 · 侧栏移到上方，卡片变为两列'
  }[type];
  document.getElementById('device-status').textContent = message;
}

// 6.5 综合案例
function toggleDashboard() {
  const el = document.getElementById('dashboard-demo');
  const btn = document.getElementById('dashboard-btn');
  const compact = el.classList.toggle('compact');
  btn.textContent = compact ? '恢复密度' : '切换密度';
}

updateGrid();
