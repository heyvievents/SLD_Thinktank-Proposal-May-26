// --- i18n Translation System ---
const translations = {
    es: {
        // Nav
        nav_vision: "La Visión",
        nav_services: "Servicios",
        nav_experience: "La Experiencia",
        nav_premium: "Detalles Premium",
        nav_investment: "Inversión",

        // Hero
        hero_subtitle: "Visión 2026: Elevando la Experiencia",

        // Vision
        vision_title: "Nuestra Visión",
        vision_text: "Nuestro objetivo principal es elevar el evento insignia del Global Think-tank on Steatotic Liver Disease más allá de una conferencia médica tradicional, posicionándolo como el encuentro de referencia para médicos e investigadores de primer nivel. Los líderes de opinión actuales buscan más que un foro de debate: buscan una experiencia inmersiva. Cuidando cada detalle estético y logístico, desde el diseño espacial hasta la gastronomía premium, ofreceremos un evento exclusivo que superará la edición anterior.",

        // Services
        services_title: "Servicios Propuestos",
        svc_design_title: "Diseño Creativo y de Experiencia",
        svc_design_text: "Conceptualización de un entorno inmersivo y de alta gama que eleva el evento.",
        svc_logistics_title: "Gestión de Proveedores y Logística",
        svc_logistics_text: "Búsqueda y gestión de proveedores de primer nivel para mobiliario, audiovisual y señalética.",
        svc_merch_title: "Merchandising Premium",
        svc_merch_text: "Selección de un pack de bienvenida de alta calidad que refleja el prestigio del Think-tank.",
        svc_catering_title: "Catering y Diseño Dietético",
        svc_catering_text: "Diseño de un menú mediterráneo estricto y de alta calidad, alineado con el enfoque médico del SLD.",
        svc_ambiance_title: "Entretenimiento y Ambiente",
        svc_ambiance_text: "Música de fondo elegante y no intrusiva, y producción de una actuación de Flamenco en vivo.",
        svc_onsite_title: "Coordinación In-Situ y Dirección",
        svc_onsite_text: "Director de evento dedicado, gestión logística y transiciones rápidas del espacio.",

        // Visuals
        visuals_title: "Propuesta Visual: Puesta en Escena del Venue",

        // Experience
        experience_title: "El Coffee Break Antioxidante",
        antioxidant_intro: "Una experiencia de catering diseñada para predicar con el ejemplo, ofreciendo opciones ricas en nutrientes y saludables para el hígado.",
        matcha_desc: "Una alternativa vibrante y rica en antioxidantes al café.",
        shots_desc: "Concentrados de vitalidad para reducir la inflamación.",
        juice_desc: "Zumos 100% naturales y recién prensados, bajos en fructosa.",
        nuts_label: "Frutos Secos y Cereales Premium:",
        nuts_desc: "Dispensadores interactivos con frutos secos y cereales crudos.",
        bars_label: "Barritas Energéticas Naturales:",
        bars_desc: "Barritas artesanales sin azúcares refinados.",
        fruit_label: "Frutas Antioxidantes:",
        fruit_desc: "Frutas frescas, orgánicas y de temporada.",
        organic_label: "Bocados Orgánicos:",
        organic_desc: "Ingredientes 100% orgánicos e integrales.",
        lunch_title: "Replanteando el Almuerzo",
        lunch_food_label: "La Comida: Liver-Detox Poke.",
        lunch_food_text: "Poke bowls elaborados con ingredientes hepatoprotectores. La comida funcional definitiva, fácil de consumir con un solo cubierto.",
        lunch_exp_label: "La Experiencia: Versatilidad Funcional.",
        lunch_exp_text: "El diseño prioriza la libertad de movimiento, con mesas altas, asientos tradicionales o sofás para un ambiente relajado con aires mediterráneos.",

        // Premium
        premium_title: "Más que un Pack de Bienvenida: Esenciales Premium",
        notebook_title: "Libreta Texturizada de Lujo",
        notebook_text: "Cubierta flexible de cuero sintético texturizado que equilibra elegancia y durabilidad. Papel marfil de 100 g/m² certificado FSC.",
        pens_title: "Instrumentos de Escritura Ejecutivos",
        pen_bamboo_label: "Edición Sostenible de Bambú:",
        pen_bamboo_text: "Cuerpo de bambú natural y renovable con detalles en cromo.",
        pen_classic_label: "Edición Ejecutiva Clásica:",
        pen_classic_text: "Bolígrafo profesional de dos tonos, diseñado para confort y precisión.",
        sleeve_title: "Funda de Portátil Eco-Diseñada",
        sleeve_text: "Una obra maestra de diseño sostenible. Al elegir esta pieza, hemos contribuido a:",
        sleeve_co2: "3,4 kg de emisiones de CO2 ahorradas.",
        sleeve_water: "14,1 L de agua preservados.",
        sleeve_pet: "10 botellas PET reconvertidas en textil de alta calidad.",
        badge_title: "Acreditaciones con Tecnología NFC",
        badge_text: "Acreditaciones con NFC para un intercambio de contactos exclusivo y fluido. Un gesto sutil permite la transmisión instantánea de perfiles.",

        // VIP Add-on
        addon_label: "Servicio Opcional",
        addon_title: 'Cena VIP de Prensa en "La Dama"',
        addon_text: "Coordinación completa y diseño para la recepción de prensa previa al evento, con un enfoque personalizado y sofisticado:",
        addon_1: "Montaje y colaboración con el venue.",
        addon_2: "Integración gráfica y estética a medida.",
        addon_3: "Diseño de mesas, menús personalizados y tarjetas de asiento.",
        addon_4: "Gestión de RSVP, plan de asientos y hosting in-situ.",
        addon_5: "Regalos de despedida premium para una impresión duradera.",

        // Investment
        investment_title: "Inversión",
        agency_label: "Honorarios de Agencia",
        agency_desc: "Incluye gestión de proveedores, diseño de experiencia, Run of Show y Director de Evento + Equipo de 3 (10+ horas).",
        vip_label: "Servicio Opcional: Cena VIP",
        vip_desc: "Coordinación pre-evento, diseño, gestión de regalos y hosting in-situ.",
        terms_title: "Condiciones de Pago y Transparencia",
        terms_transparency_label: "Transparencia:",
        terms_transparency_text: "Gestionaremos los pagos de todos los proveedores externos y compartiremos las facturas directamente con su equipo.",
        terms_payment_label: "Condiciones de Pago:",
        terms_payment_text: "Depósito del 50% a la firma, con el 50% restante a abonar dentro de los 15 días posteriores al evento.",

        // Footer
        footer_text: "Propuesta diseñada con pasión.",
        footer_rights: "Todos los derechos reservados."
    },
    en: {
        // Nav
        nav_vision: "The Vision",
        nav_services: "Services",
        nav_experience: "The Experience",
        nav_premium: "Premium Details",
        nav_investment: "Investment",

        // Hero
        hero_subtitle: "Vision 2026: Elevating the Experience",

        // Vision
        vision_title: "Our Vision",
        vision_text: "Our primary objective is to elevate the flagship event of the Global Think-tank on Steatotic Liver Disease far beyond a traditional medical conference, positioning it as the premier gathering for top-tier physicians and researchers. Today's key opinion leaders seek more than scientific debate; they seek a truly immersive experience. By curating every aesthetic and logistical detail, from spatial design to premium gastronomy, we will deliver an exclusive event that surpasses the previous edition.",

        // Services
        services_title: "Proposed Services",
        svc_design_title: "Creative & Experience Design",
        svc_design_text: "Designing an immersive, high-end environment that elevates the event.",
        svc_logistics_title: "Vendor & Logistics Management",
        svc_logistics_text: "Sourcing and managing top-tier local providers for furniture, AV, and signage.",
        svc_merch_title: "Premium Merchandising",
        svc_merch_text: "Curating a high-quality welcome pack that reflects the prestige of the Think-tank.",
        svc_catering_title: "Catering & Dietary Curation",
        svc_catering_text: "A strict, high-quality Mediterranean diet menu aligned with the SLD medical focus.",
        svc_ambiance_title: "Entertainment & Ambiance",
        svc_ambiance_text: "Elegant background music and live Flamenco performance production.",
        svc_onsite_title: "On-Site Coordination & Direction",
        svc_onsite_text: "Dedicated Event Director, logistics management, and precision space transitions.",

        // Visuals
        visuals_title: "Visual Proposal: Venue Staging",

        // Experience
        experience_title: "The Antioxidant Break",
        antioxidant_intro: "A catering experience designed to practice what you preach, offering nutrient-dense, liver-conscious choices.",
        matcha_desc: "A vibrant, antioxidant-rich alternative to coffee.",
        shots_desc: "Concentrated bursts of vitality to reduce inflammation.",
        juice_desc: "100% natural, freshly pressed juices. Low in fructose.",
        nuts_label: "Premium Nut & Cereals Dispensers:",
        nuts_desc: "Interactive dispensers with raw nuts and cereals.",
        bars_label: "Clean-Energy Protein Bars:",
        bars_desc: "House-made bars without refined sugars.",
        fruit_label: "Antioxidant Fruit Platters:",
        fruit_desc: "Fresh, organic, seasonal fruit displays.",
        organic_label: "Organic & Liver-Conscious Bites:",
        organic_desc: "100% organic, whole-food ingredients.",
        lunch_title: "Reframing the Lunch Break",
        lunch_food_label: "The Food: Liver-Detox Poke.",
        lunch_food_text: "Poke bowls curated with high-performance, hepatic-friendly ingredients. The ultimate functional food, easy to eat with a single utensil.",
        lunch_exp_label: "The Experience: Functional Versatility.",
        lunch_exp_text: "The layout prioritizes freedom of movement, with high tables, traditional seating, or sofas for a relaxed 'living room' atmosphere with Mediterranean vibes.",

        // Premium
        premium_title: "More than a Welcome Pack: Premium Essentials",
        notebook_title: "Luxurious Textured Notebook",
        notebook_text: "Textured faux leather flexi-cover balancing elegance and durability. FSC-approved 100gsm Ivory Paper inside.",
        pens_title: "Executive Writing Instruments",
        pen_bamboo_label: "Sustainable Bamboo Edition:",
        pen_bamboo_text: "Natural, renewable bamboo barrel with premium chrome accents.",
        pen_classic_label: "Classic Executive Edition:",
        pen_classic_text: "Sleek, dual-tone professional pen for balanced comfort and precision.",
        sleeve_title: "Eco-Engineered Laptop Sleeve",
        sleeve_text: "A masterpiece of sustainable design. By choosing this piece, we have contributed to:",
        sleeve_co2: "3.4kg of CO2 emissions saved.",
        sleeve_water: "14.1L of water preserved.",
        sleeve_pet: "10 PET bottles repurposed into high-quality textile.",
        badge_title: "NFC-Powered Badges",
        badge_text: "NFC-equipped badges for seamless, high-end contact exchange. A gentle touch allows instant profile transmission.",

        // VIP Add-on
        addon_label: "Optional Add-On",
        addon_title: 'VIP Press Dinner at "La Dama"',
        addon_text: "Full coordination and design for the pre-event press gathering, with a highly tailored approach:",
        addon_1: "Venue setup and collaboration with La Dama's staff.",
        addon_2: "Bespoke graphic and aesthetic integration.",
        addon_3: "Premium tablescape, custom menus, and place cards.",
        addon_4: "RSVP management, strategic seating, and on-site hosting.",
        addon_5: "Curated premium farewell gifts for a lasting impression.",

        // Investment
        investment_title: "Investment",
        agency_label: "Agency Fee",
        agency_desc: "Includes vendor management, experience design, Run of Show, and Event Director + Team of 3 (10+ hours).",
        vip_label: "Optional: VIP Dinner",
        vip_desc: "Pre-event coordination, design, gift sourcing, and on-site hosting.",
        terms_title: "Payment Terms & Transparency",
        terms_transparency_label: "Transparency:",
        terms_transparency_text: "We will manage payments for all third-party vendors and share all invoices directly with your team.",
        terms_payment_label: "Payment Terms:",
        terms_payment_text: "50% deposit upon signing, with 50% due within 15 days after the event.",

        // Footer
        footer_text: "Proposal designed with passion.",
        footer_rights: "All rights reserved."
    }
};

let currentLang = 'es';

function setLanguage(lang) {
    currentLang = lang;
    const dict = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Update page title
    document.title = lang === 'es'
        ? 'Propuesta de Evento | Global Think-tank on Steatotic Liver Disease 2026 - HEYVI'
        : 'Event Proposal | Global Think-tank on Steatotic Liver Disease 2026 - HEYVI';

    // Update active button
    document.getElementById('lang-es').classList.toggle('active', lang === 'es');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
}

// --- Lightbox ---
function openLightbox(src, alt) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = src;
    img.alt = alt || '';
    lb.classList.remove('hidden');
    lb.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    lb.classList.add('hidden');
    lb.classList.remove('flex');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function() {
    // Language buttons
    document.getElementById('lang-es').addEventListener('click', () => setLanguage('es'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));

    // Lightbox triggers
    document.querySelectorAll('.lightbox-trigger').forEach(img => {
        img.addEventListener('click', () => openLightbox(img.src, img.alt));
    });

    // Close lightbox with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });

    // Mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        // Close menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
});
