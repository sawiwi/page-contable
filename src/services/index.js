import axios from 'axios';

const FormContactServices  = {
    postForm: async (name, email, phone, message, meEmail)=> {   
    const response = await axios.post(
        `https://formsubmit.co/ajax/${meEmail}`,
        {
          Nombre: name,
          Correo: email,
          Telefono: phone,
          message: message,
          '_subject': 'De: Contacto / CYVM'
  
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );
      return response.data;
    },
}

export default FormContactServices;