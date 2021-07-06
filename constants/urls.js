/**
 * DOMINIO PARA DESARROLLO
 */
const DOMINIO_PRO = "http://cipjunin.sytes.net/WebCipJunin/app/";

/**
 * DOMINIO PARA PRUEBAS
 */
const DOMINIO_PRU = "http://192.168.0.107/WebCipJunin/app/";

/**
 * DOMINIO PARA DESARROLLO
 */
const DOMINIO_DEV = "http://192.168.0.107:5000/";

/**
 * EXTECIÓN PARA USO EN PRODUCCIÓN
 */

const EXT_PRO = ".php";

const EXT_DEV = "";

const EXT = EXT_PRO;

export const LOGIN_PERSONA = DOMINIO_PRO + "api/login" + EXT;

export const INGRESOS_PERSONA = DOMINIO_PRO + "api/ingresos" + EXT;

export const INFORMACION_PERSONA = DOMINIO_PRO + "api/informacion" + EXT;

export const PERFIL_PERSONA = DOMINIO_PRO + "api/perfil" + EXT;

export default {
  /**
  * 
  * @URL  LOGIN_PERSONA 
  * @POST metodo
  * @LOGIN_PERSONA para autentificar el ingreso al aplicativo movil 
  */
  LOGIN_PERSONA,
  /**
  * @URL INGRESOS_PERSONA para obtener la lista de comprobantes asociados a un ingeniero
  * @POST metodo 
  * @HEADER headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
  * @BODY body: JSON.stringify({
        "idDni": idDni,
      })
  */
  INGRESOS_PERSONA,
  /**
  * 
  * @URL INFORMACION_PERSONA para obtener su información detallada del ingeniero
  * @POST metodo
  * @HEADER  headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
  * @BODY body: JSON.stringify({
        'idDni':'46891092'
      })
  */
  INFORMACION_PERSONA,
  /**
  * 
  * @URL PERFIL_PERSONA para obtener su información detallada del ingeniero
  * @POST metodo
  * @HEADER  headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
  * @BODY body: JSON.stringify({
        'idDni':'46891092'
      })
  */
  PERFIL_PERSONA
}