import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({ meta: [
    { title: "Nobre Club — Barbearias extraordinárias" },
    { name: "description", content: "Descubra barbearias premium e agende sua próxima experiência." },
  ] }),
});

const shops = [
  { id: 1, name: "The Gentleman", area: "Pocitos", rating: "4.9", reviews: 248, price: "$U 850", type: "Clássica", tag: "MAIS RESERVADA", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85", detail: "Tradição, precisão e uma experiência feita para você." },
  { id: 2, name: "Black Oak Barber", area: "Punta Carretas", rating: "5.0", reviews: 186, price: "$U 1.100", type: "Contemporânea", tag: "EXPERIÊNCIA PREMIUM", image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85", detail: "Design contemporâneo e atenção a cada detalhe." },
  { id: 3, name: "Casa Barba", area: "Carrasco", rating: "4.8", reviews: 132, price: "$U 950", type: "Clássica", tag: "AMBIENTE EXCLUSIVO", image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=85", detail: "Um refúgio masculino para cuidar do seu estilo." },
  { id: 4, name: "Distrito 01", area: "Cordón", rating: "4.9", reviews: 97, price: "$U 750", type: "Urbana", tag: "NOVO NO CLUBE", image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=900&q=85", detail: "Atitude urbana, técnica apurada e personalidade." },
];

function Index() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Todas");
  const [selected, setSelected] = useState<(typeof shops)[number] | null>(null);
  const [sent, setSent] = useState(false);
  const [menu, setMenu] = useState(false);
  const results = useMemo(() => shops.filter(s => (filter === "Todas" || s.type === filter) && (s.name + s.area).toLowerCase().includes(search.toLowerCase())), [filter, search]);

  return <main className="nobre">
    <div className="announcement">O SEU ESTILO MERECE UM LUGAR À ALTURA · BEM-VINDO AO NOBRE CLUB</div>
    <header className="nav"><a className="brand" href="#"><span className="brand-mark">✂</span><span>NOBRE<small>BARBER CLUB</small></span></a><button className="mobile-menu" onClick={() => setMenu(!menu)} aria-label="Menu">☰</button><nav className={menu ? "nav-links open" : "nav-links"}><a href="#descobrir" onClick={()=>setMenu(false)}>Descobrir</a><a href="#experiencia" onClick={()=>setMenu(false)}>A experiência</a><a href="#parceiros" onClick={()=>setMenu(false)}>Para barbearias</a></nav><a className="nav-cta" href="#descobrir">ENCONTRAR BARBEARIA ↗</a></header>

    <section className="hero"><div className="hero-shade"/><div className="hero-content"><div className="eyebrow"><i/> CURADORIA DE BARBEARIAS</div><h1>O corte certo.<br/><em>A experiência</em><br/>que você merece.</h1><p>Descubra espaços extraordinários, profissionais de excelência e transforme o seu próximo corte em um ritual.</p><div className="hero-actions"><a className="gold-btn" href="#descobrir">ENCONTRAR MINHA BARBEARIA ↗</a><a className="text-btn" href="#experiencia">CONHEÇA O CLUBE ↓</a></div><div className="stats"><div><b>+40</b><small>ESPAÇOS SELECIONADOS</small></div><div><b>4.9/5</b><small>AVALIAÇÃO MÉDIA</small></div><div><b>100%</b><small>FOCO NA EXPERIÊNCIA</small></div></div></div><span className="hero-location">MONTEVIDÉU · URUGUAI</span></section>

    <section className="discover section" id="descobrir"><div className="section-head"><div><div className="eyebrow">A SELEÇÃO NOBRE</div><h2>Lugares que fazem <em>a diferença.</em></h2><p>Uma seleção criteriosa de barbearias onde técnica, ambiente e atendimento caminham juntos.</p></div><div className="location">⌖ &nbsp; Montevidéu, Uruguai</div></div><div className="filters"><div className="chips">{["Todas","Clássica","Contemporânea","Urbana"].map(x=><button key={x} className={filter===x?"active":""} onClick={()=>setFilter(x)}>{x}</button>)}</div><label className="search">⌕ <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Buscar por nome ou bairro..."/></label></div><div className="result-count">{results.length} ESPAÇOS ENCONTRADOS</div><div className="shop-grid">{results.map(s=><article className="shop-card" key={s.id}><div className="shop-photo"><img src={s.image} alt={s.name}/><span className="shop-tag">{s.tag}</span><span className="rating">★ {s.rating}</span></div><div className="shop-info"><div className="shop-title"><h3>{s.name}</h3><span>{s.type}</span></div><p className="area">⌖ &nbsp;{s.area}, Montevidéu</p><p className="detail">{s.detail}</p><div className="shop-meta"><div><small>A PARTIR DE</small><b>{s.price}</b></div><span>{s.reviews} avaliações</span></div><button className="outline-btn" onClick={()=>{setSelected(s);setSent(false)}}>AGENDAR HORÁRIO <span>↗</span></button></div></article>)}</div>{results.length===0&&<p className="empty">Nenhuma barbearia encontrada. Tente outro termo.</p>}</section>

    <section className="experience" id="experiencia"><div className="experience-image"><img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=85" alt="Interior de barbearia sofisticada"/><div className="image-note">✂<b>O ritual importa.</b><small>MUITO ALÉM DO CORTE</small></div></div><div className="experience-copy"><div className="eyebrow">MAIS QUE UM AGENDAMENTO</div><h2>Seu tempo. Seu estilo.<br/><em>Seu lugar.</em></h2><p>Acreditamos que cuidar de si não é um detalhe na agenda. É um momento que merece atenção, conforto e profissionais que entendem o seu estilo.</p><div className="benefits"><div><span>✧</span><div><b>Curadoria de qualidade</b><small>Espaços selecionados pelo cuidado em cada detalhe.</small></div></div><div><span>◷</span><div><b>Agendamento simples</b><small>Encontre seu espaço e solicite seu horário em poucos passos.</small></div></div></div><a className="gold-btn" href="#descobrir">DESCUBRA SEU PRÓXIMO LUGAR ↗</a></div></section>

    <section className="partners section" id="parceiros"><div className="eyebrow">PARA QUEM ENTREGA EXCELÊNCIA</div><h2>Sua barbearia merece estar entre<br/><em>as melhores.</em></h2><p>Faça parte de uma curadoria que conecta espaços de qualidade a clientes que valorizam cada detalhe.</p><a className="gold-btn" href="mailto:parcerias@nobreclub.com">QUERO SER PARCEIRO ↗</a></section>
    <footer><a className="brand" href="#"><span className="brand-mark">✂</span><span>NOBRE<small>BARBER CLUB</small></span></a><p>© 2026 Nobre Club. Estilo é uma escolha diária.</p><a href="#descobrir">EXPLORAR ↑</a></footer>

    {selected&&<div className="modal-backdrop" onClick={()=>setSelected(null)}><div className="booking-modal" role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setSelected(null)}>×</button>{sent?<div className="success"><div>✓</div><h2>Pedido recebido!</h2><p>Sua solicitação para {selected.name} foi registrada nesta demonstração. A confirmação real depende do contato da barbearia.</p><button className="gold-btn" onClick={()=>setSelected(null)}>FECHAR</button></div>:<><div className="eyebrow">SEU PRÓXIMO RITUAL</div><h2>Agende sua experiência</h2><p className="modal-sub">{selected.name} · {selected.area}</p><form onSubmit={e=>{e.preventDefault();setSent(true)}}><label>SEU NOME<input required placeholder="Como podemos chamar você?"/></label><label>WHATSAPP<input required placeholder="+598 00 000 000"/></label><div className="form-row"><label>DATA<input type="date" required min={new Date().toISOString().slice(0,10)}/></label><label>HORÁRIO<select><option>09:00</option><option>10:30</option><option>12:00</option><option>14:00</option><option>15:30</option><option>17:00</option></select></label></div><div className="estimate"><span>Valor inicial estimado</span><b>{selected.price}</b></div><p className="disclaimer">Demonstração: o horário ainda precisa ser confirmado pela barbearia.</p><button className="gold-btn submit-btn">SOLICITAR AGENDAMENTO ↗</button></form></>}</div></div>}
  </main>;
}
