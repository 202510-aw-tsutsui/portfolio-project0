document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");

    if (!header) {
        return;
    }

    header.innerHTML = `
        <div class="site-header__meta">
            <div class="site-header__meta-inner">
                <p class="site-header__meta-title">ワークショップページ</p>
                <a href="#" class="site-header__lang" aria-label="Language selector">JP/EN</a>
            </div>
        </div>

        <div class="site-header__top">
            <div class="site-header__social">
                <a href="#" class="site-header__social-link site-header__social-link--line" aria-label="LINE">LINE</a>
                <a href="#" class="site-header__social-link site-header__social-link--instagram" aria-label="Instagram">IG</a>
                <a href="#" class="site-header__lang site-header__lang--inline" aria-label="Language selector">JP/EN</a>
            </div>

            <h1 class="site-header__logo">
                <a href="#" class="site-header__logo-mark" aria-label="inori home">
                    <span class="site-header__logo-icon">inori</span>
                    <span class="site-header__logo-text">inori</span>
                </a>
            </h1>

            <div class="site-header__actions">
                <a href="#reservation" class="header-button header-button--light">予約</a>
                <a href="#reservation" class="header-button header-button--accent">じゃらん</a>
            </div>
        </div>

        <nav class="global-nav">
            <ul class="global-nav__list">
                <li><a href="#workshop">ワークショップ</a></li>
                <li><a href="#reservation">ご予約</a></li>
                <li><a href="#access">アクセス</a></li>
                <li><a href="#faq">よくある質問</a></li>
                <li><a href="#contact">お問い合わせ</a></li>
                <li><a href="#about">inoriについて</a></li>
            </ul>
        </nav>
    `;
});

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");

    if (!header) {
        return;
    }

    header.innerHTML = [
        '<div class="site-header__meta">',
        '    <div class="site-header__meta-inner">',
        '        <p class="site-header__meta-title">\u30ef\u30fc\u30af\u30b7\u30e7\u30c3\u30d7\u30da\u30fc\u30b8</p>',
        '        <a href="#" class="site-header__lang" aria-label="Language selector">JP/EN</a>',
        '    </div>',
        '</div>',
        '<div class="site-header__top">',
        '    <div class="site-header__social">',
        '        <a href="#" class="site-header__social-link site-header__social-link--line" aria-label="LINE">LINE</a>',
        '        <a href="#" class="site-header__social-link site-header__social-link--instagram" aria-label="Instagram">IG</a>',
        '        <a href="#" class="site-header__lang site-header__lang--inline" aria-label="Language selector">JP/EN</a>',
        '    </div>',
        '    <h1 class="site-header__logo">',
        '        <a href="#" class="site-header__logo-mark" aria-label="inori home">',
        '            <span class="site-header__logo-icon">inori</span>',
        '            <span class="site-header__logo-text">inori</span>',
        '        </a>',
        '    </h1>',
        '    <div class="site-header__actions">',
        '        <a href="#reservation" class="header-button header-button--light">\u4e88\u7d04</a>',
        '        <a href="#reservation" class="header-button header-button--accent">\u3058\u3083\u3089\u3093</a>',
        '    </div>',
        '</div>',
        '<nav class="global-nav">',
        '    <ul class="global-nav__list">',
        '        <li><a href="#workshop">\u30ef\u30fc\u30af\u30b7\u30e7\u30c3\u30d7</a></li>',
        '        <li><a href="#reservation">\u3054\u4e88\u7d04</a></li>',
        '        <li><a href="#access">\u30a2\u30af\u30bb\u30b9</a></li>',
        '        <li><a href="#faq">\u3088\u304f\u3042\u308b\u8cea\u554f</a></li>',
        '        <li><a href="#contact">\u304a\u554f\u3044\u5408\u308f\u305b</a></li>',
        '        <li><a href="#about">inori\u306b\u3064\u3044\u3066</a></li>',
        '    </ul>',
        '</nav>'
    ].join("");
});

document.addEventListener("DOMContentLoaded", () => {
    const scheduleGuide = document.querySelector(".schedule-guide");

    if (!scheduleGuide) {
        return;
    }

    scheduleGuide.innerHTML = [
        '<div class="schedule-guide__item">',
        '    <strong>\u958b\u50ac\u66dc\u65e5</strong>',
        '    <span>\u571f\u65e5\u795d</span>',
        '</div>',
        '<div class="schedule-guide__item">',
        '    <strong>\u4f53\u9a13\u6642\u9593</strong>',
        '    <span>\u246011\uff1a00\uff5e\u3000\u246113\uff1a00\uff5e\u3000\u246215\uff1a00\uff5e</span>',
        '</div>',
        '<div class="schedule-guide__item">',
        '    <strong>\u6240\u8981\u6642\u9593</strong>',
        '    <span>\u7d04\uff11\u6642\u9593</span>',
        '</div>'
    ].join("");
});

document.addEventListener("DOMContentLoaded", () => {
    const scheduleNote = document.querySelector(".schedule-note");

    if (!scheduleNote) {
        return;
    }

    scheduleNote.innerHTML = [
        '<p>\u203b10\u5206\u524d\u306b\u306f\u304a\u5e97\u306b\u3066\u53d7\u4ed8\u3092\u304a\u9858\u3044\u3044\u305f\u3057\u307e\u3059\u3002\u304a\u5ba2\u69d8\u304c\u63c3\u3063\u3066\u3044\u306a\u304f\u3066\u3082\u958b\u59cb\u6642\u9593\u306b\u306f\u30ef\u30fc\u30af\u3092\u59cb\u3081\u307e\u3059\u3002</p>',
        '<p>\u203b\u30ef\u30fc\u30af\u30b7\u30e7\u30c3\u30d7\u4e0d\u53c2\u52a0\u3067\u306e\u540c\u4f34\u306f\u304a\u5e2d\u306e\u90fd\u5408\u4e0a\u304a\u65ad\u308a\u3057\u3066\u304a\u308a\u307e\u3059\u3002\u4e88\u3081\u3054\u4e86\u627f\u304f\u3060\u3055\u3044\u307e\u305b\u3002</p>'
    ].join("");
});

document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector(".site-footer");

    if (!footer) {
        return;
    }

    footer.innerHTML = [
        '<div class="site-footer__panel">',
        '    <div class="site-footer__row">',
        '        <nav class="site-footer__links" aria-label="Footer links">',
        '            <a href="#workshop">\u30fc\u30ef\u30fc\u30af\u30b7\u30e7\u30c3\u30d7</a>',
        '            <a href="#reservation">\u30fc\u3054\u4e88\u7d04</a>',
        '            <a href="#access">\u30fc\u30a2\u30af\u30bb\u30b9</a>',
        '            <a href="#faq">\u30fc\u3088\u304f\u3042\u308b\u8cea\u554f</a>',
        '            <a href="#contact">\u30fc\u304a\u554f\u3044\u5408\u308f\u305b</a>',
        '            <a href="#about">\u30fcinimu\u306b\u3064\u3044\u3066</a>',
        '        </nav>',
        '        <div class="site-footer__brand">',
        '            <a href="#" class="site-footer__brand-mark" aria-label="inori home">',
        '                <span class="site-footer__brand-icon">inori</span>',
        '                <span class="site-footer__brand-text">inori</span>',
        '            </a>',
        '        </div>',
        '        <div class="site-footer__cta">',
        '            <a href="#reservation" class="header-button header-button--light">\u4e88\u7d04</a>',
        '            <a href="#contact" class="header-button header-button--accent">\u304a\u554f\u3044\u5408\u308f\u305b</a>',
        '        </div>',
        '    </div>',
        '    <p class="site-footer__tagline">\u9999\u308a\u3092\u3064\u304f\u308b\u7279\u5225\u306a\u4f53\u9a13\u3092\u3002Discover Your Signature Scent at inori</p>',
        '</div>'
    ].join("");
});

document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.querySelector(".photo-main__image");
    const prevButton = document.querySelector(".photo-main__button--prev");
    const nextButton = document.querySelector(".photo-main__button--next");
    const thumbnails = Array.from(document.querySelectorAll(".photo-thumbnails img"));

    if (!mainImage || !prevButton || !nextButton || thumbnails.length === 0) {
        return;
    }

    const photos = [mainImage, ...thumbnails].map((image) => ({
        src: image.getAttribute("src"),
        alt: image.getAttribute("alt")
    }));

    let currentIndex = 0;

    const syncActiveThumbnail = () => {
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.classList.toggle("is-active", index === currentIndex - 1);
        });
    };

    const renderPhoto = (index) => {
        currentIndex = (index + photos.length) % photos.length;
        mainImage.src = photos[currentIndex].src;
        mainImage.alt = photos[currentIndex].alt;
        syncActiveThumbnail();
    };

    prevButton.addEventListener("click", () => {
        renderPhoto(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
        renderPhoto(currentIndex + 1);
    });

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            renderPhoto(index + 1);
        });
    });

    syncActiveThumbnail();
});
