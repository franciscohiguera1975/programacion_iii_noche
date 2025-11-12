class Usuario{
    private password: string ='12345';
    public username: string;
    constructor(username: string){
        this.username=username;
        
    }
    autenticar(password: string): boolean{
        return password==this.password;
    }
}
const user = new Usuario('higueraf');
const autenticacion = user.autenticar('12345');
if (autenticacion){
    console.log('usuario exitosamente autenticado');
} else{
    console.log('acceso denegado');
}
