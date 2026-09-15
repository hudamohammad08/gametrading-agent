'use client';

export default function TradingGamePage() {
  return (
    <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0, background: '#000' }}>
      <iframe
        src="/trading-game.html?v=2"
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        allow="clipboard-read; clipboard-write"
        title="VIP Trading Simulator"
      />
    </div>
  );
}
