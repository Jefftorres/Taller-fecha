class Fecha{

	var meses = [
		[1, "Enero", 31],
		[2, "Febrero", 28],
		[3, "Marzo", 31],
		[4, "Abril", 30],
		[5, "Mayo", 31],
		[6, "Junio", 30],
		[7, "Julio", 31],
		[8, "Agosto", 31],
		[9, "Septiembre", 30],
		[10, "Octubre", 31],
		[11, "Noviembre", 30],
		[12, "Diciembre", 31],
		];

	constructor(mes, dia, anio){
		this.mes = mes;
		this.dia = dia;
		this.anio = anio;
	}

	get mes() {
		return this.mes();
	}

	get dia() {
		return this.dia();
	}

	get anio() {
		return this.anio();
	}

	function sumar7Dias(fecha) {

	}

	function validarBisiesto(anio) {
		if ((anio%4 == 0 || anio%400 == 0) && (anio%100 == 0)) {
			console.log(anio + "Es bisiesto.");
			return true;
		} 
		else { 
			console.log(anio + "No es bisiesto.");
			return false; 
		}
	}

	function validarFecha(fecha) {
		if (fecha.anio().validarBisiesto()) {
			meses[1][2] = 29;
		}

		if(fecha.anio()<1900 || fecha.anio() > 2100){
				console.log("Año no es valido");
				return false;
			}

		if(fecha.mes()<1 || fecha.mes()>12){
			console.log("Mes no es valido");
			return false;
		}

		for (var i = 1; i <= 12; i++) {
			if(fecha.mes() == meses[i][0]){
				if(fecha.dia()<1 || fecha.dia() > meses[i][2]) {
					console.log("Dia no es valido");
					return false;
				}
			}
		}

		meses[1][2] = 28;			

		return true;
	}

	function printLatino() {
		document.write("Día: " + fecha.dia() +
						"Mes: " + fecha.mes() +
						"Año: " + fecha.anio());
	}

	function printGringo(fecha) {
		document.write("Mes: " + fecha.mes() +
						"Día: " + fecha.dia() +
						"Año: " + fecha.anio());
	}
}