import React from "react";
import {Modal} from "react-bootstrap";

const Blog1Modal = ({
  showBlog1,
  handleCloseBlog1,
  handleShowBlog1,
  showBlog2,
  handleCloseBlog2,
  handleShowBlog2,
}) => {
  return (
    <>
      <Modal
        size="xl"
        show={showBlog1}
        onHide={handleCloseBlog1}
        // backdrop="static"
        keyboard={false}
        className="panel"
      >
        <Modal.Header closeButton>
          <h4 className="modal-body">
            <strong>CONVULSIONES EN PERROS: CAUSAS Y RECOMENDACIONES</strong>
          </h4>
        </Modal.Header>
        <Modal.Body className="m-4">
          <div class="modal-content">
            <div class="modal-body">
              <h3>
                <strong>CAUSAS DE LAS CONVULSIONES</strong>
              </h3>
              <h5>
                <strong>EPILEPSIA</strong>
              </h5>
              <p>
                Desde el primer momento en el que aparecen, las convulsiones,
                comúnmente, se relacionan con la epilepsia. Aunque suele ser una
                de las patologías más conocidas y extendidas, no hay que hacer
                diagnósticos precipitados sin una valoración veterinaria. Los
                primeros ataques epilépticos se dan en los canes desde los seis
                meses hasta los cinco años de edad. Hablamos de una enfermedad
                hereditaria que provoca perdida de la conciencia, postración,
                pedaleo, salivación, defecación, micción y -las ya
                nombradas-convulsiones.
              </p>
              <br />
              <h5>
                <strong>ENCEFALITIS O MENINGITIS</strong>
              </h5>
              <p>
                La inflamación del encéfalo o de la meninge pueden ser dos
                causas que impliquen la convulsión de tu perro. Suelen estar
                provocadas por una infección vírica como el moquillo canino, la
                erlichiosis o toxoplasmosis.
              </p>
              <br />
              <h5>
                <strong>ENFERMEDADES METABÓLICAS</strong>
              </h5>
              <p>
                Dichas patologías son variadas y provocan pérdidas en el
                metabolismo del can bastante importantes: hepatitis,
                hiperlipoproteinemia, hipertermia, hipocalcemia, etc.
              </p>
              <br />
              <h5>
                <strong>ACCIDENTES CARDIOVASCULARES</strong>
              </h5>
              <p>
                Con este tipo de anomalías, la cantidad de sangre que llega al
                cerebro no es la idónea, teniendo como consecuencia fallos
                cardiovasculares en los perros. Algunos ejemplos de este tipo de
                accidentes son las embolias y las hemorragias cerebrales.
              </p>
              <br />
              <h5>
                <strong>MALFORMACIONES CONGÉNITAS</strong>
              </h5>
              <p>
                Una de las más comunes es la hidrocefalia, un trastorno que
                consiste en el aumento anormal de la cantidad de líquido
                cefalorraquídeo en las cavidades del cerebro. Dicho líquido se
                encarga de eliminar los residuos producidos por el continuo
                funcionamiento del sistema nervioso. Es una patología común en
                las siguientes razas: yorkshire terrier, chihuahua, pomerania,
                poodle toy, boston terrier y maltés.
              </p>
              <br />
              <h5>
                <strong>TUMOR CEREBRAL</strong>
              </h5>
              <p>
                En el peor de los casos para nuestro fiel compañero, un tumor
                puede estar detrás de dichas convulsiones en perros. La
                aparición del tumor puede dañar la masa cerebral y provocar este
                tipo de comportamientos anómalos.
              </p>
              <br />
              <h5>
                <strong>INTOXICACIÓN POR CONSUMO DE SUSTANCIAS</strong>
              </h5>
              <p>
                Los componentes químicos de este tipo de sustancias dañan al
                cerebro de nuestra mascota. Anticongelantes para coches,
                plaguicidas tóxicos, desparasitantes externos, plomo, cianuro o
                metaldehído, entre otros, encabezan las sustancias perjudiciales
                para nuestra mascota.
              </p>
              <br />
              <h3>
                <strong>¿CÓMO ACTUAR ANTE UN ATAQUE DE CONVULSIÓN?</strong>
              </h3>
              <h5>
                <strong>
                  ¿QUÉ DEBO HACER SI MI PERRO TIENE UN ATAQUE DE CONVULSIÓN?
                </strong>
              </h5>
              <p>
                Mantener la calma es lo primero que debes hacer. En
                circunstancias límites de este tipo, pensaremos mucho mejor si
                mantenemos la mente tranquila y sin nervios. Una vez estemos
                calmados, tendremos que retirar cualquier objeto que se
                encuentre cerca de nuestro perro para que este no se lastime.
                Una vez haya pasado el ataque, es importante que desplacemos a
                nuestra mascota a un sitio fresco y ventilado, de lo contrario,
                su recuperación podría empeorar. Inmediatamente después, lo que
                deberás hacer es acercar a tu fiel compañero al veterinario más
                cercano. Con un diagnóstico profesional precioso, lograrás
                descubrir qué ha causado la convulsión al can. Los días, semanas
                y meses posteriores deberás administrar a tu perro la medicación
                pertinente que te haya recetado el veterinario. Es importante
                ser constante en este sentido. Si, aun así, los ataques
                continúan, será preciso llevarlo de nuevo al veterinario.
              </p>
              <br />
              <h5>
                <strong>¿QUÉ NO DEBES HACER?</strong>
              </h5>
              <p>
                En pleno ataque, un comportamiento habitual por parte de los
                dueños es el de intentar agarrar al can para que no se tambalee.
                Se trata de un error claro, puesto que -aparte de que la
                convulsión no se va a frenar- el perro no se encuentra
                consciente en ese momento y podría herir a la persona (a través
                de un mordisco o un arañazo). Tampoco se debe suministrar agua o
                alimentos al perro en plena convulsión. De ninguna de las
                maneras es conveniente colocar al can objetos que le
                proporcionen calor. Por lo tanto, se debe evitar arroparle con
                mantas, sabanas, ropa, etc. Por último, tampoco se debe
                administrar al perro medicamentos que no hayan sido recetados
                por el veterinario. ¡No hagas diagnósticos por tu cuenta!
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        size="xl"
        show={showBlog2}
        onHide={handleCloseBlog2}
        // backdrop="static"
        keyboard={false}
        className="panel"
      >
        <Modal.Header closeButton>
          <h4 className="modal-body">
            <strong>
              EL MOQUILLO EN PERROS: SÍNTOMAS, TRATAMIENTO Y CONTAGIO
            </strong>
          </h4>
        </Modal.Header>
        <Modal.Body className="m-4">
          <div class="modal-content">
            <div class="modal-body">
              <h4>
                <strong>¿QUÉ ES EL MOQUILLO EN PERROS?</strong>
              </h4>
              <p>
                El moquillo en los perros, también conocido como distemper o
                enfermedad de Carré, es un virus que afecta a los perros
                principalmente y es muy similar al sarampión de las personas. Es
                la primera causa de muerte de perros por enfermedad infecciosa.
                Esta enfermedad altamente contagiosa afecta al aparato
                respiratorio, al sistema digestivo y al sistema nervioso. La
                mejor medida preventiva frente al distemper canino es la
                vacunación. Los animales contagiados liberan el virus a través
                de las secreciones corporales y suelen contagiarse
                principalmente por la inhalación. Dado que los cachorros no
                suelen tener todavía desarrollado sus sistema inmunológico, son
                los más propensos al contagio. Por ello, es fundamental llevar
                un riguroso plan de vacunación frente al distemper tanto a la
                madre como al cachorro para evitar esta enfermedad. La
                enfermedad es más virulenta cuando más desnutrido o en peores
                condiciones se encuentre el perro, puesto que sus sistema
                inmunológico está deprimido y tienen menos defensas. Otros, sin
                embargo, pueden tener síntomas leves o no tener ningún síntoma.
              </p>
              <br />
              <h4>
                <strong>¿CÓMO SE CONTAGIA EL MOQUILLO CANINO?</strong>
              </h4>
              <p>
                El contagio del distemper canino es más fácil de lo que parece.
                El virus del moquillo se trasmite por secreciones corporales,
                como son los mocos y las lágrimas, que sueltan nuestros perros
                por el ambiente. Esas pequeñas gotitas aparentemente inofensivas
                que aparecen cuando el perro estornuda o tose, están infectadas
                con el virus y son las que hacen que el contagio se produzca.
                Entre perros que viven juntos es muy difícil evitar el contagio.
                Una persona que solo tiene un perro pero que lo saca a pasear y
                se junta en el parque con otros perros, debe tener cuidado y
                estar atento, pues ahí también se suelen producir muchos de los
                contagios. <br />
                <strong>
                  ¿UNA PERSONA PUEDE CONTAGIAR A UN PERRO DEL MOQUILLO?
                </strong>
                Por raro que parezca la respuesta es sí. Si mantenemos contacto
                con perros infectados por moquillo, el virus del distemper se
                puede quedar impregnado en nuestra ropa, incluso en nuestra piel
                y puede ser portado a otro animal, llegándole a infectar. Aunque
                suele ser difícil que se dé el caso, es mejor prevenir. Lavarse
                las manos es un buen inicio, sobre todo si trabajas o eres
                voluntario en algún centro canino.
              </p>
              <h4>
                <strong>
                  ¿CUÁLES SON LOS SÍNTOMAS DEL MOQUILLO EN LOS PERROS?
                </strong>
              </h4>
              <ul>
                <li>
                  <strong>SISTEMA RESPIRATORIO</strong> - Es el síntoma más
                  representativo del virus del distemper o moquillo canino. Los
                  perros empiezan a moquear, a toser y a producir secreción
                  ocular (conjuntivitis), acompañada normalmente con hinchazón
                  de los párpados. Esto hace que a veces no puedan ni siquiera
                  abrir los ojos y que les moleste la luz. Presentan dificultad
                  al respirar debido a la obstrucción que les produce la
                  mucosidad. Si el virus afecta al pulmón, puede desembocar en
                  una neumonitis.
                </li>
                <li>
                  <strong>SISTEMA DIGESTIVO</strong> - Si afecta al sistema
                  digestivo, el virus del distemper o moquillo canino producirá
                  síntomas tales como la gastroenteritis, con vómitos y/o
                  diarrea. Si este es el único síntoma aparente que tiene
                  nuestro perro, no hay que asociarlo directamente con el
                  moquillo canino, pues puede tratarse de otra enfermedad. En
                  este caso el diagnóstico del veterinario será el más
                  apropiado.
                </li>
                <li>
                  <strong>SISTEMA CUTÁNEO</strong> - Deriva en lo que conocemos
                  como dermatitis. La piel de la nariz y las almohadillas de las
                  patas se endurecen, se secan y se agrietan, provocando una
                  descamación.
                </li>
                <li>
                  <strong>SISTEMA NERVIOSO</strong> - El moquillo canino, si no
                  se trata a tiempo, en su última fase afectará al sistema
                  nervioso. En este caso los síntomas comunes son los ataques
                  súbitos, los tics nerviosos, las convulsiones y los espasmos
                  musculares que pueden llegar a producir la parálisis de
                  algunas de las extremidades.
                </li>
              </ul>
              <br />
              <h4>
                <strong>¿CÓMO SE CURA EL MOQUILLO DE LOS PERROS?</strong>
              </h4>
              <p>
                Debemos saber que el moquillo en los perros, al ser una
                infección vírica, no tiene un tratamiento específico. Lo primero
                que tenemos que hacer si sospechamos que nuestro perro puede
                haber contraído el virus, es llevarlo urgentemente al
                veterinario. El tratamiento que se lleva a cabo es únicamente
                para paliar los síntomas y evitar el sufrimiento de nuestra
                mascota. No existe ninguna medicina que cure directamente el
                moquillo, pero si existen fármacos que pueden ayudar.
              </p>
              <ul>
                <li>
                  Podemos utilizar medicamentos expectorantes o algún
                  antibiótico para intentar sacar las flemas del perro y
                  controlar las infecciones.
                </li>
                <li>
                  También existen fármacos que ayudan a paliar la diarrea, el
                  vómito y la tos, para evitar la deshidratación, y otros contra
                  las convulsiones y el dolor.
                </li>
                <li>
                  Los suplementos alimenticios son muy importantes para
                  fortalecer la salud del animal y ayudar a fortalecer el
                  sistema inmunitario. La vitamina B, es la más recomendada para
                  los tics nerviosos del moquillo canino.
                </li>
                <li>
                  Evitar la deshidratación de nuestro perro. Es fácil que esto
                  pase, nuestro perro se encuentra sin ganas de nada y es
                  posible que deje de comer y de beber. Debemos evitarlo a toda
                  costa e incluso obligarle si se niega a comer o beber.
                </li>
                <li>
                  La higiene, sobre todo de la zona de los ojos y de la nariz,
                  es muy importante. Debemos eliminar con cuidado las
                  secreciones producidas por el virus.
                </li>
              </ul>
              <br />
              <h4>
                <strong>¿CÓMO PUEDO PREVENIR EL MOQUILLO EN PERROS?</strong>
              </h4>
              <p>
                Vacuna a tu mascota y evita que sufra, como bien dice el dicho
                siempre es mejor prevenir que curar. La primera vacuna contra el
                moquillo canino debe administrarse a las cinco o seis semanas de
                vida y antes de que el cachorro llegue a nuestra casa o conviva
                con otros perros. Suele ir incluida en la vacuna trivalente:
                moquillo, sarampión y parainfluenza. Dado que el moquillo es una
                enfermedad similar al sarampión, es aconsejable vacunarle contra
                esta patología también. Algunos cachorros no responden
                correctamente a la vacuna del moquillo debido a los anticuerpos
                de la madre que la neutralizan. Sin embargo, la del sarampión sí
                que es capaz de vencer a los anticuerpos y proteger parcialmente
                contra el moquillo. Una vez hayan desaparecido los anticuerpos
                de la madre, la vacuna del moquillo ofrecerá una protección
                completa a la mascota.
                <strong>
                  Y, a modo recordatorio, es aconsejable realizar la vacunación
                  anual frente al moquillo.
                </strong>
              </p>
              <br />
              <h4>
                <strong>¿EL PERRO SE CURA DEL MOQUILLO?</strong>
              </h4>
              <p>
                El moquillo en los perros es una enfermedad grave que conlleva
                serias complicaciones en el sistema nervioso, llegando a
                provocar convulsiones, dificultad en los desplazamientos y en la
                capacidad de controlar sus extremidades.
                <strong>
                  No es una enfermedad curable, pero sí tratable para paliar los
                  síntomas y controlarlos.
                </strong>
                Afortunadamente, un perro que tiene controlada la enfermedad no
                va a contagiar a otros perros, puesto que ya no son huéspedes
                del virus. Recuerda que el veterinario es la mejor persona para
                asesorarte en cada caso concreto, y si por lo que sea piensas
                que tu mascota puede estar infectada, hazle una visita, el mejor
                que nadie sabrá como ayudarte.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Blog1Modal;
