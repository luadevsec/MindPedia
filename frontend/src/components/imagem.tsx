import { CSSProperties } from "react"

interface imgProps {
    style : CSSProperties | null
    name : string
    id : string
}

const getImage = (name : string) => {

    const local : any =  /*função de checagem se arquivo existe*/ (false) || 'logo'
    const path = (nice : string) => `src/assets/${nice}.jpeg`
    
    return path(local)
}

const Imagem = ({style ,name, id} : imgProps) => {

    style = style || {height: '250px'}

    return (
        <img style = {style} src={getImage(id)} alt={`fotinha de ${name}`} />
    )
}

export default Imagem