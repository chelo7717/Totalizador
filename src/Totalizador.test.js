describe("Totalizador ", () => {
    it("deberia calcular para un cantidad", () => {
      expect(calcularTotal(2, 1, "")).toEqual(2);
    });
    it("deberia calcular para un cantidad", () => {
      expect(calcularTotal(2, 2, "")).toEqual(4);
    });
    it("deberia calcular para un estado por defecto", () => {
      expect(calcularTotal(2, 2, "CA")).toEqual(4.33);
    });
    it("deberia calcular para un estado por defecto", () => {
      expect(calcularTotal(3, 2, "CA")).toEqual(6.495);
    });
    it("deberia calcular para un estado por defecto", () => {
      expect(calcularTotal(3, 2, "UT")).toEqual(6.399);
    });
   it("deberia calcular para un estado por defecto", () => {
    expect(calcularTotal(30, 1000, "UT")).toEqual(27195.75);
    });
  });

  function impuestoEstado(estado) {
    let impuestos = { CA: 0.0825, UT: 0.0665, "": 0 };
    return impuestos[estado];
  }
  function calculaDescuento(tota){
    let discautn=0 ;
    //let acum = 0;
    if(tota >30000)
    {
     //acum=tota*0.15;
    discautn= tota - tota * 0.15;
    }
    return discautn;

  }
  function calcularTotal(cantidad, precio, estado) {
    let subTotal = cantidad * precio;
    let impuesto = impuestoEstado(estado);
    subTotal = subTotal + subTotal * impuesto;
    let descuento = calculaDescuento(subTotal);
    let totalfinal=subTotal-descuento;
    return totalfinal;
  }


  