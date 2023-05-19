import emailjs from '@emailjs/browser'

const serviceID = import.meta.env.VITE_REACT_APP_SERVICE_ID
const templateID = import.meta.env.VITE_REACT_APP_TEMPLATE_ID
const publicKey = import.meta.env.VITE_REACT_APP_PUBLIC_KEY

const sendEmail = (email) => {

    const templateParams = {
        'user_email': email
    }

    emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then ((result) => {
            console.log(result.text)
        })
        .catch (error =>  {
            console.log(error)
        })
}

export default sendEmail