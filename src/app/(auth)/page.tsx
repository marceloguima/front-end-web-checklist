import Link from "next/link";
import Image from "next/image";

export default function Inicio() {
  return (
    <main style={{ minHeight: "100vh", overflowX: "hidden", background: "#f0f4ff", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 48px", height: 64,
        background: "rgba(255,255,255,0.96)", backdropFilter: "blur(10px)",
        borderBottom: "1px solid #dde6f5",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, background: "#1565C0", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path d="M3 5h11M3 8.5h7M3 12h9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span style={{ fontWeight: 800, fontSize: 17, color: "#1565C0", letterSpacing: "-0.3px" }}>CheckAuto</span>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <Link href="/Login" style={{ fontSize: 14, color: "#444", textDecoration: "none", padding: "8px 18px", border: "1px solid #cdd8ee", borderRadius: 7 }}>Entrar</Link>
          <Link href="/Cadastro" style={{ fontSize: 14, fontWeight: 700, color: "white", textDecoration: "none", padding: "8px 22px", borderRadius: 7, background: "#1565C0" }}>Começar grátis</Link>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        paddingTop: 64,
        background: "linear-gradient(160deg, #1565C0 0%, #1976D2 60%, #1E88E5 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -120, right: -120, width: 480, height: 480, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
        <div style={{ position: "absolute", bottom: 40, left: -60, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "72px 48px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "flex-end" }}>

          {/* texto */}
          <div style={{ paddingBottom: 80 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.15)", borderRadius: 99, padding: "6px 16px", marginBottom: 28 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4FC3F7" }} />
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.92)", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase" as const }}>Proteção total para sua oficina</span>
            </div>
            <h1 style={{ fontSize: 44, fontWeight: 800, color: "white", lineHeight: 1.15, marginBottom: 20, letterSpacing: "-1px" }}>
              Checklists que{" "}
              <span style={{ color: "#4FC3F7" }}>eliminam conflitos</span>{" "}
              com seus clientes
            </h1>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.78)", lineHeight: 1.78, marginBottom: 36, maxWidth: 460 }}>
              O mecânico registra modelo, placa, fotos do painel e danos estéticos direto pelo app.
              Você acompanha tudo em tempo real no painel web. Sem discussão na hora da entrega.
            </p>
            <div style={{ display: "flex", gap: 12, marginBottom: 52 }}>
              <Link href="/Cadastro" style={{ background: "white", color: "#1565C0", fontWeight: 700, padding: "13px 32px", borderRadius: 8, textDecoration: "none", fontSize: 15 }}>
                Criar conta gratuita
              </Link>
              <Link href="/Login" style={{ background: "rgba(255,255,255,0.12)", color: "white", fontWeight: 600, padding: "13px 26px", borderRadius: 8, textDecoration: "none", fontSize: 15, border: "1px solid rgba(255,255,255,0.25)" }}>
                Já tenho conta
              </Link>
            </div>
            <div style={{ display: "flex", gap: 40 }}>
              {[["500+", "oficinas ativas"], ["3 min", "por checklist"], ["0", "conflitos com docs"]].map(([v, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 26, fontWeight: 800, color: "white" }}>{v}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* screenshots do app empilhados */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: -20, position: "relative", height: 420 }}>
            {/* tela de trás - checklist motivo */}
            <div style={{
              position: "absolute", left: 0, bottom: 0,
              width: 175, borderRadius: 20, overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
              border: "4px solid rgba(255,255,255,0.3)",
              transform: "rotate(-6deg) translateX(10px)",
            }}>
              <Image
                src="/uploads/motivo.png"
                alt="App checklist motivo da visita"
                width={175}
                height={360}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            {/* tela central - dados do veículo */}
            <div style={{
              position: "absolute", left: "50%", bottom: 0,
              transform: "translateX(-50%)",
              width: 200, borderRadius: 22, overflow: "hidden",
              boxShadow: "0 28px 70px rgba(0,0,0,0.4)",
              border: "4px solid rgba(255,255,255,0.5)",
              zIndex: 10,
            }}>
              <Image
                src="/uploads/dados-veiculo.png"
                alt="App dados do veículo"
                width={200}
                height={410}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            {/* tela da direita - câmera/danos */}
            <div style={{
              position: "absolute", right: 0, bottom: 0,
              width: 175, borderRadius: 20, overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
              border: "4px solid rgba(255,255,255,0.3)",
              transform: "rotate(6deg) translateX(-10px)",
            }}>
              <Image
                src="/uploads/fotos.png"
                alt="App fotos danos"
                width={175}
                height={360}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section style={{ padding: "96px 48px", maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#1565C0", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 12 }}>Como funciona</p>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: "#1a1a2e", letterSpacing: "-0.5px", marginBottom: 14 }}>Dois lados do mesmo sistema</h2>
          <p style={{ fontSize: 16, color: "#666", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            O app fica na mão de quem atende. O painel fica na sua tela. Tudo conectado em tempo real.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>

          {/* CARD APP MOBILE */}
          <div style={{ background: "white", borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 24px rgba(21,101,192,0.10)", border: "1px solid #dde6f5" }}>
            <div style={{ background: "linear-gradient(135deg, #1565C0, #1E88E5)", padding: "28px 32px 20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <div style={{ width: 32, height: 32, background: "rgba(255,255,255,0.2)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="1" width="10" height="14" rx="2" stroke="white" strokeWidth="1.5"/><path d="M6 4h4M6 7h4M6 10h2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
                <span style={{ color: "white", fontWeight: 700, fontSize: 15 }}>App Mobile — Mecânico</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 13, lineHeight: 1.6 }}>
                Disponível para Android e iOS. O mecânico preenche o checklist completo em menos de 3 minutos.
              </p>
            </div>

            {/* screenshot real do app */}
            <div style={{ padding: "28px 32px", display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0, width: 130, borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 28px rgba(0,0,0,0.18)", border: "3px solid #e8eef8" }}>
                <Image
                  src="/uploads/dados-veiculo.png"
                  alt="Tela de dados do veículo"
                  width={130}
                  height={270}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 14 }}>
                  {[
                    { icon: "📋", title: "Dados do veículo", desc: "Modelo, placa e atendente responsável" },
                    { icon: "✅", title: "Motivo da visita", desc: "Checklist guiado: freio, suspensão, elétrica..." },
                    { icon: "📷", title: "Fotos do painel", desc: "Com ignição ligada e motor ligado" },
                    { icon: "🔍", title: "Danos estéticos", desc: "Riscos, amassados e parabrisas trincados" },
                  ].map(({ icon, title, desc }) => (
                    <div key={title} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ fontSize: 16, marginTop: 1 }}>{icon}</span>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: "#1a1a2e" }}>{title}</div>
                        <div style={{ fontSize: 12, color: "#888", lineHeight: 1.5 }}>{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CARD PAINEL WEB */}
          <div style={{ background: "white", borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 24px rgba(21,101,192,0.10)", border: "1px solid #dde6f5" }}>
            <div style={{ background: "linear-gradient(135deg, #0d47a1, #1565C0)", padding: "28px 32px 20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <div style={{ width: 32, height: 32, background: "rgba(255,255,255,0.2)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="3" width="14" height="10" rx="2" stroke="white" strokeWidth="1.5"/><path d="M5 13v2M11 13v2M3 15h10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
                <span style={{ color: "white", fontWeight: 700, fontSize: 15 }}>Painel Web — Gestor</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 13, lineHeight: 1.6 }}>
                Acesse pelo computador. Veja em tempo real tudo que está acontecendo na sua oficina.
              </p>
            </div>

            {/* screenshot real do painel */}
            <div style={{ padding: "20px 20px 0" }}>
              <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #e0e8f5", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
                <Image
                  src="/uploads/painel-principal.png"
                  alt="Painel web do gestor"
                  width={600}
                  height={340}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
            <div style={{ padding: "20px 28px 28px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[
                { label: "Entradas de hoje", color: "#29B6F6" },
                { label: "Total no pátio", color: "#EF5350" },
                { label: "Finalizados hoje", color: "#4CAF50" },
                { label: "Gestão de equipe", color: "#1565C0" },
              ].map(({ label, color }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: color, flexShrink: 0 }} />
                  <span style={{ fontSize: 12, color: "#555" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FLUXO PASSO A PASSO ── */}
      <section style={{ background: "white", padding: "96px 48px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#1565C0", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 12 }}>Passo a passo</p>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#1a1a2e", letterSpacing: "-0.5px" }}>Do app ao painel em segundos</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {[
              {
                step: "01",
                title: "Veículo chega na oficina",
                desc: "Mecânico abre o app e informa modelo, placa e atendente responsável.",
                img: "/uploads/dados-veiculo.jpg",
                imgAlt: "Tela de dados do veículo",
              },
              {
                step: "02",
                title: "Motivo da visita",
                desc: "Seleciona o serviço: revisão, troca de óleo, freio, suspensão e mais.",
                img: "/uploads/motivo.jpg",
                imgAlt: "Tela de checklist",
              },
              {
                step: "03",
                title: "Fotos e danos documentados",
                desc: "Fotografa o painel e qualquer dano estético já existente no veículo.",
                img: "/uploads/fotos.jpg",
                imgAlt: "Tela de fotos danos",
              },
              {
                step: "04",
                title: "Gestor acompanha tudo",
                desc: "Painel web atualiza em tempo real. Histórico completo de cada veículo.",
                img: "/uploads/equipe.png",
                imgAlt: "Painel web equipe",
              },
            ].map(({ step, title, desc, img, imgAlt }) => (
              <div key={step} style={{ display: "flex", flexDirection: "column" as const }}>
                <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #e8eef8", marginBottom: 16, boxShadow: "0 4px 16px rgba(21,101,192,0.08)" }}>
                  <Image
                    src={img}
                    alt={imgAlt}
                    width={260}
                    height={180}
                    style={{ width: "100%", height: 160, objectFit: "cover", objectPosition: "top", display: "block" }}
                  />
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#1565C0", color: "white", fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    {step}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#1a1a2e", marginBottom: 4 }}>{title}</div>
                    <div style={{ fontSize: 13, color: "#777", lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFÍCIOS ── */}
      <section style={{ padding: "96px 48px", maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#1565C0", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 12 }}>Por que usar</p>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#1a1a2e", letterSpacing: "-0.5px", marginBottom: 14, lineHeight: 1.2 }}>
              Sua oficina protegida.<br/>Seu cliente tranquilo.
            </h2>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.75, marginBottom: 40 }}>
              Com fotos datadas, dados do veículo e assinatura digital, não há espaço para disputa.
              Todo o histórico fica salvo e acessível quando precisar.
            </p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 20 }}>
              {[
                { title: "Fim das discussões na entrega", desc: "Dano que já existia? Está documentado com foto e data. Ponto final.", color: "#4CAF50" },
                { title: "Histórico completo de cada veículo", desc: "Todo serviço realizado, com fotos e observações, disponível a qualquer hora.", color: "#1565C0" },
                { title: "Gestão de equipe integrada", desc: "Cadastre mecânicos, alinhadores, pintores e acompanhe quem atendeu cada veículo.", color: "#29B6F6" },
                { title: "Controle em tempo real", desc: "Quantos veículos entraram hoje, estão no pátio e foram finalizados — na palma da mão.", color: "#EF5350" },
              ].map(({ title, desc, color }) => (
                <div key={title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: color, flexShrink: 0, marginTop: 5 }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#1a1a2e", marginBottom: 3 }}>{title}</div>
                    <div style={{ fontSize: 13, color: "#777", lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* screenshot painel equipe */}
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: 18, overflow: "hidden", boxShadow: "0 16px 48px rgba(21,101,192,0.18)", border: "1px solid #dde6f5" }}>
              <Image
                src="/uploads/equipe.png"
                alt="Painel de gestão de equipe"
                width={560}
                height={380}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ padding: "80px 48px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", background: "linear-gradient(135deg, #1565C0, #1E88E5)", borderRadius: 24, padding: "64px 48px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
          <p style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 16 }}>Comece hoje</p>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: "white", marginBottom: 16, letterSpacing: "-0.5px" }}>Proteja sua oficina agora</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.72)", marginBottom: 36, lineHeight: 1.7 }}>
            Configure em menos de 5 minutos. Sem taxa de adesão, sem contrato longo.
          </p>
          <Link href="/Cadastro" style={{ display: "inline-block", background: "white", color: "#1565C0", fontWeight: 700, padding: "14px 40px", borderRadius: 9, textDecoration: "none", fontSize: 15 }}>
            Criar minha conta gratuita
          </Link>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 16 }}>Sem cartão de crédito · Cancele quando quiser</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid #dde6f5", padding: "28px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, background: "#1565C0", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="13" height="13" viewBox="0 0 17 17" fill="none"><path d="M3 5h11M3 8.5h7M3 12h9" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
          <span style={{ fontWeight: 800, fontSize: 14, color: "#1565C0" }}>CheckAuto</span>
        </div>
        <p style={{ fontSize: 12, color: "#aaa" }}>© 2025 CheckAuto. Todos os direitos reservados.</p>
        <div style={{ display: "flex", gap: 24 }}>
          <Link href="/Login" style={{ fontSize: 12, color: "#888", textDecoration: "none" }}>Entrar</Link>
          <Link href="/Cadastro" style={{ fontSize: 12, color: "#888", textDecoration: "none" }}>Cadastro</Link>
        </div>
      </footer>

    </main>
  );
}