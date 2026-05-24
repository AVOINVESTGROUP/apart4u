const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

window.addEventListener('load', () => setTimeout(() => $('#preloader')?.remove(), 350));

const header = $('#header');
const toTop = $('#toTop');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', scrollY > 40);
  toTop.classList.toggle('show', scrollY > 600);
});
toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

$('#menuToggle').addEventListener('click', () => $('#nav').classList.toggle('open'));
$$('#nav a').forEach(a => a.addEventListener('click', () => $('#nav').classList.remove('open')));

const translations = {
  ru: {
    'nav.home':'Главная','nav.properties':'Объекты','nav.invest':'Инвестиции','nav.services':'Услуги','nav.about':'О компании','nav.contacts':'Контакты','nav.cta':'Связаться',
    'hero.claim':'Ваш надёжный партнёр на рынке недвижимости Тбилиси','hero.objects':'Смотреть объекты','hero.consult':'Получить консультацию',
    'adv.eyebrow':'Почему Apart4U','adv.title':'Премиальный подход к недвижимости в Тбилиси','adv.a1':'Подбор проверенных объектов в лучших районах Тбилиси.','adv.a2':'Индивидуальная работа с каждым клиентом и точный подбор под задачу.','adv.a3':'Объекты с понятным инвестиционным потенциалом и арендным спросом.','adv.a4':'Знание районов, цен, юридических процедур и локального рынка.',
    'props.eyebrow':'Объекты','props.title':'Недвижимость для жизни и инвестиций','filter.all':'Все типы','filter.sale':'Продажа','filter.rent':'Аренда','filter.invest':'Инвестиции','filter.district':'Все районы','filter.budget':'Любой бюджет',
    'invest.eyebrow':'Инвестиции','invest.title':'Invest in Tbilisi Real Estate','invest.text':'Подбираем объекты для аренды, роста капитала и долгосрочного владения. Сопровождаем клиента от стратегии покупки до управления объектом.','invest.cta':'Обсудить инвестицию',
    'services.eyebrow':'Услуги','services.title':'Полное сопровождение сделки','services.s1':'Покупка недвижимости','services.d1':'Подбор, проверка и организация сделки.','services.s2':'Продажа недвижимости','services.d2':'Упаковка объекта, реклама и переговоры.','services.s3':'Аренда апартаментов','services.d3':'Подбор жилья и проверка условий аренды.','services.s4':'Инвестиционный подбор','services.d4':'Анализ района, цены и доходности.','services.s5':'Юридическое сопровождение','services.d5':'Проверка документов и сопровождение регистрации.','services.s6':'Управление недвижимостью','services.d6':'Арендаторы, обслуживание и отчётность.',
    'about.eyebrow':'О компании','about.text':'Apart4U — агентство недвижимости в Тбилиси, которое помогает клиентам находить премиальные апартаменты, инвестиционные объекты и надёжные решения на рынке недвижимости Грузии.',
    'process.eyebrow':'Процесс','process.title':'Как мы работаем','test.eyebrow':'Отзывы','test.title':'Клиенты о работе с Apart4U',
    'contact.eyebrow':'Контакты','contact.title':'Оставьте заявку','contact.text':'Опишите задачу: покупка, аренда, продажа или инвестиционный подбор. Мы свяжемся с вами.',
    'form.name':'Имя','form.phone':'Телефон','form.email':'Email','form.interest':'Интерес','form.buy':'Покупка','form.rent':'Аренда','form.invest':'Инвестиции','form.sell':'Продажа','form.budget':'Бюджет','form.message':'Сообщение','form.submit':'Send Request'
  },
  en: {
    'nav.home':'Home','nav.properties':'Properties','nav.invest':'Investments','nav.services':'Services','nav.about':'About','nav.contacts':'Contacts','nav.cta':'Contact',
    'hero.claim':'Your trusted partner in Tbilisi real estate','hero.objects':'View properties','hero.consult':'Get consultation',
    'adv.eyebrow':'Why Apart4U','adv.title':'Premium real estate approach in Tbilisi','adv.a1':'Verified properties in the best districts of Tbilisi.','adv.a2':'Personal work with every client and precise selection.','adv.a3':'Properties with clear investment potential and rental demand.','adv.a4':'Knowledge of districts, prices, legal procedures and local market.',
    'props.eyebrow':'Properties','props.title':'Real estate for living and investments','filter.all':'All types','filter.sale':'Sale','filter.rent':'Rent','filter.invest':'Investments','filter.district':'All districts','filter.budget':'Any budget',
    'invest.eyebrow':'Investments','invest.title':'Invest in Tbilisi Real Estate','invest.text':'We select properties for rental income, capital growth and long-term ownership. We support the client from purchase strategy to property management.','invest.cta':'Discuss investment',
    'services.eyebrow':'Services','services.title':'Full transaction support','services.s1':'Property purchase','services.d1':'Selection, verification and transaction organization.','services.s2':'Property sale','services.d2':'Property packaging, advertising and negotiations.','services.s3':'Apartment rental','services.d3':'Housing selection and lease terms review.','services.s4':'Investment selection','services.d4':'District, price and yield analysis.','services.s5':'Legal support','services.d5':'Document check and registration support.','services.s6':'Property management','services.d6':'Tenants, maintenance and reporting.',
    'about.eyebrow':'About','about.text':'Apart4U is a real estate agency based in Tbilisi, helping clients find premium apartments, investment properties and reliable solutions in the Georgian property market.',
    'process.eyebrow':'Process','process.title':'How we work','test.eyebrow':'Testimonials','test.title':'Clients about Apart4U',
    'contact.eyebrow':'Contacts','contact.title':'Send a request','contact.text':'Describe your goal: purchase, rent, sale or investment selection. We will contact you.',
    'form.name':'Name','form.phone':'Phone','form.email':'Email','form.interest':'Interest','form.buy':'Purchase','form.rent':'Rent','form.invest':'Investments','form.sell':'Sale','form.budget':'Budget','form.message':'Message','form.submit':'Send Request'
  },
  ge: {
    'nav.home':'მთავარი','nav.properties':'ობიექტები','nav.invest':'ინვესტიცია','nav.services':'სერვისები','nav.about':'ჩვენ შესახებ','nav.contacts':'კონტაქტი','nav.cta':'კონტაქტი',
    'hero.claim':'თქვენი სანდო პარტნიორი თბილისის უძრავ ქონებაში','hero.objects':'ობიექტების ნახვა','hero.consult':'კონსულტაცია',
    'adv.eyebrow':'რატომ Apart4U','adv.title':'პრემიუმ მიდგომა თბილისის უძრავ ქონებაში','adv.a1':'შემოწმებული ობიექტები თბილისის საუკეთესო უბნებში.','adv.a2':'ინდივიდუალური მუშაობა თითოეულ კლიენტთან.','adv.a3':'ობიექტები საინვესტიციო პოტენციალით და ქირავნობის მოთხოვნით.','adv.a4':'უბნების, ფასების, იურიდიული პროცედურებისა და ბაზრის ცოდნა.',
    'props.eyebrow':'ობიექტები','props.title':'უძრავი ქონება ცხოვრებისა და ინვესტიციისთვის','filter.all':'ყველა ტიპი','filter.sale':'გაყიდვა','filter.rent':'ქირა','filter.invest':'ინვესტიცია','filter.district':'ყველა უბანი','filter.budget':'ნებისმიერი ბიუჯეტი',
    'invest.eyebrow':'ინვესტიცია','invest.title':'Invest in Tbilisi Real Estate','invest.text':'ვარჩევთ ობიექტებს ქირავნობის შემოსავლის, კაპიტალის ზრდისა და გრძელვადიანი ფლობისთვის.','invest.cta':'ინვესტიციის განხილვა',
    'services.eyebrow':'სერვისები','services.title':'გარიგების სრული მხარდაჭერა','services.s1':'ქონების ყიდვა','services.d1':'შერჩევა, შემოწმება და გარიგების ორგანიზება.','services.s2':'ქონების გაყიდვა','services.d2':'ობიექტის შეფუთვა, რეკლამა და მოლაპარაკებები.','services.s3':'აპარტამენტის ქირა','services.d3':'საცხოვრებლის შერჩევა და პირობების შემოწმება.','services.s4':'საინვესტიციო შერჩევა','services.d4':'უბნის, ფასისა და შემოსავლიანობის ანალიზი.','services.s5':'იურიდიული მხარდაჭერა','services.d5':'დოკუმენტების შემოწმება და რეგისტრაცია.','services.s6':'ქონების მართვა','services.d6':'მოიჯარეები, მომსახურება და ანგარიშგება.',
    'about.eyebrow':'ჩვენ შესახებ','about.text':'Apart4U არის უძრავი ქონების სააგენტო თბილისში, რომელიც ეხმარება კლიენტებს პრემიუმ აპარტამენტებისა და საინვესტიციო ობიექტების მოძიებაში.',
    'process.eyebrow':'პროცესი','process.title':'როგორ ვმუშაობთ','test.eyebrow':'შეფასებები','test.title':'კლიენტები Apart4U-ზე',
    'contact.eyebrow':'კონტაქტი','contact.title':'დატოვეთ მოთხოვნა','contact.text':'აღწერეთ თქვენი მიზანი: ყიდვა, ქირა, გაყიდვა ან ინვესტიცია. ჩვენ დაგიკავშირდებით.',
    'form.name':'სახელი','form.phone':'ტელეფონი','form.email':'Email','form.interest':'ინტერესი','form.buy':'ყიდვა','form.rent':'ქირა','form.invest':'ინვესტიცია','form.sell':'გაყიდვა','form.budget':'ბიუჯეტი','form.message':'შეტყობინება','form.submit':'Send Request'
  }
};

function setLang(lang) {
  document.documentElement.lang = lang;
  $$('[data-i18n]').forEach(el => { const key = el.dataset.i18n; if (translations[lang]?.[key]) el.textContent = translations[lang][key]; });
  $$('[data-i18n-placeholder]').forEach(el => { const key = el.dataset.i18nPlaceholder; if (translations[lang]?.[key]) el.placeholder = translations[lang][key]; });
  $$('.lang button').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
}
$$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

const properties = [
  {
    title:'Vake Skyline Penthouse',
    district:'Vake',
    price:385000,
    area:'142 m²',
    rooms:'4 rooms',
    deal:'sale',
    image:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    desc:'Пентхаус в Vake с террасой, панорамными окнами, подземным паркингом и видом на город.'
  },
  {
    title:'Old Tbilisi Boutique Loft',
    district:'Old Tbilisi',
    price:128000,
    area:'54 m²',
    rooms:'2 rooms',
    deal:'invest',
    image:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=85',
    desc:'Лофт рядом с туристическим центром. Подходит для краткосрочной аренды и стабильной загрузки.'
  },
  {
    title:'Saburtalo Family Residence',
    district:'Saburtalo',
    price:245000,
    area:'128 m²',
    rooms:'4 rooms',
    deal:'sale',
    image:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    desc:'Просторная семейная квартира рядом с метро, школами, супермаркетами и паркингом.'
  },
  {
    title:'Vera Designer Apartment',
    district:'Vera',
    price:1650,
    area:'76 m²',
    rooms:'2 rooms',
    deal:'rent',
    image:'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
    desc:'Готовая к проживанию квартира с дизайнерским ремонтом, мебелью и техникой в районе Vera.'
  },
  {
    title:'Mtatsminda View Apartment',
    district:'Mtatsminda',
    price:315000,
    area:'96 m²',
    rooms:'3 rooms',
    deal:'invest',
    image:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=85',
    desc:'Апартамент с видом на старый город и высоким потенциалом посуточной аренды.'
  },
  {
    title:'Krtsanisi Private Villa',
    district:'Krtsanisi',
    price:495000,
    area:'220 m²',
    rooms:'5 rooms',
    deal:'sale',
    image:'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=85',
    desc:'Приватная вилла с участком, террасой, зоной отдыха и быстрым выездом в центр Тбилиси.'
  }
];
function dealLabel(deal){return {sale:'For sale',rent:'For rent',invest:'Investment'}[deal]}
function priceLabel(p){return p.deal === 'rent' ? `$${p.price.toLocaleString('en-US')} / month` : `$${p.price.toLocaleString('en-US')}`}
function renderProperties(){
  const deal = $('#dealFilter').value, district = $('#districtFilter').value, budget = $('#budgetFilter').value;
  const items = properties.filter(p => (deal==='all'||p.deal===deal) && (district==='all'||p.district===district) && (budget==='all'||p.price<=Number(budget)));
  $('#propertyGrid').innerHTML = items.map((p)=>`<article class="property-card reveal visible"><div class="photo"><img src="${p.image}" alt="${p.title}" loading="lazy"><span class="badge photo-badge">${dealLabel(p.deal)}</span></div><div class="body"><p class="meta-line">${p.district}, Tbilisi</p><h3>${p.title}</h3><div class="price">${priceLabel(p)}</div><div class="specs"><span>${p.area}</span><span>${p.rooms}</span><span>${p.deal === 'rent' ? 'Ready to move in' : 'Verified property'}</span></div><p class="card-desc">${p.desc}</p><div class="property-actions"><button class="btn ghost" onclick="openModal(${properties.indexOf(p)})">Подробнее</button><a class="btn primary" href="#contacts">Связаться</a></div></div></article>`).join('') || '<p>Нет объектов по выбранным фильтрам.</p>';
}
['dealFilter','districtFilter','budgetFilter'].forEach(id => $('#'+id).addEventListener('change', renderProperties));
renderProperties();

window.openModal = (i) => {
  const p = properties[i];
  $('#modalImg').src = p.image;
  $('#modalImg').alt = p.title;
  $('#modalTitle').textContent = p.title;
  $('#modalMeta').textContent = `${p.district}, Tbilisi • ${priceLabel(p)} • ${p.area} • ${p.rooms}`;
  $('#modalText').textContent = p.desc;
  $('#modal').classList.add('open');
  $('#modal').setAttribute('aria-hidden','false');
};
function closeModal(){ $('#modal').classList.remove('open'); $('#modal').setAttribute('aria-hidden','true'); }
$('#modalClose').addEventListener('click', closeModal);
$('#modal').addEventListener('click', e => { if(e.target.id === 'modal') closeModal(); });
$('#modalContact').addEventListener('click', closeModal);

const testimonials = [
  ['Команда быстро подобрала квартиру в Vake, проверила документы и сопровождала сделку до регистрации.','Anna K.','Germany'],
  ['Apart4U помогли выбрать инвестиционную квартиру в старом городе и организовали управление арендой.','Michael R.','UAE'],
  ['Понравилась точность по бюджету, районам и юридическим вопросам. Всё было прозрачно.','Nino G.','Georgia']
];
let t = 0;
function renderTest(){ $('#testText').textContent = testimonials[t][0]; $('#testName').textContent = testimonials[t][1]; $('#testCountry').textContent = ' '+testimonials[t][2]; }
$('#nextTest').addEventListener('click',()=>{t=(t+1)%testimonials.length;renderTest()});
$('#prevTest').addEventListener('click',()=>{t=(t-1+testimonials.length)%testimonials.length;renderTest()});

$('#contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(e.currentTarget);
  const name = String(fd.get('name')||'').trim();
  const phone = String(fd.get('phone')||'').trim();
  const email = String(fd.get('email')||'').trim();
  const interest = String(fd.get('interest')||'').trim();
  if (fd.get('website')) return;
  if (!name || (!phone && !email) || !interest) { $('#formStatus').textContent = 'Заполните имя, телефон или email и интерес.'; return; }
  $('#formStatus').textContent = 'Заявка подготовлена. Подключите email, Telegram bot или CRM endpoint в main.js.';
  e.currentTarget.reset();
});

const observer = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:.14});
$$('.reveal').forEach(el => observer.observe(el));
setInterval(()=>{ t=(t+1)%testimonials.length; renderTest(); }, 5500);
