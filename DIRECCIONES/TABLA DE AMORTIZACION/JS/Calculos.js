function generateAmortizationTable() {
            const principal = parseFloat(document.getElementById('principal').value);
            const annualRate = parseFloat(document.getElementById('rate').value) / 100;
            const years = parseFloat(document.getElementById('years').value);

            if (isNaN(principal) || isNaN(annualRate) || isNaN(years)) {
                alert('Por favor, introduce valores válidos.');
                return;
            }

            const monthlyRate = annualRate / 12;
            const numberOfPayments = years * 12;
            const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

            let tableHTML = `
                <table>
                    <tr>
                        <th>Mes</th>
                        <th>Pago Mensual</th>
                        <th>Interés</th>
                        <th>Principal</th>
                        <th>Balance</th>
                    </tr>
            `;

            let balance = principal;
            for (let i = 1; i <= numberOfPayments; i++) {
                const interest = balance * monthlyRate;
                const principalPayment = monthlyPayment - interest;
                balance -= principalPayment;

                tableHTML += `
                    <tr>
                        <td>${i}</td>
                        <td>${monthlyPayment.toFixed(2)}</td>
                        <td>${interest.toFixed(2)}</td>
                        <td>${principalPayment.toFixed(2)}</td>
                        <td>${balance.toFixed(2)}</td>
                    </tr>
                `;
            }

            tableHTML += '</table>';
            document.getElementById('amortizationTableContainer').innerHTML = tableHTML;
        }

        async function downloadPDF() {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            const table = document.querySelector('table');
            if (!table) {
                alert('Genera la tabla de amortización primero.');
                return;
            }

            doc.autoTable({
                html: table,
                startY: 10,
                theme: 'grid',
                headStyles: { fillColor: [22, 160, 133] },
                styles: { fontSize: 8 }
            });

            doc.save('tabla_de_amortizacion.pdf');
        }