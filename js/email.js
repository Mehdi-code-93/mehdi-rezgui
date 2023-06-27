    // // ============= envoi d'email =============

    (function(){
        emailjs.init("8HyIHtL3RZ4BC2ELb");
    })();
    
    function sendEmail() {
        let params = {
            firstname: document.getElementById('firstname').value,
            email: document.getElementById('email').value,
            objet: document.getElementById('objet').value,
            message: document.getElementById('message').value
        }
    
        const serviceId = "service_km06dfr";
        const templateId = "template_8exp3e3";
    
        emailjs.send(serviceId, templateId, params)
        .then(res => {
            document.getElementById('firstname').value = "";
            document.getElementById('email').value = "";
            document.getElementById('objet').value = "";
            document.getElementById('message').value = "";
    
            console.log(res);
        })
        .catch(err => console.log(err))
    }













    // (function(){
    //     emailjs.init("8HyIHtL3RZ4BC2ELb");
    // })();
    
    // function sendEmail() {
    //     let params = {
    //         firstname: document.getElementById('firstname').value,
    //         lastname: document.getElementById('lastname').value,
    //         email: document.getElementById('email').value,
    //         phone: document.getElementById('phone').value,
    //         message: document.getElementById('message').value
    //     }
    
    //     const serviceId = "service_km06dfr";
    //     const templateId = "template_8exp3e3";
    
    //     emailjs.send(serviceId, templateId, params)
    //     .then(res => {
    //         document.getElementById('firstname').value = "";
    //         document.getElementById('lastname').value = "";
    //         document.getElementById('email').value = "";
    //         document.getElementById('phone').value = "";
    //         document.getElementById('message').value = "";
    
    //         console.log(res);
    //     })
    //     .catch(err => console.log(err))
    // }