/* =====================================================================
   ملف المحتوى — اوريفيو
   ---------------------------------------------------------------------
   ده الملف الوحيد اللي تعدّل فيه. كل نص وصورة ولينك في الموقع بيتقري من هنا.

   إزاي تغيّر صورة؟
     1) ارفع الصورة الجديدة على GitHub جنب index.html
     2) غيّر الاسم في السطر:  image: "اسم-الصورة.jpg"
        أو حط لينك مباشر للصورة:  image: "https://example.com/pic.jpg"

   إزاي تحط لينك على الصورة؟
     غيّر السطر:  link: "https://..."   (لو سبته فاضي "" الصورة هتبقى من غير لينك)

   إزاي تضيف عنصر جديد؟  انسخ سطر { ... }, كامل والصقه تحته.
   إزاي تمسح عنصر؟      امسح السطر { ... }, بتاعه.
   مهم: خلّي بالك من الفواصل (,) والأقواس وعلامات التنصيص " ".
   ===================================================================== */

window.SITE = {

  /* ---------- بيانات الشركة ---------- */
  brand: {
    name: "اوريفيو",
    nameEn: "Aurevo",
    logo: "icon.png",         // أيقونة صغيرة (الفافيكون)
    logoWide: "logo-wide.png", // اللوجو الكامل في الهيدر والفوتر
    slogan: "وكالة تسويق",
    tagline: "نبني براندك… ونحوّل متابعينك لعملاء.",
    year: "2026"
  },

  /* ---------- التواصل ---------- */
  /* ⚠️ غيّر الأرقام دي لأرقامك الحقيقية */
  contact: {
    whatsapp: "201000000000",          // رقم الواتساب بالكود الدولي من غير + ولا صفر
    phone: "01000000000",
    email: "hello@aurevo.com",
    address: "دمياط، مصر",
    /* السوشيال: سيب اللينك فاضي "" والأيقونة هتختفي */
    social: [
      { name: "Facebook",  link: "https://facebook.com/" },
      { name: "Instagram", link: "https://instagram.com/" },
      { name: "TikTok",    link: "https://tiktok.com/" },
      { name: "LinkedIn",  link: "" }
    ],
    whatsappMessage: "أهلاً اوريفيو، عندي براند وحابب آخد استشارة مجانية."
  },

  /* ---------- القائمة العلوية ---------- */
  nav: [
    { label: "الخدمات",  href: "#services" },
    { label: "عملاؤنا",  href: "#clients" },
    { label: "شغلنا",    href: "#work" },
    { label: "الباقات",  href: "#packages" },
    { label: "أسئلة شائعة", href: "#faq" },
    { label: "تواصل معنا", href: "#contact" }
  ],

  /* ---------- الهيرو ---------- */
  hero: {
    kicker: "تسويق للبراندات اللي عايزة تكبر",
    title: "براندك شاطر… خلّي الناس تعرفه",
    text: "بنوصّل شغلك للعميل الصح، ونحوّل صفحاتك لطلبات ومبيعات حقيقية، وتشوف أرقامها كل شهر.",
    primaryBtn: { label: "شوف الباقات", href: "#packages" },
    secondaryBtn: "كلّمنا على واتساب",
    clientsCount: "+50",
    clientsLabel: "براند بيشتغل معانا"
  },

  /* ---------- الأرقام (غيّرها للأرقام الحقيقية) ---------- */
  stats: [
    { value: "+50",  label: "براند بيشتغل معانا" },
    { value: "+200", label: "حملة ومشروع" },
    { value: "+5",   label: "سنين في التسويق" },
    { value: "98%",  label: "عملاء راضين" }
  ],

  /* ---------- الخدمات ----------
     icon بيختار الأيقونة: social | ads | seo | video | brand | design */
  services: {
    kicker: "خدماتنا",
    title: "كل اللي يخلّي براندك يظهر ويبيع",
    text: "ست خدمات بتشتغل مع بعض… وهدفها واحد: عملاء أكتر.",
    items: [
      { icon: "social", title: "إدارة السوشيال ميديا", text: "محتوى هدفه الطلب والتواصل، مش اللايكات بس.", link: "#contact" },
      { icon: "ads",    title: "الإعلانات الممولة",    text: "إعلانات توصل للعميل وهو بيدوّر على اللي بتقدمه.", link: "#contact" },
      { icon: "seo",    title: "الظهور في Google",     text: "عميل قريب منك بيبحث؟ يلاقيك من أول نتيجة.", link: "#contact" },
      { icon: "video",  title: "فيديو وريلز",          text: "فيديوهات تخلّي العميل يعرفك قبل ما يكلمك.", link: "#contact" },
      { icon: "brand",  title: "الهوية البصرية",       text: "شكل يليق بمستوى شغلك — من اللوجو لآخر بوست.", link: "#contact" },
      { icon: "design", title: "تصميم وحلول بالذكاء الاصطناعي", text: "تصاميم وصور منتجات بتبان احترافية وبسرعة.", link: "#contact" }
    ]
  },

  /* ---------- الفرق عندنا ---------- */
  difference: {
    kicker: "الفرق عندنا",
    title: "بنشتغل على براندك كأنه براندنا",
    text: "العميل بيدوّر على الثقة قبل السعر. علشان كده كل شغلنا بيتراجع قبل ما ينزل، وتقاريرنا بتقيس الطلبات مش المشاهدات.",
    btn: { label: "كلّمنا", href: "#contact" },
    items: [
      { title: "فريق كامل", text: "محتوى وتصميم وتصوير وإعلانات في مكان واحد." },
      { title: "مراجعة قبل النشر", text: "ولا بوست ينزل قبل ما يتراجع ويتوافق عليه." },
      { title: "أرقام بدل الوعود", text: "كل شهر: كام استفسار، كام طلب، وبكام." },
      { title: "فاهمين السوق", text: "بنكتب بلهجة جمهورك المصري والخليجي." }
    ]
  },

  /* ---------- شريط العملاء المتحرك + قسم العملاء ----------
     logo = صورة اللوجو   |   link = لينك بيفتح لما العميل يتضغط عليه */
  clients: {
    kicker: "عملاؤنا",
    title: "براندات بتثق فينا",
    text: "اضغط على أي عميل وشوف شغلنا معاه.",
    items: [
      { name: "عميل ١", field: "أثاث وديكور",        logo: "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20240%20240%22%3E%3Cdefs%3E%3ClinearGradient%20id=%22g%22%20x1=%220%22%20y1=%220%22%20x2=%221%22%20y2=%221%22%3E%3Cstop%20offset=%220%22%20stop-color=%22%234a0b1b%22/%3E%3Cstop%20offset=%221%22%20stop-color=%22%23230409%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20width=%22240%22%20height=%22240%22%20fill=%22url%28%23g%29%22/%3E%3Ctext%20x=%22120%22%20y=%22152%22%20text-anchor=%22middle%22%20font-family=%22Arial%2Csans-serif%22%20font-weight=%22700%22%20font-size=%22104%22%20fill=%22%23fbf7f6%22%3EA%3C/text%3E%3C/svg%3E", link: "#work" },
      { name: "عميل ٢", field: "ملابس وأزياء",        logo: "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20240%20240%22%3E%3Cdefs%3E%3ClinearGradient%20id=%22g%22%20x1=%220%22%20y1=%220%22%20x2=%221%22%20y2=%221%22%3E%3Cstop%20offset=%220%22%20stop-color=%22%23a02a48%22/%3E%3Cstop%20offset=%221%22%20stop-color=%22%236b0f26%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20width=%22240%22%20height=%22240%22%20fill=%22url%28%23g%29%22/%3E%3Ctext%20x=%22120%22%20y=%22152%22%20text-anchor=%22middle%22%20font-family=%22Arial%2Csans-serif%22%20font-weight=%22700%22%20font-size=%22104%22%20fill=%22%23fbf7f6%22%3EB%3C/text%3E%3C/svg%3E", link: "#work" },
      { name: "عميل ٣", field: "مطاعم وكافيهات",      logo: "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20240%20240%22%3E%3Cdefs%3E%3ClinearGradient%20id=%22g%22%20x1=%220%22%20y1=%220%22%20x2=%221%22%20y2=%221%22%3E%3Cstop%20offset=%220%22%20stop-color=%22%235a0d21%22/%3E%3Cstop%20offset=%221%22%20stop-color=%22%238a1a37%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20width=%22240%22%20height=%22240%22%20fill=%22url%28%23g%29%22/%3E%3Ctext%20x=%22120%22%20y=%22152%22%20text-anchor=%22middle%22%20font-family=%22Arial%2Csans-serif%22%20font-weight=%22700%22%20font-size=%22104%22%20fill=%22%23fbf7f6%22%3EC%3C/text%3E%3C/svg%3E", link: "#work" },
      { name: "عميل ٤", field: "عقارات ومقاولات",     logo: "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20240%20240%22%3E%3Cdefs%3E%3ClinearGradient%20id=%22g%22%20x1=%220%22%20y1=%220%22%20x2=%221%22%20y2=%221%22%3E%3Cstop%20offset=%220%22%20stop-color=%22%237a1530%22/%3E%3Cstop%20offset=%221%22%20stop-color=%22%232f0610%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20width=%22240%22%20height=%22240%22%20fill=%22url%28%23g%29%22/%3E%3Ctext%20x=%22120%22%20y=%22152%22%20text-anchor=%22middle%22%20font-family=%22Arial%2Csans-serif%22%20font-weight=%22700%22%20font-size=%22104%22%20fill=%22%23fbf7f6%22%3ED%3C/text%3E%3C/svg%3E", link: "#work" },
      { name: "عميل ٥", field: "منتجات منزلية",       logo: "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20240%20240%22%3E%3Cdefs%3E%3ClinearGradient%20id=%22g%22%20x1=%220%22%20y1=%220%22%20x2=%221%22%20y2=%221%22%3E%3Cstop%20offset=%220%22%20stop-color=%22%23e8b4c0%22/%3E%3Cstop%20offset=%221%22%20stop-color=%22%238a1a37%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20width=%22240%22%20height=%22240%22%20fill=%22url%28%23g%29%22/%3E%3Ctext%20x=%22120%22%20y=%22152%22%20text-anchor=%22middle%22%20font-family=%22Arial%2Csans-serif%22%20font-weight=%22700%22%20font-size=%22104%22%20fill=%22%23fbf7f6%22%3EE%3C/text%3E%3C/svg%3E", link: "#work" },
      { name: "عميل ٦", field: "خدمات وتجزئة",        logo: "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20240%20240%22%3E%3Cdefs%3E%3ClinearGradient%20id=%22g%22%20x1=%220%22%20y1=%220%22%20x2=%221%22%20y2=%221%22%3E%3Cstop%20offset=%220%22%20stop-color=%22%233a0814%22/%3E%3Cstop%20offset=%221%22%20stop-color=%22%236b0f26%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20width=%22240%22%20height=%22240%22%20fill=%22url%28%23g%29%22/%3E%3Ctext%20x=%22120%22%20y=%22152%22%20text-anchor=%22middle%22%20font-family=%22Arial%2Csans-serif%22%20font-weight=%22700%22%20font-size=%22104%22%20fill=%22%23fbf7f6%22%3EF%3C/text%3E%3C/svg%3E", link: "#work" }
    ]
  },

  /* ---------- معرض الشغل (الصور + اللينكات) ----------
     image = الصورة | link = اللينك اللي بيفتح لما تضغط عليها | title/client = النص تحت الصورة */
  work: {
    kicker: "شغلنا",
    title: "شغل حقيقي لعملاء حقيقيين",
    text: "تصاميم وحملات عملناها فعلاً. مفيش قوالب جاهزة.",
    btn: { label: "شوف كل الشغل", href: "https://instagram.com/" },
    items: [
      { title: "حملة إطلاق مجموعة جديدة", client: "عميل ١", image: "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20800%201000%22%3E%3Cdefs%3E%3ClinearGradient%20id=%22g%22%20x1=%220%22%20y1=%220%22%20x2=%221%22%20y2=%221%22%3E%3Cstop%20offset=%220%22%20stop-color=%22%236b0f26%22/%3E%3Cstop%20offset=%221%22%20stop-color=%22%232f0610%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20width=%22800%22%20height=%221000%22%20fill=%22url%28%23g%29%22/%3E%3Ccircle%20cx=%22431%22%20cy=%22304%22%20r=%22191%22%20fill=%22%23fbf7f6%22%20opacity=%220.1%22/%3E%3Ccircle%20cx=%22149%22%20cy=%22224%22%20r=%22227%22%20fill=%22%23fbf7f6%22%20opacity=%220.05%22/%3E%3Ccircle%20cx=%22474%22%20cy=%22746%22%20r=%22104%22%20fill=%22%23fbf7f6%22%20opacity=%220.1%22/%3E%3Ccircle%20cx=%22319%22%20cy=%22188%22%20r=%22112%22%20fill=%22%23fbf7f6%22%20opacity=%220.07%22/%3E%3Crect%20x=%22300%22%20y=%22380%22%20width=%22200%22%20height=%22200%22%20rx=%2244%22%20fill=%22none%22%20stroke=%22%23fbf7f6%22%20stroke-opacity=%22.55%22%20stroke-width=%226%22/%3E%3Cpath%20d=%22M360%20510l30-36%2024%2028%2016-20%2030%2038z%22%20fill=%22%23fbf7f6%22%20fill-opacity=%22.55%22/%3E%3Ccircle%20cx=%22378%22%20cy=%22428%22%20r=%2214%22%20fill=%22%23fbf7f6%22%20fill-opacity=%22.55%22/%3E%3C/svg%3E", link: "https://instagram.com/" },
      { title: "هوية بصرية كاملة",         client: "عميل ٢", image: "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20800%201000%22%3E%3Cdefs%3E%3ClinearGradient%20id=%22g%22%20x1=%220%22%20y1=%220%22%20x2=%221%22%20y2=%221%22%3E%3Cstop%20offset=%220%22%20stop-color=%22%238a1a37%22/%3E%3Cstop%20offset=%221%22%20stop-color=%22%234a0b1b%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20width=%22800%22%20height=%221000%22%20fill=%22url%28%23g%29%22/%3E%3Ccircle%20cx=%22528%22%20cy=%22221%22%20r=%22151%22%20fill=%22%23fbf7f6%22%20opacity=%220.05%22/%3E%3Ccircle%20cx=%22664%22%20cy=%22584%22%20r=%22105%22%20fill=%22%23fbf7f6%22%20opacity=%220.1%22/%3E%3Ccircle%20cx=%22226%22%20cy=%22378%22%20r=%22251%22%20fill=%22%23fbf7f6%22%20opacity=%220.1%22/%3E%3Ccircle%20cx=%22696%22%20cy=%22213%22%20r=%22237%22%20fill=%22%23fbf7f6%22%20opacity=%220.1%22/%3E%3Crect%20x=%22300%22%20y=%22380%22%20width=%22200%22%20height=%22200%22%20rx=%2244%22%20fill=%22none%22%20stroke=%22%23fbf7f6%22%20stroke-opacity=%22.55%22%20stroke-width=%226%22/%3E%3Cpath%20d=%22M360%20510l30-36%2024%2028%2016-20%2030%2038z%22%20fill=%22%23fbf7f6%22%20fill-opacity=%22.55%22/%3E%3Ccircle%20cx=%22378%22%20cy=%22428%22%20r=%2214%22%20fill=%22%23fbf7f6%22%20fill-opacity=%22.55%22/%3E%3C/svg%3E", link: "https://instagram.com/" },
      { title: "سلسلة ريلز",               client: "عميل ٣", image: "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20800%201000%22%3E%3Cdefs%3E%3ClinearGradient%20id=%22g%22%20x1=%220%22%20y1=%220%22%20x2=%221%22%20y2=%221%22%3E%3Cstop%20offset=%220%22%20stop-color=%22%234a0b1b%22/%3E%3Cstop%20offset=%221%22%20stop-color=%22%23230409%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20width=%22800%22%20height=%221000%22%20fill=%22url%28%23g%29%22/%3E%3Ccircle%20cx=%22506%22%20cy=%22200%22%20r=%22146%22%20fill=%22%23fbf7f6%22%20opacity=%220.05%22/%3E%3Ccircle%20cx=%22670%22%20cy=%22286%22%20r=%22164%22%20fill=%22%23fbf7f6%22%20opacity=%220.07%22/%3E%3Ccircle%20cx=%22247%22%20cy=%22703%22%20r=%22120%22%20fill=%22%23fbf7f6%22%20opacity=%220.1%22/%3E%3Ccircle%20cx=%22415%22%20cy=%22723%22%20r=%22136%22%20fill=%22%23fbf7f6%22%20opacity=%220.05%22/%3E%3Crect%20x=%22300%22%20y=%22380%22%20width=%22200%22%20height=%22200%22%20rx=%2244%22%20fill=%22none%22%20stroke=%22%23fbf7f6%22%20stroke-opacity=%22.55%22%20stroke-width=%226%22/%3E%3Cpath%20d=%22M360%20510l30-36%2024%2028%2016-20%2030%2038z%22%20fill=%22%23fbf7f6%22%20fill-opacity=%22.55%22/%3E%3Ccircle%20cx=%22378%22%20cy=%22428%22%20r=%2214%22%20fill=%22%23fbf7f6%22%20fill-opacity=%22.55%22/%3E%3C/svg%3E", link: "https://instagram.com/" },
      { title: "تصاميم سوشيال ميديا",       client: "عميل ٤", image: "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20800%201000%22%3E%3Cdefs%3E%3ClinearGradient%20id=%22g%22%20x1=%220%22%20y1=%220%22%20x2=%221%22%20y2=%221%22%3E%3Cstop%20offset=%220%22%20stop-color=%22%23a02a48%22/%3E%3Cstop%20offset=%221%22%20stop-color=%22%236b0f26%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20width=%22800%22%20height=%221000%22%20fill=%22url%28%23g%29%22/%3E%3Ccircle%20cx=%22695%22%20cy=%22734%22%20r=%22253%22%20fill=%22%23fbf7f6%22%20opacity=%220.05%22/%3E%3Ccircle%20cx=%22481%22%20cy=%22249%22%20r=%22230%22%20fill=%22%23fbf7f6%22%20opacity=%220.1%22/%3E%3Ccircle%20cx=%22164%22%20cy=%22727%22%20r=%22105%22%20fill=%22%23fbf7f6%22%20opacity=%220.1%22/%3E%3Ccircle%20cx=%22310%22%20cy=%22658%22%20r=%22226%22%20fill=%22%23fbf7f6%22%20opacity=%220.07%22/%3E%3Crect%20x=%22300%22%20y=%22380%22%20width=%22200%22%20height=%22200%22%20rx=%2244%22%20fill=%22none%22%20stroke=%22%23fbf7f6%22%20stroke-opacity=%22.55%22%20stroke-width=%226%22/%3E%3Cpath%20d=%22M360%20510l30-36%2024%2028%2016-20%2030%2038z%22%20fill=%22%23fbf7f6%22%20fill-opacity=%22.55%22/%3E%3Ccircle%20cx=%22378%22%20cy=%22428%22%20r=%2214%22%20fill=%22%23fbf7f6%22%20fill-opacity=%22.55%22/%3E%3C/svg%3E", link: "https://instagram.com/" },
      { title: "صور منتجات بالذكاء الاصطناعي", client: "عميل ٥", image: "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20800%201000%22%3E%3Cdefs%3E%3ClinearGradient%20id=%22g%22%20x1=%220%22%20y1=%220%22%20x2=%221%22%20y2=%221%22%3E%3Cstop%20offset=%220%22%20stop-color=%22%235a0d21%22/%3E%3Cstop%20offset=%221%22%20stop-color=%22%238a1a37%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20width=%22800%22%20height=%221000%22%20fill=%22url%28%23g%29%22/%3E%3Ccircle%20cx=%22421%22%20cy=%22626%22%20r=%22239%22%20fill=%22%23fbf7f6%22%20opacity=%220.07%22/%3E%3Ccircle%20cx=%22470%22%20cy=%22456%22%20r=%22153%22%20fill=%22%23fbf7f6%22%20opacity=%220.05%22/%3E%3Ccircle%20cx=%22349%22%20cy=%22233%22%20r=%22237%22%20fill=%22%23fbf7f6%22%20opacity=%220.07%22/%3E%3Ccircle%20cx=%22637%22%20cy=%22656%22%20r=%22177%22%20fill=%22%23fbf7f6%22%20opacity=%220.1%22/%3E%3Crect%20x=%22300%22%20y=%22380%22%20width=%22200%22%20height=%22200%22%20rx=%2244%22%20fill=%22none%22%20stroke=%22%23fbf7f6%22%20stroke-opacity=%22.55%22%20stroke-width=%226%22/%3E%3Cpath%20d=%22M360%20510l30-36%2024%2028%2016-20%2030%2038z%22%20fill=%22%23fbf7f6%22%20fill-opacity=%22.55%22/%3E%3Ccircle%20cx=%22378%22%20cy=%22428%22%20r=%2214%22%20fill=%22%23fbf7f6%22%20fill-opacity=%22.55%22/%3E%3C/svg%3E", link: "https://instagram.com/" },
      { title: "إعلانات ممولة",             client: "عميل ٦", image: "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20800%201000%22%3E%3Cdefs%3E%3ClinearGradient%20id=%22g%22%20x1=%220%22%20y1=%220%22%20x2=%221%22%20y2=%221%22%3E%3Cstop%20offset=%220%22%20stop-color=%22%237a1530%22/%3E%3Cstop%20offset=%221%22%20stop-color=%22%232f0610%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20width=%22800%22%20height=%221000%22%20fill=%22url%28%23g%29%22/%3E%3Ccircle%20cx=%22559%22%20cy=%22444%22%20r=%22245%22%20fill=%22%23fbf7f6%22%20opacity=%220.05%22/%3E%3Ccircle%20cx=%22220%22%20cy=%22674%22%20r=%22197%22%20fill=%22%23fbf7f6%22%20opacity=%220.05%22/%3E%3Ccircle%20cx=%22450%22%20cy=%22305%22%20r=%22215%22%20fill=%22%23fbf7f6%22%20opacity=%220.07%22/%3E%3Ccircle%20cx=%22140%22%20cy=%22229%22%20r=%22232%22%20fill=%22%23fbf7f6%22%20opacity=%220.1%22/%3E%3Crect%20x=%22300%22%20y=%22380%22%20width=%22200%22%20height=%22200%22%20rx=%2244%22%20fill=%22none%22%20stroke=%22%23fbf7f6%22%20stroke-opacity=%22.55%22%20stroke-width=%226%22/%3E%3Cpath%20d=%22M360%20510l30-36%2024%2028%2016-20%2030%2038z%22%20fill=%22%23fbf7f6%22%20fill-opacity=%22.55%22/%3E%3Ccircle%20cx=%22378%22%20cy=%22428%22%20r=%2214%22%20fill=%22%23fbf7f6%22%20fill-opacity=%22.55%22/%3E%3C/svg%3E", link: "https://instagram.com/" },
      { title: "بوستات شهرية",              client: "عميل ١", image: "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20800%201000%22%3E%3Cdefs%3E%3ClinearGradient%20id=%22g%22%20x1=%220%22%20y1=%220%22%20x2=%221%22%20y2=%221%22%3E%3Cstop%20offset=%220%22%20stop-color=%22%23e8b4c0%22/%3E%3Cstop%20offset=%221%22%20stop-color=%22%238a1a37%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20width=%22800%22%20height=%221000%22%20fill=%22url%28%23g%29%22/%3E%3Ccircle%20cx=%22421%22%20cy=%22498%22%20r=%22179%22%20fill=%22%23fbf7f6%22%20opacity=%220.1%22/%3E%3Ccircle%20cx=%22608%22%20cy=%22743%22%20r=%22206%22%20fill=%22%23fbf7f6%22%20opacity=%220.05%22/%3E%3Ccircle%20cx=%22195%22%20cy=%22426%22%20r=%22211%22%20fill=%22%23fbf7f6%22%20opacity=%220.1%22/%3E%3Ccircle%20cx=%22166%22%20cy=%22212%22%20r=%22169%22%20fill=%22%23fbf7f6%22%20opacity=%220.1%22/%3E%3Crect%20x=%22300%22%20y=%22380%22%20width=%22200%22%20height=%22200%22%20rx=%2244%22%20fill=%22none%22%20stroke=%22%23fbf7f6%22%20stroke-opacity=%22.55%22%20stroke-width=%226%22/%3E%3Cpath%20d=%22M360%20510l30-36%2024%2028%2016-20%2030%2038z%22%20fill=%22%23fbf7f6%22%20fill-opacity=%22.55%22/%3E%3Ccircle%20cx=%22378%22%20cy=%22428%22%20r=%2214%22%20fill=%22%23fbf7f6%22%20fill-opacity=%22.55%22/%3E%3C/svg%3E", link: "" },
      { title: "إعلان فيديو",               client: "عميل ٢", image: "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20800%201000%22%3E%3Cdefs%3E%3ClinearGradient%20id=%22g%22%20x1=%220%22%20y1=%220%22%20x2=%221%22%20y2=%221%22%3E%3Cstop%20offset=%220%22%20stop-color=%22%233a0814%22/%3E%3Cstop%20offset=%221%22%20stop-color=%22%236b0f26%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20width=%22800%22%20height=%221000%22%20fill=%22url%28%23g%29%22/%3E%3Ccircle%20cx=%22691%22%20cy=%22606%22%20r=%22162%22%20fill=%22%23fbf7f6%22%20opacity=%220.1%22/%3E%3Ccircle%20cx=%22495%22%20cy=%22505%22%20r=%2295%22%20fill=%22%23fbf7f6%22%20opacity=%220.07%22/%3E%3Ccircle%20cx=%22463%22%20cy=%22322%22%20r=%22246%22%20fill=%22%23fbf7f6%22%20opacity=%220.05%22/%3E%3Ccircle%20cx=%22605%22%20cy=%22210%22%20r=%22145%22%20fill=%22%23fbf7f6%22%20opacity=%220.07%22/%3E%3Crect%20x=%22300%22%20y=%22380%22%20width=%22200%22%20height=%22200%22%20rx=%2244%22%20fill=%22none%22%20stroke=%22%23fbf7f6%22%20stroke-opacity=%22.55%22%20stroke-width=%226%22/%3E%3Cpath%20d=%22M360%20510l30-36%2024%2028%2016-20%2030%2038z%22%20fill=%22%23fbf7f6%22%20fill-opacity=%22.55%22/%3E%3Ccircle%20cx=%22378%22%20cy=%22428%22%20r=%2214%22%20fill=%22%23fbf7f6%22%20fill-opacity=%22.55%22/%3E%3C/svg%3E", link: "" }
    ]
  },

  /* ---------- الباقات ---------- */
  packages: {
    kicker: "الباقات",
    title: "باقة تناسب حجمك",
    text: "اختار نوعك وقارن. والسعر على حسب احتياجك.",
    priceNote: "السعر على حسب حجمك واحتياجك",
    contractNote: "عقد 3 شهور كحد أدنى",
    footnote: "ميزانية الإعلانات منفصلة، وتدفعها للمنصة مباشرة.",
    cta: "اطلب عرض سعر",
    tabs: [
      {
        label: "براند ناشئ",
        plans: [
          { name: "Starter", badge: "", platforms: ["Facebook", "Instagram", "TikTok"],
            features: ["إدارة Facebook + Instagram", "12 بوست شهرياً", "تصميم بهوية البراند", "مودريشن 6 أيام", "تقرير شهري مبسط"] },
          { name: "Pro", badge: "الأكثر طلباً", platforms: ["Facebook", "Instagram", "TikTok", "Snapchat"],
            features: ["إدارة 4 منصات كاملة", "20 بوست شهرياً", "4 ريلز تصوير ومونتاج", "ستوريز أسبوعية", "إدارة إعلانات ممولة", "تقرير شهري تفصيلي"] }
        ]
      },
      {
        label: "براند متوسط",
        plans: [
          { name: "Growth", badge: "", platforms: ["Facebook", "Instagram", "TikTok", "YouTube"],
            features: ["إدارة 4 منصات كاملة", "24 بوست شهرياً", "6 ريلز شهرياً", "إعلانات ممولة Meta وGoogle", "تقرير شهري واجتماع"] },
          { name: "Advanced", badge: "الأكثر طلباً", platforms: ["Facebook", "Instagram", "TikTok", "YouTube", "LinkedIn"],
            features: ["إدارة 5 منصات كاملة", "30 بوست شهرياً", "8 ريلز فيديو", "SEO ولاندينج بيدج", "هوية بصرية متكاملة", "مدير حساب مخصص"] }
        ]
      },
      {
        label: "شركة كبيرة",
        plans: [
          { name: "Business", badge: "", platforms: ["Facebook", "Instagram", "LinkedIn", "YouTube"],
            features: ["إدارة كل المنصات", "35 بوست ومحتوى PR", "فيديوهات إنتاج كامل", "إدارة إعلانات Meta وGoogle", "مدير حساب مخصص"] },
          { name: "Elite", badge: "شامل", platforms: ["كل المنصات"],
            features: ["استراتيجية تسويق سنوية", "موقع إلكتروني كامل", "هوية بصرية كاملة", "إنتاج فيديو وتصوير", "SEO وإدارة سمعة", "مدير حساب 7 أيام"] }
        ]
      }
    ]
  },

  /* ---------- الأسئلة الشائعة ---------- */
  faq: {
    kicker: "أسئلة شائعة",
    title: "إجابات قبل ما تسأل",
    text: "ما لقيت سؤالك؟ اسألنا على طول.",
    btn: "اسألنا على واتساب",
    items: [
      { q: "إيه الفرق بينكم وبين أي وكالة؟", a: "بنشتغل على براندك كأنه براندنا. كل شغل بيتراجع قبل النشر، وتقاريرنا بتقيس الطلبات والاستفسارات مش اللايكات." },
      { q: "ميزانية الإعلانات داخلة في الباقة؟", a: "لا، بتدفعها للمنصة مباشرة. واحنا بنخطط وندير الحملات ونساعدك تحدد الميزانية المناسبة." },
      { q: "النتايج بتبان امتى؟", a: "أول المؤشرات خلال 4 لـ 6 أسابيع، والنتايج القوية خلال 3 شهور. علشان كده التعاقد بيبدأ من 3 شهور." },
      { q: "براندي في مدينة أو دولة تانية، نقدر نشتغل؟", a: "أكيد. شغلنا كله أونلاين، وبنكتب المحتوى بلهجة جمهورك." },
      { q: "لازم أجهّز المحتوى بنفسي؟", a: "لا. احنا بنخطط ونكتب ونصمم ونصوّر. عليك بس الموافقة." },
      { q: "أقدر أرقّي باقتي بعدين؟", a: "أكيد، في أي وقت خلال التعاقد." }
    ]
  },

  /* ---------- الفورم الأخير ---------- */
  cta: {
    title: "جاهز تكبّر براندك؟",
    text: "استشارة مجانية نشوف فيها وضعك ونقترح خطة واضحة. من غير أي التزام.",
    orText: "أو كلّمنا على طول",
    submit: "احجز استشارتك المجانية",
    privacy: "بياناتك للتواصل معاك بس.",
    typeLabel: "نوع النشاط؟",
    types: ["براند ناشئ", "براند متوسط", "شركة كبيرة", "أثاث وديكور", "ملابس وأزياء", "مطعم / كافيه", "عقارات ومقاولات", "نشاط تاني"]
  }
};
