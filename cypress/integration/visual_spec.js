const pagesArray = [
    'Edilizia',
    'Ferramenta',
    'Sala mostra',
    ['Bagno', 'Sala mostra'],
    ['Cabine e piatti doccia', ['Sala mostra', 'Bagno']],
    ['Vasche da Bagno', ['Sala mostra', 'Bagno']],
    ['Mobili Bagno e Sanitari', ['Sala mostra', 'Bagno']],
    ['Accessori Bagno', ['Sala mostra', 'Bagno']],
    ['Mattonelle', 'Sala mostra'],
    ['Pavimenti', ['Sala mostra', 'Mattonelle']],
    ['Rivestimenti', ['Sala mostra', 'Mattonelle']],
    ['Esterni', ['Sala mostra', 'Mattonelle']],
    ['Riscaldamento', 'Sala mostra'],
    ['Stufe', ['Sala mostra', 'Riscaldamento']],
    ['Camini', ['Sala mostra', 'Riscaldamento']],
    ['Caldaie', ['Sala mostra', 'Riscaldamento']],
    ['Offerte e Prezzi Pellet', ['Sala mostra', 'Riscaldamento']],
    'Outlet',
    'Dove siamo',
    ['Diecimo', 'Dove siamo'],
    ['Fornaci di Barga', 'Dove siamo'],
    ['Lucca', 'Dove siamo'],
    'Professionisti',
    'Gli speciali',
    'Blog',
    'Appuntamento Sala Mostra',
    'Appuntamento Riscaldamento',
    'Professionisti Edilizia, Sala Mostra, Riscaldamento',
    'Appuntamento Rappresentante',
    'Negozio',
    'Privacy e Cookie Policy',
]

describe("Visual testing", () => {
    pagesArray.forEach((pageConfig) => {
        if (Array.isArray(pageConfig)) {
            const [pageName, subPage] = pageConfig;

            it('Loads page: ' + pageName, () => {
                cy.visualTestPage({ pageName, subPage });
            });
        } else {
            it('Loads page: ' + pageConfig, () => {
                cy.visualTestPage({ pageName: pageConfig });
            });
        }
      })
});