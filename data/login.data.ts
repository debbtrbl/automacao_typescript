export interface cenariosLogin{
    perfil: string;
    email: string;
    senha: string;
    esperaSucesso: boolean;
    msgEscolhida?: string;
    urlEsperada: RegExp;
}

export const ctsLogin: cenariosLogin[] = [
    {
        perfil: 'Cliente',
        email: 'user@system.com',
        senha: 'UserPassword123',
        esperaSucesso: true,
        urlEsperada: /painel\.html/
    },

    {
        perfil: 'Admin',
        email: 'admin@system.com',
        senha: '',
        esperaSucesso: true,
        urlEsperada: /painel\.html/
    },

    {
        perfil: 'Lojista',
        email: 'lojista@system.com',
        senha: 'SellerPass123',
        esperaSucesso: true,
        urlEsperada: /painel\.html/
    },

    {
        perfil: 'Bloqueado',
        email: ' blocked@system.com',
        senha: 'Blocked123',
        esperaSucesso: false,
        urlEsperada: /login\.html/
    },

    {
        perfil: 'Usuário senha incorreta',
        email: 'user@system.com',
        senha: 'WrongPassword123',
        esperaSucesso: false,
        urlEsperada: /login\.html/
    },

]
