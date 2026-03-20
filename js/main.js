// --- i18n Translation System ---
const translations = {
    es: {
        // Nav
        nav_vision: "La Visión",
        nav_space: "El Espacio",
        nav_gifts: "Regalos Premium",
        nav_services: "Servicios",
        nav_addon: "Extras",
        nav_budget: "Presupuesto",

        // Hero
        hero_subtitle: "Visión 2026: Elevando la Experiencia",

        // Vision
        vision_title: "La Visión del Evento 2026: Elevando la Experiencia",
        vision_text_1: "Nuestro objetivo es consolidar el evento insignia del Global Think-Tank on Steatotic Liver Disease como mucho más que una conferencia médica tradicional, posicionándolo como el encuentro de referencia para líderes de opinión, profesionales de la salud e investigadores que marcan la agenda global sobre la enfermedad del hígado graso.",
        vision_text_2: "Los expertos de hoy buscan más que un foro de debate: buscan una experiencia que estimule nuevas ideas, conexiones estratégicas y diálogo de alto nivel. Cuidando cada detalle —desde el diseño del espacio hasta la experiencia gastronómica— crearemos un encuentro distintivo que eleve la experiencia del evento y supere la edición anterior.",

        // Space
        space_title: "Propuesta Visual: Puesta en Escena del Venue",
        space_checkin_label: "Branding del Espacio de Check-in",
        space_stage_label: "Montaje del Escenario",
        space_dj_label: "DJ Space",
        space_cooling_label: "Estación de Climatización a Medida",
        space_graphic_label: "Exhibición Gráfica en Vivo",
        space_cost_label: "Coste Estimado",
        space_cost_note: "*Pendiente presupuesto final post visita técnica venue",

        // Premium Gifts
        gifts_title: "Más que un Pack de Bienvenida: Esenciales Premium",
        gifts_subtitle: "Selección de un pack de bienvenida de alta calidad que refleja el prestigio del Think-tank.",
        notebook_title: "Cuaderno Texturizado",
        notebook_text: "Cubierta flexible de piel sintética texturizada que equilibra elegancia y durabilidad. Interior con papel marfil de 100 g/m² certificado por el FSC.",
        notebook_cost_label: "Coste",
        notebook_cost_units: "c/u para 300 unidades",
        pens_title: "Bolígrafos de Alta Gama",
        pen_bamboo_label: "Edición de Bambú Sostenible:",
        pen_bamboo_text: "Cuerpo de bambú natural y renovable con acabados cromados de alta gama.",
        pen_bamboo_cost_label: "Coste",
        pen_bamboo_cost_units: "c/u para 300 unidades",
        pen_classic_label: "Edición Ejecutiva Clásica:",
        pen_classic_text: "Bolígrafo profesional estilizado en acabado bitono para un equilibrio perfecto entre comodidad y precisión.",
        pen_classic_cost_label: "Coste",
        pen_classic_cost_units: "c/u para 300 unidades",
        sleeve_title: "Funda para portátil de diseño eco-responsable",
        sleeve_text: "Una obra maestra del diseño sostenible. Al elegir esta pieza, hemos contribuido a:",
        sleeve_co2: "3,4 kg de emisiones de CO2 ahorradas.",
        sleeve_water: "14,1 L de agua preservados.",
        sleeve_pet: "10 botellas de PET reutilizadas en textiles de alta calidad.",
        sleeve_cost_label: "Coste Funda",
        sleeve_cost_units: "c/u para 150 unidades",
        carrier_cost_label: "Coste Maletín",
        carrier_cost_units: "c/u para 150 unidades",
        badge_title: "Acreditaciones con tecnología NFC",
        badge_text: "Acreditaciones equipadas con NFC para un intercambio de contactos fluido y de alta gama. Un ligero contacto permite la transmisión instantánea del perfil.",
        badge_option_a_title: "Opción A: App Badge a Badge",
        badge_option_a_text: "La tecnología NFC permite la transferencia instantánea de perfiles de contacto mediante un simple toque badge-to-badge, sincronizando sin esfuerzo los datos de los asistentes en una red digital segura.",
        badge_a_cost_label: "Coste",
        badge_a_cost_value: "Por confirmar",
        badge_cost_units: "estimado c/u",
        badge_option_b_title: "Opción B: Badge a Móvil",
        badge_option_b_text: "El perfil se carga al instante en la agenda del teléfono o se abre la plataforma elegida como LinkedIn con solo acercar el badge al móvil, eliminando cualquier paso manual.",
        badge_b_cost_label: "Coste",

        // Lanyards
        lanyard_title: "Lanyards Premium",
        lanyard_subtitle: "Lanyards Eco-Luxe: Una refinada mezcla de 100% algodón y bambú sostenible.",
        lanyard_text: "Edición de Fibra de Bambú Sostenible: Una elección eco-responsable que elimina el uso de plásticos.",
        lanyard_cost_label: "Coste Estimado",
        lanyard_cost_units: "estimado c/u",

        // Services
        services_title: "Alcance de Servicios Propuesto",
        svc_design_title: "Diseño Creativo y de Experiencia",
        svc_design_text: "Diseño de un entorno inmersivo y de alta gama que eleve el prestigio del evento.",
        svc_design_1_label: "Conceptualización de Eventos Premium:",
        svc_design_1_text: "Diseño de un entorno inmersivo de alto nivel que posicione este evento insignia más allá de una conferencia médica tradicional.",
        svc_design_2_label: "Diseño Espacial:",
        svc_design_2_text: "Planificación estratégica de la distribución de la terraza principal para maximizar tanto el atractivo estético como la funcionalidad del espacio para el networking, la cena y las sesiones de trabajo dinámicas.",

        svc_logistics_title: "Gestión de Proveedores y Logística",
        svc_logistics_text: "Búsqueda y gestión de proveedores locales de primer nivel para mobiliario, AV, catering y señalética.",
        svc_logistics_1_label: "Búsqueda y Supervisión de Proveedores:",
        svc_logistics_1_text: "Identificación y gestión de proveedores locales de élite para mobiliario, equipos audiovisuales, catering y señalética.",
        svc_logistics_2_label: "Soluciones Personalizadas (El \"Desafío de la Climatización\"):",
        svc_logistics_2_text: "Búsqueda de soluciones de refrigeración estéticas y silenciosas (como ventiladores de torre premium) que se integren perfectamente con la decoración de lujo, evitando equipos industriales disruptivos.",

        svc_merch_title: "Gestión del Pack de Bienvenida",
        svc_merch_text: "Curaduría de un kit de bienvenida de alta calidad que refleje el prestigio del Think-tank.",
        svc_merch_1_label: "Mejora de Obsequios para Asistentes:",
        svc_merch_1_text: "Selección de un exclusivo pack de bienvenida que incluye una funda para portátil sostenible (de marcas premium eco-responsables), ofreciendo una alternativa sofisticada a los regalos corporativos convencionales.",
        svc_merch_2_label: "Gestión Logística:",
        svc_merch_2_text: "Supervisión integral de proveedores especializados, optimización del proceso de pedido y control de calidad riguroso mediante la validación física de muestras. Nuestro equipo gestionará personalmente el meticuloso montaje y preparación de los 150 kits de bienvenida premium.",
        svc_merch_3_label: "Logística de Acreditaciones y Programación NFC:",
        svc_merch_3_text: "Supervisión de la logística completa de las 150 acreditaciones, asegurando que cada unidad esté programada individualmente con tecnología NFC avanzada para cargar los datos específicos de cada asistente.",

        svc_ambiance_title: "Entretenimiento y Ambiente",
        svc_ambiance_text: "Producción de música de ambiente elegante y actuación de Flamenco en vivo.",
        svc_ambiance_1_label: "Atmósfera Musical Curada:",
        svc_ambiance_1_text: "Selección y briefing de DJ para proporcionar música de fondo elegante y no intrusiva (ej. Balearic chill-out / melodic deep house) adaptada a las diferentes fases del evento.",
        svc_ambiance_2_label: "Producción de Flamenco:",
        svc_ambiance_2_text: "Gestión del montaje, la acústica y los tiempos de la actuación de Flamenco en vivo para garantizar una experiencia cultural auténtica e impactante sin interrumpir el flujo del evento.",

        svc_onsite_title: "Coordinación y Dirección In-situ",
        svc_onsite_text: "Director de evento dedicado, gestión logística y transiciones de espacio precisas.",
        svc_onsite_1_label: "Director de Evento Dedicado:",
        svc_onsite_1_text: "Supervisión presencial completa durante todo el evento, actuando como su punto de contacto principal y apoyo directo.",
        svc_onsite_2_label: "Logística y Montaje:",
        svc_onsite_2_text: "Gestión de la recepción temprana, inventario y colocación estratégica de la señalética y materiales de acreditación.",
        svc_onsite_3_label: "Transiciones de Espacio de Precisión (\"Room Flips\"):",
        svc_onsite_3_text: "Ejecución de transiciones fluidas y rápidas del espacio físico, específicamente para el montaje de la sesión dinámica de las 17:30 (pizarras y cambios de distribución) y la transformación de las 18:30 para la recepción nocturna y el espectáculo de Flamenco.",
        svc_onsite_4_label: "Gestión Dinámica del Espacio:",
        svc_onsite_4_text: "Nuestro equipo dedicado está preparado para desplegar instantáneamente una estrategia de 'Plan B', garantizando cero interrupciones en la experiencia premium y el horario del evento en caso de cambios climáticos repentinos o solicitudes de último minuto.",

        // VIP Add-on
        addon_label: "Servicio Opcional",
        addon_title: 'Coordinación de la Cena VIP para Prensa en "La Dama"',
        addon_text: "Para garantizar una experiencia coherente y de alta gama desde el primer momento, ofrecemos servicios completos de coordinación y diseño para el encuentro previo con la prensa. Reconociendo la atmósfera única y elegante de La Dama, nuestro enfoque será altamente personalizado y sofisticado.",
        addon_1_label: "Montaje del Espacio:",
        addon_1_text: "Colaboración directa con el personal de La Dama para supervisar el montaje previo al evento, asegurando que el espacio esté impecablemente preparado para un encuentro de alto perfil con prensa y personalidades VIP.",
        addon_2_label: "Integración Gráfica y Estética a Medida:",
        addon_2_text: "Desarrollo de una propuesta gráfica sutil y personalizada que integre elegantemente el branding del SLD Think-tank en la estética clásica del local, manteniendo la sensación de exclusividad del restaurante.",
        addon_3_label: "Decoración y Estilismo de Mesa Premium:",
        addon_3_text: "Diseño de una experiencia gastronómica refinada, que incluye la creación e impresión de menús personalizados y tarjetas de mesa (place cards) que armonicen con el tono sofisticado de la velada.",
        addon_4_label: "Gestión de Invitados y Plan de Asientos:",
        addon_4_text: "Gestión integral de la lista de confirmaciones (RSVP), organización estratégica del plan de asientos y servicio de anfitrión (hosting) dedicado in-situ para dar la bienvenida, guiar y asistir a los periodistas e invitados VIP durante toda la noche.",
        addon_5_label: "Detalles de Despedida Seleccionados:",
        addon_5_text: "Búsqueda y propuesta de una selección de obsequios de cortesía memorables y de alta calidad, específicamente seleccionados para los asistentes VIP y de prensa, con el fin de dejar una impresión positiva y duradera del Think-tank.",
        dama_cost_label: "Coste Estimado por Kit",
        dama_cost_units: "aprox.",

        // Essence of Balance (La Dama gift)
        essence_title: "The Essence of Balance: Un tributo mediterráneo a la Salud del Hígado",
        essence_text: "Este kit de cortesía ha sido cuidadosamente seleccionado para ofrecer a los invitados una experiencia basada en los pilares de la Dieta Mediterránea, reconocida mundialmente por sus beneficios en la salud metabólica y hepática. Cada elemento representa la excelencia de la producción artesanal española:",
        essence_olives_label: "Aceitunas de Campo Real:",
        essence_olives_text: "Un tesoro gastronómico rico en fibra y ácidos grasos monoinsaturados que favorecen la función digestiva.",
        essence_evoo_label: "Aceite de Oliva Virgen Extra (AOVE):",
        essence_evoo_text: 'El "oro líquido" de nuestra tierra. Su alto contenido en ácido oleico y polifenoles actúa como un potente antioxidante y antiinflamatorio natural, fundamentales en el cuidado del tejido hepático.',
        essence_salt_label: "Sal Marina Pura:",
        essence_salt_text: "Recolectada de forma sostenible, aportando los minerales esenciales en su estado más puro y equilibrado.",
        essence_cost_label: "Coste Estimado por Caja de Regalo",
        essence_cost_units: "mín. por caja",

        // Budget
        budget_title: "Presupuesto",
        agency_label: "Honorarios de Gestión de Agencia",
        agency_desc: "Incluye: Búsqueda y gestión de todos los proveedores, diseño de experiencia, gestión integral del Run of Show (cronograma del evento), y un Director de Evento dedicado in-situ junto a un equipo de staff de 3 personas (más de 10 horas).",
        vip_label: "Fee de Agencia Adicional (Evento Previo)",
        vip_desc: "Coordinación previa al evento con el espacio, diseño estético a medida, gestión estratégica del plan de asientos, búsqueda de obsequios seleccionados y servicio de anfitrión in-situ por nuestro equipo dedicado para dar la bienvenida y asistir a los invitados durante toda la cena.",
        terms_title: "Condiciones de Pago y Transparencia",
        terms_transparency_label: "Transparencia:",
        terms_transparency_text: "Gestionaremos el calendario integral de pagos de todos los proveedores externos (Catering, Mobiliario, Merchandising) y compartiremos todas las facturas directamente con su equipo para su procesamiento. Nuestros Honorarios de Agencia (Agency Fee) se aplican exclusivamente por la gestión de principio a fin y nuestra responsabilidad sobre el éxito global del evento.",
        terms_payment_label: "Condiciones de Pago:",
        terms_payment_text: "Un depósito del 50% al firmar la propuesta y el 50% restante pagadero dentro de los 15 días posteriores a la finalización del evento.",

        // Footer
        footer_text: "Propuesta diseñada con pasión.",
        footer_rights: "Todos los derechos reservados."
    },
    en: {
        // Nav
        nav_vision: "The Vision",
        nav_space: "The Space",
        nav_gifts: "Premium Gifts",
        nav_services: "Services",
        nav_addon: "Add-Ons",
        nav_budget: "Budget",

        // Hero
        hero_subtitle: "The 2026 Event Vision: Elevating the Experience",

        // Vision
        vision_title: "The 2026 Event Vision: Elevating the Experience",
        vision_text_1: "Our goal is to consolidate the Global Think-Tank on Steatotic Liver Disease's flagship event as much more than a traditional medical conference, positioning it as the reference meeting for opinion leaders, healthcare professionals, and researchers shaping the global agenda on fatty liver disease.",
        vision_text_2: "Today's experts are looking for more than a forum for debate: they are seeking an experience that stimulates new ideas, strategic connections, and high-level dialogue. By taking care of every detail—from space design to the gastronomic experience—we will create a distinctive meeting that elevates the event experience and surpasses the previous edition.",

        // Space
        space_title: "Visual Proposal: Venue Staging",
        space_checkin_label: "Check-in Space Branding",
        space_stage_label: "Stage Set Up",
        space_dj_label: "DJ Space",
        space_cooling_label: "Bespoke Cooling Station",
        space_graphic_label: "Live Graphic Exhibition",
        space_cost_label: "Estimated Cost",
        space_cost_note: "*Pending final quote after venue technical visit",

        // Premium Gifts
        gifts_title: "More than a Welcome Pack: Premium Essentials",
        gifts_subtitle: "Selection of a high-quality welcome pack reflecting the Think-tank's prestige.",
        notebook_title: "Luxurious Textured Notebook",
        notebook_text: "Textured faux leather flexi-cover balancing elegance and durability. FSC-approved 100gsm Ivory Paper inside.",
        notebook_cost_label: "Cost",
        notebook_cost_units: "each for 300 units",
        pens_title: "Executive Writing Instruments",
        pen_bamboo_label: "Sustainable Bamboo Edition:",
        pen_bamboo_text: "Natural, renewable bamboo barrel with premium chrome accents.",
        pen_bamboo_cost_label: "Cost",
        pen_bamboo_cost_units: "each for 300 units",
        pen_classic_label: "Classic Executive Edition:",
        pen_classic_text: "Sleek, dual-tone professional pen for balanced comfort and precision.",
        pen_classic_cost_label: "Cost",
        pen_classic_cost_units: "each for 300 units",
        sleeve_title: "Eco-Engineered Laptop Sleeve",
        sleeve_text: "A masterpiece of sustainable design. By choosing this piece, we have contributed to:",
        sleeve_co2: "3.4kg of CO2 emissions saved.",
        sleeve_water: "14.1L of water preserved.",
        sleeve_pet: "10 PET bottles repurposed into high-quality textile.",
        sleeve_cost_label: "Sleeve Cost",
        sleeve_cost_units: "each for 150 units",
        carrier_cost_label: "Carrier Cost",
        carrier_cost_units: "each for 150 units",
        badge_title: "NFC-Powered Badges",
        badge_text: "NFC-equipped badges for seamless, high-end contact exchange. A gentle touch allows instant profile transmission.",
        badge_option_a_title: "Option A: Badge to Badge",
        badge_option_a_text: "NFC technology enables the instantaneous transfer of contact profiles through a simple badge-to-badge tap, effortlessly syncing attendee data into a secure digital network.",
        badge_a_cost_label: "Cost",
        badge_a_cost_value: "TBD",
        badge_cost_units: "est. each",
        badge_option_b_title: "Option B: Badge to Phone",
        badge_option_b_text: "By simply tapping a badge against a smartphone, the attendee's profile is instantly uploaded to the mobile device's contact list or opens the attendee's LinkedIn profile (or any other platform selected).",
        badge_b_cost_label: "Cost",

        // Lanyards
        lanyard_title: "Premium Lanyards",
        lanyard_subtitle: "Eco-Luxe Lanyards: A refined blend of 100% cotton and sustainable bamboo.",
        lanyard_text: "Sustainable Bamboo Fiber Edition: An eco-conscious choice that eliminates the use of plastics.",
        lanyard_cost_label: "Estimated Cost",
        lanyard_cost_units: "est. each",

        // Services
        services_title: "Proposed Scope of Services",
        svc_design_title: "Creative & Experience Design",
        svc_design_text: "Designing an immersive, high-end environment that elevates the event.",
        svc_design_1_label: "Premium Event Conceptualization:",
        svc_design_1_text: "Designing an immersive, high-end environment that elevates the flagship event beyond a traditional medical conference.",
        svc_design_2_label: "Spatial Design:",
        svc_design_2_text: "Strategically planning the layout of the main deck to maximize both the aesthetic appeal and the functionality of the space for networking, dining, and dynamic working sessions.",

        svc_logistics_title: "Vendor & Logistics Management",
        svc_logistics_text: "Sourcing and managing top-tier local providers for furniture, AV, catering and signage.",
        svc_logistics_1_label: "Supplier Sourcing & Supervision:",
        svc_logistics_1_text: "Identifying and managing top-tier local providers for furniture, audiovisual equipment, catering and signage.",
        svc_logistics_2_label: 'Custom Solutions (The "Fan" Challenge):',
        svc_logistics_2_text: "Sourcing aesthetic, silent cooling solutions (such as premium tower fans) that blend seamlessly with the upscale decor, avoiding disruptive industrial equipment.",

        svc_merch_title: "Welcome Kit Sourcing",
        svc_merch_text: "Curating a high-quality welcome pack that reflects the prestige of the Think-tank.",
        svc_merch_1_label: "Attendee Gift Upgrade:",
        svc_merch_1_text: "Curating a selection of high-quality welcome pack, including a sustainable laptop bag (featuring premium eco-friendly brands) that reflect the prestige of the Global Think-tank and offer a sophisticated alternative to standard corporate giveaways.",
        svc_merch_2_label: "Logistics Management:",
        svc_merch_2_text: "Full-scale oversight of specialized vendors, streamlining the ordering process, and conducting rigorous quality control through physical sample validation. Our team will personally handle the meticulous assembly and preparation of the 150 premium welcome kits.",
        svc_merch_3_label: "Badge Logistics & NFC Programming:",
        svc_merch_3_text: "Oversees the complete logistics for the 150 event badges, ensuring each unit is individually programmed with advanced NFC technology, encoding every badge with the specific data of each attendee.",

        svc_ambiance_title: "Entertainment & Ambiance",
        svc_ambiance_text: "Elegant background music and live Flamenco performance production.",
        svc_ambiance_1_label: "Curated Musical Atmosphere:",
        svc_ambiance_1_text: "Selecting and briefing a DJ to provide elegant, non-intrusive background music (e.g., Balearic chill-out/melodic deep house) tailored to the different phases of the event.",
        svc_ambiance_2_label: "Flamenco Production:",
        svc_ambiance_2_text: "Managing the setup, acoustics, and timing of the live Flamenco performance to ensure an authentic and impactful cultural experience without disrupting the event's flow.",

        svc_onsite_title: "On-Site Coordination & Direction",
        svc_onsite_text: "Dedicated Event Director, logistics management, and precision space transitions.",
        svc_onsite_1_label: "Dedicated Event Director:",
        svc_onsite_1_text: "Providing full in-person supervision throughout the event to act as your primary point of contact and shadow.",
        svc_onsite_2_label: "Logistics & Setup:",
        svc_onsite_2_text: "Managing the early reception, inventory, and strategic placement of signage and accreditation materials.",
        svc_onsite_3_label: 'Precision "Room Flips":',
        svc_onsite_3_text: "Executing rapid, seamless transitions of the physical space, specifically the crucial 17:30 dynamic session setup and the 18:30 transformation for the evening reception and Flamenco show.",
        svc_onsite_4_label: "Dynamic Space Management:",
        svc_onsite_4_text: "Our dedicated crew is prepared to instantly deploy a seamless 'Plan B' strategy, ensuring zero disruption to the event's premium experience and schedule in the event of sudden weather changes or last minute requests.",

        // VIP Add-on
        addon_label: "Optional Add-On",
        addon_title: 'VIP Press Dinner Coordination at "La Dama"',
        addon_text: "To ensure a cohesive and premium experience from the very beginning, we offer full coordination and design services for the pre-event press gathering. Recognizing the unique and elegant atmosphere of La Dama, our approach will be highly tailored and sophisticated.",
        addon_1_label: "Venue Set-Up:",
        addon_1_text: "Seamless collaboration with La Dama's staff to oversee the pre-event setup, ensuring the space is flawlessly prepared for a high-profile press and VIP gathering.",
        addon_2_label: "Bespoke Graphic & Aesthetic Integration:",
        addon_2_text: "Developing a subtle, custom graphic proposal that elegantly weaves the SLD Think-tank branding into the venue's classic aesthetic.",
        addon_3_label: "Premium Tablescape & Decoration:",
        addon_3_text: "Designing a refined dining experience, including the creation and printing of custom menus and personalized place cards.",
        addon_4_label: "Guest Management & Seating Plan:",
        addon_4_text: "Comprehensive handling of the RSVP list, strategic seating plan management, and dedicated on-site hosting.",
        addon_5_label: "Curated Farewell Gifts:",
        addon_5_text: "Sourcing and proposing a selection of premium, memorable farewell gifts specifically curated for the press and VIP attendees.",
        dama_cost_label: "Estimated Cost per Kit",
        dama_cost_units: "approx.",

        // Essence of Balance (La Dama gift)
        essence_title: "The Essence of Balance: A Mediterranean Tribute to Liver Health",
        essence_text: "This curated gift set has been thoughtfully selected to offer guests an experience rooted in the pillars of the Mediterranean Diet, globally recognized for its profound benefits on metabolic and liver health. Each element represents the excellence of Spanish artisanal production:",
        essence_olives_label: "Campo Real Olives:",
        essence_olives_text: "A gastronomic treasure rich in fiber and monounsaturated fatty acids that support healthy digestive function.",
        essence_evoo_label: "Extra Virgin Olive Oil (EVOO):",
        essence_evoo_text: 'Our land\'s "liquid gold." Its high content of oleic acid and polyphenols acts as a potent natural antioxidant and anti-inflammatory, essential for protecting hepatic tissue.',
        essence_salt_label: "Pure Sea Salt:",
        essence_salt_text: "Sustainably harvested to provide essential minerals in their most natural and balanced state.",
        essence_cost_label: "Estimated Cost per Gift Box",
        essence_cost_units: "min. per box",

        // Budget
        budget_title: "Budget",
        agency_label: "Agency Management Fee",
        agency_desc: "Includes: Sourcing and management of all vendors, experience design, comprehensive Run of Show management, and a dedicated on-site Event Director + Crew Team of 3 (10+ hours).",
        vip_label: "Optional Add-On: VIP Press Dinner",
        vip_desc: "Pre-event coordination with the venue, bespoke aesthetic design, strategic seating plan management, curated gift sourcing, and on-site hosting by our dedicated team.",
        terms_title: "Payment Terms & Transparency",
        terms_transparency_label: "Transparency:",
        terms_transparency_text: "We will manage the comprehensive payment schedule for all third-party vendors (Catering, Furniture, Merchandising) and share all invoices directly with your team for processing. Our Agency Fee is applied solely for the end-to-end management and our accountability for the event's overall success.",
        terms_payment_label: "Payment Terms:",
        terms_payment_text: "A 50% deposit upon signing the proposal with the remaining 50% due within 15 days following the conclusion of the event.",

        // Footer
        footer_text: "Proposal designed with passion.",
        footer_rights: "All rights reserved."
    }
};

let currentLang = 'en';

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
    document.documentElement.lang = lang === 'es' ? 'es' : 'en';

    // Update page title
    document.title = lang === 'es'
        ? 'Propuesta de Evento | Global Think-tank on Steatotic Liver Disease 2026 - HEYVI'
        : 'Flagship Event Proposal | Global Think-tank on Steatotic Liver Disease 2026 - HEYVI';

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
