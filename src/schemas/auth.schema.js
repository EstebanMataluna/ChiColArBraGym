import z from 'zod';

export const registerSchema = z.object({
    username:z.string({
        required_error: 'Se requiere un nombre de usuario.'
    }).min(4,{
        required_error: 'El nombre de usuario debe tener 4 caracteres como mínimo.'    
    }),
    email:z.string({
        required_error: 'Se requiere un E-mail.'
    }).email({
        required_error: 'El E-mail es inválido.'
    }), 
    password: z.string({
        required_error: 'Se requiere un Password'
    }).min(6,{
        required_error: 'El password debe tener 6 caracteres como mínimo.'
    }),

});

export const loginSchema = z.object ({
    email:z.string({
        required_error: 'Se requiere un E-mail.'
    }).email({
        required_error: 'El E-mail es inválido.'
    }), 
    password: z.string({
        required_error: 'Se requiere un Password'
    }).min(6,{
        required_error: 'El password debe tener 6 caracteres como mínimo.'
    }),    
});