const phone1 = 1239, phone2 = 59;
document.getElementById('phone1plus').addEventListener('click', function () {
   getDetails('phone1price', phone1, 'sil1', 1, 'subtotal', 'taxbd', 'subtotals')
})
document.getElementById('phone1minus').addEventListener('click', function () {
   getDetails('phone1price', -1 * phone1, 'sil1', -1, 'subtotal', 'taxbd', 'subtotals')
})
document.getElementById('phone2plus').addEventListener('click', function () {
   getDetails('phone2price', phone2, 'sil2', 1, 'subtotal', 'taxbd', 'subtotals')
})
document.getElementById('phone2minus').addEventListener('click', function () {
   getDetails('phone2price', -1 * phone2, 'sil2', -1, 'subtotal', 'taxbd', 'subtotals')
})
function getDetails(phoneid, phoneidprice, quantityid, quantitysize, subtotalid, taxid, subtotalsid) {
   const quantity = document.getElementById(quantityid).value; //quantitydetails::
   const quantitytotal = parseInt(quantity) + quantitysize;
   if (quantitytotal >= 0) {
      document.getElementById(quantityid).value = quantitytotal;//quantitytotalend
      const current = parseFloat(document.getElementById(phoneid).innerText); // price update working details
      const totalprice = current + phoneidprice;
      document.getElementById(phoneid).innerText = totalprice; //price update details
      const values = parseFloat(document.getElementById(subtotalid).innerText); //subtotal
      const total = (values + phoneidprice);
      document.getElementById(subtotalid).innerText = total;   //subtotal end
      const tax = (total * 0.005).toFixed(2);
      document.getElementById(taxid).innerText = tax;
      const bestanswer = parseFloat(total) + parseFloat(tax);
      document.getElementById(subtotalsid).innerText = bestanswer;
   }
   if (quantitytotal < 0) {
      document.getElementById(quantityid).value = 0;
      document.getElementById(phoneid).value = phoneidprice;
   }
}