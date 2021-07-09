/**
 * DOMINIO PARA DESARROLLO
 */
const DOMINIO_PRO = "http://cipjunin.sytes.net/WebCipJunin/";

/**
 * DOMINIO PARA PRUEBAS
 */
const DOMINIO_PRU = "http://192.168.1.15:8080/WebCipJunin/";

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

export const DOMINIO = DOMINIO_PRO;

export const LOGIN_PERSONA = DOMINIO + "app/api/login" + EXT;

export const INGRESOS_PERSONA = DOMINIO + "app/api/ingresos" + EXT;

export const INFORMACION_PERSONA = DOMINIO + "app/api/informacion" + EXT;

export const PERFIL_PERSONA = DOMINIO + "app/api/perfil" + EXT;

export const PAGOS_CUOTAS = DOMINIO + "app/api/cuotas" + EXT;

export const REGISTRAR_PAGO = DOMINIO + "app/api/culqi/payment" + EXT;

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
  PERFIL_PERSONA,
  PAGOS_CUOTAS,
  REGISTRAR_PAGO,
  DOMINIO
}