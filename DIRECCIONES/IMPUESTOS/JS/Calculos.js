 function calculateTaxes() {
            const income = parseFloat(document.getElementById('income').value);
            const expenses = parseFloat(document.getElementById('expenses').value);

            if (isNaN(income) || isNaN(expenses)) {
                document.getElementById('taxesResult').textContent = 'Por favor, introduce valores válidos.';
                return;
            }

            const iva = expenses * 0.16;
            const isr = (income - expenses) * 0.25;

            document.getElementById('taxesResult').innerHTML = `
                <p>IVA: $${iva.toFixed(2)}</p>
                <p>ISR: $${isr.toFixed(2)}</p>
            `;
        }

        function calculateRetention() {
            const income = parseFloat(document.getElementById('retentionIncome').value);
            const rate = parseFloat(document.getElementById('retentionRate').value) / 100;

            if (isNaN(income) || isNaN(rate)) {
                document.getElementById('retentionResult').textContent = 'Por favor, introduce valores válidos.';
                return;
            }

            const retention = income * rate;

            document.getElementById('retentionResult').textContent = 'La retención es $' + retention.toFixed(2);
        }

        function calculateAnnualDeclaration() {
            const annualIncome = parseFloat(document.getElementById('annualIncome').value);
            const annualExpenses = parseFloat(document.getElementById('annualExpenses').value);

            if (isNaN(annualIncome) || isNaN(annualExpenses)) {
                document.getElementById('annualDeclarationResult').textContent = 'Por favor, introduce valores válidos.';
                return;
            }

            const netIncome = annualIncome - annualExpenses;
            const annualTaxes = netIncome * 0.30;

            document.getElementById('annualDeclarationResult').textContent = 'El impuesto anual estimado es $' + annualTaxes.toFixed(2);
        }