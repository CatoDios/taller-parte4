import React from 'react'

class PagoRow extends React.Component {

  render() {
    return(
    <tr>
      <td className="td">
      <form action="#">
              <label className="row center-xs">
                  <input
                    className="checkbox1"
                    name="chekbox"
                    id={this.props.pago.idRec}
                    type="checkbox" />
                    <span> </span>

              </label>
      </form>

      </td>
			<td className="td">{this.props.pago.idRec}</td>
			<td className="td">{this.props.pago.moneda}</td>
      <td className="td">{this.props.pago.concepto.a + ' '+ this.props.pago.concepto.b}</td>
			<td className="td">{this.props.pago.numero}</td>	
      <td className="td">{this.props.pago.fecha}</td>
			<td className="td">{this.props.pago.alumno.idAlum}</td>
      <td className="td">{this.props.pago.alumno.facultad.nombre}</td>
      <td className="td">{this.props.pago.importe}</td>
	  </tr>
    )
  }
}

export default PagoRow;