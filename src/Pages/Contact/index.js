import FormContact from "../../components/form/FormContact";

const Contact = () =>{
    return(
        <section id='FormScroll' className='py-10 p-4 bg-gray-100'>
            <div className=' mb-1 max-w-3xl mx-auto'>
                <h2 className='text-4xl font-bold sm:text-5xl text-center mb-2'>Contacto</h2>
                <p className='text-center text-lg my-2'>¿Necesitas asesoria? </p>
            </div>
            <FormContact/>
        </section>
    )

}

export default Contact;