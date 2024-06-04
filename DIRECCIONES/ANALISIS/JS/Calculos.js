function calcularRentabilidad() {
  var costo = parseFloat(document.getElementById('costo').value);
  var precio = parseFloat(document.getElementById('precio').value);
  
  if (isNaN(costo) || isNaN(precio)) {
    document.getElementById('resultado').innerText = 'Por favor ingrese valores numéricos válidos.';
    return;
  }

  if (costo >= precio) {
    document.getElementById('resultado').innerText = 'El precio de venta debe ser mayor que el costo del producto.';
    return;
  }

  var rentabilidad = ((precio - costo) / costo) * 100;
  document.getElementById('resultado').innerText = 'La rentabilidad del producto es del ' + rentabilidad.toFixed(2) + '%.';
}

function calculateProfitMargin() {
            const revenue = parseFloat(document.getElementById('revenue').value);
            const cogs = parseFloat(document.getElementById('cogs').value);
            const expenses = parseFloat(document.getElementById('expenses').value);

            if (isNaN(revenue) || isNaN(cogs) || isNaN(expenses)) {
                document.getElementById('profitMarginResult').textContent = 'Por favor, introduce valores válidos.';
                return;
            }

            const grossProfit = revenue - cogs;
            const netProfit = grossProfit - expenses;

            const grossMargin = (grossProfit / revenue) * 100;
            const netMargin = (netProfit / revenue) * 100;

            document.getElementById('profitMarginResult').innerHTML = `
                <p>Beneficio Bruto: $${grossProfit.toFixed(2)}</p>
                <p>Margen de Beneficio Bruto: ${grossMargin.toFixed(2)}%</p>
                <p>Beneficio Neto: $${netProfit.toFixed(2)}</p>
                <p>Margen de Beneficio Neto: ${netMargin.toFixed(2)}%</p>
            `;
        }

        function calculateBudget() {
            const income = parseFloat(document.getElementById('income').value);
            const expenses = parseFloat(document.getElementById('expensesBudget').value);

            if (isNaN(income) || isNaN(expenses)) {
                document.getElementById('budgetResult').textContent = 'Por favor, introduce valores válidos.';
                return;
            }

            const balance = income - expenses;

            document.getElementById('budgetResult').innerHTML = `
                <p>Ingresos Totales: $${income.toFixed(2)}</p>
                <p>Gastos Totales: $${expenses.toFixed(2)}</p>
                <p>Balance: $${balance.toFixed(2)}</p>
            `;
        }