import uuid from 'react-uuid';
import { Modulo } from '../Modulo';

export class ClassModulo{
    _crearModulo(){
        return <Modulo id={uuid()} />
    }
}