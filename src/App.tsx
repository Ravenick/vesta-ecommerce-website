import { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { PlansSection } from './components/PlansSection';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PlanDetailModal } from './components/PlanDetailModal';
import { PurchaseModal } from './components/PurchaseModal';
import { SuccessModal } from './components/SuccessModal';
import { InfoModal } from './components/InfoModal';
import { RavenickBadge } from './components/RavenickBadge';
import { PLANS } from './data';
import type { Plan, PurchaseType } from './types';

export default function App() {
  const [detailPlan, setDetailPlan] = useState<Plan | null>(null);
  const [purchaseState, setPurchaseState] = useState<{ plan: Plan; type: PurchaseType } | null>(null);
  const [successState, setSuccessState] = useState<{ plan: Plan; type: PurchaseType } | null>(null);
  const [infoMessage, setInfoMessage] = useState<string | null>(null);

  const handleExplore = useCallback((id: number) => {
    const plan = PLANS.find((p) => p.id === id);
    if (plan) setDetailPlan(plan);
  }, []);

  const handlePurchase = useCallback((plan: Plan, type: PurchaseType) => {
    setDetailPlan(null);
    setPurchaseState({ plan, type });
  }, []);

  const handleCheckout = useCallback(() => {
    if (!purchaseState) return;
    setPurchaseState(null);
    setSuccessState(purchaseState);
  }, [purchaseState]);

  const closeAll = useCallback(() => {
    setDetailPlan(null);
    setPurchaseState(null);
    setSuccessState(null);
    setInfoMessage(null);
  }, []);

  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero onExplore={handleExplore} />
        <Ticker />
        <PlansSection onCardClick={handleExplore} />
        <About />
        <Contact onInfo={setInfoMessage} />
      </main>
      <Footer />

      {/* Modals */}
      {detailPlan && (
        <PlanDetailModal
          plan={detailPlan}
          onClose={closeAll}
          onPurchase={handlePurchase}
        />
      )}
      {purchaseState && (
        <PurchaseModal
          plan={purchaseState.plan}
          type={purchaseState.type}
          onClose={closeAll}
          onCheckout={handleCheckout}
        />
      )}
      {successState && (
        <SuccessModal
          plan={successState.plan}
          type={successState.type}
          onClose={closeAll}
        />
      )}
      {infoMessage && (
        <InfoModal message={infoMessage} onClose={() => setInfoMessage(null)} />
      )}
      <RavenickBadge />
    </div>
  );
}
