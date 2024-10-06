const UserRepository =require('../repositories/userRepositories')

class UserService{

    async registerUser(datos){
        const {Id, usuario}=datos;

        const existingUserByDocument = await UserRepository.findByDocumentNumber(Id);
        if(existingUserByDocument){
            throw new Error('La identificación '+Id+ ' ya esta registrada');

        }

        const existingUserbyUsername =await UserRepository.findByUsername(usuario);
        if(existingUserbyUsername){
            throw new Error('El nombre de usuario ya existe');

        }
        return UserRepository.createUser(datos);
    }
}

module.exports = new UserService();