interface UsuarioLogin {
    id: number,
    username: string,
    password: string
}

const usuarioParaLogin: UsuarioLogin = {
    id: 1,
    username: 'higueraf',
    password: '12345',
}
function login(usuario: UsuarioLogin): void{
    if (usuario.password=='12345' && usuario.username=='higueraf'){
        console.log(`usuario ${usuario.username} exitosamente autenticado`);
        console.log('usuario',  usuario.username, 'exitosamente autenticado');
        console.log('usuario ' +  usuario.username + ' exitosamente autenticado');
    } else {
        console.log('acceso denegado')
    }

}
login(usuarioParaLogin);