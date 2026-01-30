const buttons = document.querySelectorAll('.btn-class');
const blocks = document.querySelectorAll('.service-block');
const prices = document.querySelectorAll('.price-block');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {

    // 🔘 Активная кнопка
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const target = btn.dataset.target;

    // 📄 ТЕКСТ
    blocks.forEach(block => {
      block.classList.toggle('active', block.id === target);
    });

    // 💰 ЦЕНЫ
    prices.forEach(price => {
      price.classList.toggle('active', price.dataset.price === target);
    });

  });
});


const topBtns = document.querySelectorAll('.navbar .btn');
const tabs = document.querySelectorAll('.tab-block');

topBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault(); // отменяем стандартный якорь

    topBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const target = btn.dataset.tab;

    let activeTab = null;

    tabs.forEach(tab => {
      const isActive = tab.id === target;
      tab.classList.toggle('active', isActive);
      if (isActive) activeTab = tab;
    });

    // 🔥 Скроллим к открытому блоку
    if (activeTab) {
      activeTab.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});