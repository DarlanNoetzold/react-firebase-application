import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import RepsContext from "./RepsContext";
import CampoEntrada from "../../comuns/CampoEntrada";
import CampoSelect from "../../comuns/CampoSelect";
import CampoEntradaDescrição from "../../comuns/CampoEntradaDesc";
import Dialogo from "../../comuns/Dialogo";
import { MenuItem } from "@mui/material";

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta, abreDialogo, setAbreDialogo } =
        useContext(RepsContext);

    return (
        <>
            <Dialogo id="modalEdicao" titulo="Organização"
                open={abreDialogo} setOpen={setAbreDialogo}
                acaoCadastrar={acaoCadastrar} idform="formulario"
                maxWidth="sm">
                <Alerta alerta={alerta} />
                <CampoEntrada id="txtID" label="ID"
                    tipo="text" name="id" value={objeto.id}
                    onchange={handleChange} requerido={false}
                    readonly={true} />
                <CampoEntrada id="txtTitulo" label="Título"
                    tipo="text" name="titulo" value={objeto.titulo}
                    onchange={handleChange} requerido={true}
                    readonly={false} maxlength={50}
                    msgvalido="Titulo OK"
                    msginvalido="Informe o título" />
                <CampoEntradaDescrição id="txtDescrição" label="Descrição"
                    rows={5}
                    tipo="text" name="desc"
                    value={objeto.desc}
                    onchange={handleChange} requerido={true}
                    readonly={false} maxlength={100}
                    msgvalido="Descrição OK"
                    msginvalido="Informe o desc" />
                <CampoEntrada id="txtUrl" label="URL"
                    tipo="text" name="url"
                    value={objeto.url}
                    onchange={handleChange} requerido={true}
                    readonly={false} maxlength={100}
                    msgvalido="URL OK"
                    msginvalido="Informe a URL" />
                <CampoSelect
                    id="selectTipo" label="Tipo"
                    idLabel="labelTipo"
                    tipo="text" name="tipo" value={objeto.tipo}
                    onchange={handleChange} requerido={false}
                    msgvalido="Tipo OK"
                    msginvalido="Informe o Tipo">                    
                    <MenuItem value='Projeto'>Projeto</MenuItem>
                    <MenuItem value='Repositório'>Repositório</MenuItem>                    
                </CampoSelect>
            </Dialogo>
        </>
    )

}

export default Form;