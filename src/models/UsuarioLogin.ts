interface UsuarioLogin{
    id: number;
    nome: string
    usuario: string
    cpf: string
    senha: string
    token?: string | null
}

export default UsuarioLogin