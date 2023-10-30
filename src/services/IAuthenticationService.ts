export interface IAuthenticationService<TypeLogin, TypeUser> {
    login(payload: TypeLogin): Promise<TypeUser>
}