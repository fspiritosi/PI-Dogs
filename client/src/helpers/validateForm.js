export default function validate (dataForm) {

   
    const errors = {}

    if(!dataForm.name) {
        errors.name = "name cannot be empty, please complete it"
    }
    if(!dataForm.image){
        errors.image = "image cannot be empty, please complete it"
    }
    if(!dataForm.height){
        errors.height = "height cannot be empty, please complete it"
    }
    if(!dataForm.life_span){
        errors.life_span = "life span cannot be empty, please complete it"
    }
    if(!dataForm.weight || dataForm.weight.length < 1){
        errors.weight = "weight span cannot be empty, please complete it"
    }
    if(dataForm.weight.length < 2){
        errors.weight = "weight needs a maximum and a minimum, please fill in both"
    }
    if(!dataForm.temperament || dataForm.temperament.length < 1){
        errors.temperament = "Temperaments span cannot be empty, please complete it"
    }

    return errors
}