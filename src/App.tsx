
import { ShoppingCart, Search, User, CheckCircle2, Heart, Star, ChevronLeft, ChevronRight, Flame, Leaf, Users, Utensils, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { staggerChildren: 0.1 }
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

function App() {
  return (
    <div className="font-sans text-dark bg-bg-color min-h-screen relative z-0">
      {/* Background Abstract Figures */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden opacity-[0.04]">
        <motion.svg animate={{ rotate: 360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }} className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] text-dark" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M42.7,-73.4C55.9,-67.8,67.6,-57.2,76.5,-44.5C85.4,-31.8,91.5,-17,89.5,-2.9C87.5,11.2,77.4,24.6,67.6,36.5C57.8,48.4,48.3,58.8,36.1,65.2C23.9,71.6,9,74,-5.2,70.9C-19.4,67.8,-32.9,59.2,-46.2,50.7C-59.5,42.2,-72.6,33.8,-79.8,21.5C-87,9.2,-88.3,-7,-82.1,-20.1C-75.9,-33.2,-62.2,-43.2,-49.2,-48.9C-36.2,-54.6,-23.9,-56,-10.8,-57.8C2.3,-59.6,15.5,-61.8,29.5,-79C42.7,-73.4,42.7,-73.4,42.7,-73.4Z" transform="translate(100 100)" />
        </motion.svg>
        <motion.svg animate={{ rotate: -360 }} transition={{ duration: 150, repeat: Infinity, ease: "linear" }} className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] text-primary" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M47.7,-68.8C61.5,-59.5,72.2,-45.5,78.8,-29.6C85.4,-13.7,87.9,4,82.4,19.3C76.9,34.6,63.4,47.5,49,58.6C34.6,69.7,19.3,79,-0.6,79.9C-20.5,80.8,-41,73.3,-55.8,61.1C-70.6,48.9,-79.7,32,-83.4,14C-87.1,-4,-85.4,-23.1,-75.7,-38.2C-66,-53.3,-48.3,-64.4,-32.1,-72.1C-15.9,-79.8,1.8,-84.1,18.6,-81.4C35.4,-78.7,33.9,-78.1,47.7,-68.8Z" transform="translate(100 100)" />
        </motion.svg>
        <motion.svg animate={{ rotate: 360 }} transition={{ duration: 180, repeat: Infinity, ease: "linear" }} className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] text-dark" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M39.9,-65.4C52.4,-57.4,63.7,-46.8,70.9,-33.6C78.1,-20.4,81.2,-4.6,77.5,10.2C73.8,25,63.3,38.8,50.7,48.9C38.1,59,23.4,65.4,8.1,68.9C-7.2,72.4,-23.1,73,-36.8,67.1C-50.5,61.2,-62.1,48.8,-71.5,34.4C-80.9,20,-88.1,3.6,-85.4,-11.4C-82.7,-26.4,-70.1,-40,-56.3,-47.9C-42.5,-55.8,-27.5,-58,-12.9,-61C1.7,-64,16.3,-67.8,27.4,-73.4C39.9,-65.4,39.9,-65.4,39.9,-65.4Z" transform="translate(100 100)" />
        </motion.svg>
        <motion.svg animate={{ scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[70%] right-[30%] w-[200px] h-[200px] text-primary" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="10 10" />
        </motion.svg>
        <motion.svg animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute top-[20%] right-[20%] w-[150px] h-[150px] text-dark" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
           <path fill="none" stroke="currentColor" strokeWidth="3" d="M20,100 Q60,20 100,100 T180,100" />
        </motion.svg>
      </div>

      {/* Header */}
      <header className="absolute top-6 left-0 right-0 z-10 w-full max-w-[96%] mx-auto px-5 flex justify-between items-center text-white">
        <div className="flex items-center gap-2">
          <div className="text-[28px]">🍔</div>
          <div className="flex flex-col font-black leading-none text-lg tracking-tight">
            <span>BURGER</span>
            <span>BROS</span>
          </div>
        </div>
        
        <nav className="hidden md:flex gap-6 font-medium text-sm">
          <a href="#" className="text-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary">Inicio</a>
          <a href="#">Menú</a>
          <a href="#">Nuestra Historia</a>
          <a href="#">Sucursales</a>
          <a href="#">Catering</a>
          <a href="#">Blog</a>
          <a href="#">Contacto</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-white hidden sm:block"><Search size={20} /></button>
          <button className="text-white hidden sm:block"><User size={20} /></button>
          <button className="text-white relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-primary text-dark text-[10px] font-extrabold w-4 h-4 flex items-center justify-center">0</span>
          </button>
          <button className="hidden md:flex items-center justify-center gap-2 py-3 px-6 font-semibold text-[15px] bg-primary text-dark hover:bg-primary-hover transition-colors">Pedir en línea →</button>
          <button className="md:hidden text-white ml-2"><Menu size={24} /></button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-dark min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="relative z-10 w-full max-w-[96%] mx-auto px-5">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex flex-col items-center md:items-start md:w-1/2 text-center md:text-left mt-12 md:mt-0">
            <span className="text-light-gray tracking-widest text-sm mb-5 block">BUENA COMIDA. MEJOR HUMOR.</span>
            <h1 className="text-white text-[38px] sm:text-[42px] md:text-[56px] lg:text-[72px] leading-none font-black mb-5 uppercase">
              HAMBURGUESAS<br />QUE UNEN<br /><span className="text-primary">A LAS PERSONAS</span>
            </h1>
            <p className="text-[#aaaaaa] text-lg mb-8 max-w-[400px]">
              Hamburguesas jugosas, papas crujientes y sabores inolvidables — hechas con amor, servidas frescas.
            </p>
            <div className="flex gap-4 mb-12 justify-center md:justify-start">
              <button className="py-3 px-6 font-semibold text-[15px] bg-primary text-dark hover:bg-primary-hover transition-colors">Pedir en línea →</button>
              <button className="py-3 px-6 font-semibold text-[15px] border-2 border-white text-white hover:bg-white hover:text-dark transition-colors">Ver Menú</button>
            </div>
            
            <div className="flex flex-wrap gap-8 text-white justify-center md:justify-start">
              <div className="flex flex-col gap-2 text-xs font-medium text-[#aaaaaa]">
                <CheckCircle2 size={24} className="text-primary" />
                <span>Ingredientes<br/>Frescos</span>
              </div>
              <div className="flex flex-col gap-2 text-xs font-medium text-[#aaaaaa]">
                <div className="text-primary font-extrabold text-xl">100%</div>
                <span>Opciones Halal</span>
              </div>
              <div className="flex flex-col gap-2 text-xs font-medium text-[#aaaaaa]">
                <Heart size={24} className="text-primary" />
                <span>Amado por<br/>10,000+ Foodies</span>
              </div>
              <div className="flex flex-col gap-2 text-xs font-medium text-[#aaaaaa]">
                <Star size={24} className="text-primary" />
                <span>4.8/5<br/>Calif. Promedio</span>
              </div>
            </div>
          </motion.div>
        </div>
        <img src="/Gemini_Generated_Image_Enhanced.webp" alt="Huge Burger" className="absolute right-0 top-0 w-full h-full object-cover z-0" />
        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[60%] bg-gradient-to-r from-black/90 via-black/70 lg:via-black/50 to-black/60 lg:to-transparent z-0 pointer-events-none"></div>
      </section>

      {/* Menu Categories */}
      <motion.section {...fadeInUp} className="py-20 w-full max-w-[96%] mx-auto px-5">
        <span className="text-red font-bold text-sm uppercase tracking-wider mb-2 block">EXPLORA NUESTRO MENÚ</span>
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-4xl font-extrabold capitalize">Algo para cada antojo</h2>
          <a href="#" className="font-semibold text-sm">Ver menú completo →</a>
        </div>
        
        <div className="flex gap-5 overflow-x-auto pb-5 scrollbar-hide justify-start md:justify-center snap-x">
          {[
            { name: 'Hamburguesas', img: '/cat_burgers_1791395322369.webp' },
            { name: 'Papas Cargadas', img: '/cat_fries_1791395333907.webp' },
            { name: 'Wraps', img: '/cat_wraps_1791395344626.webp' },
            { name: 'Acompañantes', img: '/cat_sides_1791395356541.webp' },
            { name: 'Bebidas', img: '/cat_drinks_1791395367979.webp' },
            { name: 'Combos', img: '/cat_combos_1791395403491.webp' },
            { name: 'Postres', img: '/cat_desserts_1791395420923.webp' }
          ].map((item, index) => (
            <div className="flex flex-col items-center gap-4 min-w-[150px] cursor-pointer group snap-center" key={index}>
              <div className="w-[130px] h-[130px] bg-light-gray rounded-full flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                <img src={item.img} alt={item.name} className="w-4/5 h-4/5 object-cover rounded-full" />
              </div>
              <span className="font-bold text-base">{item.name}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Bestsellers */}
      <motion.section {...fadeInUp} className="py-20 w-full max-w-[96%] mx-auto px-5">
        <span className="text-red font-bold text-sm uppercase tracking-wider mb-2 block">FAVORITOS DE LOS CLIENTES</span>
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-4xl font-extrabold capitalize">Nuestros Más Vendidos</h2>
          <div className="flex gap-3">
            <button className="w-10 h-10 bg-light-gray flex items-center justify-center hover:bg-primary transition-colors"><ChevronLeft size={20} /></button>
            <button className="w-10 h-10 bg-light-gray flex items-center justify-center hover:bg-primary transition-colors"><ChevronRight size={20} /></button>
          </div>
        </div>

        <motion.div {...staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Hamburguesa Clásica de Res', desc: 'Jugosa carne a la parrilla, lechuga fresca, tomate, salsa de la casa.', price: 'S/ 18.00', img: '/bestseller_classic_1791395695619.webp' },
            { name: 'Hamburguesa BBQ con Tocino', desc: 'Salsa BBQ ahumada, tocino crujiente, queso cheddar.', price: 'S/ 24.00', img: '/hero_burger.webp' },
            { name: 'Hamburguesa de Pollo Picante', desc: 'Pollo picante crujiente, mayonesa picante, ensalada fresca.', price: 'S/ 22.00', img: '/single_burger.webp', tag: 'Más Popular' },
            { name: 'Papas Peri Peri', desc: 'Papas crujientes con condimento peri peri.', price: 'S/ 12.00', img: '/cat_fries_1791395333907.webp' },
          ].map((item, index) => (
            <motion.div {...staggerItem} className="bg-white overflow-hidden shadow-sm hover:-translate-y-1 transition-transform duration-300" key={index}>
              <div className="relative h-[200px] bg-light-gray">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                {item.tag && <span className="absolute top-3 right-3 bg-red text-white text-[10px] font-bold py-1 px-2 uppercase">{item.tag}</span>}
              </div>
              <div className="p-5">
                <h3 className="text-lg mb-2">{item.name}</h3>
                <p className="text-gray text-[13px] mb-4 h-10">{item.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-extrabold">{item.price}</span>
                  <button className="bg-primary text-dark py-1.5 px-4 font-bold text-[13px]">Agregar +</button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Promo Banners */}
      <motion.section {...fadeInUp} className="py-20 w-full max-w-[96%] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-dark text-white p-8 md:p-10 relative overflow-hidden flex items-center min-h-[300px]">
            <div className="relative z-10 w-[60%] md:max-w-[50%]">
              <h2 className="text-3xl md:text-[42px] leading-tight md:leading-none mb-3 uppercase font-black">HAZLO<br/><span className="text-primary">COMBO</span></h2>
              <p className="text-sm opacity-90">Hamburguesa + Papas + Bebida<br/>= ¡Un Tú Más Feliz!</p>
              <button className="mt-4 py-3 px-6 font-semibold text-[15px] bg-primary text-dark hover:bg-primary-hover transition-colors">Explorar Combos →</button>
            </div>
            <img src="/combo_meal.webp" alt="Combo" className="absolute -right-[15%] md:-right-[5%] top-1/2 -translate-y-1/2 w-[70%] md:w-[60%] h-[120%] object-cover z-0 opacity-60 md:opacity-100" />
          </div>
          <div className="bg-[#fdf2e9] text-dark p-8 md:p-10 relative overflow-hidden flex items-center min-h-[300px]">
            <div className="relative z-10 w-[60%] md:max-w-[50%]">
              <h2 className="text-3xl md:text-[42px] leading-tight md:leading-none mb-3 uppercase font-black">FINALES<br/>DULCES</h2>
              <p className="text-sm opacity-90">Porque toda gran comida<br/>merece un final más dulce.</p>
              <button className="mt-4 py-3 px-6 font-semibold text-[15px] border-2 border-dark text-dark hover:bg-dark hover:text-white transition-colors">Ver Postres →</button>
            </div>
            <img src="/dessert.webp" alt="Dessert" className="absolute -right-[10%] md:-right-[5%] top-1/2 -translate-y-1/2 w-[60%] md:w-[50%] h-[150%] object-cover z-0 opacity-70 md:opacity-100" />
            <div className="hidden md:block absolute left-[45%] top-8 font-cursive text-xl -rotate-12 text-center leading-tight z-10">La felicidad<br/>viene en<br/>cucharadas</div>
          </div>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section {...fadeInUp} className="py-10 border-b border-border-color w-full max-w-[96%] mx-auto px-5">
        <motion.div {...staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <motion.div {...staggerItem} className="flex flex-col items-center">
            <div className="text-primary mb-3"><Flame size={36} strokeWidth={1.5} /></div>
            <h3 className="text-base mb-1 font-semibold">Recién Hechas</h3>
            <p className="text-[13px] text-gray">Preparadas al momento, siempre.</p>
          </motion.div>
          <motion.div {...staggerItem} className="flex flex-col items-center">
            <div className="text-green-600 mb-3"><Leaf size={36} strokeWidth={1.5} /></div>
            <h3 className="text-base mb-1 font-semibold">Ingredientes de Calidad</h3>
            <p className="text-[13px] text-gray">Solo lo mejor, siempre.</p>
          </motion.div>
          <motion.div {...staggerItem} className="flex flex-col items-center">
            <div className="text-primary mb-3"><Users size={36} strokeWidth={1.5} /></div>
            <h3 className="text-base mb-1 font-semibold">Gran Ambiente</h3>
            <p className="text-[13px] text-gray">Un lugar para pasar el rato y disfrutar.</p>
          </motion.div>
          <motion.div {...staggerItem} className="flex flex-col items-center">
            <div className="text-primary mb-3"><Utensils size={36} strokeWidth={1.5} /></div>
            <h3 className="text-base mb-1 font-semibold">Comida para Todos</h3>
            <p className="text-[13px] text-gray">Vegano, carne y más.</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Story */}
      <motion.section {...fadeInUp} className="py-20 w-full max-w-[96%] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative overflow-hidden h-[500px]">
            <img src="/restaurant_interior.webp" alt="Restaurant Interior" className="w-full h-full object-cover" />
          </div>
          <div className="relative">
            <span className="text-red font-bold text-sm uppercase tracking-wider mb-2 block">NUESTRA HISTORIA</span>
            <h2 className="text-4xl font-extrabold capitalize mb-10">Más Que<br/>Solo Hamburguesas</h2>
            <p className="text-gray text-base pr-10 lg:pr-48">Comenzamos Burger Bros con una simple creencia: la buena comida une a las personas. Desde nuestra cocina hasta tu mesa, estamos aquí para hacer que cada bocado cuente.</p>
            <button className="mt-6 py-3 px-6 font-semibold text-[15px] bg-primary text-dark hover:bg-primary-hover transition-colors">Nuestra Historia →</button>
            <div className="hidden lg:block absolute right-0 top-1/2 translate-y-4 lg:right-10 font-cursive text-2xl text-center leading-tight -rotate-12 opacity-80">
              Mismas<br/>Hamburguesas<br/>Sonrisas<br/>Más Grandes<br/>🍔
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section {...fadeInUp} className="py-20 w-full max-w-[96%] mx-auto px-5">
        <span className="text-red font-bold text-sm uppercase tracking-wider mb-2 block">GENTE REAL. HAMBURGUESAS REALES.</span>
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-4xl font-extrabold capitalize">Lo que dicen nuestros clientes</h2>
          <div className="flex gap-3">
            <button className="w-10 h-10 bg-light-gray flex items-center justify-center hover:bg-primary transition-colors"><ChevronLeft size={20} /></button>
            <button className="w-10 h-10 bg-light-gray flex items-center justify-center hover:bg-primary transition-colors"><ChevronRight size={20} /></button>
          </div>
        </div>

        <motion.div {...staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Aarav Mehta', text: '"¡Las mejores hamburguesas de la ciudad! Ingredientes frescos y un sabor increíble. ¡Muy recomendables!"', rating: 5, img: 'https://randomuser.me/api/portraits/men/32.jpg' },
            { name: 'Sneha Kapoor', text: '"¡Las papas peri peri cambian las reglas del juego! Excelente comida y aún mejores vibras."', rating: 5, img: 'https://randomuser.me/api/portraits/women/44.jpg' },
            { name: 'Rohit Verma', text: '"¡Hamburguesas increíbles, personal amable y un lugar genial para pasar el rato!"', rating: 5, img: 'https://randomuser.me/api/portraits/men/46.jpg' },
          ].map((item, index) => (
            <motion.div {...staggerItem} className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow" key={index}>
              <p className="text-[15px] text-dark-gray mb-6 italic">{item.text}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img src={item.img} alt={item.name} className="w-10 h-10 object-cover rounded-full" />
                  <span className="font-semibold text-sm">{item.name}</span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(item.rating)].map((_, i) => <Star key={i} size={16} fill="#f5b041" color="#f5b041" />)}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Bottom Section (CTA + Footer) */}
      <div className="bg-dark w-full text-white mt-20">
        <div className="w-full max-w-[96%] mx-auto px-5">
          {/* CTA */}
          <div className="py-16 px-6 lg:px-32 flex flex-col lg:flex-row justify-between items-center relative overflow-hidden text-center lg:text-left gap-6 border-b border-[#333]">
            {/* Abstract Background Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
                <path d="M0,50 C300,150 700,0 1000,100" fill="none" stroke="#f5b041" strokeWidth="1" opacity="0.5" />
                <path d="M0,80 C350,180 650,20 1000,130" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.3" />
                <path d="M-100,150 C200,250 800,-50 1100,50" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.1" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2">Obtén Ofertas Exclusivas</h2>
              <p className="text-[#aaaaaa]">Únete a nuestra comunidad y nunca te pierdas una oferta deliciosa.</p>
            </div>
            <div className="relative z-10 flex w-full lg:w-auto">
              <button className="w-full lg:w-auto py-4 px-10 font-bold text-lg bg-primary text-dark hover:bg-primary-hover transition-colors whitespace-nowrap shadow-lg">Pedir en línea →</button>
            </div>
          </div>

          {/* Footer */}
          <footer className="pt-16 pb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-[28px]">🍔</div>
                  <div className="flex flex-col font-black leading-none text-lg tracking-tight">
                    <span>BURGER</span>
                    <span>BROS</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold mb-5">Enlaces Rápidos</h3>
                <ul className="flex flex-col gap-3 text-sm text-[#aaaaaa]">
                  <li><a href="#" className="hover:text-primary transition-colors">Inicio</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Menú</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Sobre Nosotros</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold mb-5">Soporte</h3>
                <ul className="flex flex-col gap-3 text-sm text-[#aaaaaa]">
                  <li><a href="#" className="hover:text-primary transition-colors">Contáctanos</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Preguntas Frecuentes</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold mb-5">Visítanos</h3>
                <p className="text-sm text-[#aaaaaa]">123 Burger Lane, Foodville</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
