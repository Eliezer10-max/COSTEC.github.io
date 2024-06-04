function calculateNPV() {
            const cashFlows = document.getElementById('cashFlows').value.split(',').map(Number);
            const discountRate = parseFloat(document.getElementById('discountRate').value) / 100;

            if (cashFlows.some(isNaN) || isNaN(discountRate)) {
                document.getElementById('npvResult').textContent = 'Por favor, introduce valores válidos.';
                return;
            }

            let npv = 0;
            for (let i = 0; i < cashFlows.length; i++) {
                npv += cashFlows[i] / Math.pow(1 + discountRate, i);
            }

            document.getElementById('npvResult').textContent = 'El Valor Presente Neto (VPN) es $' + npv.toFixed(2);
        }

        function calculateIRR() {
            const cashFlows = document.getElementById('irrCashFlows').value.split(',').map(Number);

            if (cashFlows.some(isNaN)) {
                document.getElementById('irrResult').textContent = 'Por favor, introduce valores válidos.';
                return;
            }

            const irr = computeIRR(cashFlows);
            if (irr === null) {
                document.getElementById('irrResult').textContent = 'No se pudo calcular la TIR.';
            } else {
                document.getElementById('irrResult').textContent = 'La Tasa Interna de Retorno (TIR) es ' + (irr * 100).toFixed(2) + '%';
            }
        }

        function computeIRR(cashFlows) {
            const maxIterations = 1000;
            const precision = 1e-7;
            let rate = 0.1;

            for (let iter = 0; iter < maxIterations; iter++) {
                let npv = 0;
                let derivative = 0;

                for (let i = 0; i < cashFlows.length; i++) {
                    npv += cashFlows[i] / Math.pow(1 + rate, i);
                    derivative -= i * cashFlows[i] / Math.pow(1 + rate, i + 1);
                }

                const newRate = rate - npv / derivative;

                if (Math.abs(newRate - rate) < precision) {
                    return rate;
                }

                rate = newRate;
            }

            return null;
        }

        function calculatePaybackPeriod() {
            const initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
            const cashFlows = document.getElementById('paybackCashFlows').value.split(',').map(Number);

            if (isNaN(initialInvestment) || cashFlows.some(isNaN)) {
                document.getElementById('paybackResult').textContent = 'Por favor, introduce valores válidos.';
                return;
            }

            let cumulativeCashFlow = 0;
            let paybackPeriod = 0;

            for (let i = 0; i < cashFlows.length; i++) {
                cumulativeCashFlow += cashFlows[i];
                if (cumulativeCashFlow >= initialInvestment) {
                    paybackPeriod = i + 1;
                    break;
                }
            }

            if (cumulativeCashFlow < initialInvestment) {
                document.getElementById('paybackResult').textContent = 'No se puede recuperar la inversión con los flujos de caja proporcionados.';
            } else {
                document.getElementById('paybackResult').textContent = 'El Período de Recuperación es ' + paybackPeriod + ' años';
            }
        }