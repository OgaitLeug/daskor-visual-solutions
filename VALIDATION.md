# Verificação da V1

- Lint: passou, sem warnings.
- TypeScript: passou.
- Build estático Next.js: passou; Home, Projetos, Contacto, 404, favicon, robots e sitemap gerados.
- Home, Projetos e Contacto: ausência de overflow horizontal nas larguras efetivas de 360, 390, 430, 768, 1024, 1440 e 1920 px, medidas no navegador.
- Revisão visual do Hero em mobile e desktop e do menu fullscreen.
- Menu: abre; Escape fecha; foco regressa ao botão; scroll do body restaurado; navegação para Contacto confirmada.
- Mini-briefing: abre; apenas Nome, Email e Mensagem são obrigatórios.
- Contactos: email, telefone e WhatsApp confirmados pelo utilizador; mensagem e número centralizados.
- Fotografias: inspeção visual, proporções originais preservadas, WebP, lazy loading e dimensões explícitas.
- Consola: corrigidos erro de formato do favicon e aviso de smooth scroll. O histórico do navegador conserva esses eventos anteriores. Houve também uma falha temporária de ligação à pré-visualização, recuperada com resposta HTTP 200.
- Reduced motion: implementação revista em CSS e no listener do Hero; não foi possível emular a preferência do sistema pela API de navegador disponível. Não declarar teste real desta preferência como concluído.
- Não foi enviado email nem mensagem WhatsApp durante os testes.

Não foi realizada auditoria formal WCAG nem medição Lighthouse. Não se apresentam pontuações ou resultados comerciais inventados.
