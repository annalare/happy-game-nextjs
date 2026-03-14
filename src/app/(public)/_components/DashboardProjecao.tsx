"use client"; 

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function DashboardProjecao() {
    const chartUsuariosRef = useRef<HTMLCanvasElement>(null);
    const chartReceitaRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        // 1. DADOS INICIAIS
        const U0 = 20;
        const C = 0.20;
        const p = 0.10;
        const v = 30; 

        const meses = [];
        const projecaoUsuarios = [];
        const projecaoReceita = [];

        // 2. CÁLCULO DAS PROJEÇÕES (Função Exponencial)
        for (let t = 0; t <= 12; t++) {
            meses.push(t);
            let usuariosNoMes = U0 * Math.pow((1 + C), t);
            projecaoUsuarios.push(Number(usuariosNoMes.toFixed(0)));
            let receitaNoMes = usuariosNoMes * p * v;
            projecaoReceita.push(Number(receitaNoMes.toFixed(2)));
        }

        // 3. RENDERIZAÇÃO DO GRÁFICO DE USUÁRIOS
        let graficoUsuarios: any = null;
        if (chartUsuariosRef.current) {
            graficoUsuarios = new Chart(chartUsuariosRef.current as any, {
                type: 'line',
                data: {
                    labels: meses,
                    datasets: [{
                        label: 'Crescimento de Usuários',
                        data: projecaoUsuarios,
                        borderColor: '#7b2cbf',
                        backgroundColor: 'rgba(123, 44, 191, 0.1)',
                        borderWidth: 3,
                        pointBackgroundColor: '#ffffff',
                        pointBorderColor: '#7b2cbf',
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: { 
                    responsive: true,
                    scales: { 
                        x: { title: { display: true, text: 'Meses (Tempo)', font: { weight: 'bold' } } }, 
                        y: { title: { display: true, text: 'Total de Usuários', font: { weight: 'bold' } } } 
                    } 
                }
            });
        }

        // 4. RENDERIZAÇÃO DO GRÁFICO DE RECEITA
        let graficoReceita: any = null;
        if (chartReceitaRef.current) {
            graficoReceita = new Chart(chartReceitaRef.current as any, {
                type: 'line',
                data: {
                    labels: meses,
                    datasets: [{
                        label: 'Receita Projetada (R$)',
                        data: projecaoReceita,
                        borderColor: '#20c997', // Verde
                        backgroundColor: 'rgba(32, 201, 151, 0.1)',
                        borderWidth: 3,
                        pointBackgroundColor: '#ffffff',
                        pointBorderColor: '#20c997',
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: { 
                    responsive: true,
                    scales: { 
                        x: { title: { display: true, text: 'Meses (Tempo)', font: { weight: 'bold' } } }, 
                        y: { title: { display: true, text: 'Receita (R$)', font: { weight: 'bold' } } } 
                    } 
                }
            });
        }

        return () => {
            if (graficoUsuarios) graficoUsuarios.destroy();
            if (graficoReceita) graficoReceita.destroy();
        };
    }, []);

    return (
        <section style={{ padding: '20px 0', backgroundColor: 'transparent', marginTop: '0' }}>
            <h2 style={{ textAlign: 'center', color: 'inherit', marginBottom: '40px', fontWeight: 'bold', fontSize: '1.8rem' }}>
                Projeção de Crescimento (12 Meses)
            </h2>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {[
                    { titulo: 'Usuários Iniciais', valor: '20', cor: '#7b2cbf' },
                    { titulo: 'Crescimento Mensal', valor: '20%', cor: '#20c997' },
                    { titulo: 'Usuários Pagantes', valor: '10%', cor: '#7b2cbf' },
                    { titulo: 'Ticket Médio', valor: 'R$ 30,00', cor: '#20c997' }
                ].map((card, index) => (
                    <div key={index} style={{ 
                        flex: '1 1 200px', 
                        maxWidth: '250px', 
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '2px solid #7b2cbf', 
                        borderRadius: '12px', 
                        padding: '20px', 
                        textAlign: 'center', 
                        backdropFilter: 'blur(10px)' 
                    }}>
                        <h5 style={{ color: '#a0a0a0', fontSize: '14px', marginBottom: '10px', textTransform: 'uppercase' }}>{card.titulo}</h5>
                        <h2 style={{ color: card.cor, fontWeight: 'bold', margin: 0, fontSize: '1.5rem' }}>{card.valor}</h2>
                    </div>
                ))}
            </div>

            {/* Container dos Gráficos */}
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div style={{ flex: '1 1 450px', maxWidth: '600px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                    <canvas ref={chartUsuariosRef}></canvas>
                </div>
                <div style={{ flex: '1 1 450px', maxWidth: '600px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                    <canvas ref={chartReceitaRef}></canvas>
                </div>
            </div>
        </section>
    );
}